import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        shortText={""}
        bgImg={"/images/work-details-2"}
      />

      <div className="ptb-120">
        <div className="container">
          <div className="main-textarea">
            <p>
            Welcome to <strong>UNIQUE DC MOTOR BRAKE</strong>. We’re dedicated
              to providing you the very best product. Founded in{" "}
              <strong>[2019] by [UNIQUE DC MOTOR BRAKE]</strong>,{" "}
              <strong>UNIQUE DC MOTOR BRAKE</strong> has come a long way from
              its beginnings. First started out, his passion for quality
              products drove them to start their own business. We hope you
              satisfy with our products as much as we enjoy offering them to
              you. If you have any questions or comments, please don’t hesitate
              to <strong>Contact us</strong>. Sincerely, <strong>UNIQUE DC MOTOR BRAKE</strong>"
              <strong>UNIQUE DC MOTOR BRAKE</strong> group founded in{" "}
              <strong>2019</strong>, positioned itself as the pioneer of
              innovation in designing, development & manufacturing of industrial
              Electromagnetic Brakes and cluthes , combinations and allied
              products With five thousand (5000) square meter of production area
              capable of producing 2400 units per year, we are serving to
              various segments of domestic and overseas industries and has lot
              of renowned brands as our customers.{" "}
              <strong>UNIQUE DC MOTOR BRAKE</strong> is one of the most
              recognized brands of AC & DC Brakes in India having our
              manufacturing plants – at <strong>Udaipur, (Rajasthan)</strong>. We have compelling
              presence in AC & DC Brakes all over India. We have registered
              noticeable growth in sales year over years. With our Head-Office
              at <strong>Udaipur</strong>. we have a large chain of sales network. To give
              required support to our customers.{" "}
              <strong>UNIQUE DC MOTOR BRAKE</strong> is specialized in
              designing, developing and manufacturing high
              performance,configurable standard products right from clutches and
              brakes, from simple to complex applications, with wide operational
              scope like Navy Deck Machinery to highly sophisticated Rocket
              Launchers, Tyre Industry, Cement Plants, Wind Turbines, Textile
              machines, Printing Machines, Marble Cutting Machines, Stone
              polishing Machines, Steel Plant Machineries, Packaging Machines,
              Pick & Place Robots, Conveyors, Paper Machines, Coil Winding
              Machines, Material Handling Equipments, Cranes & Hoistsand many
              more. We have dedicated department which is engaged in further
              development of series of products and optimization of customized
              solutions based on experience and the latest findings from
              applications. <strong>UNIQUE DC MOTOR BRAKE</strong> has a system
              of Global purchasing of components and sub-assemblies with Modern
              Manufacturing and warehouse technology, as well as CNC & VMC
              machinery Installed thus offering perfect conditions for fast
              assembly of different products with quick delivery times. We
              source out best of raw material from India and abroad.{" "}
              <strong>UNIQUE DC MOTOR BRAKE</strong>
              Brand is well known for its customer satisfaction and this could
              only be possible through our strong technical experts who are
              continuously achieving their best in terms of accuracy & quality
              standards thus making us a major player in the industry circle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
