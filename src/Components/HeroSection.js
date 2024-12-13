import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const currentTheme = AppTheme[theme];

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <span>{themeMode === "light" ? "Turn Off" : "Lights on please."}</span>
            <h1>Context API Theme Toggler</h1>
            <p>This is a nice paragraph</p>
            <button style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#fff",
                border: `${currentTheme.border}`
            }} onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }}>Click Me</button>
        </div>
    )
}

export default HeroSection;
