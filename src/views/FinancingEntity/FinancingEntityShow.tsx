import React from "react";
import { useParams } from 'react-router-dom';
function FinancingEntityShow() {
    const urlParams = useParams();
    console.log(urlParams);
  return (
  <div>Financing Entity Show</div>
  );
}

export default FinancingEntityShow;
