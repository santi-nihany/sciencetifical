import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Current from "./Current";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CreateProject() {
  return (
    <div>
      <h1 className="text-[5.25rem] text-secondary">Ready to do science?</h1>
      <div className="flex gap-[0.8rem] w-full">
        <Link href="/create-research">
          <Image
            className="w-full"
            src={"/images/CreateResearch.svg"}
            alt={"Create project"}
            width={800}
            height={400}
          />
        </Link>
        <Link href="/#">
          <Image
            className="w-full"
            src={"/images/NewExperiment.svg"}
            alt={"New Experiment"}
            width={800}
            height={400}
          />
        </Link>
      </div>
      <div className="flex gap-[1rem] mt-10">
        <Current />
      </div>
    </div>
  );
}
