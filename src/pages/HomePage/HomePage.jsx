import React from "react";
import "./HomePage.css";
import Tabs from "../../components/Tabs/Tabs";
import dummy from "../../images/dummy.PNG";
// import Button from "../../components/Button/Button";
const HomePage = () => {
  return (
      <React.Fragment>
  <div className="Homepage">

      <h2>Welcome to Operation Data Analytics Platform<br/>(ODAP)</h2>
    {/* <Button value="Get Started"/> */}
    <button className="btn btn-warning m-3"><a href="/project" class="text-decoration-none">Get started</a></button>
      </div>
      <div className="login-image d-flex justify-content-center p-4">
    
       <div className="m-3"></div>
       <div className="m-3"></div>
       <div className="m-3"></div>
    
   </div>
      <div className="tab-content pb-5">
      <h3 className="mb-5 mt-5 font-weight-bold">Brief About All Our Projects on the Website</h3>
      <Tabs/>
   </div>
   <div className="help-section mt-5">
      <h3 className="p-5">Need help with Anything? We're here to help you !</h3>
      <div className="image-section">
         <div>
            <img class="circular-square" src={dummy} />
            <p className="mt-3 m-0">Nitin Sharma</p>
            <p className="m-0">Product Manager</p>
         </div>
         <img class="circular-square" src={dummy} />
         <img class="circular-square" src={dummy} />
         <img class="circular-square" src={dummy} />
      </div>
   </div>
   
   </React.Fragment>
  );
}

export default HomePage;