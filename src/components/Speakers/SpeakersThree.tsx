"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  
}



const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/images/glassmachine.webp",
    name: "Glass Making Machines",
  },
  {
    image: "/images/autolabelling.jpg",
    name: "Auto Labelling Machines",

  },
  
  
  {
    image: "/images/bottlewashing.jpeg",
    name: "Bottle Washing Machines",
   
  },
  {
    image: "/images/brakemotors.jpg",
    name: "Brake Motors",
    
  },
  
  {
    image: "/images/washingmachine.jpg",
    name: "Industrial Washing Machines",
  },
  {
    image: "/images/coilwinding.jpg",
    name: "Coil Winding Machines",
  },
  {
    image: "/images/conveyors.jpg",
    name: "Conveyors",
  },
  {
    image: "/images/copylathes.jpeg",
    name: "Copy Lathes",
  },
  {
    image: "/images/cuttolength.jpg",
    name: "Cut to Length Machineries",
  },
  {
    image: "/images/fillingmachine.jpg",
    name: "Filling Machineries",
  },
  {
    image: "/images/bagmaking.jpg",
    name: "Bag Making Machines",

  },
  {
    image: "/images/indexingmachine.jpg",
    name: "Indexing Machineries",
  },
  
  
  
];

const SpeakersThree: React.FC = () => {
  return (
    <>
      <div className="speakers-area-two ptb-120">
        <div className="container">
          <div className="row">
            {SpeakersMemberData &&
              SpeakersMemberData.slice(0, 12).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <Image
                        src={value.image}
                        alt="speaker"
                        width={800}
                        height={800}
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>{value.name}</h3>
                
                     
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersThree;
