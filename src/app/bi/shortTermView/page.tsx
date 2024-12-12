"use-client"

import { LineChartComponent } from "@/components/bi/short-term-view/charts/LineChart";
import { InteractiveChart } from "@/components/bi/short-term-view/charts/InteractiveChart";
import { BarChartComponent } from "@/components/bi/short-term-view/charts/BarChart";

const kpiData = [
    {
        KPIPerformancePeriod: "0%",
        KPITotalPeriod: "7,37k",
        airtime: 0,
        syncs: 0,
        comparisonType: "Triggers X Calls",
        comparisonTime: "10m before X 5m after"
    },
    {
        KPIPerformancePeriod: "5%",
        KPITotalPeriod: "12,45k",
        airtime: 1,
        syncs: 2,
        comparisonType: "Insertions X Calls",
        comparisonTime: "5m before X 5m after"
    },
    {
        KPIPerformancePeriod: "10%",
        KPITotalPeriod: "15,67k",
        airtime: 3,
        syncs: 5,
        comparisonType: "Insertions X Calls",
        comparisonTime: "10m before X 5m after"
    }
] 

const Basic: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-2 gap-y-11 grid-rows-[auto] p-2">
            <div className="col-span-3 row-span-1 flex justify-between items-center">
                <h2 className="text-4xl">Short term view</h2>
            </div>

            {kpiData.map((kpi) => (
                <>
                    <div className="col-span-2 row-span-1 flex items-center gap-3 mb-[-25px]">
                        <h2 className="text-xl text-gray-600">{kpi.comparisonType}</h2>
                        <h2>-</h2>
                        <h2 className="text-lg text-gray-500">{kpi.comparisonTime}</h2>
                    </div>

                    <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
                        <div className="rounded-2xl bg-white p-2 px-3 ">
                            <InteractiveChart />
                        </div>
                    </div>
                    <div className="bg-zinc-100/70 rounded-3xl p-3 grid grid-cols-2 grid-rows-2 gap-3">
                        <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                            <h1 className="text-3xl font-bold">{kpi.KPIPerformancePeriod}</h1>
                            <p className="text-sm">KPI performance in the period</p>
                        </div>
                        <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                            <h1 className="text-3xl font-bold">{kpi.KPITotalPeriod}</h1>
                            <p className="text-sm">KPI total in the period</p>
                        </div>
                        <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                            <h1 className="text-3xl font-bold">{kpi.airtime}</h1>
                            <p className="text-sm">Airtime</p>
                        </div>
                        <div className="bg-white w-full h-full rounded-3xl flex flex-col justify-center items-center text-center p-3 gap-2">
                            <h1 className="text-3xl font-bold">{kpi.syncs}</h1>
                            <p className="text-sm">Syncs</p>
                        </div>
                    </div>
                    <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
                        <div className="flex items-center justify-center h-full max-h-[250px]">
                            <LineChartComponent />
                        </div>
                    </div>
                    <div className="bg-zinc-100/70 rounded-3xl p-3 grid-cols-2 grid-rows-2">
                        <div className="flex items-center justify-center h-full max-h-[250px]">
                            <BarChartComponent />
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Basic;