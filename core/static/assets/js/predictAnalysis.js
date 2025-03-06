const customerCountChart = document.getElementById('customer-count');


const customerCount = new Chart(customerCountChart, {
    type: 'line',
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [{
        label: '# of transactions',
        data: [10000, 15000, 22300, 22338, 25000, 30000],
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