import React from "react";
export const dataBooks = [
  {
    id: "001",
    author: "Chinua Achebe",
    country: "Nigeria",
  },
  {
    id: "002",
    author: "Hans Christian Andersen",
    country: "Denmark",
  },
  {
    id: "003",
    author: "Dante Alighieri",
    country: "Italy",
  },
];
export const ShowBook = ({ books }) => {
  const { author, country } = books;
  return (
    <>
      <h2>author : {author} </h2>
      <p>country : {country}</p>
    </>
  );
};

export const ListOfItems = ({ data, sourceName, ItemComponent }) => {
  return (
    <>
      {data.map((item, key) => {
        return <ItemComponent key={key} {...{ [sourceName]: item }} />;
      })}
    </>
  );
};

//show result
export const ShowExampleList = () => {
  return (
    <div>
      <ListOfItems
        data={dataBooks}
        sourceName={"books"}
        ItemComponent={ShowBook}
      />
    </div>
  );
};
