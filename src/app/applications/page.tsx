import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersThree from "@/components/Speakers/SpeakersThree";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Applications"
        homePageUrl="/"
        homePageText="Home"
        activePageText="applications"
        bgImg="/images/main-bg5.jpg"
        shortText="Short description here"
      />

      <SpeakersThree />

      <Footer />
    </>
  );
}
