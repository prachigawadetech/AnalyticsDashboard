const totalTxnsChart = document.getElementById('total-txns-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthRateChart = document.getElementById('growth-rate-chart');
const customerCountChart = document.getElementById('customer-count');
const billerCatPieChart = document.getElementById('biller-cat');
const datatable = document.getElementById('datatable');




/*new Chart(totalTxnsChart, {
    type: 'line',
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [{
        label: '# of txns executed',
        data: [12, 19, 3, 15, 20, 30],
        borderWidth: 1
      }]},
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });*/

    //code to display data from Monthly_Data.xls in a chart


    fetch('get_data')  // Update with correct Django URL
      .then(response => response.json())
      .then(data => {
        new Chart(totalTxnsChart, {
          type: 'line',
          data: {
            labels: data.labels,  // Use dynamic labels from Excel
            datasets: [{
              label: '# of txns executed',
              data: data.data,   // Use dynamic data from Excel
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching chart data:', error));


    new Chart(revenueChart, {
        type: 'line',
        data: {
          labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
          datasets: [{
            label: '# of txns executed',
            data: [100, 190, 320, 150, 200, 300],
            borderWidth: 1
          }]},
          options: {
            scales: {
              y: {
                beginAtZero: true,
              }
            }
          }
        });

        const customerCount = new Chart(customerCountChart, {
            type: 'line',
            data: {
              labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
              datasets: [{
                label: '# of customers registered',
                data: [100, 150, 200, 180, 250, 300],
                borderWidth: 1
              }]},
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                  }
                }
              }
            });


            const billerCatChart = new Chart(billerCatPieChart, {
                type: 'pie',
                data: {
                  labels: ['Electricity', 'FASTag', 'Rent', 'Recurring Deposit', 'Water', 'Landline Postpaid'],
                  datasets: [{
                    label: 'Total amount of txns(Lacs)',
                    data: [100, 150, 200, 180, 250, 300],
                    borderWidth: 1
                  }]},
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      }
                    }
                  }
                });
        

                /*const dataTable = new simpleDatatables.DataTable("#datatable", {
                    searchable: true,
                    fixedHeight: true,
                    data :{
                        headings: ["Biller Category","# Transactions","Total Tran Amount"]
                    }
                })

                const loadingDiv = document.createElement("div");
                loadingDiv.innerHTML = `
                    Loading...............
                `;

                dataTable.setMessage(loadingDiv.innerHTML)
            setTimeout(() => {
                    let newRows=[
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["FASTag", "100", "200.00"],
                        ["Rent", "100000", "2,00,000.00"],
                        ["Recurring Deposit", "1000", "2000.00"],
                        ["Water", "1000", "2000.00"],
                        ["Landline Postpaid", "1000", "2000.00"],
                        
                    ];
    dataTable.insert({data : newRows})
    }, 1000);*/

    //code to display datatable from excel 
    const excelFilePath = "/static/assets/data/Biller_Data.xlsx"; // excel file path

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