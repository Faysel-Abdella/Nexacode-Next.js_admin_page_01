import React from "react";

const OrderStatus = () => {
  return (
    <section className="min-w-[650px] border-[3px] border-slate-300">
      <header className="flex items-center justify-between bg-black text-white p-2  border-slate-500 border-collapse">
        <h2>주문현황</h2>
        <button className="flex justify-center items-center font-bold px-2 bg-slate-400">
          +
        </button>
      </header>

      <main>
        <table className="w-full">
          <thead className="bg-gray-500 font-semibold ">
            <tr>
              <th className="px-10 py-2 border-collapse border-[1px]  border-slate-300"></th>
              <th className="px-10 py-2 border-collapse border-[1px] border-slate-300">
                주문자명
              </th>
              <th className="px-10 py-2 border-collapse border-[1px] border-slate-300">
                주문방법
              </th>
              <th className="px-7 py-2 border-collapse border-[1px] border-slate-300">
                주문금액
              </th>
              <th className="px-7 py-2 border-collapse border-[1px] border-slate-300">
                주문상태
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-500 text-center">
            <tr>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-l-0">
                ---------------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                ------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                가상계좌
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                --------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-r-0">
                결제완료
              </td>
            </tr>
            <tr>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-l-0">
                ---------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                ------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                신용카드
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                --------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-r-0">
                결제완료
              </td>
            </tr>
            <tr>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-l-0">
                ---------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                ------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                PayPal
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                --------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-r-0">
                결제완료
              </td>
            </tr>
            <tr>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300 border-l-0">
                ---------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                ------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                휴대폰결제
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-300">
                --------
              </td>
              <td className=" py-2 px-1 border-collapse border-[1px] border-slate-500 border-r-0">
                결제완료
              </td>
            </tr>
          </tbody>
        </table>

        <footer className="mt-1">
          <div className="flex gap-3 w-full items-center border-b-2 border-slate-300">
            <div className="w-1/2 flex justify-between items-center">
              <h2 className="font-medium text-white bg-gray-500 py-3 px-3">
                오늘 매출액($)
              </h2>
              <p className="text-gray-900">$</p>
            </div>
            <div className="w-1/2 flex justify-between items-center mr-2 ">
              <h2 className="font-medium text-white bg-gray-500 py-3 px-3">
                오늘 매출액 (￦)
              </h2>
              <p className="text-gray-900">원</p>
            </div>
          </div>

          <div className="flex gap-3 w-full items-center ">
            <div className="w-1/2 flex justify-between items-center">
              <h2 className="font-medium text-white bg-gray-500 py-3 px-3">
                오늘 매출액($)
              </h2>
              <p className="text-gray-900">$</p>
            </div>
            <div className="w-1/2 flex justify-between items-center mr-2 ">
              <h2 className="font-medium text-white bg-gray-500 py-3 px-3">
                오늘 매출액 (￦)
              </h2>
              <p className="text-gray-900">원</p>
            </div>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default OrderStatus;
