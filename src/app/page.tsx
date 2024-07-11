import Image from "next/image";

import Page8 from "./pages/Page8";
import Page52 from "./pages/Page52";
import Page53 from "./pages/Page53";
import Page54 from "./pages/Page54";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {/* Page number 8 */}
      <section>
        <h1 className="text-center font-bold text-[30px] text-black  my-6 border w-full px-10">
          Page number 8 👇👇👇
        </h1>
        <Page8 />
      </section>

      {/* Page number 52 */}
      <section>
        <h1 className="text-center font-bold text-[30px] text-black my-6 border w-full px-10">
          Page number 52 👇👇👇
        </h1>
        <Page52 />
      </section>

      {/* Page number 53 */}

      <section>
        <h1 className="text-center font-bold text-[30px] text-black my-6 border w-full px-10">
          Page number 53 👇👇👇
        </h1>
        <Page53 />
      </section>

      {/* Page number 54 */}

      <section>
        <h1 className="text-center font-bold text-[30px] text-black my-6 border w-full px-10">
          Page number 54 👇👇👇
        </h1>
        <Page54 />
      </section>
    </main>
  );
}
