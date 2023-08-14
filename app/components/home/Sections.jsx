import { Raleway } from 'next/font/google'
import Image from 'next/image';

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function Sections(){
    const info = [
        {
            id:"why",
            title:"Why do we exist?",
            description:"We aim to overcome significant challenges faced by the scientific community, including the lack of clear incentives, opacity in research processes, difficulty reproducing experiments, and the need to protect participant privacy. By offering a platform that encourages collaboration, transparency, and reward, Sciencetifical promotes the advancement of scientific knowledge.",
            image:"/images/hola.png",
            color:"#EFADF9",
        },
        {
            id:"how",
            title:"How does it work?",
            description:"We offer a comprehensive open science platform that promotes collaborative experimentation, transparency, and reward for participation and peer reviewers. Researchers can share, collaborate, and contribute to interdisciplinary experiments while ensuring the safety and anonymity of data.",
            image:"/images/hola.png",
            color:"#D6F270",
        },
        {
            id:"what",
            title:"What make us different?",
            description:"We streamline research by ensuring traceability, validation, and reproducibility. It also collects demographic data while preserving anonymity, promoting trust and participation. Join us in driving open science and building a brighter, more collaborative future.",
            image:"/images/hola.png",
            color:"#72CFF6",
        }
    ]
    return(
        <section id="sections" className="mx-[6.5rem] mb-20">
            <div className="flex flex-col gap-10">

            {info.map((item,index)=>{
                return(
                    <div className="item-section flex p-[3.1rem]" key={index} id={item.id} style={{color:item.color}}>
                                <div className="grid gap-3.5">
                                    <h3 className="w-fit text-2xl text-primary rounded-xl px-2 self-center" style={{backgroundColor:item.color}}>{item.title}</h3>
                                    <p className={raleway.className}>{item.description}</p>
                                    <div className="flex gap-3.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41 41" fill="none">
                                            <circle cx="20.5" cy="20.5" r="20.5" fill={item.color}/>
                                            <path d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z" fill="#2B1F2D"/>
                                        </svg>
                                        <h3 className={`text-[1.25rem] self-center ${raleway.className}`}>Learn more</h3>
                                    </div>
                                </div>
                                <div >
                                    <Image className="w-full" src={item.image} alt={item.title} width={800} height={400}/>
                                </div>
                            </div>
                            )
                        })}
            </div>
        </section>
    )
}