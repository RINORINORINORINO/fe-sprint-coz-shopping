import React from "react";

export default function Exhibition({ item }) {
  return (
    <div>
      <img src={item.image_url} alt={item.title} />
      <span>{item.title}</span>
      <span>{item.sub_title}</span>
    </div>
  );
}
