"use client";

import React, { useState } from "react";
import CustomSelectOptions from "../components/page-52-53-components/CustomSelectOptions";
import CustomModal from "../components/page-52-53-components/CustomModal";

const Page54 = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const data: { number: number; defaultUSD: number; defaultKRW: number }[] = [];

  for (let i = 1; i <= 10; i++) {
    const newData = {
      number: i,
      defaultUSD: i * 60,
      defaultKRW: i * 75000,
    };
    data.push(newData);
  }

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);

  const handleOpenModal = () => {
    setModalOpen(true);
    console.log("modal open", modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="text-black">
      <div className="flex items-center  gap-2 mt-10">
        <div className="flex justify-center items-center w-[20px] h-[20px] bg-white p-2 border-[3px] border-gray-900 ">
          <div className=" w-1 bg-black  border-[3px] border-gray-900 p-[1px] text-center "></div>
        </div>
        <p className=" font-semibold">기간한정 가격 입력</p>
      </div>

      <div className="mt-6">
        <p>월 선택</p>
        <CustomSelectOptions
          label="1월"
          options={["january", "february", "march", "april"]}
          outerStyles="min-w-[240px]"
        />
      </div>

      <div className="flex items-center mt-4">
        <button className="py-[6px] px-16 border border-gray-400 rounded-md ">
          요일 별
        </button>
        <button className="py-[6px] px-16 border border-gray-400 rounded-md bg-slate-200">
          일자 별
        </button>
        <button className="py-[6px] px-16 border border-gray-400 rounded-md">
          기간 별
        </button>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleOpenModal}
          className="py-1 px-6 bg-blue-600 rounded-md text-white"
        >
          전체 입력
        </button>
      </div>

      <main className="mt-6">
        <table>
          <thead className="bg-slate-200 ">
            <tr>
              <th className="px-6 py-2 text-center border border-collapse border-slate-400">
                <button
                  onClick={() => {
                    if (isAllChecked) {
                      setClickedRowIds([]);
                    } else {
                      setClickedRowIds([...data.map((item) => item.number)]);
                    }
                    setIsAllChecked(!isAllChecked);
                  }}
                  className={`w-[20px] h-[22px] rounded-md flex justify-center items-center ${
                    isAllChecked
                      ? "bg-blue-500 border-[2px] border-blue-500"
                      : "border-[2px] border-slate-400"
                  }  `}
                >
                  {isAllChecked && (
                    <span className="text-white ">&#10004;</span>
                  )}
                </button>
              </th>
              <th className="px-6 py-2 text-center border border-collapse border-slate-400">
                일자
              </th>
              <th className="px-6 py-2 text-center border border-collapse border-slate-400">
                금액
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.number}>
                <td className="px-6 text-center border border-collapse border-slate-400">
                  <button
                    onClick={() => {
                      if (clickedRowIds.includes(item.number)) {
                        setClickedRowIds(
                          clickedRowIds.filter((id) => id !== item.number)
                        );
                      } else {
                        setClickedRowIds([...clickedRowIds, item.number]);
                      }
                    }}
                    className={`w-[20px] h-[22px] rounded-md flex justify-center items-center ${
                      clickedRowIds.includes(item.number)
                        ? "bg-blue-500 border-[2px] border-blue-500"
                        : "border-[2px] border-slate-400"
                    }  `}
                  >
                    {clickedRowIds.includes(item.number) && (
                      <span className="text-white ">&#10004;</span>
                    )}
                  </button>
                </td>
                <td className="px-4 text-center border border-collapse border-slate-400">
                  {item.number}
                </td>
                <td className="px-8 text-center border border-collapse border-slate-400">
                  <div className="flex items-center gap-2 py-1">
                    <div className="flex  items-center">
                      <input
                        defaultValue={item.defaultUSD.toLocaleString()}
                        className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
                      />
                      <div className="py-1 px-2 text-slate-600  bg-slate-300 border-[2px] border-slate-300  ">
                        $
                      </div>
                    </div>
                    <div className="flex  items-center">
                      <input
                        defaultValue={item.defaultKRW.toLocaleString()}
                        className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
                      />
                      <div className="py-1 px-2 text-slate-600 bg-slate-300 border-[2px] border-slate-300  ">
                        ￦
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <CustomModal isOpen={modalOpen} onClose={handleCloseModal}>
        <section className="text-black">
          <div className="flex items-center  gap-2 mt-5 ml-3">
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-white p-2 border-[3px] border-gray-900 ">
              <div className=" w-1 bg-black  border-[3px] border-gray-900 p-[1px] text-center "></div>
            </div>
            <p className=" font-semibold">기간한정 가격 입력</p>
          </div>

          <div className="flex items-center gap-2 py-1 mt-3">
            <div className="flex  items-center">
              <input
                defaultValue="60"
                className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
              />
              <div className="py-1 px-2 text-slate-600  bg-slate-300 border-[2px] border-slate-300  ">
                $
              </div>
            </div>
            <div className="flex  items-center">
              <input
                defaultValue="75,000"
                className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
              />
              <div className="py-1 px-2 text-slate-600 bg-slate-300 border-[2px] border-slate-300  ">
                ￦
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => {
                // Functionality to save the data then close the modal
                handleCloseModal();
              }}
              className="py-2 px-7 text-center text-white font-semibold bg-gray-700 rounded-lg "
            >
              저장
            </button>
            <button
              onClick={handleCloseModal}
              className="py-2 px-7 text-center text-white font-semibold bg-slate-400 rounded-lg "
            >
              취소
            </button>
          </div>
        </section>
      </CustomModal>
    </section>
  );
};

export default Page54;
