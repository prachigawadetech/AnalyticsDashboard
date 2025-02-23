const excelFilePath = "/static/assets/data/Biller_Data.xlsx"; // Replace with your file path

        async function fetchAndProcessExcel(filePath) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) throw new Error("Failed to load file");

                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });

                // Read the first sheet
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                // Convert sheet to JSON array
                const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                // Extract headings (first row) and rows (remaining data)
                const headings = excelData[0] || [];
                const rows = excelData.slice(1);

                // Initialize DataTable
                const dataTable = new simpleDatatables.DataTable("#datatable", {
                    searchable: true,
                    fixedHeight: true,
                    data: {
                        headings: headings,
                        data: rows
                    }
                });

            } catch (error) {
                console.error("Error loading Excel file:", error);
            }
        }

        // Load Excel file and populate the table
        fetchAndProcessExcel(excelFilePath);
