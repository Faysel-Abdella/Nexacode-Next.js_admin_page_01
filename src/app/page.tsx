import Image from "next/image";

import PriceAlert from "./components/page-8-components/price-alert/PriceAlert";
import Page8 from "./pages/Page8";
import Page52 from "./pages/Page52";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {/* Page number 8 */}
      <section>
        <h1 className="text-center font-bold text-[30px] text-black  my-6 border w-full px-10">
          Page number 8
        </h1>
        <Page8 />
      </section>

      {/* Page number 52 */}
      <section>
        <h1 className="text-center font-bold text-[30px] text-black my-6 border w-full px-10">
          Page number 52
        </h1>
        <Page52 />
      </section>
    </main>
  );
}
