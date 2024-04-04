"use client";
import { useState } from "react";

type GpaProps = {
  point: number;
  credit: number;
};

export default function Gpa() {
  const [cgpa, setCgpa] = useState<GpaProps[]>([]);
  const [point, setPoint] = useState<number | null>(null);
  const [credit, setCredit] = useState<number | null>(null);

  const numberInputOnWheelPreventChange = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    (e.target as HTMLInputElement).blur();
    e.stopPropagation();
    setTimeout(() => {
      (e.target as HTMLInputElement).focus();
    }, 0);
  };

  const handelMarks = (e: React.ChangeEvent<HTMLInputElement>) => {
    let marks = parseFloat(e.target.value);

    if (marks > 89) {
      marks = 10;
    } else if (marks > 79) {
      marks = 9;
    } else if (marks > 69) {
      marks = 8;
    } else if (marks > 59) {
      marks = 7;
    } else if (marks > 49) {
      marks = 6;
    } else if (marks > 39) {
      marks = 5;
    } else if (marks > 29) {
      marks = 4;
    } else if (marks > 19) {
      marks = 3;
    } else if (marks > 9) {
      marks = 2;
    } else {
      marks = 1;
    }

    setPoint(marks);
  };

  const handelCalculate = () => {
    const newCgpa: GpaProps = { point: point!, credit: credit! };
    setCgpa([...cgpa, newCgpa]);
  };

  const handelAdd = () => {
    const newCgpa: GpaProps = { point: point!, credit: credit! };
    setCgpa([...cgpa, newCgpa]);
    setPoint(null);
    setCredit(null);
  };

  return (
    <div className="mx-auto flex w-10 flex-col items-center justify-center bg-red-400 p-4 text-black sm:w-9/12 ">
      <div className="py-3">
        <label htmlFor="marks"></label>
        <input
          id="marks"
          className="text-center"
          type="number"
          placeholder="-- Marks --"
          onWheel={numberInputOnWheelPreventChange}
          onChange={handelMarks}
        />
      </div>
      <div className="py-3">
        <label htmlFor="credit"></label>
        <input
          id="credit"
          type="number"
          className="text-center"
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
          onClick={handelCalculate}
          className="m-1 rounded-lg bg-sky-700 px-2 py-1 font-semibold text-white hover:shadow-lg"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
