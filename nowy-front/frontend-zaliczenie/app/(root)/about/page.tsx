/* eslint-disable react/no-unescaped-entities */
"use client"
import { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = () => {

    const imageLinks: string[] = [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
      "/images/photo4.jpg",
    ]

    return (
      <div className="page space-y-10">
        <div className="space-y-5">
          <h1 className="font-bold text-5xl">About Us</h1>
          <p>
            Welcome to our basketball court reservation system! Established in the beautiful city of Gdynia, we are dedicated to providing a seamless way for basketball enthusiasts to book courts and enjoy the game they love.
          </p>
          <p>
            Our story began in 2020, when a group of basketball lovers came together with a vision: to make basketball courts more accessible to everyone. From humble beginnings, we’ve grown into a trusted platform for players of all levels.
          </p>
          <p>
            Whether you're a casual player or part of a competitive league, we’re here to help you find the perfect court in Gdynia and beyond.
          </p>
        </div>

        {/* Interaktywna mapa */}
        <div className="map-container">
          <iframe
            title="Basketball Court Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1718.7387362933612!2d18.5514773316856!3d54.49360984481661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDI5JzM3LjAiTiAxOMKwMzMnMTAuOCJF!5e1!3m2!1spl!2spl!4v1732645897173!5m2!1spl!2spl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {imageLinks.map((link, index) => (
            <div key={index} className="">
              <Image
                src={link}
                alt={`Basketball Court Photo ${index + 1}`}
                width={500}
                height={500}
                className="shadow-2xl rounded-xl hoverUp"
              />
            </div>
          ))}
        </div>

    </div>
    );
}

export default Page;
