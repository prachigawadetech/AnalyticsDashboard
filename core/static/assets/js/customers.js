const customerCountChart = document.getElementById('customer-count');


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