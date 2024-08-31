import React from "react";
import { useMediatorStore } from "./mediatorStore";

const PlaneOne = () => {
  const { updateAirAdvice } = useMediatorStore();
  return (
    <div className="bg-slate-100 w-[300px] flex flex-col justify-center text-center">
      <h1>الطائره الاولي</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
            updateAirAdvice(
              "قامت الطائره الثانيه بالاقلاع علي بعد 200 قدم رجاء طيران الطائره الاولي علي بعد 100 قدم"
            )
          }

      >
        اخذ النصيحه من المركذ
      </button>
    </div>
  );
};

const PlaneTwo = () => {
  const { updateAirAdvice } = useMediatorStore();
  return (
    <div className="bg-slate-100 w-[300px] flex flex-col justify-center text-center">
      <h1>الطائره الثانيه</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
        onClick={() =>
            updateAirAdvice(
              "قامت الطائره الاولي بالاقلاع علي بعد 100 قدم رجاء طيران الطائره الثانيه علي بعد 200 قدم"
            )
          }
      >
        اخذ النصيحه من المركذ
      </button>
    </div>
  );
};
const Airplanes = () => {
  const { airAdvice } = useMediatorStore();
  return (
    <div>
      <h1 className="text-center py-3 font-bold">{airAdvice}</h1>
      <div className="flex gap-3 justify-center">
        <PlaneTwo />
        <PlaneOne />
      </div>
    </div>
  );
};

export default Airplanes;
