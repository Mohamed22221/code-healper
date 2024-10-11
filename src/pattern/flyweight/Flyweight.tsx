import React from "react";

type TerrainData = {
  type: string; // نوع التضاريس (مثل جبال، سهول، إلخ)
  color: string; // اللون أو الخصائص المرئية الأخرى
};

const terrains: Record<string, TerrainData> = {};
let terrainCreationCount = 0;

// const getFlyweightFactory = (terrainType: string): TerrainData => {
//   if (!terrains[terrainType]) {
//     terrainCreationCount++;
//     // إنشاء نوع تضاريس جديد إذا لم يكن موجودًا
//     terrains[terrainType] = {
//       type: terrainType,
//       color: terrainType === "mountain" ? "gray" : "green",
//     };
//   }
//   return terrains[terrainType]; // إرجاع التضاريس المشتركة
// }

const getFlyweightFactory = (terrainType: string): TerrainData => {
  if (!terrains[terrainType]) {
    terrainCreationCount++;
    terrains[terrainType] = {
      type: terrainType,
      color: terrainType === "mountain" ? "gray" : "green",
    }
  }

  return terrains[terrainType];

}

type TerrainProps = {
  terrain: { type: string; color: string }; // بيانات التضاريس المشتركة
  location: string; // موقع التضاريس
};

const Terrain: React.FC<TerrainProps> = ({ terrain, location }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg mb-4">
      <h2 className="text-lg font-semibold">موقع: {location}</h2>
      <p className="text-sm text-gray-700">
        نوع التضاريس: <span className="font-medium">{terrain.type}</span>
      </p>
      <p className="text-sm text-gray-700">
        اللون:{" "}
        <span style={{ color: terrain.color }} className="font-medium">
          {terrain.color}
        </span>
      </p>
    </div>
  );
};

const AppTerrain: React.FC = () => {
  // الحصول على بيانات التضاريس باستخدام المصنع

  const productsTerrain = [
    { type: "mountain", color: "gray", location: "موقع 1" },
    { type: "mountain", color: "gray", location: "موقع 2" },
    { type: "mountain", color: "gray", location: "موقع 3" },
    { type: "plain", color: "green", location: "موقع 4" },
    { type: "plain", color: "green", location: "موقع 5" },
    { type: "Hill", color: "red", location: "موقع 6" },

  ];
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
      عدد أنواع التضاريس التي تم إنشاؤها: {terrainCreationCount}
      </h1>
      {productsTerrain.map((terrain, index) => {
        const dataTerrain = getFlyweightFactory(terrain.type);
        return (
          <Terrain
            key={index}
            terrain={dataTerrain}
            location={terrain.location}
          />
        );
      })}
    </div>
  );
};

export default AppTerrain;
