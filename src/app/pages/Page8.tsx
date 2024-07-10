import React from "react";
import PriceAlert from "../components/price-alert/PriceAlert";
import OneToOneQuery from "../components/one-to-one-query/OneToOneQuery";
import OrderStatus from "../components/order-status/OrderStatus";
import OrderStatistics from "../components/order-statistics/OrderStatistics";

const Page8 = () => {
  return (
    <main>
      <section className="flex items-center gap-5 mb-7">
        <PriceAlert />
        <OneToOneQuery />
      </section>
      <section className="flex  items-center gap-5 mb-7">
        <OrderStatus />
        <OrderStatistics />
      </section>
    </main>
  );
};

export default Page8;
