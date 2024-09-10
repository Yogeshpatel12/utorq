"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper 
        navigation={false} 
        autoHeight={false}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]} 
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/1.jpg)`,
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // height: '860px',
              // width: '100%',
            }}
          >
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/2.jpg)`,
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // height: '925px',
              // width: '100%',
            }}
          >
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/3.jpg)`,
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // height: '925px',
              // width: '100%',
            }}
          >
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/4.jpg)`,
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // height: '925px',
              // width: '100%',
            }}
          >
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/5.jpg)`,
              // backgroundSize: 'contain',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // height: '925px',
              // width: '100%',
            }}
          >
            
          </div>
        </SwiperSlide>
        

        {/* <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://unitorq.in/img/slide-2.jpg)`,
            }}
          >
    
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://unitorq.in/img/slide-3.jpg)`,
            }}
          >
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default MainBanner;
