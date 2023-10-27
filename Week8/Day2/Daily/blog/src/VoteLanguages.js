import React from "react";
// import { increment } from "./App";

const VoteLanguages = (props) => {
    const {name,votes,counter}=props;
 console.log(props);
// counter(name)


  return (
    <div className="block">
       
      <p>{votes}</p>
      <p>{name}</p>
      <button type="button" onClick={()=>counter(name)}>
        Click Here
      </button>
    </div>
  );
};

export default VoteLanguages;
