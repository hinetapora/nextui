// components/gradient-box.tsx
"use client"; // Ensure it's a client component

import {ReactNode, forwardRef, KeyboardEvent} from "react";
import {tv, VariantProps} from "tailwind-variants";

const styles = tv({
  base: "flex relative w-full h-auto",
  variants: {
    to: {
      top: "bg-gradient-to-t",
      right: "bg-gradient-to-r",
      left: "bg-gradient-to-l",
      bottom: "bg-gradient-to-b",
      "top-right": "bg-gradient-to-tr",
      "top-left": "bg-gradient-to-tl",
      "bottom-right": "bg-gradient-to-br",
      "bottom-left": "bg-gradient-to-bl",
    },
    color: {
      green: "from-green-300 via-green-400 to-green-500",
      yellow: "from-yellow-300 via-yellow-400 to-yellow-500",
      blue: "from-blue-300 via-blue-400 to-blue-500",
      red: "from-red-300 via-red-400 to-red-500",
      indigo: "from-indigo-300 via-indigo-400 to-indigo-500",
      gray: "from-gray-200 via-gray-300 to-gray-400",
      // Add more colors as needed
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      "3xl": "shadow-3xl",
    },
    isCentered: {
      true: "items-center justify-center",
    },
  },
  defaultVariants: {
    radius: "2xl",
    to: "top-right",
    isCentered: false,
  },
});

export interface GradientBoxProps extends VariantProps<typeof styles> {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  isPressable?: boolean;
}

export const GradientBox = forwardRef<HTMLDivElement, GradientBoxProps>((props, ref) => {
  const {
    children,
    className,
    to,
    color,
    radius,
    shadow,
    isCentered,
    onClick,
    isPressable,
    ...rest
  } = props;

  // Handler for keyboard events to support accessibility
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isPressable && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick && onClick();
    }
  };

  // Define additional classes if the box is pressable
  const additionalClasses = isPressable
    ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    : "";

  return (
    <div
      ref={ref}
      className={styles({
        to,
        color,
        radius,
        shadow,
        isCentered,
        class: `${className || ""} ${additionalClasses}`.trim(),
      })}
      role={isPressable ? "button" : undefined}
      tabIndex={isPressable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  );
});

GradientBox.displayName = "GradientBox";
