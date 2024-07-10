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
} from "recharts";

const OrderStatistics = () => {
  const data = [
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
    {
      name: "12-25(월)",
      order: 600000,
      cancellation: 100000,
    },
  ];
  const yAxisColor = "#AFB1B6";

  const maxDataValue = Math.max(
    ...data.map((item) => Math.max(item.order, item.cancellation))
  );

  const yTicks = [];

  let start = 0;
  for (let i = 0; i < Math.ceil(maxDataValue / 20) + 1; i++) {
    yTicks.push(start);
    start += 20;
  }

  const yAxisDomain = [0, Math.max(1000, ...yTicks)];

  return (
    <section>
      <header className="flex items-center justify-between bg-black text-white p-2  border-slate-500 border-collapse">
        <h2>주문통계</h2>
      </header>

      <div>
        <ResponsiveContainer width="100%" aspect={1.5}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
              strokeDasharray={3}
            />

            <XAxis dataKey="name" axisLine={{ stroke: yAxisColor }} />
            <YAxis
              ticks={yTicks}
              axisLine={{ stroke: yAxisColor }}
              domain={yAxisDomain}
            />
            <Tooltip />

            <Bar
              dataKey="order"
              fill="#251D4B"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="cancellation"
              fill="#CCA9E8"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default OrderStatistics;
