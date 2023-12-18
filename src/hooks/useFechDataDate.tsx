import { BashDatos } from '@/models/Bash'
import useSWR from 'swr'

function useFechDataDate(ini: string,fin: string) {

    const { data, isLoading, error } = useSWR<BashDatos[]>(`https://localhost:7198/api/programs/dateAndDate?horaIni=${ini}&horaFin=${fin}`, async (url: string) => {
        const res = await fetch(url)
        const req = await res.json()
        return req
    })  

    return (
        {
            dataFecha: data , loading : isLoading,  danger: error
        }
    )
}

export default useFechDataDate