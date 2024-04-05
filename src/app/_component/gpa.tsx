"use client";
import { useState } from "react";

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

  let points: number | null;
  let result: number | null = null;

  console.log(marks);
  console.log(credit);
  console.log(cgpa);
  console.log(result);

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

  const handelCalculate = () => {
    if (count === 1 && marks == null && credit == null) {
      setShowNotice2(true);
      setShowNotice3(false);
    } else {
      setShowNotice2(false);
      setShowNotice3(true);
      marksToPoints(marks ?? 0);
      const newCgpa: GpaProps = { point: points ?? 0, credit: credit ?? 0 };
      setCgpa([...cgpa, newCgpa]);
      calculate();
    }
  };

  const handelReset = () => {
    setShowNotice3(false);
    setShowNotice2(false);
    setShowNotice(false);
    setMarks(null);
    setCredit(null);
    setCgpa([]);
    setCount(1);
  };

  const calculate = () => {
    let totalPoint = 0;
    let totalCredit = 0;

    cgpa.forEach((item) => {
      totalPoint += item.point * item.credit;
      totalCredit += item.credit;
    });

    result = totalPoint / totalCredit;
  };

  const handelAdd = () => {
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
    <div className="mx-auto flex w-max flex-col items-center justify-center bg-red-400 p-4 text-black sm:w-9/12 ">
      <div>Subject : {count}</div>
      <div>
        {showNotice && (
          <p className="mb-2 rounded-md border-red-500 bg-red-300 p-1 text-red-600">
            Please enter a value for marks and credit
          </p>
        )}
      </div>
      <div className="py-3">
        <label htmlFor="marks"></label>
        <input
          id="marks"
          className="text-center"
          type="number"
          value={marks ?? ""}
          placeholder="-- Marks --"
          onWheel={numberInputOnWheelPreventChange}
          onChange={(e) => setMarks(parseFloat(e.target.value))}
        />
      </div>
      <div className="py-3">
        <label htmlFor="credit"></label>
        <input
          id="credit"
          type="number"
          className="text-center"
          value={credit ?? ""}
          placeholder="-- Credit --"
          onWheel={numberInputOnWheelPreventChange}
          onChange={(e) => setCredit(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button
          onClick={handelAdd}
          className="m-1 rounded-lg bg-sky-700 px-2 py-1 font-semibold text-white hover:shadow-lg"
        >
          +ADD
        </button>
        <button
          onClick={handelReset}
          className="m-1 rounded-lg bg-red-600 px-2 py-1 font-semibold text-white hover:shadow-lg"
        >
          Reset
        </button>
        <button
          onClick={handelCalculate}
          className="m-1 rounded-lg bg-sky-700 px-2 py-1 font-semibold text-white hover:shadow-lg"
        >
          Calculate
        </button>
      </div>
      <div>
        {showNotice2 && (
          <p className="mb-2 rounded-md border-red-500 bg-red-300 p-1 text-red-600">
            No data to work on
          </p>
        )}
      </div>
      <div>{showNotice3 && <p>GPA : {result} </p>}</div>
    </div>
  );
}
