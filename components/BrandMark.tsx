import Image from "next/image";

type Variant = "icon" | "wordmark" | "full";

const SOURCES: Record<Variant, { src: string; width: number; height: number }> = {
  // Intrinsic ratios come from the vector artwork extracted from the brand guidelines.
  icon: { src: "/brand/icon.svg", width: 48, height: 60 },
  wordmark: { src: "/brand/wordmark.svg", width: 137, height: 63 },
  full: { src: "/brand/logo-full.svg", width: 137, height: 127 },
};

interface BrandMarkProps {
  variant: Variant;
  /** Rendered height in px; width follows the artwork's intrinsic ratio. */
  height: number;
  /** Empty string marks the mark as decorative when adjacent text already names the brand. */
  alt: string;
  className?: string;
  priority?: boolean;
}

export function BrandMark({ variant, height, alt, className, priority = false }: BrandMarkProps) {
  const source = SOURCES[variant];
  const width = Math.round((source.width / source.height) * height);

  return (
    <Image
      src={source.src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      className={className}
      aria-hidden={alt === "" || undefined}
    />
  );
}
