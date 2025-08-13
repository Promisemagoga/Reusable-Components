import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import Showcase from "./components/Showcase/Showcase";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HighlightCard
        title="Ge l out arrows well slryler it pleces."
        description="Authorised furniture collections, curated with elegance and charm for your perfect interior."
        image="/assets/pic2.avif"
        buttonText="Learn More"
      />
      {/* Uncomment and use the Section component instead of native section */}
      <Section
        title="Peluct oend now"
        description="Elevate your living spaces with designs that blend beauty and utility."
        image="/assets/pic3.jpeg"
        reverse={true}
      />
      <Showcase />
      <Footer />
    </>
  );
}

export default App;
