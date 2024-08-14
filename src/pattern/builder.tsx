import React from "react";
import { useEffect, useState } from "react";

interface House {
  walls: string;
  roof: string;
}

interface HouseBuilder {
  buildWalls(walls: string): void;
  buildRoof(roof: string): void;
  getBuild : House;
}

export function useHouseBuilder(): HouseBuilder {
  const [house, setHouse] = useState<House>({
    walls: "",
    roof: "",
  });
  const buildWalls = (walls: string) => {
    setHouse((prevHouse) => ({ ...prevHouse, walls }));
  };
  const buildRoof = (roof: string) => {
    setHouse((prevHouse) => ({ ...prevHouse, roof }));
  };
  const getBuild = house;


  return {
    buildWalls,
    buildRoof,
    getBuild,
  };
}


// example 
export function MyComponent() {
  const { buildWalls, buildRoof, getBuild } = useHouseBuilder();
  useEffect(() => {
    buildWalls("brick");
    buildRoof("wood");

  }, []);

  // show the result
  return (
    <div>
      <p>Walls: {getBuild.walls}</p>
      <p>Roof: {getBuild.roof}</p>
    </div>
  );
}
