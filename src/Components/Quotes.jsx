import React, { useEffect, useRef, useState } from "react";
import { quotations } from "../Data";

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  // const [fadeAnimationKey, setFadeAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((previousIndex) => {
        if (previousIndex === quotations.length - 1) {
          return 0;
        }

        return previousIndex + 1;
      });
      // setFadeAnimationKey((prevState) => prevState + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const newArray = quotations.find((q) => q.id === quoteIndex);
  return (
    <div className="quote flex justify-center  border border-y-blue-300 md:py-24 py-9 px-4 shadow-blue-300 shadow-2xl items-center bg-white  overflow-hidden overflow-y-auto max-h-[300px] h-[300px]">
      <p
        key={quoteIndex}
        className="text-xl text-black text-center transition-transform duration-100 animate-fade-x-in"
      >
        <span>"</span>
        {newArray && newArray.text}
        <span>"</span>
      </p>
    </div>
  );
};

export default Quotes;
