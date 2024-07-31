import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const Explore = () => {
  const { mediaType } = useParams();

  const { data, loading } = useFetch(`/explore/${mediaType}`);

  const getTitle = () => {
    if (mediaType === "movie") {
      return "Kinolar";
    } else if (mediaType === "serials") {
      return "Seriallar";
    } else if (mediaType === "category") {
      return "Janrlar";
    } else {
      return "Multfilmlar";
    }
  };

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">{getTitle()}</div>
          <div className="filters"></div>
        </div>
        {loading ? (
          <span className="resultNotFound">Kutib turing!</span>
        ) : data?.length ? (
          <InfiniteScroll
            className="content"
            dataLength={data.length}
            hasMore={true}
            loader={<div className="spinner"></div>}
          >
            {data?.map((item) => (
              <MovieCard key={item.id} data={item} mediaType={mediaType} />
            ))}
          </InfiniteScroll>
        ) : (
          <span className="resultNotFound">MALUMOT TOPILMADI!</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
