import React from "react";
import "./comp.css";
const Comp = () => {
    

   

    function checkPrime(n){
        if(n<2) return false
        for(let i=2; i<n-1; i++){
            if(n%i === 0){
                return false
            }
        }
        return true
    }


  return (
   <div className="main">
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>
     <div className="container">
        {Array(32)
          .fill("")
          .map((ele, idx) => {
            return (
              <div
                style={{
                  height: "20%",
                  width: "11%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color:"white",
                  backgroundColor:checkPrime(idx)?"#fd5e53" : idx%2===0? "#21bf73" : "#fddb3a",
                }}
              >
                {idx}
              </div>
            );
          })}
      </div>
   </div>
  );
};

export default Comp;
