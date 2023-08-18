"use client";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Current() {
  // const researchs = [
  //     {
  //         title: "Research 1",
  //         reviewers: 3,
  //         stars: 4,
  //         stage: "Stage 1",
  //         logo: "/images/Logo.svg",
  //         preview: "/images/Preview.svg"
  //     },
  //     // {
  //     //     title: "Research 1",
  //     //     reviewers: 3,
  //     //     stars: 4,
  //     //     stage: "Stage 1",
  //     //     logo: "/images/Logo.svg",
  //     //     preview: "/images/Preview.svg"
  //     // },
  //     // {
  //     //     title: "Research 1",
  //     //     reviewers: 3,
  //     //     stars: 4,
  //     //     stage: "Stage 1",
  //     //     logo: "/images/Logo.svg",
  //     //     preview: "/images/Preview.svg"
  //     // },

  // ]
  const [researchs, setResearchs] = useState([]);
  const collectionRef = collection(db, "researchs");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDocs(collectionRef);
        const array = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setResearchs(array);
        console.log(array);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className={`${raleway.className}`}>
      <h1 className={`text-4xl text-secondary font-[700] mb-4`}>
        Current Research
      </h1>

      <div className="flex flex-wrap mb-10">
        {researchs.map((item, index) => (
          <Link key={index} href={`/research/${item.id}`}>
            <div key={index} className="w-1/2">
              <div className="w-64 h-80 relative">
                <div className="w-64 h-80 left-0 top-0 absolute bg-[#252836] rounded-2xl border border-secondary" />
                <div className="w-64 h-80 left-0 top-0 absolute bg-zinc-800 rounded-2xl" />
                <div className="w-64 h-40 left-0 top-0 absolute">
                  <div className="w-64 h-40 left-0 top-0 absolute bg-secondary rounded-t-2xl" />
                  <div className="w-72 h-40 left-[282px] top-[-1px] absolute origin-top-left rotate-180 bg-fuchsia-300" />
                </div>
                <div className="w-full h-5 px-2.5 py-1 left-[167.50px] top-[11px] absolute bg-zinc-800 rounded-3xl flex-col justify-start items-start inline-flex">
                  <div className="text-fuchsia-300 text-base font-medium leading-3 tracking-wide bg-primary text-secondary px-2 py-1 rounded-xl ">
                    Stage 1
                  </div>
                </div>
                <div className="w-40 h-24 left-[20px] top-[179px] absolute">
                  <div className="left-0 top-[110px] absolute text-gray-500 text-xs font-normal leading-3 tracking-wide">
                    10 Reviews • 4/5 stars
                  </div>
                  <div className="w-40 left-0 top-0 absolute text-fuchsia-300 text-base text-secondary font-bold leading-relaxed tracking-tight">
                    Research
                    <br />
                    <h3 className="text-sm w-full">{item.title}</h3>
                    <br />
                  </div>
                </div>
                <div className="w-14 h-14 left-[179px] top-[137px] absolute">
                  <div className="w-14 h-14 left-0 top-0 absolute opacity-50 rounded-full border border-white" />
                  <div className="w-12 h-12 left-[5px] top-[5px] absolute">
                    <Image
                      alt="logo"
                      className="w-10 h-4 left-[5px] top-[16px] absolute"
                      src="https://via.placeholder.com/40x17"
                      width={40}
                      height={17}
                    />
                  </div>
                  <div className="w-4 h-4 left-[43px] top-[43px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-sky-300 rounded-full border border-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
