import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTab";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/explore/popular`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">TARJIMA KINOLAR</span>
      </ContentWrapper>
      <Carousel data={data} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
