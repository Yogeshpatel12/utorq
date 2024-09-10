import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeFour/MainBanner";
import Footer from "@/components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Image src="images/mainpage1.png" alt="about" width={1640} height={700} />
      <Image src="images/mainpage2.png" alt="about" width={1640} height={700} />

      <Footer />
    </>
  );
}
