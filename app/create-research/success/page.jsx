import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center text-secondary mt-32 mx-32 gap-10">
      <h1 className="text-[4.5rem] text-center ">
        Woooo! Your research is ready for Peer Review
      </h1>
      <Link href="/">
        <Image
          src={"/images/success.svg"}
          alt="success"
          width={70}
          height={50}
        />
      </Link>
    </div>
  );
}
