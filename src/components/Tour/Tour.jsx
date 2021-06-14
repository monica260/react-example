import React from "react";
import Joyride from "react-joyride";

export default function Tour() {
  return (
    <Joyride
      run={true}
      callback={() => null}
      continuous
      showProgress
      showSkipButton
    //   styles={{
    //     options: {
    //        // modal arrow and background color
    //        arrowColor: "#b11f24",
    //        backgroundColor: "#eee",
    //        // page overlay color
    //        overlayColor: "rgba(79, 26, 0, 0.4)",
    //        //button color
    //        primaryColor: "mediumaquamarine",
    //        //text color
    //        textColor: "#b11f24",

    //        //width of modal
    //        width: 500,
    //        //zindex of modal
    //        zIndex: 1000
    //    }
    // }}
     styles={{
      buttonNext: {
        backgroundColor: "#b11f24"
      },
      buttonBack: {
        color: "#b11f24"
      },
      buttonSkip:{
        backgroundColor: "#b11f24",
        color:"#fff",
        borderRadius: 4,
padding:8
      }
    }}
      steps={[
        {
          content:
            "Double click or press enter on this cell to open the DropDownEditor",
          target: "#basic-navbar-nav a:first-child",
          disableBeacon: true
        },
        // {
        //   content:
        //     "Double click or press enter on this cell to open the DropDownEditor",
        //   target: "#basic-navbar-nav a:nth-child(2)",
        //   disableBeacon: true
        // },
        // {
        //   content:
        //     "Double click or press enter on this cell to open the DropDownEditor",
        //   target: "#basic-navbar-nav a:last-child",
        //   disableBeacon: true
        // },
        // {
        //   content:
        //     "Double click or press enter on this cell to open the DropDownEditor",
        //   target: "#basic-navbar-nav .ml-auto a",
        //   disableBeacon: true
        // },
        // {
        //   content:
        //     "Double click or press enter on this cell to open the DropDownEditor",
        //   target: ".table-section div img",
        //   disableBeacon: true
        // },
        {
          content:
            "Double click or press enter on this cell to open the DropDownEditor",
          target: ".react-bootstrap-table tr a",
          disableBeacon: true
        }
        // },
        // {
        //   content:
        //     "Double click or press enter on this cell to open the DropDownEditor",
        //   target: ".filter-section",
        //   disableBeacon: true
        // },
        // {
        //     content:
        //       "Double click or press enter on this cell to open the DropDownEditor",
        //     target: ".table-section",
        //     disableBeacon: true
        //   }
      ]}
    />
  );
}
