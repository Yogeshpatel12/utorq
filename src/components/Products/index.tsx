"use client";

import React from "react";
import { Tabs,  TabPanel } from "react-tabs";
import FirstDay from "./FirstDay";

const EventSchedules: React.FC = () => {
  return (
    <>
      <div className="schedule-area schedule-style-four bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="text-dark fs-3">Our Products</span>
            <h2>
               <br /> DC Motor Brakes & Cluthes
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Tabs className="event-tabs">
                <div className="row">
                  <div className="col-lg-12 col-md-9">
                    <TabPanel>
                      <FirstDay />
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default EventSchedules;
