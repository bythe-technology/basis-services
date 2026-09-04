import Image from "next/image";

export function BytheCredit() {
  return (
    <a
      className="bytheCredit"
      href="https://bythe.tech"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Developed by Bythe Technology — visit our website"
    >
      <span>Developed by</span>
      <Image
        src="/brand/bythe-logo.svg"
        alt="Bythe Technology"
        width={36}
        height={28}
      />
    </a>
  );
}
