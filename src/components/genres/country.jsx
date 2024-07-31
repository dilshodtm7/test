import React from "react";
import useFetch from "../../hooks/useFetch";

import "./style.scss";

const Country = ({ category, mediaType }) => {
  if (category) {
    const { data, loading } = useFetch(`/explore/category/${category}`);
    return (
      <div className="genres">
        <div key={data} className="genre">
          {data?.[0].name}
        </div>
      </div>
    );
  }
};

export default Country;
