import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
// import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.smallimg ? data.smallimg : data.image;
  return (
    <>
      {data.title ? (
        <div
          className="movieCard"
          onClick={() =>
            navigate(`/${data.media_type || mediaType}/${data.id}`)
          }
        >
          <div className="posterBlock">
            <Img className="posterImg" src={posterUrl} />

            <React.Fragment>
              <CircleRating rating={data.popularity} />
              <Genres data={data} />
            </React.Fragment>
          </div>
          <div className="textBlock">
            <span className="title">{data.title}</span>

            <span className="date">
              {dayjs(data.date).format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      ) : (
        <div
          className="movieCard"
          onClick={() => navigate(`/getcategory/${data.id}`)}
        >
          <div className="posterBlock">
            <Img className="posterImg" src={posterUrl} />

            <React.Fragment>
              {data.popularity ? (
                <CircleRating popularity={data.popularity} />
              ) : null}

              {data.country ? <Genres data={data} /> : null}
            </React.Fragment>
          </div>
          <div className="textBlock">
            <span className="title">{data.title || data.name}</span>
            {data.date ? (
              <span className="date">
                {dayjs(data.date).format("MMM D, YYYY")}
              </span>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
