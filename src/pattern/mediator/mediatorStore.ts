import create from "zustand";

interface MediatorState {
  airAdvice: string;
  updateAirAdvice: ( msg : string) => void;
}
export const useMediatorStore= create<MediatorState>((set) => ({
  airAdvice: "الرجاء طيران الطائره الاولي علي مسافه 100 قدم و الطائره الثانيه علي مسافه 200 قدم",
  updateAirAdvice: (msg : string)=> set((state: { airAdvice: string; }) => ({ airAdvice: msg})),
}))