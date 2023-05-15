import React from "react";

export default function Brand({ item }) {
  return (
    <div>
      <img src={item.brand_image_url} alt={item.brand_name} />
      <span>{item.brand_name}</span>
      <span>관심고객수</span>
      <span>{item.follower} followers</span>
    </div>
  );
}
