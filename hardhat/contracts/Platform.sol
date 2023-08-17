// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error NotResearcher();
error InsufficientFunds();
error DataNotProvided(uint256 researchId);

contract Platform is ReentrancyGuard {
    struct Survey {
        uint256 researchId;
        address researcher;
        string data; // Questions & Options
    }
    struct PeerReview {
        address peerReviewer;
        string data; // Comments
    }

    /////////////////////
    //     Events     //
    ///////////////////

    event BountyFunded(address researcher, uint256 researchId, uint256 bounty);
    event PeerReviewSubmitted(
        address peerReviewer,
        uint256 researchId,
        string data
    );

    //////////////////////
    // Data Structures //
    ////////////////////

    uint256 private s_researchCounter;
    //researchers
    mapping(address => bool) private s_researchers;
    // researcher => researchId => bounty
    mapping(address => mapping(uint256 => uint256)) private s_bounties;
    // researchId => peerReviewers
    mapping(uint256 => PeerReview[]) private s_peerReviewers;
    // researchId => stage
    mapping(uint256 => uint256) private s_stages;
    // user => proceeds
    mapping(address => uint256) private s_proceeds;
    // researchId => survey
    mapping(uint256 => Survey) private s_surveys;

    /////////////////////
    //   Modifiers    //
    ///////////////////
    modifier isResearcher(address user) {
        if (!s_researchers[user]) {
            revert NotResearcher();
        }
        _;
    }

    constructor() {
        s_researchCounter = 0;
        s_researchers[msg.sender] = true;
    }

    ////////////////////
    // Main Functions //
    ////////////////////
    function fundBounty() public payable isResearcher(msg.sender) {
        if (msg.value == 0) {
            revert InsufficientFunds();
        }
        s_researchCounter++;
        s_bounties[msg.sender][s_researchCounter] = msg.value;
        s_stages[s_researchCounter] = 0;
        emit BountyFunded(msg.sender, s_researchCounter, msg.value);
    }

    function peerReview(
        uint256 researchId,
        string memory data
    ) public isResearcher(msg.sender) nonReentrant {
        if (bytes(data).length == 0) {
            revert DataNotProvided(researchId);
        }
        s_peerReviewers[researchId].push(PeerReview(msg.sender, data));
        if (s_peerReviewers[researchId].length == 3) {
            s_stages[researchId] = s_stages[researchId] + 1;
        }
        emit PeerReviewSubmitted(msg.sender, researchId, data);
    }
}
