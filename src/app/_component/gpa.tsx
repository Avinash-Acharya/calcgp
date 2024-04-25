"use client";
import { useEffect, useState } from "react";

type GpaProps = {
  point: number;
  credit: number;
};

export default function Gpa() {
  const [cgpa, setCgpa] = useState<GpaProps[]>([]);
  const [marks, setMarks] = useState<number | null>(null);
  const [credit, setCredit] = useState<number | null>(null);
  const [count, setCount] = useState<number>(1);
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const [showNotice2, setShowNotice2] = useState<boolean>(false);
  const [showNotice3, setShowNotice3] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);

  let points: number | null;
  // let result: number | null = null;

  const numberInputOnWheelPreventChange = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    (e.target as HTMLInputElement).blur();
    e.stopPropagation();
    setTimeout(() => {
      (e.target as HTMLInputElement).focus();
    }, 0);
  };

  const marksToPoints = (prop: number) => {
    const mark = prop;

    if (mark > 89) {
      points = 10;
    } else if (mark > 79) {
      points = 9;
    } else if (mark > 69) {
      points = 8;
    } else if (mark > 59) {
      points = 7;
    } else if (mark > 49) {
      points = 6;
    } else if (mark > 39) {
      points = 5;
    } else if (mark > 29) {
      points = 4;
    } else if (mark > 19) {
      points = 3;
    } else if (mark > 9) {
      points = 2;
    } else if (mark > 0) {
      points = 1;
    } else {
      points = null;
    }
  };

  const handleCalculate = () => {
    if (count === 1 && marks == null && credit == null) {
      setShowNotice2(true);
      setShowNotice3(false);
    } else {
      setShowNotice2(false);
      setShowNotice3(true);
      marksToPoints(marks ?? 0);
      const newCgpa: GpaProps = { point: points ?? 0, credit: credit ?? 0 };
      setCgpa([...cgpa, newCgpa]);
      // calculate();
    }
  };

  const handleReset = () => {
    setShowNotice(false);
    setShowNotice2(false);
    setShowNotice3(false);
    setMarks(null);
    setCredit(null);
    setCgpa([]);
    setCount(1);
  };

  useEffect(() => {
    const calculate = () => {
      let totalPoint = 0;
      let totalCredit = 0;

      cgpa.forEach((item) => {
        totalPoint += item.point * item.credit;
        totalCredit += item.credit;
      });
      const final = totalPoint / totalCredit;
      setResult(Number(final.toFixed(2)));
    };

    calculate();
  }, [cgpa]);

  const handleAdd = () => {
    if (marks === null && credit === null) {
      setShowNotice(true);
    } else {
      setShowNotice(false);
      marksToPoints(marks ?? 0);
      const newCgpa: GpaProps = { point: points ?? 0, credit: credit ?? 0 };
      setCgpa([...cgpa, newCgpa]);
      setCount((prevCount) => prevCount + 1);
      setMarks(null);
      setCredit(null);
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-3 rounded-3xl bg-slate-200 p-4 text-xl text-black shadow-lg sm:w-9/12 sm:py-8 sm:text-2xl ">
      <div className="my-3 cursor-pointer rounded-md bg-slate-300 px-1 font-medium text-slate-800 ">
        Subject : {count}
      </div>
      <div>
        {showNotice && (
          <p className="m-2 rounded-md bg-red-300 p-1 font-medium text-red-600">
            Please enter a value for marks and credit
          </p>
        )}
      </div>
      <div className="pb-3">
        <label htmlFor="marks"></label>
        <input
          id="marks"
          className="h-8 rounded-lg text-center shadow-md outline-none "
          type="number"
          value={marks ?? ""}
          placeholder="-- Marks --"
          onWheel={numberInputOnWheelPreventChange}
          onChange={(e) => setMarks(parseFloat(e.target.value))}
        />
      </div>
      <div className="pb-3">
        <label htmlFor="credit"></label>
        <input
          id="credit"
          type="number"
          className="h-8 rounded-lg text-center shadow-md outline-none"
          value={credit ?? ""}
          placeholder="-- Credit --"
          onWheel={numberInputOnWheelPreventChange}
          onChange={(e) => setCredit(parseFloat(e.target.value))}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="m-1 rounded-lg border-[3px] border-sky-400 bg-sky-300 px-1 font-semibold text-white transition-colors delay-100 hover:bg-sky-400 hover:shadow-lg"
        >
          +ADD
        </button>
        <button
          onClick={handleReset}
          className="m-1 rounded-lg border-[3px] border-red-400 bg-red-300 px-1 font-semibold text-white transition-colors hover:bg-red-400 hover:shadow-lg"
        >
          Reset
        </button>
        <button
          onClick={handleCalculate}
          className="m-1 rounded-lg border-[3px] border-sky-400 bg-sky-300 px-1 font-semibold text-white transition-colors hover:bg-sky-400 hover:shadow-lg"
        >
          Calculate
        </button>
      </div>
      <div>
        {showNotice2 && (
          <p className="my-2 rounded-md  bg-red-300 p-1 font-medium text-red-600">
            No data to work on
          </p>
        )}
      </div>
      <div>
        {showNotice3 && (
          <p className="my-3 cursor-pointer rounded-md bg-slate-300 px-1 font-medium text-slate-800 ">
            GPA : {result}
          </p>
        )}
      </div>
    </div>
  );
}
