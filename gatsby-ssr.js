import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>,
  ]);
}
