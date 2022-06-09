import React from "react";
import BoxerCard from "./BoxerCard";
import { withRouter } from "react-router-dom";

const BoxerAccountPage = ({ match }) => {
  console.log({ match });

  return (
    <div>
      <BoxerCard key={match.params.id} id={match.params.id} />
    </div>
  );
};

export default withRouter(BoxerAccountPage);
