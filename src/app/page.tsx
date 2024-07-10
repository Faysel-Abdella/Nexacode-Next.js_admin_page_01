import Image from "next/image";

import PriceAlert from "./components/price-alert/PriceAlert";
import Page8 from "./pages/Page8";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section>
        <Page8 />
      </section>
    </main>
  );
}
