// import { useState, useEffect } from "react";
// import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import { Component } from "react";

interface LinkCardProps {
  image: string;
  title: string;
  link: string;
}

export default function LinkCard({ image, title, link }: LinkCardProps) {
  return (
    <div className="LinkCard flex w-full max-w-[280px] flex-1 flex-col items-center justify-center gap-6 rounded-4xl border-12 border-[var(--colour-primary)] p-4 [@media(min-width:900px)]:flex-[1_1_0%] [@media(min-width:900px)]:justify-between">
      <img
        src={image}
        alt={title}
        className="block h-auto max-h-30 w-full max-w-full object-contain"
      />
      <a href={link} className="link-card-link block">
        <h3>{title}</h3>
      </a>
    </div>
  );
}
