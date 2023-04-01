import React from "react";
import BannerModule from "./Banner.module.css";
import Form from "./Form";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className={BannerModule.banner}>
      <div className={BannerModule.p1}>
        <p>12K Jobs in 200 countries</p>
      </div>
      {/* <SearchBar /> */}
      <Form />
      <div className={BannerModule.p}>
        <p>Popular Searches: Finance Manager Business Manager</p>
      </div>
    </div>
  );
}

export default Banner;
