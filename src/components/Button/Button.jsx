import "./Button.css";
function Button(props) {
    return (
      <button type="button" className="btn btn-warning mt-5">{props.value}</button>

    );
  }
  
  export default Button;
  