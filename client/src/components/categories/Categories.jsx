import React from "react";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Home from "../home/Home";
import Subhome from "../home/Subgome";
import Slideruse from "../slider/Silderuse";

const Categories = () => {
  return (
    <div>
      <DropdownMenu />
      <Slideruse />
      <Subhome />
    </div>
  );
};

export default Categories;
