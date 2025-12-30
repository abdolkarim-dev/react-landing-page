import "./HeroSection.css";
import BoxSection from "./BoxSection";
export default function HeroSection() {
  return (
    <div>
      <section className="section">
        <div className="title-hero ">
          <h1> راه حل های قدرتمند دیجیتال با </h1>
          <h1 className="kasuka-style"> Kasuka </h1>
          <h3> ما تیمی از بازاریابان با استعداد دیجیتال هستیم </h3>
        </div>
        <div className="box-style-flex">
          <BoxSection />
          <BoxSection />
          <BoxSection />
          <BoxSection />
          <BoxSection />
        </div>
      </section>
    </div>
  );
}
