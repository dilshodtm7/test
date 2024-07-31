import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/explore/random/${mediaType}`);

    return (
        <Carousel
            title="Tafsiyalar"
            data={data}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;