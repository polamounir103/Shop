import React from "react";
import { Bars } from "react-loader-spinner";


function Loading() {
  return (
    <div className="loader-conttainer flex flex-col gap-2 justify-center items-center min-h-96 ">
    <p>Loading... </p>
      <Bars
        height="80"
        width="80"
        color="#121212"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loading;
