import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{advice || "Click below to get advice!"}</h1>
        <button
          onClick={getAdvice}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Get Advice
        </button>
        <p className="mt-4 text-gray-600">
          You have read <strong className="text-blue-500">{count}</strong> pieces of advice.
        </p>
      </div>
    </div>
  );
}
