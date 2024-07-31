import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data } = useFetch(`/explore/latest`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">PREMYERALAR</span>
      </ContentWrapper>
      <Carousel data={data} endpoint={endpoint} />
    </div>
  );
};

export default Trending;
