import React, { useEffect, useMemo } from "react";
import { COLUMNS_BY_ITEM, COLUMNS_BY_SHOP } from "../columns.js";
import { useTable, usePagination, useSortBy } from "react-table";
import "../styles/table.css";
import cross from "../assets/icons/cross.png";
import check from "../assets/icons/check.png";
import { useGlobalFilter } from "react-table/dist/react-table.development.js";
import TablePagination from "./TablePagination.jsx";

import arrow from "../assets/icons/arrow-sort.png";
import smallArrow from "../assets/icons/left-arrow.png";

import classNames from "classnames";
import useOutsidePopupClick from "../hooks/useOutsidePopupClick.jsx";

const Table = ({
  tableData,
  type,
  option,
  searchValue,
  isSorting,
  setAvgSLA,
}) => {
  const columns = useMemo(
    () => (type === "By shop" ? COLUMNS_BY_SHOP : COLUMNS_BY_ITEM),
    [type]
  );

  const data = useMemo(() => {
    return tableData.filter((product) => {
      if (type === "By item") {
        return product["Product Category"] === option;
      }

      if (type === "By shop") {
        return product["Address"] === option;
      }
    });
  }, [tableData, option]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    prepareRow,
    rows,
    ...x
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 7 },
      disableSortBy: !isSorting,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;

  useEffect(() => {
    if (!rows || !rows.length) return;
    const sum = rows.reduce(
      (sum, row, i) => sum + Number(row.values["Service level"]),
      0
    );

    if (rows.length) {
      const avg = Math.round((sum * 100) / rows.length);
      setAvgSLA(avg);
    }
  }, [rows]);

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);

  useOutsidePopupClick();
  return (
    <>
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    onClick={(e) => {
                      document
                        .querySelector(".open-popup")
                        ?.classList.remove("open-popup");

                      e.currentTarget.classList.toggle("open-popup");
                    }}
                    style={{ pointerEvents: !isSorting ? "none" : "" }}
                  >
                    <img
                      src={arrow}
                      width={13}
                      className={classNames({
                        hide: !isSorting || !column.canSort,
                        sorted: column.isSorted,
                        desc: column.isSortedDesc,
                        sortImg: true,
                      })}
                    />
                    {column.render("Header")}

                    <div
                      className={classNames({
                        hide: !isSorting || !column.canSort,
                        sortPopup: true,
                      })}
                    >
                      <div
                        className={classNames({
                          active: column.isSortedDesc && column.isSorted,
                          "th-popup-col": true,
                        })}
                        onClick={() => column.toggleSortBy(true)}
                      >
                        {column.Header === "In Time" ? (
                          <>
                            In time
                            <img className="img-in-time" src={check} />
                          </>
                        ) : (
                          <>
                            Largest
                            <img src={smallArrow} />
                          </>
                        )}
                      </div>
                      <div
                        className={classNames({
                          active: !column.isSortedDesc && column.isSorted,
                          "th-popup-col": true,
                        })}
                        onClick={() => column.toggleSortBy(false)}
                      >
                        {column.Header === "In Time" ? (
                          <>
                            Late
                            <img className="img-in-time" src={cross} />
                          </>
                        ) : (
                          <>
                            Smallest
                            <img src={smallArrow} />
                          </>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    let td = cell.render("Cell");

                    // In service level
                    if (cell.column.Header === "Service Level") {
                      td = Math.round(Number(cell.value) * 100) + "%";
                    }

                    // Amount
                    if (cell.column.Header === "Amount") {
                      td = cell.value + " GEL";
                    }

                    // In time
                    if (cell.column.Header === "In Time") {
                      td =
                        cell.value === "No" ? (
                          <img src={cross} />
                        ) : (
                          <img src={check} />
                        );
                    }

                    return <td {...cell.getCellProps()}>{td}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <TablePagination
        gotoPage={gotoPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
};

export default Table;
