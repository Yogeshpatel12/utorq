import React from "react";
import Link from "next/link";

interface Props {
  pageTitle: string;
  shortText: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
  bgImg: string;
}

const PageBanner: React.FC<Props> = ({
  pageTitle,
  shortText,
  homePageUrl,
  homePageText,
  activePageText,
  bgImg,
}) => {
  return (
    <>
      <div className='page-title-area' style={{ 
        backgroundImage: `url(${bgImg})`
      }}>
        <div className="container">
          <div className="page-title-content">
            <h1>{pageTitle}</h1>
            <span>{shortText}</span>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
