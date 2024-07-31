import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, category, loadings }) => {
  if (loadings === false) {
    const { data, loading, error } = useFetch(
      `/explore/${mediaType}/category/${category}`
    );

    const titles =
      mediaType === "movie"
        ? "Oxshash filmlar"
        : mediaType === "serials"
        ? "Oxshash seriallar"
        : "Oxshash multfilmlar";
    return (
      <Carousel
        title={titles}
        data={data?.slice(0, 5)}
        loading={loading}
        endpoint={mediaType}
      />
    );
  }
  return  ;
};

export default Similar;
