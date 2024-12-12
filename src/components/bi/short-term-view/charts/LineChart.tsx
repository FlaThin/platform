"use client";

import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { month: "min. 0", desktop: 0, mobile: 0 },
    { month: "min. 0", desktop: 0, mobile: 0 },
    { month: "Spot", desktop: 5, mobile: 130 },
    { month: "min. 10", desktop: 0, mobile: 140 }
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function LineChartComponent() {
    return (
        <ResponsiveContainer>
            <Card className="">
                <CardHeader> 
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer className="h-[100px] w-[700px]" config={chartConfig}>
                            <LineChart
                                data={chartData}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 20,
                                    bottom: 10
                                }}
                            >
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={true}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="#000000"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "#000000",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                />
                            </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <p>BaseLine</p>
                </CardFooter>
            </Card>
        </ResponsiveContainer>
    );
}
