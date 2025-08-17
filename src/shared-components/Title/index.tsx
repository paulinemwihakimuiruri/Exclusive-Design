import React from "react";
interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-5 rounded-sm bg-red-600" />
      <p className="text-red-600 font-bold">{text}</p>
    </div>
  );
};


export default Title;

