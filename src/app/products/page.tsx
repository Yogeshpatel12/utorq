import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import EventSchedules from "@/components/Products";
import PageBanner from "@/components/Common/PageBanner";


export default function Product() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Products"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="ElectroMagnatic Brakes"
        bgImg="https://unitorq.in/img/slide-1.jpg"
      />
   <EventSchedules/>
   
   
      <Footer />
    </>
  );
}
