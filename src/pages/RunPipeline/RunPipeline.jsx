import React from "react";
import Title from "../../components/Title/Title";
import Filters from "../../components/Filters/Filters";
import "./RunPipeline.css";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
function RunPipeline() {
  return (
    <div className="mx-auto max-width p-3">
    <Title name="Run Pipeline" text="Run Pipeline icon is displayed"/>
    <div className="d-flex justify-content-between">
    <div className="runpipeline-section text-left"><Filters /></div>
    <div className="project-details"><ProjectDetails /></div></div>
    </div>
  );
}

export default RunPipeline;