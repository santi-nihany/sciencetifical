import { Raleway } from 'next/font/google'

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function Landing(){
    return(
        <section id="landing" className="mt-20 flex justify-center text-secondary">
            <div className='flex items-center text-[4.75rem]'>
                    <h1 className='font-[300]'>
                        Science
                    </h1>
                    <h1 className={`font-[700] pb-2 ${raleway.className}`}>, but colaborative</h1>
            </div>
            {/* <Image src='/images/landing.svg' width={500} height={500} /> */}
            
        </section>
    )
}