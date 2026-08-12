export type UserRole = "client" | "vendor";
export type BookingStatus = "Pending" | "Confirmed" | "Declined";
export type PriceRange = "$" | "$$" | "$$$" | "$$$$";

export type Profile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  vendor_id: string | null;
  created_at: string;
};

export type VendorService = {
  name: string;
  price: string;
};

export type Vendor = {
  id: string;
  owner_id: string | null;
  name: string;
  category: string;
  city: string;
  price_range: PriceRange;
  rating: number;
  review_count: number;
  tagline: string;
  about: string;
  services: VendorService[];
  portfolio: string[];
  color: string;
  mono: string;
  cover_image_url: string | null;
  created_at: string;
};

export type Review = {
  id: string;
  vendor_id: string;
  author: string;
  rating: number;
  text: string;
  created_at: string;
};

export type Booking = {
  id: string;
  client_id: string;
  vendor_id: string;
  client_name: string;
  service: string;
  date: string | null;
  time: string | null;
  notes: string;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
};

export type LoomEvent = {
  id: string;
  client_id: string;
  name: string;
  date: string | null;
  type: string;
  created_at: string;
};

export type MessageThread = {
  id: string;
  client_id: string;
  vendor_id: string;
  client_name: string;
  created_at: string;
};

export type Message = {
  id: string;
  thread_id: string;
  sender_role: UserRole;
  sender_id: string;
  text: string;
  created_at: string;
};

export const CATEGORIES = [
  "Venues",
  "Photography",
  "Makeup & Hair",
  "Decor",
  "Event Planning",
  "Wedding Planner",
  "Catering",
  "AV & Lighting",
  "Production",
  "Fabrication",
  "Studio",
  "Crew",
  "Post",
  "Talent",
  "Model Agency",
  "Stylist",
  "Agency",
  "Logistics",
  "Security",
  "Entertainment",
  "Press / PR",
  "Field Ops",
  "Mehndi",
  "Bridal Wear",
  "Jewellery",
  "DJ & Entertainment",
  "Priest",
  "Gifting",
] as const;

export const EVENT_TYPES = [
  "Wedding",
  "Engagement",
  "Mehndi & Sangeet",
  "Brand Activation",
  "Commercial Shoot",
  "Runway Show",
  "Festival",
  "Corporate Gala",
  "Conference",
  "Rally",
  "Baby Shower",
  "Griha Pravesh",
  "Anniversary",
  "Other",
] as const;

export const CITIES = [
  "Toronto",
  "Vancouver",
  "New York",
  "New Jersey",
  "Los Angeles",
  "Chicago",
  "Boston",
  "Atlanta",
  "Austin",
  "Dallas",
  "Nashville",
  "Miami",
  "Washington DC",
  "London",
  "Paris",
  "Milan",
  "Dubai",
  "Jaipur",
  "Remote",
] as const;

export const CATEGORY_COLOR: Record<string, string> = {
  Venues: "#7a2b2e",
  Photography: "#4a3f38",
  "Makeup & Hair": "#a34b3f",
  Decor: "#5f6b52",
  "Event Planning": "#c99a4a",
  "Wedding Planner": "#c99a4a",
  Catering: "#a0522d",
  "AV & Lighting": "#a34b3f",
  Production: "#4a3f38",
  Fabrication: "#8a5a2b",
  Studio: "#9c6b3f",
  Crew: "#4a3f38",
  Post: "#5f6b52",
  Talent: "#c99a4a",
  "Model Agency": "#7a2b2e",
  Stylist: "#a34b3f",
  Agency: "#7a2b2e",
  Logistics: "#5f6b52",
  Security: "#2a2320",
  Entertainment: "#c99a4a",
  "Press / PR": "#9c6b3f",
  "Field Ops": "#5f6b52",
  Mehndi: "#8a5a2b",
  "Bridal Wear": "#7a2b2e",
  Jewellery: "#c99a4a",
  "DJ & Entertainment": "#2a2320",
  Priest: "#5f6b52",
  Gifting: "#a34b3f",
};

export function monogram(name: string): string {
  const words = name.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
