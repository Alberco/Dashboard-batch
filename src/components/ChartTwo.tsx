import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useFechData from '@/hooks/useFechData';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ConteoPorPrograma {
    [programa: string]: {
      trueCount: number;
      falseCount: number;
    };
}
    
function ChartTwo() {
    const [namesProgramas,setNamesProgramas] = useState<string[]>([])
    const [conteoPorPrograma, setConteoPorPrograma] = useState<ConteoPorPrograma>({});
    const { data, error, isLoading  } = useFechData()
      
    const updateNombres = () => {

        data?.map((item) => {
          if(!namesProgramas.includes(item.nombrePro)) 
          {
            setNamesProgramas([...namesProgramas,item.nombrePro])
          }
        })
    }

    updateNombres()
    const labels = [...Object.keys(conteoPorPrograma).map(programa => programa)]

    const dataChart = {
        labels,
        datasets: [
          {
            label: 'Completados',
            data: [...Object.keys(conteoPorPrograma).map(programa => conteoPorPrograma[programa].trueCount)],
            backgroundColor: '#a3e635',
            stack: 'Stack 0',
          },
          {
            label: 'Cancelados',
            data: [...Object.keys(conteoPorPrograma).map(programa => conteoPorPrograma[programa].falseCount)],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
          },

        ],
      };
    const options = {
        plugins: {
          title: {
            display: true,
            text: 'State Programs',
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };

    useEffect(() => {
      if (data) {
        const conteo = data.reduce((acc, obj) => {
          const programaKey: string = obj.nombrePro;
          if (!acc[programaKey]) {
            acc[programaKey] = { trueCount: 0, falseCount: 0 };
          }
    
          if (obj.estado) {
            acc[programaKey].trueCount += 1;
          } else {
            acc[programaKey].falseCount += 1;
          }
    
          return acc;
        }, {} as ConteoPorPrograma);
        setConteoPorPrograma(conteo);
      }
    }, [data]);

  return (
     <Bar options={options} data={dataChart} />
  )
}

export default ChartTwo