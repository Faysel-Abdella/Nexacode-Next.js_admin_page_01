"use client";

import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

type orderStatisticsDataType = {
  name: string;
  order: number;
  cancellation: number;
};

const OrderStatistics = () => {
  const data: orderStatisticsDataType[] = [
    {
      name: "12-25(월)",
      order: 200000,
      cancellation: 250000,
    },
    {
      name: "12-26(월)",
      order: 400000,
      cancellation: 350000,
    },
    {
      name: "12-27(월)",
      order: 450000,
      cancellation: 500000,
    },
    {
      name: "12-28(월)",
      order: 200000,
      cancellation: 150000,
    },
    {
      name: "12-29(월)",
      order: 600000,
      cancellation: 300000,
    },
    {
      name: "12-30(월)",
      order: 400000,
      cancellation: 350000,
    },
  ];
  const yAxisColor = "#000000";

  const maxDataValue = Math.max(
    ...data.map((item) => Math.max(item.order, item.cancellation))
  );

  const yTicks = [];

  let start = 0;
  for (let i = 0; i < Math.ceil(maxDataValue) + 1; i++) {
    yTicks.push(start);
    start += 400000;
  }

  //   const yAxisDomain = [0, getMax([1000, ...yTicks])];

  return (
    <section className="min-w-[550px] border-[3px] border-slate-300">
      <header className="flex items-center justify-between bg-black text-white p-2  border-slate-500 border-collapse">
        <h2>주문통계</h2>
      </header>

      <div className="flex gap-3 my-2 ml-24">
        <div className="flex gap-1 items-center">
          <div className="w-[20px] h-[20px] bg-gray-800"></div>
          <p className="text-slate-400">주문</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-[20px] h-[20px] bg-slate-400"></div>
          <p className="text-slate-400">취소</p>
        </div>
      </div>

      <ResponsiveContainer width={650} aspect={1.7} height={265}>
        <BarChart
          //   width={300}
          //   height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="text-[22px] font-semibold"
        >
          <CartesianGrid
            vertical={false}
            horizontal={false}
            strokeDasharray={1}
          />

          <XAxis dataKey="name" axisLine={{ stroke: yAxisColor }} />
          <YAxis
            ticks={[100000, 200000, 300000, 400000, 500000]}
            axisLine={{ stroke: yAxisColor }}
            domain={[100000, 200000, 300000, 400000, 500000]}
          />
          <Tooltip />

          <Bar
            dataKey="order"
            fill="#251D4B"
            activeBar={<Rectangle fill="black" stroke="black" />}
          />
          <Bar
            dataKey="cancellation"
            fill="#CCA9E8"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default OrderStatistics;
