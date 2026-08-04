"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

interface MenuItemImageProps {
  src: string;
  name: string;
  locale: Locale;
}

/**
 * The thumbnail on a menu card. Tapping it opens the same photo full-size in a
 * lightweight overlay — the thumbnail itself stays small enough to sit next to the
 * item text, but a customer who wants a closer look gets one without leaving the page.
 */
export function MenuItemImage({ src, name, locale }: MenuItemImageProps) {
  const t = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.enlargeImage}
        className="focus-visible:outline-botanical size-28 shrink-0 overflow-hidden rounded-xl outline-offset-2 sm:size-36"
      >
        <Image
          src={src}
          alt=""
          width={288}
          height={288}
          sizes="(min-width: 640px) 144px, 112px"
          quality={90}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="bg-ink/80 fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={close}
        >
          <figure className="relative max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={name}
              width={1200}
              height={1200}
              quality={90}
              sizes="90vw"
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              priority
            />
            <figcaption className="text-canvas mt-3 text-center font-medium">{name}</figcaption>
          </figure>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label={t.closeImage}
            className="bg-canvas text-ink absolute end-5 top-5 flex size-11 items-center justify-center rounded-full text-xl leading-none shadow-lg"
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
