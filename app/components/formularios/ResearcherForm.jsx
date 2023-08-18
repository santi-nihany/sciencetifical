"use client";
export default function ResearcherForm() {
  function handleSubmit(event) {
    event.preventDefault();

    window.location.href = "/dashboard";
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 bg-[#efadf9] p-8 rounded-xl mx-64 mt-10"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Hey researcher!</h1>
        <p className="text-xl">We are glad you choose to do open science 😃 </p>
      </div>
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
        Sign in
      </button>
    </form>
  );
}
