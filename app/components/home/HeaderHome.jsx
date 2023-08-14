import Image from "next/image";
import "@/styles/home.css"

export default function HeaderHome(){
    return(
        <nav className="flex justify-between mx-10 mt-10">
            <Image src="/images/logo_header.svg" alt="Logo Scientifical" width={200} height={100} />
            <ul className="flex px-10 gap-[3rem] items-center text-secondary">
                <li>
                    <h2>Why</h2>
                </li>
                <li>
                    <h2>How</h2>
                </li>
                <li>
                    <h2>What</h2>
                </li>
                <li>
                    <button className="btn-header bg-secondary text-primary font-bold">Log in</button>
                </li>
                <li>
                    <button className="btn-header text-secondary font-bold">Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}