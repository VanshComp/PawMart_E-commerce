import React, { useEffect, useState } from 'react';

export default function Advertisement() {
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    { text1: "Great Deals On Toys |", text2: "| Get Upto 60% off" },
    { text1: "Weekend Mania |", text2: "| For All Pets - 50% off" },
    { text1: "Flavours They'll Savour |", text2: "| Get Upto 40% off" },
    { text1: "Top Picks on 129/-  |", text2: "| Affordable Pet Joy Awaits" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 9000); 
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="Advertisements" style={{backgroundColor: "#43978D"}}>
    <div className="Advertisement">
      <p>{ads[currentAd].text1}</p>
      <p>{ads[currentAd].text2}</p>
    </div>
    </div>
  );
}
