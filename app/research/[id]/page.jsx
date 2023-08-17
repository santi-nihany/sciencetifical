import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Research() {
  const item = {
    title:
      "Echo Chambers and Political Extremism: A Comprehensive Survey Analysis",
    description:
      "Our pioneering research focuses on the phenomenon of echo chambers and their role in fostering political extremism. By conducting a comprehensive survey analysis, we aim to uncover the ways in which echo chambers contribute to the polarization of political beliefs and the formation of extremist ideologies within online communities.",
    problem:
      "Our project centers on understanding the dynamics of echo chambers in online social networks and their impact on the proliferation of political extremism. We will design a large-scale survey targeting individuals from diverse political backgrounds and affiliations. The survey will inquire about participants' online information consumption habits, interactions within online communities, and the extent to which exposure to opposing viewpoints affects their political attitudes. The first phase involves crafting a robust survey instrument that captures relevant variables related to echo chambers and political extremism. In the second phase, we will distribute the survey across various online platforms and collect a substantial dataset. Using advanced statistical techniques, we will analyze the survey data to identify patterns of information consumption, ideological clustering, and extremist tendencies.",
    innovation:
      "Our research offers a comprehensive examination of the interplay between echo chambers and political extremism, shedding light on the mechanisms that contribute to the reinforcement of extreme beliefs within closed online communities. This insight could inform strategies for mitigating the spread of extremist ideologies.",
    schedule: [
      "Survey Instrument Development (3 months)",
      "Data Collection and Survey Distribution (6 months)",
      "Data Analysis and Interpretation (4 months)",
    ],
    grant: 10000,
    bounty: 100,
    researcher: {
      address: "0x00",
      name: "John Doe",
    },
    date: "2021-10-10",
    thumbnail: "/images/thumb.svg",
  };
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
          <h3 className="mr-6">{item.researcher.name}</h3>
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
            {item.schedule.map((i, index) => {
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
        </div>
      </div>
    </div>
  );
}
