"use client"
import Userform from "@/app/components/formularios/Userform";
import ResearcherForm from "@/app/components/formularios/ResearcherForm";
import React from "react";
import "@/styles/home.css";
import "@/styles/takestudy.css";

import Image from "next/image";
import Link from "next/link";
import { Raleway } from 'next/font/google'
import EthicsForm from "@/app/components/formularios/Ethics";

const raleway = Raleway({
    weight:[
    "400", "500", "600", "700", "800", "900"
    ],
    subsets: ['latin']
});

export default function TakeStudy({ params: { itemId } }) {
      if(itemId == "user"){
        return (
          <div>
            <Userform />
          </div>
        )
      }
    else if(itemId == "researcher"){
      return (
        <div>
           <ResearcherForm />
        </div>
      )
    }
    else {
      return (
        <div>
          <EthicsForm />
        </div>
      )
    }

}