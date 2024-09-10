"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FirstDay: React.FC = () => {
  return (
    <>
    
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="https://unitorq.in/img/product-1.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>1. Spring Loaded Fail Safe Brakes</h3>

                <ul>
                  <li>
                     
                     Type - USB  & UMB (Normally On)
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 2 Nm-1600 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {/* <p>
            Unitorq USB & UMB series brakes are absolutely fail safe in nature, and finds wide range of applications where emergency stop is required. When power fails or brake remains in engaged condition for longer periods of time, these brakes are ideal for the applications. Unitorq D.C. fail safe brake functions on an electromagnetic principle.
            </p> */}

            {/* <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
             
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="https://unitorq.in/img/product-2.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />

              </div>

              <div className="schedule-info">
                <h3>2. Normally Off Brakes</h3>

                <ul>
                  <li>
                     
                  Type - UFB (Normally Off)
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 1 Nm-2550 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {/* <p>
            These type of brakes are normally-off type and operates on power. When power is given to the stator (coil), the armature is attracted towards the asbestos free friction liner of the brake stator which clamps the rotating component stop at once.
            On switching off the electric power, the unique pre-stressed spring pulls the armature plate back into its original position and brake positively released with no residual torque.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
             
                <Image
                  src="https://unitorq.in/img/product-9.png"
                  title="Pnuematic Brakes"
                  alt="Author"
                  width={150}
                  height={150}
                />
           
              <div className="schedule-info">
                <h3>Pnuematic Brakes</h3>

                <ul>
                  <li>
                  Type - UPNB
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i>Torque : 15 Nm-100 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p> */}
{/* 
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
             
                <Image
                  src="https://unitorq.in/img/product-13.png"
                  title="Hydraulic Brakes"
                  alt="Hydraulic Brakesr"
                  width={150}
                  height={150}
                />
         
              <div className="schedule-info">
                <h3>Hydraulic Brakes</h3>

                <ul>
                  <li>
                     
                  Type - UHB
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 50 Nm-2000 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
    
  );
};

export default FirstDay;
