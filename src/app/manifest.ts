import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Basis Services", short_name: "Basis", description: "Professional cleaning services across Greater Los Angeles.", start_url: "/", display: "standalone", background_color: "#f7f2e8", theme_color: "#171912", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }, { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }] };
}
