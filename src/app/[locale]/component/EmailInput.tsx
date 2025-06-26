"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    setEmail("");
  };
  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="flex items-center border-b border-black px-2 py-1 bg-transparent md:w-10/12 mx-auto">
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
      />
      <button
        onClick={handleSubmit}
        className="ml-2  bg-blue text-white rounded-full p-1 cursor-pointer border-none"
        aria-label="Submit Email"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
