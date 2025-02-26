const totalTxnsVolChart = document.getElementById('total-txns-vol-chart');
const totalTxnsAmtVolChart = document.getElementById('total-txns-amt-vol-chart');
const couVolChart = document.getElementById('cou-vol-chart');
const bouVolChart = document.getElementById('bou-vol-chart');

new Chart(totalTxnsVolChart, {
    
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
      datasets: [{
        type: 'line',
        label: 'Volume % change',
        data: [25, 50, 30, 50, 60, 30],
        borderWidth: 1,
        backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ]
      }
      ,
      {
        type: 'bar',
        label: '# Trasactions',
        data: [100, 400, 300, 400, 200, 300],
        borderWidth: 1,
        backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(201, 203, 207, 0.6)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ]
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(totalTxnsAmtVolChart, {
    
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
      datasets: [{
        type: 'line',
        label: 'Volume % change',
        data: [25, 80, 100, 150, 60, 80],
        borderWidth: 1,
        backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ]
      }
      ,
      {
        type: 'bar',
        label: 'Transaction Amount',
        data: [10000, 40000, 30000, 40000, 20000, 30000],
        borderWidth: 1,
        backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(201, 203, 207, 0.6)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ]
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const couVolumeChart = new Chart(couVolChart, {
    type: 'pie',
    data: {
      labels: ['Electricity', 'FASTag', 'Rent', 'Recurring Deposit', 'Water'],
      datasets: [{
        label: 'Total # of txns(Lacs)',
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

    const bouVolumeChart = new Chart(bouVolChart, {
        type: 'pie',
        data: {
          labels: ['Tata Power', 'Jio', 'HDFC Bank', 'SBI', 'TATA Play'],
          datasets: [{
            label: 'Total # of txns(Lacs)',
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