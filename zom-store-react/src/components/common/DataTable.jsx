import React from "react";
///Props
//   - columns: Array of column definitions
//   - data: Array of data objects to display
//   - loading: Boolean indicating if data is being loaded
//   - emptyMessage: Message to show when no data
//   - sortConfig: Current sort configuration
//   - onSort: Sort handler function
//   - onEdit: Edit button handler
//   - onDelete: Delete button handler
//   - striped: Boolean to alternate row colors
//   - hoverable: Boolean to highlight row on hover
import TableHeaderCell from "../common";
import TableActions from "../common";

function DataTable({
  columns = [],
  data = [],
  loading = false,
  emptyMessage = "No data available",
  sortConfig,
  onSort,
  onEdit,
  onDelete,
  striped = true,
  hoverable = true,
}) {
  //Check if any action handlers are provided from the manager
  const hasActions = onEdit || onDelete;

  //Function to render cell content
  //If column has custom render fucntion,use it;otherwise display raw value
  const renderCell = (row, column) => {
    if (column.render) {
      return column.render(row); // Call custom render function
    }

    return row[column.key]; // Display raw value from data
  };
  // Loading state - show spinner while data is being fetched

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 bg-white rounded-lg shadow">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    //Container
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        {/*table header */}
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {/* Map through columns to create header cells */}
            {/*Call Table Header Cell */}
            {columns.map((column) => (
              <TableHeaderCell
                key={column.key} // Unique key for React
                column={column} // Pass column config
                sortConfig={sortConfig} // Pass current sort state
                onSort={onSort} // Pass sort handler
              />
            ))}
            {/*Call Table Actions */}
            {hasActions && (
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        {/* TABLE BODY */}

        <tbody className="divide-y divide-gray-200">
          {/* Check if there's any data to display */}
          {data.lenght === 0 ? (
            <tr>
              <td
                // Span all columns including actions column if present

                colSpan={columns.length + (hasActions ? 1 : 0)}
                className="px-6 py-8 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            // Data rows - map through data array

            data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex} // Prefer id, fallback to index
                className={`
                    ${striped && rowIndex % 2 === 0 ? "bg-white" : "bg-gar-50"}

                    ${hoverable ? "hover:bg-blue-50" : ""}
                    `}
              >
                {/* Data cells - map through columns */}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-900"
                  >
                    {renderCell(row, column)} {/* Render cell content */}
                  </td>
                ))}

                {/* Actions cell - only if actions are provided */}
                {hasActions && (
                  <td className="px-6 py-4 text-right">
                    {/*Call Table Actions component */}
                    <TableActions
                      row={row} // Pass row data to actions
                      onEdit={onEdit} // Pass edit handler
                      onDelete={onDelete} // Pass delete handler
                    />
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
