import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Sections() {
  const info = [
    {
      id: "why",
      title: "Why do we exist?",
      description:
        "We aim to overcome significant challenges faced by the scientific community, including the lack of clear incentives, opacity in research processes, difficulty reproducing experiments, and the need to protect participant privacy. By offering a platform that encourages collaboration, transparency, and reward, Sciencetifical promotes the advancement of scientific knowledge.",
      image: "/images/hola.png",
      color: "#EFADF9",
    },
    {
      id: "how",
      title: "How does it work?",
      description:
        "We offer a comprehensive open science platform that promotes collaborative experimentation, transparency, and reward for participation and peer reviewers. Researchers can share, collaborate, and contribute to interdisciplinary experiments while ensuring the safety and anonymity of data.",
      image: "/images/hola.png",
      color: "#D6F270",
    },
    {
      id: "what",
      title: "What make us different?",
      description:
        "We streamline research by ensuring traceability, validation, and reproducibility. It also collects demographic data while preserving anonymity, promoting trust and participation. Join us in driving open science and building a brighter, more collaborative future.",
      image: "/images/hola.png",
      color: "#72CFF6",
    },
  ];
  return (
    <section id="sections" className="mx-[6.5rem] mb-20">
      <div className="flex flex-col gap-10">
        <img src="/images/falopa2.svg" alt="section" className="w-full" />
      </div>
    </section>
  );
}
