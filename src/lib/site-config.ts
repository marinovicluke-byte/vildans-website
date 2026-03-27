export const siteConfig = {
  name: "Intelligentle Healing",
  tagline: "PKP Kinesiology for adults carrying stress, anxiety, and tension",
  url: "https://www.intelligentlehealing.com",
  email: "Info@intelligentlehealing.com",
  phone: "",
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
    inPerson: [
      {
        name: "Initial Kinesiology Session",
        duration: "75 min",
        price: 270,
        description:
          "We map what your body is holding, where the tension lives, and start working with it. You leave with clarity on what's going on and a plan for moving forward.",
      },
      {
        name: "Follow-Up Kinesiology Session",
        duration: "60 min",
        price: 270,
        description:
          "Deeper work building on what your body showed us in the initial session. Each session picks up where the last one left off.",
      },
    ],
    online: [
      {
        name: "Initial Online Kinesiology Session",
        duration: "75 min",
        price: 270,
        description:
          "The same structured kinesiology process, adapted for video. We use surrogate muscle monitoring and verbal processing to access what your body is holding.",
      },
      {
        name: "Follow-Up Online Kinesiology Session",
        duration: "60 min",
        price: 270,
        description:
          "Continued online work building on prior sessions. Effective for ongoing support when you can't make it in person.",
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
