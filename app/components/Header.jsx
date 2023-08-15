import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return(
        <div className="flex justify-center mt-4">
                <Link href="/">
                    <Image alt="logo" src={"/images/logo_header.svg"} width={200} height={200}/>
                </Link>
            </div>
    )
}