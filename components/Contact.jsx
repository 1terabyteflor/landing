import React from "react";
import FormContact from "./FormContact";
import Image from "next/image";
import Map from "../public/mapa.png";
import Link from "next/link";
import { useState } from "react";

function Contact() {
  return (
    <div className="pt-12 mb-24" id="contact">
      <div className="h-screen p-5 ">
        <h2 className="text-6xl text-center md:text-left">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <FormContact />
          <div className="flex flex-col justify-center md:pr-40">
            <Image src={Map} alt="Buenos Aires map" height={470} width={470} />
            <h2>Located in Buenos Aires, Argentina</h2>
            <p>-34.606331798816704, -58.435075902603835</p>
            <h5 className="flex flex-col focus:outline-gray-400 mt-6">
              also via e-mail
              <span className="underline focus:outline-gray-400">
                <Link
                  className="focus:outline-gray-400"
                  href="mailto:c7studio.www@gmail.com"
                >
                  c7studio.www@gmail.com
                </Link>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
