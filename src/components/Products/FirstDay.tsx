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
              <div className="abcd">
                <Image
                  src="\images\p111.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>1. SPRING LOADED FAIL SAFE BRAKE</h3>

                <ul>
                  <li>Type - USB & UMB (Normally On)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 2 Nm-1600 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Unique DC motor brake USB & UMB series brakes are absolutely
              fail-safe in nature, and finds wide range of applications where
              emergency stop is required. When power fails or brake remains in
              engaged condition for longer periods of time, these brakes are
              ideal for the applications. Unique DC fail safe brake functions on
              an electromagnetic principle.
            </p>

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
              <div className="abcd">
                <Image
                  src="\images\p30.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>2. FLANGE MOUNTED BRAKES</h3>

                <ul>
                  <li>Type - UFB (Normally Off)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  <li>DC voltage : 24/96/190</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Flange Mounted Brakes are designed for maximum performance and
              durability, offering reliable stopping power across various
              industrial applications. These brakes are specifically engineered
              to mount easily onto flanges, making them ideal for use in
              machines and equipment where space is limited. Crafted with
              precision, the Flange Mounted Brakes provide excellent torque
              control, ensuring smooth and consistent braking operations. They
              are built to handle demanding environments, offering low
              maintenance requirements, long service life, and high resistance
              to wear and tear.<br></br> Key features of our Flange Mounted
              Brakes include: High Torque Output: Capable of delivering strong
              braking force to meet heavy-duty operational demands.<br></br>{" "}
              Compact Design: Space-saving construction for easy integration
              into existing systems.<br></br> Durability: Built with robust
              materials to withstand harsh industrial environments.<br></br>{" "}
              Easy Installation: Mounts directly to the flange, minimizing
              installation time and complexity.<br></br> Low Maintenance:
              Designed for longevity with minimal upkeep required.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p20.jpg"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>3. LINER</h3>

                <ul>
                  {/* <li>Type - UFC (Normally Off)</li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  {/* <li>DC voltage : 24/96/190</li> */}
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Flange Mounted Clutches are designed for precise and efficient
              torque transfer in a variety of industrial applications. These
              clutches offer seamless integration with existing machinery,
              mounted directly onto flanges for easy installation. Their compact
              yet robust design makes them an excellent choice for systems where
              space optimization and reliable performance are critical.
              Engineered to handle demanding operations, these clutches provide
              smooth engagement and disengagement of power transmission,
              ensuring minimal wear and tear on your machinery. The Flange
              Mounted Clutches are ideal for environments requiring high torque
              capacity and quick response, helping enhance both productivity and
              equipment longevity. <br></br>Key features of our Flange Mounted
              Clutches include: <br></br>High Torque Transmission: Delivers
              consistent and powerful torque transfer for efficient operation.
              <br></br> Compact Design: Flange-mounted for space-saving
              installation and easy integration into various systems. <br></br>{" "}
              Durable Construction: Manufactured with high-quality materials for
              long-lasting performance in industrial conditions. <br></br>{" "}
              Smooth Engagement: Provides reliable power transmission with
              minimal noise and vibration, promoting machine longevity.{" "}
              <br></br> Easy Maintenance: Low maintenance design for reduced
              downtime and longer operational periods.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p40.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>4. CLUTH AND BRAKE COMBINATION</h3>

                <ul>
                  <li>Type - UCB (Normally Off)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  <li>DC voltage : 24/96/190</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Clutch and Brake Combination units are engineered for
              applications that require seamless transition between power
              transmission and braking in a single, compact system. These
              innovative units provide smooth, reliable engagement and
              disengagement of power while offering precise stopping capability,
              making them ideal for high-performance machinery across various
              industries. Designed to simplify operations, the Clutch and Brake
              Combination minimizes mechanical wear and maximizes efficiency by
              combining the clutch and brake mechanisms into one space-saving
              assembly. This integration not only enhances machine performance
              but also reduces downtime and maintenance efforts, ensuring
              optimal functionality and durability in demanding conditions.{" "}
              <br></br> Key features of our Clutch and Brake Combination units
              include: Integrated Design: Combines clutch and brake functions in
              a single unit for streamlined operations.<br></br> Smooth
              Engagement & Braking: Facilitates accurate torque transfer and
              immediate stopping for better control. <br></br> Compact &
              Space-Saving: Ideal for machinery with limited space, ensuring
              ease of installation and integration.<br></br> High Durability:
              Made from premium materials to ensure long-lasting performance,
              even in heavy-duty industrial environments. <br></br> Fast
              Response Time: Quick and efficient activation of both clutch and
              brake functions, reducing lag and enhancing precision.<br></br>{" "}
              Low Maintenance: Engineered for extended service life, requiring
              minimal maintenance to keep systems running smoothly.
            </p>

            {/* <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

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
              <div className="abcd">
                <Image
                  src="\images\p70.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>5. BRAKE MOTORS</h3>

                <ul>
                  <li>Type - UBM (Normally Off)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Speed : 10 - 1440 RPM
                  </li>
                  <li>Motor Voltages : 415 Vac</li>
                  <li>Power : 0.25 hp - 20 hp </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Brake Motors are designed to provide precise stopping control
              and efficient power transmission in a single unit, offering
              enhanced safety and reliability for a wide range of industrial
              applications. These motors are equipped with an integrated braking
              system that ensures immediate and controlled stopping of the motor
              shaft, making them ideal for applications requiring rapid and
              secure deceleration. Built for durability and performance, Brake
              Motors combine high torque capability with robust braking power,
              making them suitable for heavy-duty equipment and machinery in
              industries such as material handling, automation, and
              manufacturing. With a compact design, these motors are easy to
              install, saving both space and time while ensuring smooth
              operation.<br></br> Key features of our Brake Motors include:
              Integrated Brake System: Ensures safe, reliable stopping power
              without the need for additional external components.<br></br> High
              Torque Output: Delivers exceptional torque performance for
              efficient operation under load. <br></br> Compact & Versatile
              Design: Optimized for space-saving installation and easy
              integration into a variety of systems.<br></br>
              Durability: Manufactured with top-quality materials to withstand
              challenging industrial environments. <br></br> Fast Stopping Time:
              Immediate response time for accurate and safe stopping, improving
              overall machine safety.<br></br> Low Maintenance: Designed for
              long service life with minimal maintenance required, reducing
              downtime and operational costs.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p60.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>6. TRANSFORMERS AND RECTIFIERS</h3>

                <ul>
                  <li>Type - UFC (Normally Off)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Transformers and Rectifiers are designed to deliver
              consistent, reliable power conversion for industrial applications
              requiring stable voltage and current control. These devices play a
              crucial role in converting electrical energy into the desired
              voltage or current, providing high efficiency and performance in
              systems that require both AC-to-DC and DC-to-AC conversion. The
              transformers are engineered to step up or step down voltages with
              precision, ensuring optimal power distribution and protection of
              sensitive equipment. Coupled with our high-quality rectifiers,
              which efficiently convert alternating current (AC) to direct
              current (DC), this combination provides a stable and uninterrupted
              power supply for various machinery and equipment.<br></br> Key
              features of our Transformers and Rectifiers include: High
              Efficiency: Delivers superior power conversion with minimal
              losses, ensuring maximum energy efficiency. <br></br> Reliable
              Power Control: Provides stable voltage and current control,
              protecting connected equipment from fluctuations.<br></br> Durable
              Construction: Built with robust materials designed to withstand
              harsh industrial environments and continuous operation.<br></br>{" "}
              Compact Design: Space-saving construction for easy integration
              into control panels and electrical systems.<br></br> Safety
              Features: Equipped with overload protection and thermal management
              systems to prevent overheating and ensure long-term reliability.
              <br></br> Versatile Applications: Suitable for various industries,
              including manufacturing, automation, material handling, and more.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p80.png"
                  title=""
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>7. ELECTROHYDRAULIC THRUSTER BRAKE</h3>

                <ul>
                  {/* <li>Type - UFC (Normally Off)</li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 400 mm
                  </li>
                  <li>Weight : 68 Kg</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Electrohydraulic Thruster Brakes are designed for
              high-performance braking in demanding industrial applications,
              offering a reliable and powerful solution for controlling and
              stopping machinery. These brakes use an advanced electrohydraulic
              mechanism to generate braking force, ensuring smooth, consistent,
              and precise stopping power. Their robust design makes them ideal
              for heavy-duty equipment in industries such as material handling,
              cranes, hoists, and conveyor systems. The combination of hydraulic
              force and electrical control allows for fast response times and
              accurate braking under various load conditions. Built for
              durability, our Electrohydraulic Thruster Brakes are engineered to
              withstand harsh industrial environments while maintaining minimal
              maintenance needs and long service life.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* <AccordionItem>
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
                  <li>Type - UPNB</li>
                  <li>
                    <i className="icofont-wall-clock"></i>Torque : 15 Nm-100 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
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
            </div>
          </AccordionItemPanel>
        </AccordionItem> */}

        {/* <AccordionItem>
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
                  <li>Type - UHB</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 50 Nm-2000
                    Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
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
            </div>
          </AccordionItemPanel>
        </AccordionItem> */}
      </Accordion>
    </>
  );
};

export default FirstDay;
