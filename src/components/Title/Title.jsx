import React from "react";
import "./Title.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Title({name,text}) {
   const renderTooltip = props => (
    <Tooltip {...props}>{text}</Tooltip>
  );

  return (

    <div className="title mx-auto text-left">
        <h3 className="d-inline">{name}</h3>
     
      
    <hr/></div>
  );
}

export default Title;
