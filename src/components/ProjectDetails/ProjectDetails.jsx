import React from 'react';


function ProjectDetails() {

  
    return (
      <div className="text-left p-3">
     <h1 className="pb-3">Project Details</h1>
     <p><span>Project </span>:<span></span></p>
     <p><span>Last Successful Run </span>:<span></span></p>
     <p><span>Data Source </span>:<span></span></p>
     <p><span>Average Run Time </span>:<span></span></p>
     <p><ul>Files Needed :</ul><li>Customer</li><li>Skew</li><li>Invoice</li></p>
     <p><span>File Format </span>:<span></span></p>
     <p><a href="#">Click Here </a><span>for sample files</span></p>
     <p><span>Note </span>:<span>Please check sample files for the fields required and the sequence of fields needed</span></p>
     <p><a href="#">Click Here </a><span>for detailed documentation to run the pipeline</span></p>
    </div>
    );
  }
  
  export default ProjectDetails;
  