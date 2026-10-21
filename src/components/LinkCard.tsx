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
    <div className="border-12 flex flex-col flex-1 !justify-between border-[var(--colour-primary)] rounded-4xl max-w-4/5 p-4 flex flex-col items-center justify-center gap-10">
      <img
        src={image}
        alt={title}
        className="block max-w-full h-auto min-w-50 max-h-30 object-contain"
      />
      <a href={link} className="link-card-link block">
        <h3>{title}</h3>
      </a>
    </div>
  );
}
