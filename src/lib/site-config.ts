export const siteConfig = {
  name: "Intelligentle Healing",
  tagline: "PKP Kinesiology for adults carrying stress, anxiety, and tension",
  url: "https://www.intelligentlehealing.com",
  email: "Info@intelligentlehealing.com",
  phone: "0438780815",
  address: {
    street: "229 Chesterville Road",
    suburb: "Moorabbin",
    state: "VIC",
    postcode: "3189",
    country: "AU",
    formatted: "229 Chesterville Road, Moorabbin, VIC 3189",
  },
  geo: {
    latitude: -37.9387,
    longitude: 145.0445,
  },
  social: {
    instagram: "https://www.instagram.com/vildan.alihodzic",
  },
  practitioner: {
    name: "Vildan",
    fullName: "Vildan Alihodzic",
    role: "PKP Kinesiologist",
    qualifications: ["Professional Kinesiology Practice (PKP)", "Trauma-Informed Practitioner"],
  },
  services: {
    items: [
      {
        name: "First Session",
        duration: "75 min",
        price: 270,
        description:
          "We map what your body is holding, where the tension lives, and start working with it. You leave with clarity on what's going on and a plan for moving forward.",
        formats: ["In Person", "Online"],
      },
      {
        name: "Follow-Up Session",
        duration: "60 min",
        price: 270,
        description:
          "Deeper work building on what your body showed us in the initial session. Each session picks up where the last one left off.",
        formats: ["In Person", "Online"],
      },
    ],
    packages: {
      note: "Per-session rate is lower inside a tailored roadmap. Book a free Clarity & Alignment Session to explore what's right for you.",
    },
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  bookingUrl: "#booking",
} as const;
