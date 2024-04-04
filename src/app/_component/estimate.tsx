"use client";

export default function Estimate() {
  const numberInputOnWheelPreventChange = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    (e.target as HTMLInputElement).blur();
    e.stopPropagation();
    setTimeout(() => {
      (e.target as HTMLInputElement).focus();
    }, 0);
  };

  return (
    <div className="text-black">
      <div>
        <label htmlFor="name"></label>
        <input
          className="text-center"
          id="name"
          type="text"
          placeholder="-- Name --"
        />
      </div>
      <div>
        <label htmlFor="marks"></label>
        <input
          id="marks"
          className="text-center"
          type="number"
          placeholder="-- Marks --"
          onWheel={numberInputOnWheelPreventChange}
        />
      </div>
      <div>
        <label htmlFor="credit"></label>
        <input
          id="credit"
          type="number"
          className="text-center"
          placeholder="-- Credit --"
          onWheel={numberInputOnWheelPreventChange}
        />
      </div>
    </div>
  );
}
