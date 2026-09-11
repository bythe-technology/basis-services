"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import {
  buildSmsUrl,
  detectSmsPlatform,
  isMobileSmsDevice,
} from "@/utils/sms";

type SmsLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  phone: string;
  message: string;
};

export function SmsLink({ phone, message, onClick, ...props }: SmsLinkProps) {
  const router = useRouter();
  const fallbackHref = buildSmsUrl(phone, message);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (!isMobileSmsDevice(navigator.userAgent)) {
      event.preventDefault();
      const quoteSection = document.getElementById("quote");
      if (quoteSection) quoteSection.scrollIntoView({ behavior: "smooth" });
      else router.push("/#quote");
      return;
    }

    const platform = detectSmsPlatform(
      navigator.userAgent,
      navigator.maxTouchPoints,
    );
    event.currentTarget.href = buildSmsUrl(phone, message, platform);
  };

  return <a {...props} href={fallbackHref} onClick={handleClick} />;
}
