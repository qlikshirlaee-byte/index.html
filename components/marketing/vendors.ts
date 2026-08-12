export type TeaserVendor = {
  name: string;
  category: string;
  city: string;
  price: string;
  rating: string;
  tagline: string;
  color: string;
  mono: string;
  cover?: string;
};

export const TEASER_VENDORS: Record<string, TeaserVendor[]> = {
  weddings: [
    { name: "Vivaha Planners", category: "Wedding Planner", city: "Toronto", price: "$$$$", rating: "5.0", tagline: "Full-service planning for multi-day celebrations.", color: "#c99a4a", mono: "VP", cover: "/assets/vendors/vivaha-planners.jpg" },
    { name: "Saffron & Sage Catering", category: "Catering", city: "Toronto", price: "$$$", rating: "4.9", tagline: "Regional menus, plated or stationed.", color: "#a0522d", mono: "SS", cover: "/assets/vendors/saffron-sage-catering.jpg" },
    { name: "Saubhagya Décor", category: "Decor", city: "Vancouver", price: "$$$", rating: "4.8", tagline: "Mandaps, florals and room transformations.", color: "#5f6b52", mono: "SD", cover: "/assets/vendors/saubhagya-decor.jpg" },
    { name: "Aperture Films", category: "Photography", city: "London", price: "$$$$", rating: "5.0", tagline: "Documentary-led wedding photography.", color: "#4a3f38", mono: "AF", cover: "/assets/vendors/aperture-films.jpg" },
  ],
  brand: [
    { name: "Meridian Experiential", category: "Agency", city: "New York", price: "$$$$", rating: "4.9", tagline: "Brand activations that people queue for.", color: "#7a2b2e", mono: "ME", cover: "/assets/vendors/meridian-experiential.jpg" },
    { name: "FormWorks Fabrication", category: "Fabrication", city: "New Jersey", price: "$$$", rating: "4.7", tagline: "Custom sets, stages and scenic, built to spec.", color: "#8a5a2b", mono: "FF", cover: "/assets/vendors/formworks-fabrication.jpg" },
    { name: "Lumen AV", category: "AV & Lighting", city: "Toronto", price: "$$$", rating: "4.8", tagline: "Lighting and LED that make the room.", color: "#a34b3f", mono: "LA", cover: "/assets/vendors/lumen-av.jpg" },
    { name: "CastHouse Talent", category: "Talent", city: "Los Angeles", price: "$$$", rating: "4.6", tagline: "Hosts, brand ambassadors and on-camera talent.", color: "#c99a4a", mono: "CT", cover: "/assets/vendors/casthouse-talent.jpg" },
  ],
  production: [
    { name: "Northlight Productions", category: "Production", city: "Los Angeles", price: "$$$$", rating: "4.9", tagline: "Commercials and brand films, start to delivery.", color: "#4a3f38", mono: "NP", cover: "/assets/vendors/northlight-productions.jpg" },
    { name: "Grip & Gaffer Co.", category: "Crew", city: "Atlanta", price: "$$$", rating: "4.7", tagline: "Grip, electric and rigging crews that show up early.", color: "#4a3f38", mono: "GG", cover: "/assets/vendors/grip-gaffer-co.jpg" },
    { name: "Loft 19 Studios", category: "Studio", city: "New York", price: "$$$$", rating: "4.8", tagline: "Three stages, a cyc wall and a freight dock.", color: "#9c6b3f", mono: "LS", cover: "/assets/vendors/loft-19-studios.jpg" },
    { name: "FinalFrame Post", category: "Post", city: "Remote", price: "$$$", rating: "4.9", tagline: "Offline, online, colour and delivery.", color: "#5f6b52", mono: "FP", cover: "/assets/vendors/finalframe-post.jpg" },
  ],
  fashion: [
    { name: "Elite Model Management", category: "Model Agency", city: "New York", price: "$$$$", rating: "4.9", tagline: "Runway and campaign talent, worldwide.", color: "#7a2b2e", mono: "EM", cover: "/assets/vendors/elite-model-management.jpg" },
    { name: "Atelier Rao", category: "Stylist", city: "London", price: "$$$", rating: "4.8", tagline: "Styling, run order and racks that hold.", color: "#a34b3f", mono: "AR", cover: "/assets/vendors/atelier-rao.jpg" },
    { name: "Studio Noir", category: "Studio", city: "Paris", price: "$$$$", rating: "4.9", tagline: "Runway sets, lighting and front of house.", color: "#9c6b3f", mono: "SN", cover: "/assets/vendors/studio-noir.jpg" },
    { name: "Glam Collective", category: "Makeup & Hair", city: "Milan", price: "$$$", rating: "4.7", tagline: "Backstage hair and makeup teams at scale.", color: "#a34b3f", mono: "GC", cover: "/assets/vendors/glam-collective.jpg" },
  ],
  live: [
    { name: "Apex Stage & Production", category: "Production", city: "Austin", price: "$$$$", rating: "4.8", tagline: "Stages, roofs and barricade, signed off on time.", color: "#7a2b2e", mono: "AS", cover: "/assets/vendors/apex-stage-production.jpg" },
    { name: "Movement Logistics", category: "Logistics", city: "Chicago", price: "$$$", rating: "4.7", tagline: "Trucking, runners and artist movement.", color: "#5f6b52", mono: "ML", cover: "/assets/vendors/movement-logistics.jpg" },
    { name: "Sentinel Event Security", category: "Security", city: "Dallas", price: "$$$", rating: "4.6", tagline: "Licensed crowd, gate and backstage security.", color: "#2a2320", mono: "SS", cover: "/assets/vendors/sentinel-event-security.jpg" },
    { name: "SoundField AV", category: "AV & Lighting", city: "Nashville", price: "$$$", rating: "4.8", tagline: "Audio, monitors and lighting for live stages.", color: "#a34b3f", mono: "SA", cover: "/assets/vendors/soundfield-av.jpg" },
  ],
  corporate: [
    { name: "Grandview Ballrooms", category: "Venues", city: "Chicago", price: "$$$$", rating: "4.8", tagline: "Ballrooms for four hundred, with a real kitchen.", color: "#7a2b2e", mono: "GB", cover: "/assets/vendors/grandview-ballrooms.jpg" },
    { name: "Zaika Catering Co.", category: "Catering", city: "New Jersey", price: "$$$", rating: "4.9", tagline: "Plated service and stations, done properly.", color: "#a0522d", mono: "ZC", cover: "/assets/vendors/zaika-catering-co.jpg" },
    { name: "Summit AV & Staging", category: "AV & Lighting", city: "Boston", price: "$$$", rating: "4.7", tagline: "Program AV, staging and show calling.", color: "#a34b3f", mono: "SV", cover: "/assets/vendors/summit-av-staging.jpg" },
    { name: "Ovation Entertainment", category: "Entertainment", city: "Miami", price: "$$$", rating: "4.6", tagline: "Bands, DJs and auction-night energy.", color: "#c99a4a", mono: "OE", cover: "/assets/vendors/ovation-entertainment.jpg" },
  ],
  political: [
    { name: "GroundGame Field Ops", category: "Field Ops", city: "Washington DC", price: "$$$", rating: "4.8", tagline: "Volunteer operations that actually turn out.", color: "#5f6b52", mono: "GF", cover: "/assets/vendors/groundgame-field-ops.jpg" },
    { name: "Capitol Venues", category: "Venues", city: "Washington DC", price: "$$$", rating: "4.6", tagline: "Halls and rooms cleared for public programs.", color: "#7a2b2e", mono: "CV", cover: "/assets/vendors/capitol-venues.jpg" },
    { name: "Beacon Press & PR", category: "Press / PR", city: "Washington DC", price: "$$$$", rating: "4.7", tagline: "Credentialing, statements and surrogate prep.", color: "#9c6b3f", mono: "BP", cover: "/assets/vendors/beacon-press-pr.jpg" },
    { name: "Rally Logistics", category: "Logistics", city: "Remote", price: "$$$", rating: "4.6", tagline: "Signage, stage kit and gear that lands on time.", color: "#5f6b52", mono: "RL", cover: "/assets/vendors/rally-logistics.jpg" },
  ],
};
