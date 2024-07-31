import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";

const TopCartoon = () => {
  const [endpoint, setEndpoint] = useState("cartoon");

  const { data, loading } = useFetch(`/explore/trending/${endpoint}`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Multfilmlar</span>
      </ContentWrapper>
      <Carousel data={data} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopCartoon;
