
export function curryMsg(type) {
  return (date) => {
    return (message) => {
      const formattedMsg = `${type}::${date}::${message}`;
      return formattedMsg;
    };
  };
}
export const infoMsg = curryMsg("Info")(Date());
export const errorMsg = curryMsg("Error")(Date());
export const successMsg = curryMsg("Success")(Date());

// {curryMsg("DEBUG")( Date())("This is a debug message")}
// {infoMsg("This is a info message")}
// {errorMsg("There is an error here")}
// {successMsg("There is an success here")}
