import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../services/gridData";
import { mapBusinessStats } from "../utils/mapping";
import { GridCellParams, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ClientBusinessStats, ApiBusinessOpenCloseStats } from "../@types";

type DataProps = {
  data: any;
};

export default function CustomizedDataGrid({
  data,
}: DataProps): React.ReactElement {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    if (data) {
      const mappedData: GridRowsProp = data.map(
        (item: ApiBusinessOpenCloseStats) => {
          return mapBusinessStats(item);
        }
      );
      setRows(mappedData);
    }
  }, [data]);

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: "outlined",
              size: "small",
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            operatorInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
          },
        },
      }}
    />
  );
}
