import React from "react";
import {useState, useEffect} from "react"
import BoxerCard from './BoxerCard'
import { useParams, withRouter } from 'react-router-dom'
const BoxerAccountPage = ({ match }) => {
  // const { poop } = useParams();
  // const [poop, setPoop] = useState('fuck')
  console.log({ match })

  return (
    <div>
      <BoxerCard id={match.params.id}></BoxerCard>
      
    </div>
  );
}

export default withRouter(BoxerAccountPage);
