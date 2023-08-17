"use client";
import { useState, useRef } from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CreateResearch() {
  const [file, setFile] = useState();
  const [message, setMessage] = useState("");
  const handleFile = (e) => {
    setMessage("");
    let fileInput = e.target.files;
    const fileType = fileInput[0]["type"];
    const validTypes = ["application/pdf"];
    if (validTypes.includes(fileType)) {
      setFile(fileInput[0]);
    } else {
      setMessage("only pdfs accepted");
    }
  };

  const [thumbnail, setThumbnail] = useState();
  const [thumbnailMessage, setThumbnailMessage] = useState("");
  const handleThumbnail = (e) => {
    setMessage("");
    let thumbnailInput = e.target.files;
    const fileType = thumbnailInput[0]["type"];
    const validThumbTypes = ["image/svg+xml"];
    if (validThumbTypes.includes(fileType)) {
      setThumbnail(thumbnailInput[0]);
    } else {
      setThumbnailMessage("only svgs accepted");
    }
  };

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const problemRef = useRef(null);
  const innovationRef = useRef(null);
  const grantRef = useRef(null);
  const bountyRef = useRef(null);
  const scheduleRef1 = useRef(null);
  const scheduleRef2 = useRef(null);
  const scheduleRef3 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let ok =
      titleRef.current.value &&
      descriptionRef.current.value &&
      problemRef.current.value &&
      innovationRef.current.value &&
      scheduleRef1.current.value &&
      scheduleRef2.current.value &&
      scheduleRef3.current.value &&
      grantRef.current.value &&
      bountyRef.current.value;
    console.log(ok);

    if (grantRef.current.value < 0 || bountyRef.current.value < 0) {
      ok = false;
    }

    if (ok) {
      let objeto = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        problem: problemRef.current.value,
        innovation: innovationRef.current.value,
        // schedule: [
        //   scheduleRef1.current.value,
        //   scheduleRef2.current.value,
        //   scheduleRef3.current.value,
        // ],
        grant: grantRef.current.value,
        bounty: bountyRef.current.value,
        file: "https://firebasestorage.googleapis.com/v0/b/science-tifical.appspot.com/o/researchs%2FTornado%20Cash%20Whitepaper.pdf?alt=media&token=e8637900-baa6-4bc1-93e0-ca4196fcf9e3",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/science-tifical.appspot.com/o/researchs%2Fthumbnail.svg?alt=media&token=8a024e0d-7d42-4d66-b28a-e0555c4abb1e",
        approved: false,
        date: new Date().toLocaleDateString(),
      };
      console.log(objeto);
      const collectionRef = collection(db, "researchs");
      async function pushData() {
        try {
          const res = await addDoc(collectionRef, objeto);
          // const res = await db.collection("researchs").add(objeto);
          console.log(res);
          window.location.href = "/create-research/success";
        } catch (error) {
          console.log(error);
        }
      }
      pushData();
    }
  };
  return (
    <div className={raleway.className}>
      <div className="rounded rounded-xl bg-secondary text-primary mx-[25rem] mb-20 mt-10">
        <div className="flex flex-col justify-center w-full">
          <div className="flex items-center text-[2rem] self-center mt-3">
            <h1 className={`font-[400] ${raleway.className}`}>
              Lets create your
            </h1>
            <h1 className="font-regarn pt-1 pl-2  font-[300]">research</h1>
            <h1 className={`font-[400] ${raleway.className}`}>!</h1>
          </div>
          <form
            className="px-8 pt-6 pb-8 mb-3 grid gap-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Which is the title of your research?*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Tell us what are you researching..."
                required
                ref={titleRef}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Describe us your project in 200 words...*
              </label>
              <textarea
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Write something cool here..."
                ref={descriptionRef}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Which question are you answering?*
              </label>
              <textarea
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="problem"
                type="text"
                placeholder="Tell us about the problem you are solving..."
                ref={problemRef}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Which is your innovation contribution?*
              </label>
              <textarea
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="innovation"
                type="text"
                placeholder="Tell us how you impact..."
                ref={innovationRef}
                required
              />
            </div>
            {/* <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Could you tell us about your project schedule?*
              </label>
              <div className="grid gap-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="step1"
                  type="text"
                  placeholder="Step 1..."
                  required
                  ref={scheduleRef1}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="step2"
                  type="text"
                  placeholder="Step 2..."
                  required
                  ref={scheduleRef2}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="step3"
                  type="text"
                  placeholder="Step 3..."
                  required
                  ref={scheduleRef3}
                />
              </div>
            </div> */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                If you are looking for a grant, how much do you need?*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="grant"
                type="number"
                min={0}
                placeholder="Provide us the number in ETH"
                required
                ref={grantRef}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                How much is your bounty for Peer Review?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bounty"
                type="number"
                min={0}
                placeholder="Provide us the number in ETH"
                required
                ref={bountyRef}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Upload your PDF*
              </label>
              <div className=" flex justify-center items-center bg-gray-900">
                {file ? (
                  <div className="w-1/2  flex items-center justify-between rounded pt-3  ">
                    <span className="truncate w-44 text-black">
                      {file ? file.name : ""}
                    </span>
                    <div
                      onClick={() => {
                        setFile(null);
                      }}
                      className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm "
                    >
                      <Image
                        src="/images/trash.svg"
                        alt="trash"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-3 md:w-1/2 w-[360px] rounded-md">
                    <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
                      {message}
                    </span>
                    <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer border-gray-400 border-dotted">
                      <input
                        type="file"
                        onChange={handleFile}
                        className="h-full w-full opacity-0 z-10 absolute cursor-pointer"
                        name="file"
                        required
                      />
                      <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0 ">
                        <div className="flex flex-col">
                          <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                          <span className="text-[12px]">{`Drag and Drop a file`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold">
                Thumbnail for your project (optional)
              </label>
              <div className=" flex justify-center items-center bg-gray-900">
                {thumbnail ? (
                  <div className="w-1/2  flex items-center justify-between rounded pt-3  ">
                    <span className="truncate w-44 text-black">
                      {thumbnail ? thumbnail.name : ""}
                    </span>
                    <div
                      onClick={() => {
                        setThumbnail(null);
                      }}
                      className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm "
                    >
                      <Image
                        src="/images/trash.svg"
                        alt="trash"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-3 md:w-1/2 w-[360px] rounded-md">
                    <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
                      {thumbnailMessage}
                    </span>
                    <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer border-gray-400 border-dotted">
                      <input
                        type="file"
                        onChange={handleThumbnail}
                        className="h-full w-full opacity-0 z-10 absolute cursor-pointer"
                        name="thumbnail"
                      />
                      <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0 ">
                        <div className="flex flex-col">
                          <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                          <span className="text-[12px]">{`Drag and Drop a file`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="px-[0.5rem]">
              <button
                type="submit"
                className="w-full py-[0.5rem] px-[3rem] rounded rounded-xl bg-primary text-secondary"
              >
                Upload
              </button>
            </div>
          </form>
          <div className="flex mb-4">
            <h3 className="self-center text-center px-10">
              I understand that by uploading my research, I am responsible for
              any impacts it may have
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
