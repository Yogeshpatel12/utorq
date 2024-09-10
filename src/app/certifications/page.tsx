import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersTwo from "@/components/Speakers/SpeakersTwo";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Certifications"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Certifications"
        bgImg="/images/main-bg5.jpg"
      />

      <SpeakersTwo />

      <Footer />
    </>
  );
}
