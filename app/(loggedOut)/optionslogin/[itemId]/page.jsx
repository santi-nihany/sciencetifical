"use client";
import LoginForm from "@/app/components/formularios/LoginForm";
import ResearcherForm from "@/app/components/formularios/ResearcherForm";
import React from "react";
import "@/styles/home.css";
import "@/styles/takestudy.css";

import { Raleway } from "next/font/google";
import EthicsForm from "@/app/components/formularios/Ethics";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function TakeStudy({ params: { itemId } }) {
  if (itemId == "user") {
    return (
      <div className="mt-16">
        <LoginForm />
      </div>
    );
  } else if (itemId == "researcher") {
    return (
      <div>
        <ResearcherForm />
      </div>
    );
  } else {
    return (
      <div>
        <EthicsForm />
      </div>
    );
  }
}
