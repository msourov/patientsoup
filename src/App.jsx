import Hero from "./components/hero";
import Items from "./components/items";
import Pricing from "./components/pricing";
import WhyThis from "./components/WhyThis";
import Faq from "./components/faq";
import AppProvider from "./context";
import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <Hero />
        <Items />
        <WhyThis />
        <Pricing />
        <Faq />
      </AppProvider>
    </>
  );
}

export default App;
