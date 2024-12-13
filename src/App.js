import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const themehook = useState("light");

  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;


