"use client";

import { useEffect, useRef } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export default function BlogContent({ content }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const codeBlocks = containerRef.current.querySelectorAll("code");

    codeBlocks.forEach((codeBlock) => {
      const button = document.createElement("button");
      button.textContent = "Copy";
      button.style.position = "absolute";
      button.style.top = "8px";
      button.style.right = "8px";
      button.style.padding = "4px 8px";
      button.style.fontSize = "12px";
      button.style.border = "none";
      button.style.background = "hsl(240 5.9% 90%)";
      button.style.color = "#0000008f";
      button.style.cursor = "pointer";
      button.style.borderRadius = "4px";
      button.style.zIndex = "10";

      codeBlock.parentNode?.appendChild(button);

      button.addEventListener("click", () => {
        navigator.clipboard.writeText(codeBlock.textContent || "");
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 3000);
      });
    });
  }, [content]);

  return (
    <div className="mx-auto" ref={containerRef}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
