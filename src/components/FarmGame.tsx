import { useState } from "react";

export default function FarmGame() {

  const [stage, setStage] = useState("empty");
  const [coins, setCoins] = useState(0);

  function plant() {
    setStage("growing");

    // crop grows in 5 seconds
    setTimeout(() => {
      setStage("ready");
    }, 5000);
  }

  function harvest() {
    setStage("harvested");
  }

  function sell() {
    setCoins(coins + 50);
    setStage("empty");
  }

  return (
    <div className="max-w-xl mx-auto p-8 text-center bg-white rounded-3xl shadow">

      <h2 className="text-3xl font-bold mb-6">
        Mini Farmer Game 🌱
      </h2>

      <p className="mb-4 text-lg">
        Coins: ₹{coins}
      </p>

      {stage === "empty" && (
        <button
          onClick={plant}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Plant Tomato
        </button>
      )}

      {stage === "growing" && (
        <p className="text-orange-500 font-bold">
          🌱 Tomato growing... (5 seconds)
        </p>
      )}

      {stage === "ready" && (
        <button
          onClick={harvest}
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl"
        >
          Harvest Tomato
        </button>
      )}

      {stage === "harvested" && (
        <button
          onClick={sell}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Sell in Market
        </button>
      )}

    </div>
  );
}