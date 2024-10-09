import { Product, ProductDisplay, ProductItem } from "./BridgeProduct";
import React from 'react';

// عرض الشبكة
const GridView: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
      <ProductDisplay
        products={products}
        render={(product) => (
            <div className="w-full sm:w-1/2 lg:w-1/3">
            <ProductItem {...product} />
          </div>
        )}
      />
    );
  };
  
  // عرض القائمة
  const ListView: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
      <ProductDisplay
        products={products}
        render={(product) => (
            <div className="w-full">
            <ProductItem {...product} />
          </div>
        )}
      />
    );
  };
  
  // بيانات المنتجات
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
  ];
  
  // المكون الرئيسي للتطبيق
  const ViewBridgeProduct = () => {
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

    return (
      <div className="p-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`py-2 px-4 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid View
          </button>
          <button
            className={`py-2 px-4 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setViewMode('list')}
          >
            List View
          </button>
        </div>
  
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <GridView products={products} />
          </div>
        ) : (
          <div className="space-y-6">
            <ListView products={products} />
          </div>
        )}
      </div>
    );
  };

  export default ViewBridgeProduct;