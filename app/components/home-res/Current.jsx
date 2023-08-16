import { Raleway } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function Current() {
    const researchs = [
        {
            title: "Research 1",
            reviewers: 3,
            stars: 4,
            stage: "Stage 1",
            logo: "/images/Logo.svg",
            preview: "/images/Preview.svg"
        },
        // {
        //     title: "Research 1",
        //     reviewers: 3,
        //     stars: 4,
        //     stage: "Stage 1",
        //     logo: "/images/Logo.svg",
        //     preview: "/images/Preview.svg"
        // },
        // {
        //     title: "Research 1",
        //     reviewers: 3,
        //     stars: 4,
        //     stage: "Stage 1",
        //     logo: "/images/Logo.svg",
        //     preview: "/images/Preview.svg"
        // },

    ]
    return(
        <div>
            <h1 className={`text-4xl ${raleway.className} text-secondary font-[700] mb-4`}>Current Research</h1>
            <div className="flex flex-wrap ">
                {researchs.map((item, index) => (
                    <div key={index} className="w-1/2">
                            <div className='item-section text-secondary bg-primary'>
                                <Image src={item.preview} alt={item.title} width={800} height={400}/>
                                <h3 className={`${raleway.className}`}>{item.title}</h3>
                                <div className='flex gap-[1rem]'>
                                    <p>Reviews: {item.reviewers}</p>
                                    <p>Stars: {item.stars}</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}