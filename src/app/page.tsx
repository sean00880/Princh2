"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MemeGenerator from "@components/MemeGenerator";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<string[]>([]); // State for the memes gallery
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 12;
  const totalImages = gallery.length; // Update based on gallery content
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const addToGallery = (image: string) => {
    setGallery((prevGallery) => [...prevGallery, image]); // Add image to gallery
  };

  useEffect(() => {
    // Smooth scroll effect
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const targetElement = document.getElementById(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);


  return (
    <div>
      {/* Hero Section */}
      <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-fixed"
  style={{
    backgroundImage: "url('/images/bg1.webp')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }}
>
  {/* Grinchy Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-red-500 to-green-900 opacity-80 z-0"></div>

  {/* Content */}
  <div className="relative z-10 bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-xl shadow-2xl flex flex-row items-center text-center space-y-8">
    
    <div className="flex flex-col">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <Image
        src="/images/princh.webp"
        alt="PRINCH Logo"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
    </motion.div>
    </div>
    <div className="col">
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold text-green-900 italic"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      $PINCH
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-800 italic font-medium"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      The mischievous memecoin of Solana.
    </motion.p>

    <motion.div
      className="bg-red-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-800 transition-colors cursor-pointer text-lg font-semibold"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <span>CA: SoLGrINcHPiNCHabc123</span>
    </motion.div>

    <motion.div
      className="flex space-x-4 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Link
        href="https://x.com/princhofficial"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/icons/x.png"
          width={40}
          height={40}
          alt="Twitter"
          className="rounded-full shadow-md"
        />
      </Link>
      <Link
        href="https://t.me/princhsolana"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/icons/telegram.png"
          width={40}
          height={40}
          alt="Telegram"
          className="rounded-full shadow-md"
        />
      </Link>
    </motion.div>
    </div>
  </div>
</section>




      {/* About Section */}
      <section
  id="about"
  className="py-12 relative flex items-center justify-center min-h-screen text-white bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/bg2.webp')",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#14F195]/40 to-transparent z-0"></div>

  {/* Content */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-8 max-w-7xl w-full items-center">
    {/* Left Column */}
    <motion.div
      className="flex flex-col space-y-6 text-center md:text-left bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-xl shadow-2xl flex flex-row items-center text-center space-y"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Title */}
      <h2
        data-text="Who is PRINCH?"
        className="text-5xl font-bold text-green-300 text-shadow animate-pulse"
      >
        Who is PINCH?
      </h2>

      {/* Intro Paragraph */}
      <p className="text-lg leading-relaxed text-gray-200">
        Ever wondered what happens when Pepe meets the Grinch? You get{" "}
        <span className="text-green-400 font-bold">PINCH</span>, the ultimate
        Christmas-crashing memecoin that combines the best of crypto, humor,
        and festive mischief. Born on Solana and fueled by holiday chaos,
        $PINCH is here to light up your portfolio with green candles (and
        maybe steal a few along the way).
      </p>

      {/* Subheading */}
      <h3 className="text-3xl font-semibold text-yellow-400 text-shadow">
        A Festive Memecoin with a Mischievous Twist
      </h3>

      {/* Highlight Paragraph */}
      <p className="text-lg leading-relaxed text-gray-100">
        $PINCH isn’t just a memecoin—it’s a <span className="italic">heist</span>! 
        From stealing crypto candles to stealing the show, this holiday hybrid is 
        here to spread laughs and bullish vibes. Remember, it’s not Christmas 
        without a little chaos.
      </p>
    </motion.div>

    {/* Right Column */}
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Interactive Image */}
      <div className="relative group">
        <Image
          src="/images/PRINCHLOGO.webp"
          alt="PINCH Character"
          width={500}
          height={500}
          className="rounded-full p-20 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
        />
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  </div>

  {/* Floating Ornaments */}
  <motion.div
    className="absolute top-10 left-20 w-16 h-16 bg-green-400 rounded-full shadow-lg"
    animate={{
      y: [0, 20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  ></motion.div>
  <motion.div
    className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  ></motion.div>
</section>



      {/* Tokenomics Section */}
      <section
  id="tokenomics"
  className="relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center text-white"
  style={{
    backgroundImage: "url('/images/snow.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center space-y-12 px-6 w-full">
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center text-green-300" data-text="$PINCH Tokenomics">
      $PINCH Tokenomics
    </h2>

    {/* Tokenomics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {/* Circulating Supply */}
      <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Circ. Supply
        </h3>
        <p className="text-center text-4xl font-extrabold text-white mt-2">
          1B
        </p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>
      </div>

      {/* Taxes */}
      <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 transform transition-transform duration-500 hover:-rotate-3 hover:scale-105">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Taxes
        </h3>
        <p className="text-center text-lg font-semibold text-white mt-2">
          <span className="block">Buy: 0%</span>
          <span className="block">Sell: 0%</span>
        </p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg"></div>
      </div>

      {/* Liquidity */}
      <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Liquidity
        </h3>
        <p className="text-center text-lg font-semibold text-white mt-2">
          100% Locked
        </p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
      </div>
    </div>

    {/* Additional Info */}
    <p className="text-center text-gray-300 text-sm md:text-lg max-w-3xl">
      $PINCH is here to spread cheer and green candles! Fully locked liquidity and minimal taxes make it the ultimate holiday treat for your crypto wallet.
    </p>
  </div>

  {/* Banner */}
  <div className="relative mt-12">
    <a href="/some-link">
      <div
        className="w-[600px] h-[200px] mx-auto rounded-lg overflow-hidden shadow-xl"
        style={{
          backgroundImage: "url('/images/princh2.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </a>
  </div>
</section>






      {/* Roadmap Section */}
      <section
  id="roadmap"
  className="relative py-20 bg-fixed bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#000000] text-white"
  style={{
    backgroundImage: "url('/images/princh3.webp')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#0a0a0a]/60 to-[#141414]/90 z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h2
      className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-16"
      data-text="$PINCH Roadmap"
    >
      $PINCH Roadmap
    </h2>

    {/* Roadmap Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Phases */}
      {[
        {
          phase: "Phase 1: Naughty Beginnings",
          details: "Launch the $PINCH website, gather the community of mischievous memers, and drop some Grinch-inspired holiday chaos.",
          icon: "/images/phase1.webp",
        },
        {
          phase: "Phase 2: List Mania",
          details: "Secure listings on major platforms like Solscan and CoinGecko, raising visibility among memecoin enthusiasts.",
          icon: "/images/phase2.webp",
        },
        {
          phase: "Phase 3: Meme Domination",
          details: "Unleash meme magic with influencer partnerships, meme contests, and festive giveaways.",
          icon: "/images/phase3.webp",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-black/80 mt-10 p-6 rounded-lg shadow-xl border border-gray-700 hover:scale-105 transform transition-transform duration-500"
        >
          {/* Icon */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white flex items-center justify-center rounded-full shadow-md border-4 border-green-500">
            <Image
              src={item.icon}
              alt={item.phase}
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>

          {/* Content */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-green-300">{item.phase}</h3>
            <p className="mt-4 text-gray-300">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Decorative Elements */}
  <motion.div
    className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 rounded-full opacity-30 blur-xl"
    animate={{ y: [0, 30, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  ></motion.div>
  <motion.div
    className="absolute bottom-0 right-0 w-24 h-24 bg-green-500 rounded-full opacity-30 blur-xl"
    animate={{ y: [0, -30, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  ></motion.div>
</section>

 

      {/* Footer */}
      <footer
        id="footer"
        className="py-6 bg-black text-white text-center"
      >
        <p>© 2024<em>PINCH</em> | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
