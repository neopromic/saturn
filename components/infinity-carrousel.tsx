"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Techs {
  name: string;
  logo: string;
  url?: string;
}

interface InfiniteCarouselProps {
    dataTechs: Techs[];
}

export const Carousel = () => {
  const technologies: Techs[] = [
    { name: "Javascript", logo: "/javascript.svg" },
    { name: "Typescript", logo: "/typescript.svg" },
    { name: "React", logo: "/react.svg" },
    { name: "Next", logo: "/nexticon.svg" },
    { name: "Tailwind", logo: "/tailwind.svg" },
    { name: "MongoDB", logo: "/next.svg" },
    { name: "PostgresSQL", logo: "/postgre.svg" },
    { name: "Jest", logo: "/jest.svg" },
    { name: "Figma", logo: "/figma.svg" },
    { name: "Git", logo: "/git.svg" },
  ];
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinity-scroll ">
        {technologies.map((tech, index) => (
          <li key={index}>
            <Image src={tech.logo} alt={tech.name} width={100} height={64} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinity-scroll "
        aria-hidden="true"
      >
        {technologies.map((tech, index) => (
          <li key={index}>
            <Image src={tech.logo} alt={tech.name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};
