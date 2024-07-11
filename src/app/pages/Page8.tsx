import React from "react";
import PriceAlert from "../components/page-8-components/price-alert/PriceAlert";
import OneToOneQuery from "../components/page-8-components/one-to-one-query/OneToOneQuery";
import OrderStatus from "../components/page-8-components/order-status/OrderStatus";
import OrderStatistics from "../components/page-8-components/order-statistics/OrderStatistics";

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
