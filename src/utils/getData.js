import * as XLSX from "xlsx";

const fetch_XLSX_DATA = async () => {
  return await fetch("./excel-data/bdo-data-geo.xlsx")
    .then((res) => {
      return res.arrayBuffer();
    })
    .then((res) => {
      const ALL_DATA = {};
      const wb = XLSX.read(new Uint8Array(res), {
        type: "array",
      });

      wb.SheetNames.forEach((sheet) => {
        let rawObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet]);
        ALL_DATA[sheet] = rawObj;
      });

      return ALL_DATA;
    });
};

export default fetch_XLSX_DATA;
