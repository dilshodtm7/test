import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { parseISO, format } from "date-fns";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Country from "../../../components/genres/country";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/explore/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}soat${minutes > 0 ? ` ${minutes}daqiqa` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={data[0].bigimg} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data[0].smallimg ? (
                      <Img className="posterImg" src={data[0].smallimg} />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data[0].title} (${dayjs(data[0].date).format(
                        "YYYY"
                      )})`}
                    </div>
                    <div className="subtitle">{data[0].language}</div>

                    <Country
                      category={data[0].category}
                      mediaType={data[0].media_type}
                    />

                    <div className="row">
                      <CircleRating rating={data[0].popularity.toFixed(1)} />
                    </div>

                    <div className="overview">
                      <div className="heading">Film haqida ma'lumot</div>
                      <div className="description"></div>
                    </div>

                    <div className="info">
                      {data[0] && (
                        <div className="infoItem">
                          <span className="text bold">YIL: </span>
                          <span className="text">
                            {dayjs(data[0].date).format(" DD MMM, YYYY")}
                          </span>
                        </div>
                      )}
                      {data && (
                        <div className="infoItem">
                          <span className="text bold">DAVOMIYLIGI: </span>
                          <span className="text">
                            {toHoursAndMinutes(data[0].runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {data[0].producer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">{data[0].producer}</span>
                      </div>
                    )}
                    {data[0].country?.length > 0 && (
                      <div className="info">
                        <span className="text bold">DAVLAT: </span>
                        <span className="text">{data[0].country}</span>
                      </div>
                    )}
                    {data[0].upcomingdate?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Joylandi: </span>
                        <span className="text">
                          {dayjs(data[0].upcomingdate).format(" DD MMM, YYYY")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
