
import React, { useState } from "react";
//exemple 1 =======> Execute this process in more than one step

export function curringOperation() {
  function sum(operation) {
    return (a) => {
      return (b) => {
        if (operation === "sum") return a + b;
        else if (operation === "multiply") return a * b;
        else if (operation === "divide") return a / b;
        else if (operation === "subtract") return a - b;
        else return "No / Invalid Operation Selected";
      };
    };
  }
  const sumOperation = sum("sum");
  const sumNumber = sumOperation(2);
  const sumResult = sumNumber(5);
  console.log(sumResult);
  return <div>exemple 1 curring</div>;
}

// exemple 2 ========> counter value


export function curringCounter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const handleState = (setState) => {
    return (state) => {
      return (value) => {
        setState((state += value));
      };
    };
  };

  return (
    <div>
      <p>Counter 1: {counter1}</p>
      <p>Counter 2: {counter2}</p>
      <p>Counter 3: {counter3}</p>

      <Button
        text="Add 1 to counter 1!"
        value={1}
        handleState={handleState(setCounter1)(counter1)}
      />
      <Button
        text="Add 2 to counter 1!"
        value={2}
        handleState={handleState(setCounter1)(counter1)}
      />
      <Button
        text="Add 3 to counter 1!"
        value={3}
        handleState={handleState(setCounter1)(counter1)}
      />
      <Button
        text="Add 2 to counter 2!"
        value={2}
        handleState={handleState(setCounter2)(counter2)}
      />
      <Button
        text="Add 3 to counter 3!"
        value={3}
        handleState={handleState(setCounter3)(counter3)}
      />
    </div>
  );
}

export function Button({ handleState, value, text }) {
  return <button onClick={() => handleState(value)}>{text}</button>;
}



//exemple 3 ========> handel msg function

export function curryMsg(type) {
  return (date) => {
    return (message) => {
      const formattedMsg = `${type}::${date}::${message}`;
      return formattedMsg;
    };
  };
}
export const infoMsg = curryMsg("Info")(Date()); // ==>>> return function
export const errorMsg = curryMsg("Error")(Date()); // ==>>> return function
export const successMsg = curryMsg("Success")(Date()); // ==>>> return function

// {curryMsg("DEBUG")( Date())("This is a debug message")} ==>>> success because is function
// {infoMsg("This is a info message")} ==>>> success because is function
// {errorMsg("There is an error here")} ==>>> success because is function
// {successMsg("There is an success here")}  ==>>> success because is function


// not curry function
export function notCurryMsg(type, date, message) {
  const formattedMsg = `${type}::${date}::${message}`;
  return formattedMsg;
}
export const notInfoMsg = notCurryMsg("Info", Date());
export const notErrorMsg = notCurryMsg("Error", Date());
export const notsSuccessMsg = notCurryMsg("Success", Date());

// {notInfoMsg("This is a info message")} ==>>> erorrrrrrrr is not a function
// {notErrorMsg("This is a info message")} ==>>> erorrrrrrrr is not a function
// {notsSuccessMsg("This is a info message")} ==>>> erorrrrrrrr is not a function


//exemple 4 ========> filter id 
