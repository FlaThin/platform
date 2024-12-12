"use client";

import DataTable from '@/components/monitor/tables/DataTable';
import { fetchReportData, ReportData } from '@/use-cases/use-get-monitor-reports';
import { useEffect, useState } from 'react';

interface PageProps {
    searchParams: Record<string, string | string[] | undefined>;
}

const MonitorInsertions = ({ searchParams }: PageProps) => {
    const [data, setData] = useState<ReportData[]>([]);
    const [params, setParams] = useState<Record<string, any>>({}); // Inicializar como objeto vazio

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchReportData(params);
            setData(result);
        };

        fetchData();
    }, [params]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams((prev) => ({
            ...prev,
            query: e.target.value,
        }));
    };

    return (
        <div className="p-4">
            <div className="flex gap-5 text-2xl font-medium mb-3 text-gray-600">
                <h1>Insertions - {data.length}</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleInputChange}
                    className="border rounded p-2"
                />
            </div>

            <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
                <div className="rounded-2xl bg-white p-2 px-3 ">
                    <DataTable initialData={data} />
                </div>
            </div>
        </div>
    );
};

export default MonitorInsertions;
