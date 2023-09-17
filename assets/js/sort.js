
    function sortTable(columnName, sortOrder = 'asc') {
        const table = document.querySelector('table');
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        // Use a custom sort function based on column name and sortOrder
        rows.sort((a, b) => {
            const aValue = a.querySelector(`[data-column="${columnName}"]`).textContent;
            const bValue = b.querySelector(`[data-column="${columnName}"]`).textContent;

            if (sortOrder === 'asc') {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });

        // Remove existing rows from the table
        rows.forEach(row => tbody.removeChild(row));

        // Append the sorted rows back to the table
        rows.forEach(row => tbody.appendChild(row));
    }

