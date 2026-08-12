export type Status = "sage" | "gold" | "neutral";

export const STATUS_STYLE: Record<Status, { bg: string; fg: string }> = {
  sage: { bg: "#e7ede1", fg: "#5f6b52" },
  gold: { bg: "#f6ecd6", fg: "#9c6b3f" },
  neutral: { bg: "#efe6d7", fg: "#8a7b6e" },
};

export type World = {
  key: string;
  label: string;
  eventName: string;
  eventMeta: string;
  countdown: string;
  timeline: { title: string; when: string; mono: string; color: string; status: string; s: Status }[];
  tasks: { title: string; done: boolean; mono: string; color: string; when: string }[];
  activity: string[];
  chat: { who: string; text: string; mono: string; color: string; mine: boolean }[];
  clientUpdate: { who: string; text: string; mono: string; color: string };
  payments: { paid: string; dueLabel: string; due: string };
  avatars: [string, string][];
  vendorTitle: string;
  vendorMsgs: { who: string; text: string; mine: boolean }[];
};

export const WORLDS: World[] = [
  {
    key: "weddings",
    label: "Weddings",
    eventName: "Anaya & Rohan",
    eventMeta: "Wedding · Aug 14",
    countdown: "Event day in 12 days",
    timeline: [
      { title: "Mehndi & Sangeet", when: "Aug 12 · 6:00 PM", mono: "D", color: "#9c6b3f", status: "Confirmed", s: "sage" },
      { title: "Baraat & Ceremony", when: "Aug 14 · 10:00 AM", mono: "R", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Reception", when: "Aug 14 · 7:45 PM", mono: "V", color: "#4a3f38", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Confirm mandap floral palette", done: true, mono: "D", color: "#9c6b3f", when: "Done" },
      { title: "Share ceremony run of show", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Final headcount to caterer", done: false, mono: "P", color: "#5f6b52", when: "Aug 8" },
      { title: "Deliver portrait shotlist", done: false, mono: "R", color: "#c99a4a", when: "Aug 10" },
    ],
    activity: ["Saubhagya Décor confirmed the reset · 2m", "Aperture Films uploaded a gallery · 14m", "Deposit received from Anaya · 1h"],
    chat: [
      { who: "Aperture Films", text: "Clear to start portraits at 4:30 before the reset?", mono: "R", color: "#c99a4a", mine: false },
      { who: "Saubhagya Décor", text: "Stage is yours by 4:15 👍", mono: "D", color: "#9c6b3f", mine: true },
    ],
    clientUpdate: { who: "Vivaha Planners → Anaya", text: "Timeline is locked and every vendor has confirmed. Nothing left for you to chase ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$18,400", dueLabel: "Balance due · Aug 12", due: "$9,600" },
    avatars: [["A", "#7a2b2e"], ["P", "#5f6b52"], ["R", "#c99a4a"], ["V", "#4a3f38"], ["D", "#9c6b3f"]],
    vendorTitle: "Kapoor–Shah Wedding · Vendor Channel",
    vendorMsgs: [
      { who: "Aperture Films · Photography", text: "Are we clear to start couple portraits at 4:30, before the décor team resets the mandap?", mine: false },
      { who: "Saubhagya Décor", text: "Give us till 4:15 and the stage is all yours. We'll keep the aisle floral in place for you.", mine: true },
      { who: "Rani Mahal Venue", text: "Kitchen access opens 3:00 for catering — loading dock is on the east side.", mine: false },
      { who: "Zaika Catering", text: "Perfect, we'll be set. Plated service still locked for 7:45 on the timeline. 👍", mine: true },
    ],
  },
  {
    key: "brand",
    label: "Brand & Experiential",
    eventName: "Meridian Launch",
    eventMeta: "Brand Activation · Sep 9",
    countdown: "Doors in 9 days",
    timeline: [
      { title: "Press Preview", when: "Sep 8 · 5:00 PM", mono: "L", color: "#a34b3f", status: "Confirmed", s: "sage" },
      { title: "Doors & Keynote", when: "Sep 9 · 7:00 PM", mono: "F", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "After-Party", when: "Sep 9 · 9:30 PM", mono: "V", color: "#4a3f38", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Approve stage & LED spec", done: true, mono: "F", color: "#c99a4a", when: "Done" },
      { title: "Confirm run of show", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Final RSVP count to catering", done: false, mono: "P", color: "#5f6b52", when: "Sep 4" },
      { title: "Deliver brand asset pack", done: false, mono: "L", color: "#a34b3f", when: "Sep 6" },
    ],
    activity: ["FormWorks confirmed the stage build · 5m", "Lumen AV uploaded the cue sheet · 20m", "Deposit received from Meridian · 2h"],
    chat: [
      { who: "Lumen AV", text: "LED wall load-in at 2:00 — ok to start?", mono: "L", color: "#a34b3f", mine: false },
      { who: "FormWorks", text: "Deck's yours by 1:45 👍", mono: "F", color: "#c99a4a", mine: true },
    ],
    clientUpdate: { who: "Meridian Experiential → Client", text: "Run of show approved and every vendor confirmed. You're set for doors ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$42,000", dueLabel: "Balance due · Sep 5", due: "$28,500" },
    avatars: [["M", "#7a2b2e"], ["P", "#5f6b52"], ["F", "#c99a4a"], ["V", "#4a3f38"], ["L", "#a34b3f"]],
    vendorTitle: "Meridian Product Launch · Vendor Channel",
    vendorMsgs: [
      { who: "Lumen AV · Lighting", text: "Can we load in the LED wall at 2:00, before the fabrication team sets the stage deck?", mine: false },
      { who: "FormWorks Fabrication", text: "Give us till 1:45 and the deck is all yours. We'll leave the riser clear for your rig.", mine: true },
      { who: "The Wynwood Venue", text: "Freight elevator opens 12:30 — loading dock is on the north side.", mine: false },
      { who: "Saffron Catering", text: "Perfect, we'll be set. Canapés still locked for 6:30 on the run of show. 👍", mine: true },
    ],
  },
  {
    key: "production",
    label: "Film & Production",
    eventName: "Aria — TVC",
    eventMeta: "Commercial Shoot · Oct 3",
    countdown: "Shoot day in 6 days",
    timeline: [
      { title: "Pre-light & Rig", when: "Oct 2 · 3:00 PM", mono: "G", color: "#4a3f38", status: "Confirmed", s: "sage" },
      { title: "Principal Photography", when: "Oct 3 · 7:00 AM", mono: "C", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Company Wrap", when: "Oct 3 · 8:00 PM", mono: "S", color: "#9c6b3f", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Lock the call sheet", done: true, mono: "C", color: "#c99a4a", when: "Done" },
      { title: "Confirm location permits", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Final crew list to production", done: false, mono: "P", color: "#5f6b52", when: "Oct 1" },
      { title: "Deliver shot list & boards", done: false, mono: "G", color: "#4a3f38", when: "Oct 1" },
    ],
    activity: ["Grip & Gaffer confirmed the rig · 8m", "Loft 19 Studios uploaded the floor plan · 25m", "Deposit received from Aria · 3h"],
    chat: [
      { who: "Grip & Gaffer", text: "Pre-light at 3, camera in by 5?", mono: "G", color: "#4a3f38", mine: false },
      { who: "Loft 19 Studios", text: "Stage B is prepped 👍", mono: "S", color: "#9c6b3f", mine: true },
    ],
    clientUpdate: { who: "Northlight Productions → Client", text: "Call sheet locked, crew confirmed, permits cleared. We roll at 7 ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$65,000", dueLabel: "Balance due · Oct 1", due: "$40,000" },
    avatars: [["N", "#7a2b2e"], ["P", "#5f6b52"], ["C", "#c99a4a"], ["G", "#4a3f38"], ["S", "#9c6b3f"]],
    vendorTitle: "Aria Campaign · Crew Channel",
    vendorMsgs: [
      { who: "DP · Camera", text: "Can we pre-light the interior at 3, before grip strikes the exterior setup?", mine: false },
      { who: "Grip & Gaffer Co.", text: "Give us till 2:45 and the floor is yours. Dolly track stays laid.", mine: true },
      { who: "Loft 19 Studios", text: "Stage access from 6am — freight dock is on the west side.", mine: false },
      { who: "Craft & Catering", text: "Copy. First meal at 11:30 on the call sheet. 👍", mine: true },
    ],
  },
  {
    key: "fashion",
    label: "Fashion & Runway",
    eventName: "SS26 Showcase",
    eventMeta: "Runway Show · Nov 12",
    countdown: "Show in 8 days",
    timeline: [
      { title: "Fittings & Rehearsal", when: "Nov 11 · 4:00 PM", mono: "S", color: "#9c6b3f", status: "Confirmed", s: "sage" },
      { title: "Doors & Show", when: "Nov 12 · 7:00 PM", mono: "M", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Press & After", when: "Nov 12 · 9:00 PM", mono: "V", color: "#4a3f38", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Confirm model call & lineup", done: true, mono: "M", color: "#c99a4a", when: "Done" },
      { title: "Lock the run of show", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Final looks to dressers", done: false, mono: "S", color: "#9c6b3f", when: "Nov 10" },
      { title: "Deliver seating chart", done: false, mono: "P", color: "#5f6b52", when: "Nov 11" },
    ],
    activity: ["Studio Noir confirmed the set · 6m", "Glam Collective shared the beauty look · 18m", "Deposit received from the house · 2h"],
    chat: [
      { who: "Glam Collective", text: "Hair & makeup call at 3:30?", mono: "G", color: "#9c6b3f", mine: false },
      { who: "Atelier Rao", text: "Looks steamed and racked 👍", mono: "S", color: "#c99a4a", mine: true },
    ],
    clientUpdate: { who: "Show Producer → Client", text: "Lineup locked, models confirmed, beauty approved. Doors at 7 ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$30,000", dueLabel: "Balance due · Nov 8", due: "$22,000" },
    avatars: [["H", "#7a2b2e"], ["P", "#5f6b52"], ["M", "#c99a4a"], ["S", "#9c6b3f"], ["V", "#4a3f38"]],
    vendorTitle: "SS26 Showcase · Backstage Channel",
    vendorMsgs: [
      { who: "Glam Collective", text: "Can we start hair & makeup at 3:30, before the stylists take the racks?", mine: false },
      { who: "Atelier Rao", text: "Give us till 3:15 and backstage is yours. Looks stay in run order.", mine: true },
      { who: "Studio Noir", text: "Runway lit and marked by 5 — monitors at front of house.", mine: false },
      { who: "CastHouse Talent", text: "Models checked in and lined up. First walk locked for 7:10. 👍", mine: true },
    ],
  },
  {
    key: "live",
    label: "Festivals & Live",
    eventName: "Harvest Fields",
    eventMeta: "Festival · Jun 20–21",
    countdown: "Gates in 5 days",
    timeline: [
      { title: "Load-in & Build", when: "Jun 19 · 8:00 AM", mono: "P", color: "#5f6b52", status: "Confirmed", s: "sage" },
      { title: "Gates & Main Stage", when: "Jun 20 · 2:00 PM", mono: "A", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Headliner & Close", when: "Jun 21 · 10:00 PM", mono: "S", color: "#4a3f38", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Approve site & stage plan", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Confirm the security plan", done: true, mono: "S", color: "#4a3f38", when: "Done" },
      { title: "Final vendor load-in times", done: false, mono: "P", color: "#5f6b52", when: "Jun 18" },
      { title: "Publish the run of show", done: false, mono: "A", color: "#c99a4a", when: "Jun 19" },
    ],
    activity: ["Apex Stage confirmed the build · 10m", "SoundField AV uploaded the patch list · 22m", "Deposit received from the promoter · 4h"],
    chat: [
      { who: "SoundField AV", text: "Line check on Main by noon?", mono: "A", color: "#c99a4a", mine: false },
      { who: "Apex Stage", text: "Deck's up and safe by 11 👍", mono: "S", color: "#5f6b52", mine: true },
    ],
    clientUpdate: { who: "Festival Ops → Promoter", text: "Site built, stages patched, security briefed. Gates at 2 ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$120,000", dueLabel: "Balance due · Jun 15", due: "$85,000" },
    avatars: [["F", "#7a2b2e"], ["P", "#5f6b52"], ["A", "#c99a4a"], ["S", "#4a3f38"], ["L", "#9c6b3f"]],
    vendorTitle: "Harvest Fields · Production Channel",
    vendorMsgs: [
      { who: "SoundField AV", text: "Can we line-check Main Stage at noon, before the barricade crew closes front of house?", mine: false },
      { who: "Apex Stage & Production", text: "Give us till 11:30 and the deck is signed off. FOH stays clear.", mine: true },
      { who: "Movement Logistics", text: "Artist trucks roll in at 9am — dock and runners on the south gate.", mine: false },
      { who: "Sentinel Security", text: "Copy. Wristband checkpoints staffed from 1. 👍", mine: true },
    ],
  },
  {
    key: "corporate",
    label: "Corporate & Galas",
    eventName: "Foundation Gala",
    eventMeta: "Charity Gala · Dec 6",
    countdown: "Doors in 7 days",
    timeline: [
      { title: "Set & Sound Check", when: "Dec 5 · 4:00 PM", mono: "A", color: "#9c6b3f", status: "Confirmed", s: "sage" },
      { title: "Reception & Dinner", when: "Dec 6 · 6:30 PM", mono: "C", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Program & Auction", when: "Dec 6 · 8:30 PM", mono: "V", color: "#4a3f38", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Approve floor plan & seating", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Confirm AV & program", done: true, mono: "A", color: "#9c6b3f", when: "Done" },
      { title: "Final headcount to catering", done: false, mono: "C", color: "#c99a4a", when: "Dec 2" },
      { title: "Deliver donor run sheet", done: false, mono: "P", color: "#5f6b52", when: "Dec 4" },
    ],
    activity: ["Capitol Venues confirmed the room · 7m", "SoundField AV shared the program cues · 19m", "Deposit received from the foundation · 3h"],
    chat: [
      { who: "AV Lead", text: "Sound check at 4, before doors?", mono: "A", color: "#9c6b3f", mine: false },
      { who: "Zaika Catering", text: "Plated service ready for 7 👍", mono: "C", color: "#c99a4a", mine: true },
    ],
    clientUpdate: { who: "Event Lead → Committee", text: "Seating locked, program timed, catering confirmed. Doors at 6:30 ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$54,000", dueLabel: "Balance due · Dec 1", due: "$36,000" },
    avatars: [["G", "#7a2b2e"], ["P", "#5f6b52"], ["C", "#c99a4a"], ["A", "#9c6b3f"], ["V", "#4a3f38"]],
    vendorTitle: "Foundation Gala · Vendor Channel",
    vendorMsgs: [
      { who: "AV & Staging", text: "Can we sound-check the ballroom at 4, before the décor team finishes centerpieces?", mine: false },
      { who: "Saubhagya Décor", text: "Give us till 3:45 and the room is yours. Tables stay dressed.", mine: true },
      { who: "Capitol Venues", text: "Loading dock opens 1:00 — service corridor runs to the ballroom.", mine: false },
      { who: "Zaika Catering", text: "Perfect. Plated dinner locked for 7:15 on the run sheet. 👍", mine: true },
    ],
  },
  {
    key: "political",
    label: "Political & Advocacy",
    eventName: "Vote Forward Rally",
    eventMeta: "Rally · Oct 18",
    countdown: "Rally day in 9 days",
    timeline: [
      { title: "Advance & Site Walk", when: "Oct 17 · 2:00 PM", mono: "F", color: "#4a3f38", status: "Confirmed", s: "sage" },
      { title: "Doors & Program", when: "Oct 18 · 4:00 PM", mono: "P", color: "#c99a4a", status: "In progress", s: "gold" },
      { title: "Press Availability", when: "Oct 18 · 6:30 PM", mono: "B", color: "#9c6b3f", status: "Upcoming", s: "neutral" },
    ],
    tasks: [
      { title: "Confirm venue & permits", done: true, mono: "V", color: "#4a3f38", when: "Done" },
      { title: "Brief volunteer captains", done: true, mono: "P", color: "#5f6b52", when: "Done" },
      { title: "Final press list to comms", done: false, mono: "B", color: "#9c6b3f", when: "Oct 16" },
      { title: "Publish the run of show", done: false, mono: "P", color: "#c99a4a", when: "Oct 17" },
    ],
    activity: ["Capitol Venues confirmed the hall · 9m", "Beacon Press & PR shared the press list · 21m", "Deposit received from the campaign · 3h"],
    chat: [
      { who: "GroundGame Field Ops", text: "Volunteer call at 1, before doors?", mono: "G", color: "#4a3f38", mine: false },
      { who: "Capitol Venues", text: "Hall is open from noon 👍", mono: "V", color: "#5f6b52", mine: true },
    ],
    clientUpdate: { who: "Campaign Ops → Comms", text: "Site walked, volunteers briefed, press credentialed. Doors at 4 ✨", mono: "P", color: "#5f6b52" },
    payments: { paid: "$24,000", dueLabel: "Balance due · Oct 15", due: "$16,000" },
    avatars: [["C", "#7a2b2e"], ["P", "#5f6b52"], ["F", "#c99a4a"], ["V", "#4a3f38"], ["B", "#9c6b3f"]],
    vendorTitle: "Vote Forward Rally · Field Channel",
    vendorMsgs: [
      { who: "GroundGame Field Ops", text: "Can we stage volunteer check-in at 1:00, before press sets up the risers?", mine: false },
      { who: "Beacon Press & PR", text: "Give us till 12:45 and the lobby is yours. Riser stays at the back wall.", mine: true },
      { who: "Capitol Venues", text: "Doors and screening open at noon — service entry is on 3rd Street.", mine: false },
      { who: "Rally Logistics", text: "Copy. Signage and stage kit land by 11. 👍", mine: true },
    ],
  },
];
