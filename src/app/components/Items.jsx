import React from "react";

const borderColors = [
  "border-indigo-500",
  "border-blue-500",
  "border-purple-500",
  "border-orange-500",
  "border-red-500",
  "border-green-500",
  "border-pink-500",
  "border-teal-500",
];

export default function Items({ title, date, description }) {
  const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];

  return (
    <div className={`border-l-4 ${randomColor} pl-6`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
