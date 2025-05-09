"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BASE_URL } from "@/constants";
import { formatDate } from "@/lib/utils";
import { TransactionsInsightsType } from "@/types/server/transaction";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import TimespanSelect from "../TimespanSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TransactionInsightCharts({
  inventoryId,
}: {
  inventoryId?: string;
}) {
  const [timespan, setTimespan] = useState<string>("all");
  const { data: session } = useSession();
  const userId = session?.user?.id ?? "";

  const chartConfig = {
    date: {
      label: "Date",
      color: "hsl(var(--chart-4))",
    },
    total: {
      label: "Total",
    },
  } satisfies ChartConfig;

  const {
    data: chartData = [],
    isLoading,
    refetch,
  } = useQuery<TransactionsInsightsType[]>({
    queryKey: ["transactionData", userId],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        span: timespan,
        userId: userId,
      });

      if (inventoryId) {
        queryParams.append("inventoryId", inventoryId);
      }

      const res = await fetch(
        `${BASE_URL}/api/transaction/timespan?${queryParams.toString()}`,
      );
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
    enabled: !!userId,
  });

  useEffect(() => {
    if (userId) {
      refetch();
    }
  }, [timespan, userId, refetch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex justify-end">
        <TimespanSelect onValueChange={(value: string) => setTimespan(value)} />
      </div>
      {chartData.length ? (
        <>
          <ChartContainer
            config={chartConfig}
            className="h-full max-h-[300px] min-h-[200px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 20,
                right: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={5}
                tickFormatter={(value) => formatDate(new Date(value))}
                interval={0}
                padding={{ left: 20, right: 20 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" hideLabel />}
              />
              <Line
                dataKey="total"
                type="bump"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                dot={{
                  fill: "hsl(var(--chart-4))",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
          {/* Transactions Table */}
          <div className="w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  {/* Add more headers based on your TransactionsInsightsType */}
                  {/* Example: <TableHead>Description</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {chartData.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {formatDate(new Date(transaction.date))}
                    </TableCell>
                    <TableCell>
                      Ksh {transaction.total.toFixed(2)}
                    </TableCell>
                    {/* Add more cells based on your data */}
                    {/* Example: <TableCell>{transaction.description || 'N/A'}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center gap-2 py-4 text-center md:gap-4">
          <Image
            src={"/assets/products-value-empty.svg"}
            width={150}
            height={150}
            alt="Total Products Value Empty"
            className="size-[80%] lg:size-[60%]"
            priority
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold md:text-base">
              Your Transaction History is Empty
            </h4>
            <p className="desc-2 max-w-sm text-[10px] md:text-sm">
              It seems you have not made any transactions during that timespan yet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}