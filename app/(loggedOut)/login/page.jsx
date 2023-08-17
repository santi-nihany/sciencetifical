"use client";
import LoginForm from "@/app/components/formularios/LoginForm";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/home.css";
import "@/styles/takestudy.css";

export default function LogIn() {
  const [type, setType] = useState("user");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/dashboard");
  }

  return (
    <div className="h-full w-full max-w-screen-md m-auto grid place-content-center mt-12">
      <div className="flex items-center justify-center gap-4">
        <button
          className={
            type === "user"
              ? "bg-secondary text-primary font-bold rounded-full py-2 px-6"
              : "btn-header text-secondary font-bold"
          }
          onClick={() => setType("user")}
        >
          User
        </button>
        <button
          className={
            type === "researcher"
              ? "bg-secondary text-primary font-bold rounded-full py-2 px-6"
              : "btn-header text-secondary font-bold"
          }
          onClick={() => setType("researcher")}
        >
          Researcher
        </button>{" "}
      </div>
      <div className="py-12 px-4">
        {type === "researcher" ? (
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 bg-[#efadf9] p-8 rounded-xl"
          >
            <div>
              <p>Username</p>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <p>Password</p>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="bg-secondary text-primary font-bold rounded-full py-2 px-6"
              type="submit"
            >
              Log in
            </button>
          </form>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
