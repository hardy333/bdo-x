import React, { useState } from "react";

import { useQuery } from "react-query";
import { useMemo } from "react";
import { fetchData } from "../utils/fetchData";
import "../styles/mobile-catalogue-menu.css";
import { BsArrowRightShort } from "react-icons/bs";

const MobileCatalogueMenu = ({ changeAllData, setSubCatId }) => {
  // Selected category, sub category
  const [selectedCategory, setSelectedCategory] = useState("სასუსნავები");
  const [selectedProduct, setSelectedProduct] = useState("ჩიფსი");
  // Search values
  const [categorySearchValue, setCategorySearchValue] = useState("");
  const [subCategorySearchValue, setSubCategorySearchValue] = useState("");

  // ------------------------ //

  const url =
    "https://10.0.0.202:5001/api/ProductCategories?page=1&pageSize=182";

  const { isLoading, error, data } = useQuery("catalogueMenuData", () =>
    fetchData(url)
  );

  const resArr = useMemo(() => {
    if (!data) return;
    const { data: catData } = data;
    const resObj = {};
    const resArr = [];

    catData.forEach((obj) => {
      if (obj.name === "ჩიფსი") {
      }
      if (obj.parentFolder === "") {
        resObj[obj.categoryid] = obj;
        resObj[obj.categoryid].children = [];
      } else {
        if (!resObj[obj.parentFolder]) {
          const parentObj = catData.find(
            (obj) => obj.categoryId === obj.parentFolder
          );
          if (parentObj) {
            resObj[obj.parentFolder] = parentObj;
          }
          if (resObj[obj.parentFolder]) {
            resObj[obj.parentFolder].children = [obj];
          }
        } else {
          resObj[obj.parentFolder].children.push(obj);
        }
      }
    });

    for (let [key, value] of Object.entries(resObj)) {
      resArr.push(value);
    }

    return resArr;
  }, [data]);

  // ------------------------ //

  let arrLeft = [];
  let arrRight = [];

  if (resArr && selectedCategory) {
    resArr
      .find((obj) => obj.name === selectedCategory)
      ?.children.filter((obj) => obj.name.includes(subCategorySearchValue))
      .forEach((obj, index) => {
        if (index % 2 === 0) {
          arrLeft.push(obj);
        } else {
          arrRight.push(obj);
        }
      });
  }

  return (
    <div className="mobile-catalogue-menu">
      <h2>Mobile cat menu</h2>
      {/* Main List */}
      <ul>
        {resArr
          ?.filter((catObj) => catObj.name.includes(categorySearchValue))
          .map((catObj, i) => (
            <li
              className={`category-li ${
                selectedCategory === catObj.name ? "active" : ""
              }`}
              key={i}
            >
              <span className="category-name" data-value={catObj.name}>
                {catObj.name}
              </span>
              <span className="category-arrow">
                <BsArrowRightShort />
              </span>
            </li>
          ))}
      </ul>

      {/* Sub Category */}
      <div className="sub-category-container">
        <ul className="left">
          {arrLeft.map((subCatObj, index) => {
            return (
              <li
                onClick={(e) => handleProductClick(e, subCatObj.name)}
                key={subCatObj.name + index}
                style={{
                  color: subCatObj.name === selectedProduct ? "#6E0FF5" : "",
                }}
              >
                {subCatObj.name}
              </li>
            );
          })}
        </ul>
        <ul className="right">
          {arrRight.map((subCatObj, index) => {
            return (
              <li
                onClick={(e) => handleProductClick(e, subCatObj.name)}
                key={subCatObj.name + index}
                data-hello="Hello"
                style={{
                  color: subCatObj.name === selectedProduct ? "#6E0FF5" : "",
                }}
              >
                {subCatObj.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileCatalogueMenu;