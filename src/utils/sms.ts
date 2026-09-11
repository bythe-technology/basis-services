export type SmsPlatform = "ios" | "standard";

export function detectSmsPlatform(
  userAgent: string,
  maxTouchPoints = 0,
): SmsPlatform {
  const isIos = /iPad|iPhone|iPod/i.test(userAgent);
  const isTouchMac = /Macintosh/i.test(userAgent) && maxTouchPoints > 1;
  return isIos || isTouchMac ? "ios" : "standard";
}

export function isMobileSmsDevice(userAgent: string): boolean {
  return /Android|iPad|iPhone|iPod|Mobile/i.test(userAgent);
}

export function buildSmsUrl(
  phone: string,
  message: string,
  platform: SmsPlatform = "standard",
): string {
  const normalizedPhone = phone.replace(/[^+\d]/g, "");
  const separator = platform === "ios" ? "&" : "?";
  return `sms:${normalizedPhone}${separator}body=${encodeURIComponent(message.trim())}`;
}
