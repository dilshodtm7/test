import React from "react";

import "./style.scss";

const Country = ({ data }) => {
  return (
    <div className="genres">
      <div key={data.id} className="genre">
        {data.country}
      </div>
    </div>
  );
};

export default Country;
