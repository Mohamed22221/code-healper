import React, { useState } from 'react';

// هذا هو المكون الذي يعرض الفيديو المؤقت (الوكيل الافتراضي)
const VideoProxy: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // حالة لتحديد ما إذا كان الفيديو قد تم تحميله أم لا

  // هذه الدالة تقوم بتحميل الفيديو عندما يتم استدعاؤها (على سبيل المثال، عند الضغط على زر تشغيل)
  const loadVideo = () => {
    setIsVideoLoaded(true); // تغيير الحالة للسماح بتحميل الفيديو
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      {/* إذا كان الفيديو لم يتم تحميله بعد، نعرض الصورة المؤقتة */}
      {!isVideoLoaded ? (
        <div className="text-center">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Video Placeholder"
            className="cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105" // إضافة تأثير عند التحويم
            onClick={loadVideo} // عند الضغط على الصورة يتم تحميل الفيديو
          />
          <p className="mt-4 text-gray-500">Click on the image to load the video</p>
        </div>
      ) : (
        // بمجرد تحميل الفيديو يتم استبدال الصورة المؤقتة بالفيديو الفعلي
        <video width="600" controls autoPlay className="rounded-lg shadow-lg">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
export default VideoProxy;