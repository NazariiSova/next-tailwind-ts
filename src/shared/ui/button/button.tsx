"use client"
import React from "react";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  variant?: "outline" | "filled" | "transparent";
  size?: "large" | "medium" | "small";
  color?:  "transparent" | "green";
}

export const Button = ({
  children,
  className,
  title,
  variant = "outline",
  size = "medium",
  color = "green",
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        "w-fit whitespace-nowrap flex items-center justify-center gap-x-2 border border-green rounded-full px-10 py-3 font-bold transition duration-500 active:scale-95 shadow-b shadow-2xl shadow-green/30",
        {
          "py-3 px-3": size === "large",
          "py-3 px-4": size === "medium",
          "text-sm leading-4 py-[5px] px-3": size === "small",
          "border border-green text-white bg-green hover:bg-green/80":
            variant === "filled",
          "text-green bg-transparent text-primary hover:bg-green/80 hover:text-white": variant === "outline",
        },
        className,
      )}
      {...rest}
    >
      {children || title}
    </button>
  );
};
