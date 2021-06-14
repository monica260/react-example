import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import Filters from "../../components/Filters/Filters";
import "./ExecutionSummary.css";

 import SubTitle from "../../components/SubTitle/SubTitle";
 import ProjectSummaryTable from "../../components/ProjectSummaryTable/ProjectSummaryTable";
 import axios from "axios";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import { useParams } from "react-router";

import filterFactory, { selectFilter,dateFilter } from 'react-bootstrap-table2-filter';
const selectOptions = {
  active: 'active',
  pending: 'pending',
  done: 'done'
};

const columns = [{
  dataField: 'id',
  text: 'Execution ID'
}, {
  dataField: 'starttime',
  text: 'Start Date',
  // filter: dateFilter()
}, {
  dataField: 'endtime',
  text: 'End Date',
  // filter: dateFilter()
}, {
  dataField: 'duration',
  text: 'Run Duration'
}, {
  dataField: 'status',
  text: 'Status',
  formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions
  })
}, {
  dataField: 'runby',
  text: 'Run By'
}, {
  dataField: 'output',
  text: 'Output'
},{
  dataField: 'dashboard',
  text: 'Dashboard'
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

function ExecutionSummary() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://mocki.io/v1/bdb1a7bb-27e1-4142-8b7c-42ee225aeec6"
      )
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
 const {cell}=useParams() 
  return (
    <div className="mx-auto max-width p-3">
  <Title name="Execution Summary"/>
  <SubTitle name={cell} region="NAZ"/>
  {/* <div className="row"> */}
    {/* <div className="col-md-3"><Filters /></div> */}
    <div className="execution"><div className="execution-filter"><p>Filters</p><button className="clearbutton pb-3 mb-3" >Clear All</button>
   {/* <div className="mt-3 mb-5">Execution ID</div> */}
  
   <div className="mt-3 mb-5">Start Date</div>
  
   <div className="mt-3 mb-5">End Date</div>
 
   <div className="mt-3 mb-5">Status</div>
  </div>
    <div className="execution-table"><div className="border-bottom border-warning mb-4 pb-3">
 
  </div> <ProjectSummaryTable data={data} columns={columns} pagination={pagination} filter={ filterFactory() }/> </div>
    </div>
  
 </div>
  );
}

export default ExecutionSummary;