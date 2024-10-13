import React, { useState, useEffect } from 'react';

// نوع الصورة
type Image = {
  id: number;
  url: string;
  title: string;
};

// مكون الوكيل الذكي
const SmartImageProxy: React.FC<{ image: Image }> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false); // حالة لتحديد ما إذا كانت الصورة محملة
  const [clientsCount, setClientsCount] = useState(0); // حالة لتتبع عدد العملاء

  // دالة لتحميل الصورة
  const loadImage = () => {
    setIsLoaded(true);
    setClientsCount(clientsCount + 1);
  };

  // دالة لإلغاء تحميل الصورة إذا لم يكن هناك عملاء
  const unloadImage = () => {
    if (clientsCount > 0) {
      setClientsCount(clientsCount - 1);
    }
    if (clientsCount === 1) {
      setIsLoaded(false); // إلغاء تحميل الصورة إذا كان العملاء صفرًا
    }
  };

  // تأثير يقوم بإلغاء تحميل الصورة إذا تم الخروج من المكون
  useEffect(() => {
    return () => {
      unloadImage();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {!isLoaded ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
          onClick={loadImage}
        >
          Load {image.title}
        </button>
      ) : (
        <div className="relative">
          <img
            src={image.url}
            alt={image.title}
            className="w-96 h-64 object-cover rounded-lg shadow-lg"
          />
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={unloadImage}
          >
            Unload
          </button>
        </div>
      )}
      <p className="text-gray-500 mt-2">Clients: {clientsCount}</p>
    </div>
  );
};
export default SmartImageProxy;