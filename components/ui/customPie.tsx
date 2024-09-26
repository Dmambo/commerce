"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Total Number of subscription"

const chartData = [
  { browser: "camayenne", visitors: 275, fill: "var(--color-camayenne)" },
  { browser: "matam", visitors: 200, fill: "var(--color-matam)" },
  { browser: "kippe", visitors: 287, fill: "var(--color-kippe)" },
  { browser: "matoto", visitors: 173, fill: "var(--color-matoto)" },
  { browser: "kaloum", visitors: 190, fill: "var(--color-kaloum)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  camayenne: {
    label: "camayenne",
    color: "hsl(var(--chart-6))",
  },
  matam: {
    label: "matam",
    color: "hsl(var(--chart-7))",
  },
  kippe: {
    label: "kippe",
    color: "hsl(var(--chart-8))",
  },
  matoto: {
    label: "matoto",
    color: "hsl(var(--chart-9))",
  },
  kaloum: {
    label: "kaloum",
    color: "hsl(var(--chart-10))",
  },
} satisfies ChartConfig

export function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Number of subscription</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="dimYellow text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Subscription
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total increase in number of subscription <TrendingUp className="h-4 w-4" />
        </div>
      
      </CardFooter>
    </Card>
  )
}
