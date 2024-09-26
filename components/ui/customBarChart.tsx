"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Un graphique à barres mixte";

const chartData = [
  { browser: "camayenne", Sales: 275, fill: "var(--color-camayenne)" },
  { browser: "matam", Sales: 200, fill: "var(--color-matam)" },
  { browser: "matoto", Sales: 187, fill: "var(--color-matoto)" },
  { browser: "kippe", Sales: 173, fill: "var(--color-kippe)" },
  { browser: "kaloum", Sales: 90, fill: "var(--color-kaloum)" },
];

const chartConfig = {
  Sales: {
    label: "Ventes",
  },
  camayenne: {
    label: "cmye",
    color: "hsl(var(--chart-1))",
  },
  matam: {
    label: "Matam",
    color: "hsl(var(--chart-2))",
  },
  matoto: {
    label: "Matoto",
    color: "hsl(var(--chart-3))",
  },
  kippe: {
    label: "Kippe",
    color: "hsl(var(--chart-4))",
  },
  kaloum: {
    label: "Kaloum",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agence Commerciale</CardTitle>
        <CardDescription>Données Mensuelles</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="Sales" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Sales" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendance des Ventes de chaque Agence Commerciale <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Liste des Agences Commerciales
        </div>
      </CardFooter>
    </Card>
  );
}
