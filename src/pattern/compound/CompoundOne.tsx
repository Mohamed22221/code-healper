
import React from "react";

interface PropsChildren {
    children: React.ReactNode
}
interface ImageStyle {
    src : string
    alt : string
    
}
function Card({ children }: PropsChildren) {
    // يمكنك إضافة فئات Tailwind للتصميم الأساسي للبطاقة
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 my-3">
        {children}
      </div>
    );
  }
  
  function Image({ src, alt }: ImageStyle) {
    return (
      <img
        className="w-full h-48 object-cover"
        src={src}
        alt={alt}
      />
    );
  }
  
  function Title({ children }: PropsChildren) {
    return (
      <h2 className="text-2xl font-bold mb-4">
        {children}
      </h2>
    );
  }
  
  function Description({ children }: PropsChildren) {
    return (
      <p className="text-gray-700 text-base">
        {children}
      </p>
    );
  }

Card.Image = Image;
Card.Title = Title;
Card.Description = Description;



/*
This code snippet defines a React functional component named CompoundOne. 
It returns a JSX element that displays two cards with images, titles, and descriptions. 
The cards are identical except for their titles.
The code uses a compound component pattern, where the Card component has sub-components Image, Title, and Description 
that can be used to customize its content. 
*/
const CompoundOne = () => {
    return (
      <div className="app">
        <Card>
          <Card.Image
            src="/logo192.png"
            alt="Placeholder Image"
          />
          <Card.Title>I'm Azfar Aslam</Card.Title>
          <Card.Description>
            This is a description for the first card. If you like this tutorial,
            please like, subscribe, and share.
          </Card.Description>
        </Card>
        <Card>
          <Card.Image
            src="/logo192.png"
            alt="Placeholder Image"
          />
          <Card.Title>I'm Lead Web Developer</Card.Title>
          <Card.Description>
            This is a description for the second card. If you like this tutorial,
            please like, subscribe, and share.
          </Card.Description>
        </Card>
      </div>
    );
  };
  

export default CompoundOne;