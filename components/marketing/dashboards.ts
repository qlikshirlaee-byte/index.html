type Stat = { value: string; label: string };
type Row = { title: string; subtitle: string; pill: string; pillBg: string; pillFg: string };

export type Dash = {
  label: string;
  mono: string;
  color: string;
  name: string;
  category: string;
  stats: Stat[];
  listLabel: string;
  rows: Row[];
};

const GREEN = { pillBg: "#e7ede1", pillFg: "#5f6b52" };
const AMBER = { pillBg: "#f6ecd6", pillFg: "#9c6b3f" };
const GREY = { pillBg: "#efe6d7", pillFg: "#8a7b6e" };

export const DASHBOARDS: Record<string, [Dash, Dash]> = {
  weddings: [
    {
      label: "A photographer's dashboard",
      mono: "A", color: "#7a2b2e", name: "Aperture Films", category: "Photography · Toronto",
      stats: [
        { value: "4", label: "Shoots this month" },
        { value: "2", label: "Galleries to deliver" },
        { value: "$6.2k", label: "Open pipeline" },
      ],
      listLabel: "Upcoming shoots",
      rows: [
        { title: "Anaya & Rohan", subtitle: "Aug 14 · Ceremony + Reception", pill: "Shotlist ready", ...GREEN },
        { title: "Meera & Sam", subtitle: "Aug 22 · Engagement session", pill: "Deposit due", ...AMBER },
        { title: "Priya & Dev — gallery", subtitle: "420 photos · editing", pill: "60% edited", ...GREY },
      ],
    },
    {
      label: "A caterer's dashboard",
      mono: "Z", color: "#9c6b3f", name: "Zaika Catering Co.", category: "Catering · New Jersey",
      stats: [
        { value: "3", label: "Events this week" },
        { value: "540", label: "Covers to plate" },
        { value: "8", label: "Staff scheduled" },
      ],
      listLabel: "This week's events",
      rows: [
        { title: "Kapoor Sangeet", subtitle: "Aug 12 · 220 guests · 3 counters", pill: "Menu locked", ...GREEN },
        { title: "Verma Reception", subtitle: "Aug 18 · 320 guests", pill: "Headcount pending", ...AMBER },
        { title: "Prep & inventory check", subtitle: "Chaat station · dessert bar", pill: "Due Aug 10", ...GREY },
      ],
    },
  ],
  brand: [
    {
      label: "A fabricator's dashboard",
      mono: "F", color: "#7a2b2e", name: "FormWorks Fabrication", category: "Fabrication · New Jersey",
      stats: [
        { value: "3", label: "Builds in shop" },
        { value: "2", label: "Installs this month" },
        { value: "$48k", label: "Open pipeline" },
      ],
      listLabel: "Active builds",
      rows: [
        { title: "Meridian Launch — stage deck", subtitle: "Sep 9 · install Sep 8", pill: "Spec approved", ...GREEN },
        { title: "Retail popup — Soho", subtitle: "Sep 21 · millwork + vitrines", pill: "Drawings due", ...AMBER },
        { title: "Brand wall refinish", subtitle: "Shop · paint & vinyl", pill: "70% complete", ...GREY },
      ],
    },
    {
      label: "An AV team's dashboard",
      mono: "L", color: "#a34b3f", name: "Lumen AV", category: "AV & Lighting · Toronto",
      stats: [
        { value: "4", label: "Shows this month" },
        { value: "2", label: "Cue sheets to lock" },
        { value: "11", label: "Crew scheduled" },
      ],
      listLabel: "Upcoming shows",
      rows: [
        { title: "Meridian Launch", subtitle: "Sep 9 · LED wall + keynote", pill: "Cues locked", ...GREEN },
        { title: "Founders Dinner", subtitle: "Sep 14 · room wash + audio", pill: "Rig list due", ...AMBER },
        { title: "Warehouse activation", subtitle: "Load-in survey pending", pill: "Site visit Sep 3", ...GREY },
      ],
    },
  ],
  production: [
    {
      label: "A production company's dashboard",
      mono: "N", color: "#7a2b2e", name: "Northlight Productions", category: "Production · Los Angeles",
      stats: [
        { value: "2", label: "Shoots in prep" },
        { value: "6", label: "Crew to confirm" },
        { value: "$105k", label: "Open pipeline" },
      ],
      listLabel: "In production",
      rows: [
        { title: "Aria — TVC", subtitle: "Oct 3 · 1 day · Stage B", pill: "Call sheet locked", ...GREEN },
        { title: "Halden — brand film", subtitle: "Oct 17 · 2 days · location", pill: "Permits pending", ...AMBER },
        { title: "Aria — offline edit", subtitle: "Cut 3 · client review", pill: "Due Oct 12", ...GREY },
      ],
    },
    {
      label: "A studio's dashboard",
      mono: "S", color: "#9c6b3f", name: "Loft 19 Studios", category: "Stage & Studio · Brooklyn",
      stats: [
        { value: "3", label: "Stages booked" },
        { value: "5", label: "Days this week" },
        { value: "82%", label: "Utilisation" },
      ],
      listLabel: "This week's bookings",
      rows: [
        { title: "Aria — TVC · Stage B", subtitle: "Oct 2–3 · pre-light + shoot", pill: "Prepped", ...GREEN },
        { title: "Editorial · Stage A", subtitle: "Oct 4 · half day", pill: "Deposit due", ...AMBER },
        { title: "Cyc wall repaint", subtitle: "Stage C · maintenance", pill: "Oct 5", ...GREY },
      ],
    },
  ],
  fashion: [
    {
      label: "A stylist's dashboard",
      mono: "R", color: "#7a2b2e", name: "Atelier Rao", category: "Styling · London",
      stats: [
        { value: "2", label: "Shows this month" },
        { value: "38", label: "Looks to finalise" },
        { value: "4", label: "Fittings booked" },
      ],
      listLabel: "Upcoming shows",
      rows: [
        { title: "SS26 Showcase", subtitle: "Nov 12 · 38 looks · run order", pill: "Looks racked", ...GREEN },
        { title: "Editorial — Vogue IN", subtitle: "Nov 19 · 12 looks", pill: "Samples pending", ...AMBER },
        { title: "Fitting — house models", subtitle: "Nov 10 · studio", pill: "Nov 10", ...GREY },
      ],
    },
    {
      label: "A hair & makeup team's dashboard",
      mono: "G", color: "#9c6b3f", name: "Glam Collective", category: "Hair & Makeup · Milan",
      stats: [
        { value: "3", label: "Calls this month" },
        { value: "24", label: "Faces to do" },
        { value: "9", label: "Artists scheduled" },
      ],
      listLabel: "Upcoming calls",
      rows: [
        { title: "SS26 Showcase", subtitle: "Nov 12 · call 3:30 · 24 models", pill: "Look approved", ...GREEN },
        { title: "Campaign shoot", subtitle: "Nov 15 · 4 talent", pill: "Kit list due", ...AMBER },
        { title: "Test — new artists", subtitle: "Studio · portfolio", pill: "Nov 9", ...GREY },
      ],
    },
  ],
  live: [
    {
      label: "A staging company's dashboard",
      mono: "A", color: "#7a2b2e", name: "Apex Stage & Production", category: "Staging · Nashville",
      stats: [
        { value: "2", label: "Builds this month" },
        { value: "3", label: "Stages deployed" },
        { value: "$210k", label: "Open pipeline" },
      ],
      listLabel: "Active builds",
      rows: [
        { title: "Harvest Fields — Main", subtitle: "Jun 19 build · Jun 20 gates", pill: "Signed off", ...GREEN },
        { title: "Harvest Fields — Grove", subtitle: "Jun 19 · secondary stage", pill: "Crew short 2", ...AMBER },
        { title: "Riverside Series", subtitle: "Jul 4 · roof + barricade", pill: "Survey Jun 24", ...GREY },
      ],
    },
    {
      label: "An audio team's dashboard",
      mono: "S", color: "#9c6b3f", name: "SoundField AV", category: "Audio & Lighting · Austin",
      stats: [
        { value: "5", label: "Show days" },
        { value: "2", label: "Patch lists to lock" },
        { value: "14", label: "Crew scheduled" },
      ],
      listLabel: "Show schedule",
      rows: [
        { title: "Harvest Fields — Main", subtitle: "Jun 20–21 · line check noon", pill: "Patched", ...GREEN },
        { title: "Harvest Fields — Grove", subtitle: "Jun 20 · DJ + live", pill: "Input list due", ...AMBER },
        { title: "Monitor world refresh", subtitle: "Shop · console update", pill: "Jun 18", ...GREY },
      ],
    },
  ],
  corporate: [
    {
      label: "An event lead's dashboard",
      mono: "G", color: "#7a2b2e", name: "Gala Collective", category: "Event Planning · Chicago",
      stats: [
        { value: "2", label: "Galas this quarter" },
        { value: "420", label: "Guests confirmed" },
        { value: "$90k", label: "Open pipeline" },
      ],
      listLabel: "Upcoming events",
      rows: [
        { title: "Foundation Gala", subtitle: "Dec 6 · 420 guests · auction", pill: "Seating locked", ...GREEN },
        { title: "Annual Leadership Dinner", subtitle: "Dec 14 · 180 guests", pill: "Menu pending", ...AMBER },
        { title: "Donor run sheet", subtitle: "Program timings · scripts", pill: "Due Dec 4", ...GREY },
      ],
    },
    {
      label: "A caterer's dashboard",
      mono: "Z", color: "#9c6b3f", name: "Zaika Catering Co.", category: "Catering · New Jersey",
      stats: [
        { value: "2", label: "Events this week" },
        { value: "420", label: "Covers to plate" },
        { value: "12", label: "Staff scheduled" },
      ],
      listLabel: "This week's events",
      rows: [
        { title: "Foundation Gala", subtitle: "Dec 6 · plated · 7:15 service", pill: "Menu locked", ...GREEN },
        { title: "Board Reception", subtitle: "Dec 9 · 90 guests · canapés", pill: "Headcount pending", ...AMBER },
        { title: "Prep & inventory check", subtitle: "Linen · glassware · chafers", pill: "Due Dec 3", ...GREY },
      ],
    },
  ],
  political: [
    {
      label: "A field ops dashboard",
      mono: "G", color: "#7a2b2e", name: "GroundGame Field Ops", category: "Field Operations · Washington DC",
      stats: [
        { value: "3", label: "Events this month" },
        { value: "160", label: "Volunteers confirmed" },
        { value: "8", label: "Captains briefed" },
      ],
      listLabel: "Upcoming events",
      rows: [
        { title: "Vote Forward Rally", subtitle: "Oct 18 · check-in 1:00 · doors 4", pill: "Volunteers set", ...GREEN },
        { title: "Canvass launch", subtitle: "Oct 21 · 6 turfs", pill: "Turf cut pending", ...AMBER },
        { title: "Captain training", subtitle: "Field office · 2 sessions", pill: "Oct 16", ...GREY },
      ],
    },
    {
      label: "A comms team's dashboard",
      mono: "B", color: "#9c6b3f", name: "Beacon Press & PR", category: "Press & Comms · Washington DC",
      stats: [
        { value: "24", label: "Press credentialed" },
        { value: "2", label: "Statements to clear" },
        { value: "5", label: "Outlets confirmed" },
      ],
      listLabel: "Press schedule",
      rows: [
        { title: "Vote Forward Rally", subtitle: "Oct 18 · avail 6:30 · riser back wall", pill: "List filed", ...GREEN },
        { title: "Policy release", subtitle: "Oct 20 · embargoed 6am", pill: "Legal review", ...AMBER },
        { title: "Surrogate briefing", subtitle: "Talking points · Q&A prep", pill: "Oct 17", ...GREY },
      ],
    },
  ],
};
