import React from "react";
import { useParams } from "react-router-dom";


import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import Videos from "./videosSection/Videos";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading, error } = useFetch(`/explore/${mediaType}/${id}`);


    return (
        <div>
            <DetailsBanner />
            <Cast  data={data} loading={loading} />
            <Videos videos={data?.[0]} loading={loading} />
            <Similar mediaType={mediaType} category={data?.[0].category} loadings={loading} />
            <Recommendation mediaType={mediaType} id={id} /> 
        </div>
    );
};

export default Details;