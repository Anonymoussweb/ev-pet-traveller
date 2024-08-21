import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css"; // Import a theme
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS

export default function MyDataTable(props) {
  return (
    <div className="p-card p-shadow-4 p-mb-4">
      <DataTable
        value={props.data}
        scrollable
        stripedRows
        showGridlines
        paginator
        rows={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        emptyMessage="No Data Available"
        className="p-datatable-sm"
      >
        {props?.columns?.map((col, ind) => (
          <Column
            key={ind}
            field={col.field}
            header={col.header}
            sortable={true}
            style={{ minWidth: "14rem", fontFamily: "Inter", fontSize: "14px" }}
            headerStyle={{
              backgroundColor: "#f5f5f5",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
            }}
            bodyStyle={{
              fontSize: "14px",
              color: "#555",
            }}
          />
        ))}
      </DataTable>
    </div>
  );
}
