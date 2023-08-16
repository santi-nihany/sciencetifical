import { Raleway } from 'next/font/google'
import Image from 'next/image';

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function Landing(){
    return(
        <section id="landing" className="mt-20 mb-20 grid justify-center text-secondary">
            <div className='self-center flex items-center text-[4.75rem]'>
                    <h1 className='font-[300]'>
                        Science
                    </h1>
                    <h1 className={`font-[700] pb-2 ${raleway.className}`}>, but colaborative</h1>
            </div>

            <Image className="self-center w-full"alt="landing" src='/images/landing.svg' width={500} height={500} /> 

        </section>
    )
}