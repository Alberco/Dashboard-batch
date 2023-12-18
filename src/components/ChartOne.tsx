import useFechData from '@/hooks/useFechData';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
    
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function ChartOne() {

    const { data, isLoading, error  } = useFechData()
    
    if (data === undefined) return null;

    const hostNames = data.map(item=>item.nombrePro)

    const estados = data?.map(item=>item.estado ? 1 : 0)

    const labels = [...hostNames]

    if (isLoading) {
      return <p>Cargando...</p>
    }
    
    if (error) {
          return <p className=' font-semibold  '>Error, Fuera de conexion con el server</p>;
    }
  
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Preview Programs',
          },
        },
    };

    const dataGrafi = {
        labels,
        datasets: [
            {
            label: 'Program',
            data: [...estados],
            borderColor: '#a3e635',
            backgroundColor: '#a3e635',
            },
        ],
    };

  return (
    <Line options={options} data={dataGrafi} />
  )
}

export default ChartOne