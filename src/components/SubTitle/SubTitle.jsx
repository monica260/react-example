import React from "react";

function SubTitle(props) {
  return (

    <div className="title text-left pb-3 col-md-8 offset-md-2">
        <h4 className="d-inline pr-5">Project Name: {props.name}</h4><h4 className="d-inline">Region: {props.region}</h4>
    </div>
  );
}

export default SubTitle;
