import React, { ReactNode, createContext, useContext } from "react";
import Icon from "./Icon";

type FlyOutProps = {
  children: ReactNode; // يمثل جميع المكونات الأبناء
};
type FlyOutContextType = {
  open: boolean;
  toggle: (open: boolean) => void;
};

const defaultContextValue: FlyOutContextType = {
  open: false,
  toggle: () => {}, // دالة فارغة كقيمة افتراضية
};

const FlyOutContext = createContext<FlyOutContextType>(defaultContextValue);
export function FlyOut({ children }: FlyOutProps) {
  const [open, toggle] = React.useState(false);

  return (
    <div className={`flyout`}>
      <FlyOutContext.Provider value={{ open, toggle }}>
        {children}
      </FlyOutContext.Provider>
    </div>
  );
}

function Toggle() {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <div
      className="flyout-btn p-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-200"
      onClick={() => toggle(!open)}
    >
      <Icon />
    </div>
  );
}

function List({ children }: FlyOutProps) {
  const { open } = React.useContext(FlyOutContext);
  return (
    open && (
      <ul className="flyout-list bg-white shadow-lg rounded-lg mt-2 p-4 absolute z-10">
        {children}
      </ul>
    )
  );
}

function Item({ children }: FlyOutProps) {
  return (
    <li className="flyout-item py-2 hover:bg-gray-100 transition duration-200">
      {children}
    </li>
  );
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
