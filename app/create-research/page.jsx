import Header from "../components/Header";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function CreateResearch(){
    return(
        <div className={raleway.className}>
            <Header/>

            <div className="rounded rounded-xl bg-secondary text-primary mx-[25rem]">
                <div className="flex flex-col justify-center w-full">
                <div className='flex items-center text-[2rem] self-center'>
                    <h1 className={`font-[400] ${raleway.className}`}>Lets create your</h1>
                    <h1 className='pl-2 pt-1 font-[300]'>
                        research
                    </h1>
                    <h1 className={`font-[400] ${raleway.className}`}>!</h1>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Which is the title of your research?*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Tell us what are you researching..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Describe us your project in 200 words...*
                </label>
                <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Write something cool here..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="problem">
                    Which question are you answering?*
                </label>
                <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="problem" type="text" placeholder="Tell us about the problem you are solving..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="innovation">
                    Which is your innovation contribution?*                
                </label>
                <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="innovation" type="text" placeholder="Tell us how you impact..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="schedule">
                    Could you tell us about your project schedule?*
                </label>
                <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="schedule" type="text" placeholder="You could enumerate the schedule with bullet points..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="grant">
                    If you are looking for a grant, how much do you need?*
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grant" type="number" placeholder="Provide us the number without $..." />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="bounty">
                    Select the bounty you will offer to distribute between your peer reviewers*
                </label>
                <div className="flex justify-evenly mt-4">
                    <button  className="rounded-2xl px-[1rem] py-[0.5rem] text-secondary bg-primary font-bold">100 USDT</button>
                    <button  className="rounded-2xl px-[2rem] py-[0.5rem] text-secondary bg-primary font-bold">1.000 USDT</button>
                    <button  className="rounded-2xl px-[2rem] py-[0.5rem] text-secondary bg-primary font-bold">10.000 USDT</button>
                </div>
                </div>
                </form>
                </div>
            </div>

        </div>
    )
}