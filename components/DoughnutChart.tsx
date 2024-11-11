'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart( { accounts }: DoughnutChartProps) {

  const data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      label: 'Bancos',
    }],
    labels: ['Banco 1', 'Banco 2', 'Banco 3']
    }

  return (
    <Doughnut 
      data={data} 
      options={{ 
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        }
      }}>

      </Doughnut>
  )
}