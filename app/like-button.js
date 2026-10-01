'use client';

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(1);

  function handleClick() {
    setLikes(likes * 2);
  }

  return <button onClick={handleClick}>Like {likes}</button>
}
