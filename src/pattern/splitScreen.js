import React from "react";
//handel split screen
export const SplitScreen = ({ children, leftWidth, rightWidth }) => {
  const [leftComponent, rightComponent] = children;
  return (
    <div className="md:flex">
      <div className={`${leftWidth}`}>{leftComponent}</div>
      <div className={`${rightWidth}`}>{rightComponent}</div>
    </div>
  );
};
//component left
export const LeftComponent = ({ title }) => {
  return (
    <div className="bg-slate-100">
      <h2>{title}</h2>
    </div>
  );
};
//component left
export const RightComponent = ({ title }) => {
  return (
    <div className="bg-slate-400">
      <h2>{title}</h2>
    </div>
  );
};
//show result split screen in app page
export const ShowExampleSplit = () => {
  return (
    <SplitScreen leftWidth="md:flex-1" rightWidth="md:flex-1">
      <LeftComponent title="left" />
      <RightComponent title="right" />
    </SplitScreen>
  );
};
