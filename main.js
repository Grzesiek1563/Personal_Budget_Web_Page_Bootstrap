function drawChart()
{
    const data = {
        labels: [
          'Jedzenie',
          'Mieszkanie',
          'Transport',
          'Telekomunikacja',
          'Opieka Zdrowotna',
          'Ubranie',
          'Higiena',
          'Dzieci',
          'Rozrywka',
          'Wycieczka',
          'Szkolenia',
          'Książki',
          'Oszczędności',
          'Na emeryturę',
          'Spłata długów',
          'Darowizna',
          'Inne wydatki'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(33, 78, 81)',
            'rgb(224, 174, 37)',
            'rgb(30, 184, 77)',
            'rgb(95, 24, 22)',
            'rgb(18, 116, 116)',
            'rgb(64, 11, 113)',
            'rgb(25, 74, 40)',
            'rgb(77, 77, 77)',
            'rgb(89, 149, 116)',
            'rgb(177, 130, 111)',
            'rgb(174, 149, 215)',
            'rgb(198, 252, 18)',
            'rgb(18, 252, 193)',
            'rgb(252, 76, 18)' 
          ],
          hoverOffset: 4
        }]
      };
    
    const config = {
    type: 'pie',
    data: data,
    options: {
        borderColor: '#fff',
        plugins: {
            legend: {
                position: 'bottom',
                maxHeight: 500,
                align: 'center',
                labels: {
                    font: {size: 17, family: 'Mukta'},
                    color: '#000506'
                }
            }
        }
    }
    };
    
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );
}

window.onload = drawChart;

