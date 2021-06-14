import React from "react";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./ProjectSummaryTable.css";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import paginationFactory from "react-bootstrap-table2-paginator";


function ProjectSummaryTable(props) {
 
        
  return (
     <BootstrapTable  keyField='id' data={props.data } columns={ props.columns }  pagination={props.pagination} filter={props.filter}/> );
}

export default ProjectSummaryTable;