import React, { useEffect, useState } from "react";

const useFilterToggle = () => {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filterRow = document.querySelector(".ag-header-row-column-filter");
    const header = document.querySelector(".ag-header");

    if (!filterRow) return;

    if (!showFilters) {
      console.log("12");
      filterRow.style.display = "none";
    } else {
      filterRow.style.display = "block";
    }

    if (!header) return;

    if (!showFilters) {
      header.style.height = "49px";
      header.style.minHeight = "49px";
    } else {
      header.style.height = "97px";
      header.style.minHeight = "97px";
    }
  });

  return [showFilters, setShowFilters];
};

export default useFilterToggle;