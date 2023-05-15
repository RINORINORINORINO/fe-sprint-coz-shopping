import React from "react";

export default function Category({ item }) {
  return (
    <div>
      <img src={item.image_url} alt={item.title} />
      <span># {item.title}</span>
    </div>
  );
}
