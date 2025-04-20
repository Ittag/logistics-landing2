"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithAnimationProps extends Omit<ImageProps, "className"> {
  wrapperClassName?: string
  imageClassName?: string
  animation?: "fade-in" | "zoom-in" | "slide-up" | "pulse"
}

export function ImageWithAnimation({
  wrapperClassName,
  imageClassName,
  animation = "fade-in",
  ...props
}: ImageWithAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentElement = document.getElementById(`image-${props.src}`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [props.src])

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity duration-1000 ease-in-out",
    "zoom-in": "scale-95 opacity-0 transition-all duration-1000 ease-in-out",
    "slide-up": "translate-y-4 opacity-0 transition-all duration-1000 ease-in-out",
    pulse: "opacity-0 transition-all duration-1000 ease-in-out hover:scale-105 transition-transform duration-300",
  }

  const activeClasses = {
    "fade-in": "opacity-100",
    "zoom-in": "scale-100 opacity-100",
    "slide-up": "translate-y-0 opacity-100",
    pulse: "opacity-100",
  }

  return (
    <div id={`image-${props.src}`} className={cn("overflow-hidden", wrapperClassName)}>
      <Image
        {...props}
        className={cn(
          animationClasses[animation],
          isInView && activeClasses[animation],
          "transition-all duration-300 hover:scale-105",
          imageClassName,
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
