import React from "react";
import Options from "./Options";
import Quotes from "./Quotes";
import Slider from "./Slider";
const Home = () => {
  return (
    <main className="pb-9 md:pb-9">
      <Slider />
      <Options />
      <Quotes />
    </main>
  );
};

export default Home;
