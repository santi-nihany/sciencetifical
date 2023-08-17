"use client";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ConnectButton } from "@web3uikit/web3";
import platformAbi from "@/constants/platformAbi.json";
import { parseUnits } from "ethers";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ADDRESS = "0xC413538578345f60Db652Cd386622Bc80bDb929B";

export default function Research({ params: { id } }) {
  // const item = {
  //   title:
  //     "Echo Chambers and Political Extremism: A Comprehensive Survey Analysis",
  //   description:
  //     "Our pioneering research focuses on the phenomenon of echo chambers and their role in fostering political extremism. By conducting a comprehensive survey analysis, we aim to uncover the ways in which echo chambers contribute to the polarization of political beliefs and the formation of extremist ideologies within online communities.",
  //   problem:
  //     "Our project centers on understanding the dynamics of echo chambers in online social networks and their impact on the proliferation of political extremism. We will design a large-scale survey targeting individuals from diverse political backgrounds and affiliations. The survey will inquire about participants' online information consumption habits, interactions within online communities, and the extent to which exposure to opposing viewpoints affects their political attitudes. The first phase involves crafting a robust survey instrument that captures relevant variables related to echo chambers and political extremism. In the second phase, we will distribute the survey across various online platforms and collect a substantial dataset. Using advanced statistical techniques, we will analyze the survey data to identify patterns of information consumption, ideological clustering, and extremist tendencies.",
  //   innovation:
  //     "Our research offers a comprehensive examination of the interplay between echo chambers and political extremism, shedding light on the mechanisms that contribute to the reinforcement of extreme beliefs within closed online communities. This insight could inform strategies for mitigating the spread of extremist ideologies.",

  //   grant: 10000,
  //   bounty: 100,
  //   researcher: {
  //     address: "0x00",
  //     name: "John Doe",
  //   },
  //   date: "2021-10-10",
  //   thumbnail: "/images/thumb.svg",
  // };
  const { account } = useMoralis();
  const { runContractFunction } = useWeb3Contract();
  async function handleBounty(data) {
    console.log("Approving...");
    const price = parseUnits("0.1", "ether").toString();

    const approveOptions = {
      abi: platformAbi,
      contractAddress: ADDRESS,
      functionName: "fundBounty",
      msgValue: price,
      params: {},
    };

    await runContractFunction({
      params: approveOptions,
      onSuccess: () => handleApproveSuccess(nftAddress, tokenId, price),
      onError: (error) => {
        console.log(error);
      },
    });
  }

  const schedule = [
    "Survey Instrument Development (3 months)",
    "Data Collection and Survey Distribution (6 months)",
    "Data Analysis and Interpretation (4 months)",
  ];
  const [item, setResearch] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "researchs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setResearch(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div
      className={`mt-10 flex mx-[15rem] mb-10 ${raleway.className} text-secondary`}
    >
      <div className="grid">
        <h1 className="self-start text-[1.875rem] text-justify">
          {item.title}
        </h1>
        <div className="flex mt-4 items-center">
          <Image
            alt="user"
            className="mr-2"
            src="/images/default.svg"
            width={30}
            height={30}
          />
          <h3 className="mr-6">Jhon Doe</h3>
          <h3>{item.date}</h3>
        </div>
        <Image
          className="w-full mt-5"
          alt="preview"
          src="/images/thumbnail.svg"
          width={30}
          height={30}
        />
        <div className=" grid gap-5 mt-10 ">
          <div>
            <h2 className="text-[1.5rem] font-bold">Research Description:</h2>
            <p className="mt-2 text-justify">{item.description}</p>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-bold">
              Project Description (200 words):
            </h2>
            <p className="mt-2 text-justify">{item.problem}</p>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-bold">
              Innovation Contribution:
            </h2>
            <p className="mt-2 text-justify">{item.innovation}</p>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-bold">Project schedule:</h2>
            {schedule.map((i, index) => {
              return (
                <div key={index} className="mt-2">
                  <p className="text-[1.2rem]">{`${index + 1}. ${i} `}</p>
                </div>
              );
            })}
          </div>
          <div className="grid  font-bold text-[1.25rem]">
            <h2>Grant Request: $ {item.grant}</h2>
            <h2>Bounty: $ {item.bounty}</h2>
          </div>
          <div className="flex justify-center mt-10">
            <div className="grid gap-[2rem]">
              <h1>You need to approve your project by funding the bounty!!</h1>
              <ConnectButton moralisAuth={true} />
              {item.approved ? null : account ? (
                <button
                  onClick={() => handleBounty(item.bounty)}
                  className="bg-secondary text-primary font-bold rounded-full py-2 mx-10 "
                >
                  Approve project
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
