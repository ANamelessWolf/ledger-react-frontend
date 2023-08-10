import React from "react";
import { useParams } from 'react-router-dom';
function FinancingEntityEdit() {
    const urlParams = useParams();
    console.log(urlParams);
  return (
  <div>Financing Entity Edit</div>
  );
}

export default FinancingEntityEdit;