import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

import useFetch from "../../hooks/useFetch";

const SearchResult = () => {
  const { query } = useParams();
  const { data, loading } = useFetch(`/explore/search?params=${query}`);

  return (
    <div className="searchResultsPage">
      {!loading && (
        <ContentWrapper>
          {data?.length > 0 ? (
            <>
              <div className="pageTitle">
                {` '${query}' Bo'yicha qidiruv ${
                  data?.length > 1 ? "natijalari" : "natijasi"
                } `}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.length || []}
              >
                {data.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Kechirasiz, Film topilmadi!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
