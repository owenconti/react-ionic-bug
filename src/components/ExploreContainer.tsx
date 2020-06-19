import React, { useState } from "react";
import "./ExploreContainer.css";
import Card from "./Card";

const ExploreContainer = ({ color }: any) => {
  const [elems, setElems] = useState<any>([]);

  if (elems.length === 0) {
    const arr = [];

    for (let i = 0; i < 400; i++) {
      arr.push(<Card key={i} color={color} title={"Card " + i} />);
    }

    setElems(arr);
  }

  return <div className="container">{elems}</div>;
};

export default ExploreContainer;
