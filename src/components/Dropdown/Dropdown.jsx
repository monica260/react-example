import React, { useState } from 'react';
import "./Dropdown.css";
import Select from 'react-select';

function Dropdown(props) {

  let [selectedOption, setSelectedOption] = useState({});   
console.log(selectedOption.value)
    return (
      <div>
      <Select
      defaultValue={props.text}
      onChange={setSelectedOption}
      options={props.options}
      placeholder={props.text}
    />
   
    </div>
    );
  }
  
  export default Dropdown;
  