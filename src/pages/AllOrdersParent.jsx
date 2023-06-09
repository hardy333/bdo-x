import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../styles/ag-table-scrollbar.css";

import { AgGridReact } from "ag-grid-react";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// css
import "../styles/all-orders.css";
import "../styles/global-filter-input.css";
import "../styles/all-orders-parent.css";

const pageSizes = [5, 10, 15, 20, 25, 30];

// css
import "../styles/ag-grid.css";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import CustomHeaderCell from "../components/CustomHeaderCell";
import CustomInput from "../components/CustomInput";
import useRemoveId from "../components/useRemoveId";
import { useQuery } from "react-query";
import TableSettings from "../components/TableSettings";
import useOrdersNavigate from "../hooks/useOrdersNavigate";
import allOrdersParentDefs, {
  allOrdersParentHeaderList,
} from "../column-definitions/AllOrdersParentDefs";
import { fetchData } from "../utils/fetchData";
import AllOrdersCards from "../components/AllOrdersCards";

import { useMediaQuery } from "@uidotdev/usehooks";

const AllOrdersParent = () => {
  const [pageSize, setPageSize] = useState(15);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowHeightIndex, setRowHeightIndex] = useState(1);
  const [openedRowId, setOpenedRowId] = useState(null);

  const gridRef = useRef(null);

  const url = "https://10.0.0.202:5001/api/OrdersByAccountFront/M00001";

  const { isLoading, error, data } = useQuery("all-orders-data", () => fetchData(url));

  const [rowData, setRowData] = useState(() => {
    if (data || data?.data) {
      return data.data;
    }
    return null;
  });

  useEffect(() => {
    if (!data) return;
    if (isLoading) return;
    if (error) return;
    setRowData(data.data);
  }, [data, isLoading, error]);

  const [columnDefs] = useState(allOrdersParentDefs);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 150,
      floatingFilter: true,
      suppressMovable: true,

      floatingFilterComponent: CustomInput,
    }),
    []
  );

  const components = useMemo(() => {
    return {
      agColumnHeader: CustomHeaderCell,
    };
  }, []);

  useOrdersNavigate(gridApi, gridRef, setOpenedRowId);

  // EVents
  // EVents
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    gridRef.current.api.resetRowHeights();
  };

  useEffect(() => {
    if (!gridRef.current) return;
    if (!gridApi) return;
    gridRef.current.api.resetRowHeights();
  }, [openedRowId, gridRef, gridApi]);

  useRemoveId(gridApi, gridRef);

  function getRowHeight(params) {
    const { id } = params.node;
    if (id == openedRowId) {
      return 140;
    }

    if (rowHeightIndex === 0) {
      return 25;
    } else if (rowHeightIndex === 1) {
      return 32;
    } else if (rowHeightIndex === 2) {
      return 37;
    }
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 510px)");

  console.log(isSearchOpen)
  
  return (
    <>
      <header className="all-orders__header">
        <div className="all-orders__arrow-container"></div>
        <div
        // style={{width: isSmallDevice ?  "300px" : "", marginInline: "auto"}}

         className="all-orders__settings settings-container-responsive">
          {/* Left */}
          <div
            className="all-orders__gdm-container"
            style={{ paddingLeft: "0", marginLeft: 10 }}
          >
            <span className={`${isSearchOpen ? "hide" : ""}`}>
              ყველა შეკვეთა
            </span>
            {/* <span style={{ color: "#6E0FF5" }}>GDM</span> */}
          </div>
          <div className="all-orders__settings__options">
            <TableSettings
            isSmallDevice={isSmallDevice}
              setIsSearchOpen={setIsSearchOpen}
              defHeaderList={allOrdersParentHeaderList}
              rowData={rowData}
              gridApi={gridApi}
              gridRef={gridRef}
              gridColumnApi={gridColumnApi}
              rowHeightIndex={rowHeightIndex}
              setRowHeightIndex={setRowHeightIndex}
            />
          </div>
        </div>
      </header>
      {isSmallDevice ? (
        <AllOrdersCards data={rowData} />
      ) : (
        <div
          id="marlin-table"
          className="ag-theme-alpine ag-grid-example all-orders-parent"
          style={{ minHeight: 595, width: "100%" }}
        >
          <AgGridReact
            ref={gridRef}
            getRowHeight={getRowHeight}
            onGridReady={onGridReady}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            components={components}
            paginationPageSize={pageSize}
          ></AgGridReact>
          <Menu
            className="page-size-menu"
            align="end"
            menuButton={
              <MenuButton className="page-size-btn">
                <span>Rows per page</span>
                <span className="btn">{pageSize}</span>
              </MenuButton>
            }
            transition
          >
            {pageSizes.map((size) => {
              return (
                <MenuItem
                  key={size}
                  onClick={() => {
                    setPageSize(size);
                  }}
                  style={{ color: pageSize === size ? "#1A1F3D" : "" }}
                >
                  {size}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      )}
    </>
  );
};

export default AllOrdersParent;
