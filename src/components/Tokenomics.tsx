"use client";
import React from "react";
import Image from "next/image";

const TokenomicsSection: React.FC = () => {
  return (
    <section
      className="tokenomics-section min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-black via-[#1a1a1a] to-black text-white relative overflow-hidden"
      id="tokenomics"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b min-h-screen from-black via-purple-900 to-black opacity-60 blur-2xl"></div>
      <div className="absolute min-h-screen left-[50%] transform -translate-x-1/2 w-[1200px] bg-gradient-to-r from-green-black via-[#191919] to-black-500 rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-white">
          MemeLinked Tokenomics
        </h2>

        {/* Interactive Rotational Layout */}
        <div className="relative w-full h-auto md:h-[700px] flex flex-wrap items-center justify-center">
          {/* Rotational Centerpiece */}
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-black/70 rounded-full shadow-lg flex items-center justify-center backdrop-blur-lg m-4">
            <div className="absolute inset-0 animate-spin-slow border-t-4 border-black rounded-full"></div>
            <div className="absolute inset-4 animate-spin-reverse border-t-2 border-purple-400 rounded-full"></div>
            {/* Central Image */}
            <Image
              src="/images/ML.gif" // Replace with the actual image path
              alt="Central Display"
              className="z-10 w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full"
              width={150}
              height={150}
            />
          </div>

          {/* Rotational Elements */}
          <div className="flex flex-wrap justify-center md:justify-evenly gap-6 md:gap-12">
            {/* Point 1 */}
            <div className="w-[31vh] h-[27vh] bg-black/70 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-110 transition-all duration-300">
              <h4 className="text-md font-semibold text-green-400">
                Transaction Tax
              </h4>
              <p className="text-md text-gray-300 mt-2">
                <strong className="text-white">Buy:</strong> 0% <br />
                <strong className="text-white">Sell:</strong> 0% <br />
                <strong className="text-white">Transfer:</strong> 4%
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Ensuring fairness and transparency.
              </p>
            </div>

            {/* Point 2 */}
            <div className="w-[31vh] h-[27vh] bg-black/70 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-110 transition-all duration-300">
              <h4 className="text-md font-semibold text-green-400">
                Chaos Energy
              </h4>
              <p className="text-md text-gray-300 mt-2">
                Powering unmatched scalability and speed.
              </p>
            </div>

            {/* Point 3 */}
            <div className="w-[31vh] h-[27vh] bg-black/70 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-110 transition-all duration-300">
              <h4 className="text-md font-semibold text-green-400">
                Community Rewards
              </h4>
              <p className="text-md text-gray-300 mt-2">
                Incentives and rewards for active participants.
              </p>
            </div>

            {/* Point 4 */}
            <div className="w-[31vh] h-[27vh] bg-black/70 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-110 transition-all duration-300">
              <h4 className="text-md font-semibold text-green-400">
                Future Expansion
              </h4>
              <p className="text-md text-gray-300 mt-2">
                Scaling the ecosystem with innovative utilities.
              </p>
            </div>
          </div>
        </div>

        {/* Text Below Animating Widget */}
        <div className="mt-[40vh] text-center">
          <h3 className="text-3xl font-bold text-green-400">Total Supply</h3>
          <p className="text-xl font-semibold text-white">1 Billion</p>
          <p className="text-md text-gray-400 mt-1">
            A robust supply fueling growth and scalability.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default TokenomicsSection;
