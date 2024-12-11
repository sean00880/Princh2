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
          backgroundImage: "url('/images/pegg2.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
       {/* Solana Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF] via-[#14F195] to-[#9945FF] opacity-80 z-0"></div>

        {/* Content Box */}
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <Image
              src="/images/PEGG.png"
              alt="PEGG Logo"
              width={220}
              height={220}
              className=""
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-purple-700"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            $<span className="text-green-800 italic">PepEgg</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 italic"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Solving Crypto's Most <span className="font-bold">EGG-citing</span>{" "}
            Mystery.
          </motion.p>

          {/* Contract Address */}
          <motion.div
            className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition-colors cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span>CA: BYTEmJ1Wxc5Y4ms6W5naonGYpkr9N9BX3eiidbBSqFqZ</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="https://x.com/pep_eggsol"
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
            <Link
              href="https://x.com/PEGGOfficial"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/icons/x.png"
                width={40}
                height={40}
                alt="X (Twitter)"
                className="rounded-full shadow-md"
              />
            </Link>
            <Link
              href="https://www.dextools.io/app/en/solana/pair-explorer/B4vCYnnSXkzjPGTXtStaC7ScDpKfvgPeTMmdRyLQ1VMv?t=1733940219010"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/icons/dextools.png"
                width={40}
                height={40}
                alt="Dextools"
                className="rounded-full shadow-md"
              />
            </Link>
          </motion.div>
        </div>

        {/* 3D Parallax Element */}
        <motion.div
          className="absolute right-10 bottom-10 w-[300px] md:w-[400px] z-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/peggmain.png"
            alt="PEGG Character"
            width={400}
            height={400}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </section>



      {/* About Section */}
      <section 
  id="about"
  className="py-6 relative flex items-center justify-center min-h-screen text-white bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/peggbg.png')",
  }}
>
  <div
    className="absolute inset-0 bg-gradient-to-r from-black via-[#9945FF]/50 to-transparent z-0"
  ></div>

  {/* Content */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl w-full">
    {/* Left Column */}
    <motion.div
      className="flex flex-col justify-center space-y-6 text-center md:text-left"
      initial={{ opacity: 1, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 data-text="Who is PEGG?" className="anim text-4xl font-bold text-yellow-200 text-shadow">
        Who is PEGG?
      </h2>
      <p className="text-lg leading-relaxed text-white">
        Dive into the cryptic and egg-citing journey of $PEGG—a meme-filled
        phenomenon incubated on the Solana blockchain. With humor as its
        backbone and mystery as its shell, $PEGG hatches a world of endless
        possibilities for memecoins and dreamers alike.
      </p>
      <h3 className="text-2xl font-semibold text-green-300 text-shadow">
        A Memecoin with a Crackling Twist
      </h3>
      <p className="text-lg leading-relaxed text-gray-100 text-shadow">
        $PEGG isn’t just a meme; it’s a movement. Born from the eternal question
        of what came first—the PEPE or the $PEGG—it challenges convention and
        eggs on innovation in the crypto landscape.
      </p>
    </motion.div>

    {/* Right Column */}
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/images/pegg.jpg"
        alt="PEGG Character"
        width={500}
        height={500}
        className="rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
</section>


      {/* Tokenomics Section */}
      <section
  id="tokenomics"
  className="relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center text-white"
  style={{
    backgroundImage: "url('/images/pegg4.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center space-y-12 px-6 w-full">
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center text-yellow-300" data-text="$PEGG Tokenomics">
      $PEGG Tokenomics
    </h2>

    {/* Tokenomics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {/* Circulating Supply */}
      <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Circ. Supply
        </h3>
        <p className="text-center text-4xl font-extrabold text-white mt-2">
          987.26M
        </p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"></div>
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
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
      </div>

      {/* Liquidity */}
      <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Liquidity
        </h3>
        <p className="text-center text-lg font-semibold text-white mt-2">
          100% Locked
        </p>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg"></div>
      </div>
    </div>

    {/* Additional Info */}
    <p className="text-center text-gray-300 text-sm md:text-lg max-w-3xl">
      $PEGG ensures a fair and transparent ecosystem with no taxes and fully
      locked liquidity. Dive into the most EGG-citing meme revolution on Solana!
    </p>
  </div>
</section>





      {/* Roadmap Section */}
      <section
  id="roadmap"
  className="relative py-20 bg-fixed bg-gradient-to-b from-[#252525] via-[#0a0a0a] to-[#000000] text-white"
  style={{
    backgroundImage: "url('/images/pegg3.jpg')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/20 to-green-900/20"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h2 data-text="$PEGG Roadmap" className="anim text-4xl md:text-5xl font-bold text-center text-black mb-16">
      $PEGG Roadmap
    </h2>

    {/* Roadmap Timeline */}
    <div className="relative border-l border-gray-600">
      {[{
          phase: "Phase 1: Launch",
          details: "Website launch, initial community setup, and early engagement with memecoin enthusiasts.",
          icon: "/images/pegg2.png"
        },
        {
          phase: "Phase 2: Listings",
          details: "Get listed on Solscan, drive awareness on CoinGecko, and attract early adopters.",
          icon: "/images/pegg1.png"
        },
        {
          phase: "Phase 3: Memes & Marketing",
          details: "Aggressive meme campaigns, influencer collaborations, and community expansions.",
          icon: "/images/pegg.png"
        },
      ].map((item, index) => (
        <div
          key={index}
          className="mb-12 flex items-start relative"
          data-aos="fade-up"
          data-aos-delay={`${index * 200}`}
        >
          {/* Connector Line */}
          <div className="absolute top-0 left-5 transform -translate-y-1/2 w-0.5 bg-gradient-to-b from-green-400 to-purple-500 h-full"></div>

          {/* Icon */}
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg border-4 border-purple-500 relative z-10">
            <Image
              src={item.icon}
              alt={item.phase}
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>

          {/* Content */}
          <div className="ml-16 bg-black/80 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2">
              {item.phase}
            </h3>
            <p className="text-sm md:text-lg text-gray-300">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 

      {/* Footer */}
      <footer
        id="footer"
        className="py-6 bg-black text-white text-center"
      >
        <p>© 2024 PEGG | All Rights Reserved | Website by <Link href="https://t.me/@seadwivedicrypto">@seandwivedicrypto</Link></p>
      </footer>
    </div>
  );
};

export default HomePage;
