import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const Explore = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/explore/getcategory/${id}`);

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">{data?.[0]?.name}</div>
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
              <MovieCard
                key={item.id}
                data={item}
                mediaType={item.media_type}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <span className="resultNotFound">Sorry, Results not found!</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
