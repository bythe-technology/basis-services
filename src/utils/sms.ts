export function buildSmsUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/[^+\d]/g, "");
  return `sms:${normalizedPhone}?body=${encodeURIComponent(message.trim())}`;
}
