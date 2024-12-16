/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { NextPage } from "next";

interface FeatureProps {
  imgSrc: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    imgSrc: "/images/easy-booking.png",
    title: "Easy Booking",
    description: "Reserve your court in just a few clicks.",
  },
  {
    imgSrc: "/images/affordable-rates.png",
    title: "Affordable Rates",
    description: "Enjoy competitive pricing and more.",
  },
  {
    imgSrc: "/images/community-events.png",
    title: "Community Events",
    description: "Join local tournaments and meet other players.",
  },
];

const headerStyle = "text-3xl md:text-4xl font-bold mb-8 text-center text-black";

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description }) => (
  <div className="bg-white flex flex-col items-center tile hoverUp">
    <div className="w-24 h-24 flex items-center justify-center mb-4">
      <Image
        src={imgSrc}
        alt={title}
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
    <h3 className="text-black text-2xl font-bold ">{title}</h3>
    <p className="text-black text-1xl">{description}</p>
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <main>

        {/* Hero Section */}
        <div className="relative w-auto h-96 bg-[url('/images/hero-background.jpg')] bg-cover bg-center mb-8">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full text-white px-4 sm:px-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              Book Your Court - Anytime, Anywhere!
            </h1>
            <p className="mt-2 text-sm sm:text-lg md:text-xl">
              Experience the joy of basketball with Gdynia's premier reservation system
            </p>
          </div>
        </div>

      <div className="page space-y-20">
        {/* Features Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className={headerStyle}>Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h1 className={headerStyle}>What Players Say</h1>
          <blockquote className="text-lg sm:text-xl md:text-2xl italic text-gray-700 max-w-2xl mx-auto mb-4 px-4">
            "This system makes booking courts so easy! I’ve been able to play regularly without any hassle."
          </blockquote>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">- Alex Johnson</p>
        </div>
      </div>

      </main>
    </div>
  );
};

export default Home;
