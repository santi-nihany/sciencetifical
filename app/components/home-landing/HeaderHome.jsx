'use client';
import Image from "next/image";
import "@/styles/home.css"
import Link from "next/link";

export default function HeaderHome({auth}){
    return(
        <nav className="flex justify-between mx-10 mt-10 relative">
            <Image src="/images/logo_header.svg" alt="Logo Scientifical" width={200} height={100} />
            {auth ? (
                <ul className="flex px-10 gap-[3rem] items-center text-secondary">
                <li>
                    <Link href="/">
                    <h2>Home</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/review">
                    <h2>Review</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/lab">
                    <h2>Lab</h2>
                    </Link>
                </li>
                <li>
                    <button  className="btn-header text-secondary font-bold">Log out</button>
                </li>
            </ul>
            ):(

            <ul className="flex px-10 gap-[3rem] items-center text-secondary">
                <li>
                    <Link href="/#why">
                    <h2>Why</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/#how">
                    <h2>How</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/#what">
                    <h2>What</h2>
                    </Link>
                </li>
                <li>
                   <Link href="/login"> 
                        <button  className="btn-header bg-secondary text-primary font-bold">Log in</button>
                    </Link>
                </li>
                <li>
                    <Link href="/sign-up">
                    <button href="/sign-up" className="btn-header text-secondary font-bold">Sign Up</button>
                    </Link>
                </li>
            </ul>
            )
                
            }
        </nav>
    )
}