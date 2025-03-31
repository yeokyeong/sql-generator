import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../services/gridData";
import { mapBusinessStats } from "../utils/mapping";
import { GridCellParams, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ClientBusinessStats, ApiBusinessOpenCloseStats } from "../@types";

type DataProps = {
  fetchedData: any;
  limit: number;
  offset: number;
  onChangePagination: (limit: number, offset: number) => void;
};

export default function CustomizedDataGrid({
  fetchedData,
  limit,
  offset,
  onChangePagination,
}: DataProps): React.ReactElement {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    if (fetchedData) {
      const mappedData: GridRowsProp = fetchedData.data?.map(
        (item: ApiBusinessOpenCloseStats) => {
          return mapBusinessStats(item);
        }
      );
      setRows(mappedData);
    }
  }, [fetchedData]);

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      rowCount={fetchedData.pagination?.total}
      paginationMode="server"
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={{
        pagination: { paginationModel: { pageSize: limit, page: offset } },
      }}
      onPaginationModelChange={(params) => {
        onChangePagination(
          params.pageSize ? params.pageSize : limit,
          params.page ? params.page : offset
        );
      }}
      pageSizeOptions={[10, 20, 50]}
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
