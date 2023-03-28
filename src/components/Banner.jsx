import React from "react";
import BannerModule from "./Banner.module.css";
import SearchBar from "./SearchBar";

function Banner() {
  return <div className={BannerModule.banner}>
    <SearchBar />
  </div>;
}

export default Banner;
