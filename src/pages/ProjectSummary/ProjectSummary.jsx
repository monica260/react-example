import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import "./ProjectSummary.css";
import ProjectSummaryTable from "../../components/ProjectSummaryTable/ProjectSummaryTable";

import Filters from "../../components/Filters/Filters";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";

import Tour from "../../components/Tour/Tour";
const columns = [{
  dataField: 'id',
  text: 'Project ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Project Name',
  //formatter: (cell, row) => <a href={`/${cell}`}> {cell} </a>,
  formatter: (cell, row) => <a href="/execution"> {cell} </a>
}, {
  dataField: 'lastrun',
  text: 'Last Run'
}, {
  dataField: 'region',
  text: 'Regions'
}, {
  dataField: 'projectowner',
  text: 'Project Owner'
}, {
  dataField: 'datasource',
  text: 'Data Source'
}, {
  dataField: 'status',
  text: 'Status'
}];

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 5,
  lastPageText: '>>',
  firstPageText: '<<',
  nextPageText: '>',
  prePageText: '<',
  showTotal: true,
  alwaysShowAllBtns: true,
  onPageChange: function (page, sizePerPage) {
    console.log('page', page);
    console.log('sizePerPage', sizePerPage);
  },
  onSizePerPageChange: function (page, sizePerPage) {
    console.log('page', page);
    console.log('sizePerPage', sizePerPage);
  }
});
// function projectSummary() {
  const ProjectSummary = () =>{
    const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://mocki.io/v1/9c49b976-cf24-4588-b963-742f15d57273"
      )
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);


  return (
    <div className="mx-auto max-width p-3">
      <Tour/>
  <Title name="Project Summary" text="Project Summary icon is displayed"/>
  <div className="summary-row pt-3">
      <div className="filter-section text-left"><Filters /></div>
<div className="table-section"><div className="border-bottom border-warning mb-4 pb-3 text-left">
  


  </div> <ProjectSummaryTable data={data} columns={columns} pagination={pagination}/></div>
</div>
  
  </div>
  );
}

export default ProjectSummary;