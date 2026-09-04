import {
  BedDouble,
  Building2,
  Car,
  CookingPot,
  HomeIcon,
  Hotel,
  Layers3,
  Shirt,
  Sparkles,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/site";

const icons: Record<Service["icon"], LucideIcon> = {
  home: HomeIcon,
  airbnb: BedDouble,
  hotel: Hotel,
  office: Building2,
  garage: Car,
  window: SprayCan,
  carpet: Layers3,
  kitchen: CookingPot,
  deep: Sparkles,
  laundry: Shirt,
};

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  const Icon = icons[name];
  return (
    <div className="serviceIcon">
      <Icon aria-hidden="true" />
    </div>
  );
}
