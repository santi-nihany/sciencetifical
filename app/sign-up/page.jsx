import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function SignUp(){
    const roles= [
        {
            id:"researcher",
            name:"Researcher",
            image:"/images/researcher.svg",
            color:"#EFADF9"
        },
        {
            id:"user",
            name:"Take studies",
            image:"/images/studies.svg",
            color:"#D6F270"
        },
        {
            id:"ethics-comitee",
            name:"Ethics comitee",
            image:"/images/comitee.svg",
            color:"#72CFF6"
        }
    ];
    return(
        <div>
            <Header/>
            <div className="flex flex-col items-center text-secondary gap-[0.8rem] mt-20">
                <h1 className="text-7xl">Welcome!</h1>
                <h3 className="text-xl">First of all, which role represents you?</h3>
            </div>
            <div id="roles" className="flex justify-center gap-[3rem] mt-10">
                {roles.map((item,index)=>{
                return(
                    <div key={index} id={item.id}>
                        <Link href={`/sign-up?=${item.id}`}>
                            <div className="flex flex-col items-center rounded-xl p-[2.8rem] gap-[0.6rem] w-[16rem]" style={{backgroundColor:item.color}} >
                                <Image src={item.image} alt={item.name} width={100} height={100}/>
                                <h2 className={`self-center font-[700] text-[1.4rem] ${raleway.className}`}>{item.name}</h2>
                            </div>
                        </Link>
                    </div>
                            )
                        })}
            </div>
            <div className="flex text-secondary justify-center mt-10">
                <h3 className={`${raleway.className} text-lg`}>Already have an account? <Link className="font-[700]" href={"/login"}>Log in</Link></h3>
            </div>
        </div>
    )
}