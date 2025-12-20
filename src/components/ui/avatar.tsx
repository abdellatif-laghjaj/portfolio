"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// ⚡ Bolt: Refactor to use next/image for optimized image loading.
// The `asChild` prop allows us to compose Radix's Avatar with Next.js's Image component,
// enabling optimizations like priority loading for LCP elements.
// The `src` prop is made optional in the type definition to prevent build errors
// when the image source is undefined, while a runtime check ensures `next/image`
// only receives a valid `src`.
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  Omit<ImageProps, "asChild" | "src"> & { src?: ImageProps["src"] }
>(({ className, src, ...props }, ref) => {
  if (!src) {
    return null;
  }
  return (
    <AvatarPrimitive.Image ref={ref} asChild>
      <Image
        className={cn("aspect-square", className)}
        fill
        src={src}
        {...props}
      />
    </AvatarPrimitive.Image>
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
