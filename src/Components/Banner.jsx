import React from "react";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        height: "60vh", // Reduced height
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(https://liu.se/dfsmedia/dd35e243dfb7406993c1815aaf88a675/75912-50066/webbanner-cancer-liu-ro-27a9447a-2023)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex", // Flexbox to center content
        justifyContent: "center", // Horizontally centered
        alignItems: "center", // Vertically centered
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Lung Cancer Data</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
