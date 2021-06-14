import React from 'react';
import './Filters.css';
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

const projectnameoptions = [
  { value: 'VAT Analytics', label: 'VAT Analytics' },
  { value: 'Tax optimizer', label: 'Tax optimizer' },
  { value: 'Collection Engine', label: 'Collection Engine' }
];
const projectregionoptions = [
  { value: 'NAZ', label: 'NAZ' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'US', label: 'US' }
];
const projectstatusoptions = [
  { value: 'Active', label: 'Active' },
  { value: 'InActive', label: 'InActive' },
  { value: 'Pending', label: 'Pending' }
];
const projectowneroptions = [
  { value: 'Ankit', label: 'Ankit' },
  { value: 'Nitin', label: 'Nitin' },
  { value: 'Naveen', label: 'Naveen' }
];
function Filters() {
  
  // const selectInputRef = useRef();
  // const selectInputRef1 = useRef();
  // const selectInputRef2 = useRef();
  // const selectInputRef3 = useRef();
  // const onClear = () => {
  //   selectInputRef.current.select.clearValue();
  //   selectInputRef1.current.select.clearValue();
  //   selectInputRef2.current.select.clearValue();
  //   selectInputRef3.current.select.clearValue();
  // };

  return (
    <div className="Filters">
   <h3>Filters</h3> <button className="clearbutton pb-3 mb-3" >Clear All</button>
   <div className="mt-3">Project Name</div>
   <Dropdown options={projectnameoptions} text="Select Project Name" />
   <div className="mt-3">Regions</div>
   <Dropdown options={projectregionoptions} text="Select Project Region"/>
   <div className="mt-3">Status</div>
   <Dropdown options={projectstatusoptions} text="Select Project Status"/>
   <div className="mt-3">Project Owner</div>
   <Dropdown options={projectowneroptions} text="Select Project Owner"/>
   {/* <Button value="Apply"/> */}
    </div>
  );
}

export default Filters;
