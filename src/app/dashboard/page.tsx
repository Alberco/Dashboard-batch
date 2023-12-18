'use client'
import BoxTotal from "@/components/BoxTotal"
import ChartOne from "@/components/ChartOne"
import ChartTwo from "@/components/ChartTwo"
import HistorialComponent from "@/components/HistorialComponent"
import TableComponent from "@/components/TableComponent"

export default function Home() {
  return (
      <div className=" z-0 min-h-screen grid grid-cols-4 gap-4 grid-flow-row container mx-auto p-4">
          <section className=' dark:bg-white/5  col-span-4 md:col-span-2  shadow-lg border-2 border-black/5 rounded-md p-6 flex justify-center items-center'>
              <ChartOne />
          </section>
          <section className='dark:bg-white/5  shadow-lg border-2 border-black/5 rounded-md col-span-4 md:col-span-2 flex justify-center items-center p-6  h-full w-full'>
              <ChartTwo />
          </section>
          <section className='dark:bg-white/5 col-span-4 md:col-span-3 shadow-lg border-2 border-black/5 rounded-md p-6 flex justify-center items-center' >
            <div className='overflow-y-scroll col-span-2 md:col-span-1 h-[400px] w-full'>
              <TableComponent />
            </div>
          </section>
          <section className=' dark:bg-white/5  col-span-4 md:col-span-1 shadow-lg border-2 border-black/5 rounded-md p-6 flex justify-center items-center'>
            <div className='col-span-2 md:col-span-1 h-[400px] w-full overflow-y-auto'>
              <HistorialComponent />
            </div>
          </section>
      </div>
  )
}
