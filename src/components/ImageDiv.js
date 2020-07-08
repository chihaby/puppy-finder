import React from "react";

export const ImageDiv = (props) => (
  <div>
    {props.searchResult.map((oneSearch) => {
      return (
        <img
          src={oneSearch}
          alt={""}
          style={{
            height: "300px",
            width: "300px",
            margin: "10px 20px",
            borderRadius: "20%",
          }}
        />
      );
    })}
  </div>
);
