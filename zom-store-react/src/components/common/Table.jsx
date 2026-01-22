import React, { useState } from "react";
//Props
//   - columns: Array of column definitions [{ key, label, sortable, render, width }]
//   - data: Array of data objects to display in rows
//   - onEdit: Optional function called when edit button clicked (row data passed)

function Table({
  colums = [],
  data = [],
  onEdit,
  onDelete,
  onView,
  searchable = true,
  pageSize = 10,
  emptyMessage ="No data available",
  loading = 0,
  striped = true,
  hoverable = true
}) {

    const [searchTerm,setSearchTerm] = useState('');

    const [sortConfig,setSortConfig] = useState({
        key:null,
        direccion: 'asc'
    })
  return <div>Table</div>;
}

export default Table;
