const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { BigNumber } = require("ethers");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Platform Unit Test", () => {
      let space, spaceContract, bookNft, bookNftContract;
      const PRICE = ethers.utils.parseEther("0.01");
      const UNITS = 5;
      const UNITS_FUNDED = 2;

      beforeEach(async () => {
        accounts = await ethers.getSigners(); // could also do with getNamedAccounts
        deployer = accounts[0];
        user = accounts[1];
        await deployments.fixture(["all"]);
        platformContract = await ethers.getContract("Platform");
        platform = platformContract.connect(deployer);
      });

      describe("Fund Bounty", function () {
        it("emits an event after listing a book", async () => {});
      });
    });
