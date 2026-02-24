// ---------- Projects ----------
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  link: string;
  category: string;
  type: 'web' | 'mobile';
  accentColor: string;
  accentColorSecondary: string;
  features: string[];
  // Mobile-specific
  apkUrl?: string;
  apkSize?: number;
  appStoreLink?: string;
  playStoreLink?: string;
  platforms?: string[];
}

export const projects: Project[] = [
  {
     id: "charcoal-game",
     title: "Charcoal Game",
     description:
       "Charcoal Game is an interactive spin machine game built with Next.js and Tailwind CSS, for a Telegram-bot-based application. It features smooth animations, responsive design, and a dynamic gaming experience.",
     longDescription:
       "Charcoal Game provides an engaging gaming experience with real-time animations, responsive design across all devices, and seamless integration with Telegram. The game features a spin machine interface with smooth transitions, visual feedback, and engaging sound effects.",
     image: "/images/Charcoal.png",
     techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot"],
     link: "https://t.me/charcoal_gamebot",
     category: "Game Development",
     type: "web",
     accentColor: "#f97316",
     accentColorSecondary: "#fb923c",
     features: [
       "Interactive spin machine gameplay",
       "Smooth animations and transitions",
       "Responsive design",
       "Telegram bot integration",
       "Real-time user feedback",
     ],
   },
  {
     id: "clemsatd-travel",
     title: "Clemsatd Travel Agency",
     description:
       "A modern, responsive travel booking website. It allows users to explore travel destinations, check flight and hotel availability, and make secure bookings.",
     longDescription:
       "A comprehensive travel booking platform that enables users to search and book flights, hotels, and vacation packages. Features a user-friendly interface, secure payment processing, and real-time availability updates.",
     image: "/images/clemsatd.jpg",
     techStack: [
       "HTML",
       "CSS",
       "Bootstrap",
       "jQuery",
       "JavaScript",
       "Responsiveness",
     ],
     link: "https://clemsatd.com/",
     category: "Web Development",
     type: "web",
     accentColor: "#0ea5e9",
     accentColorSecondary: "#38bdf8",
     features: [
       "Flight and hotel search",
       "Secure booking system",
       "Real-time availability",
       "Responsive design",
       "Payment integration",
     ],
   },
 {
     id: "weconnect",
     title: "WeConnect",
     description:
       "WeConnect is a full-stack user dashboard and authentication system built with TypeScript. Features secure login, JWT token validation, email-based password resets, and a customizable dashboard.",
     longDescription:
       "A comprehensive authentication and user management system with JWT-based security, email verification, password reset functionality, and a feature-rich dashboard for account management.",
     image: "/images/weconnect.jpeg",
     techStack: [
       "Next.js",
       "TypeScript",
       "Node.js",
       "Express",
       "MongoDB",
       "JWT",
       "Tailwind CSS",
     ],
     link: "https://we-connect-front.vercel.app/",
     category: "Full Stack Development",
     type: "web",
     accentColor: "#8b5cf6",
     accentColorSecondary: "#a78bfa",
     features: [
       "Secure JWT authentication",
       "Email verification",
       "Password reset",
       "User dashboard",
       "Account settings",
       "TypeScript type safety",
     ],
   },
 {
     id: "amazon-clone",
     title: "Amazon Clone",
     description:
       "A clean frontend clone of the Amazon homepage using NestJS and TypeScript. Includes a carousel powered by Swiper, responsive layouts, category navigation, and a basic add-to-cart flow.",
     longDescription:
       "A detailed recreation of Amazon's e-commerce interface featuring product browsing, category navigation, shopping cart functionality, and responsive design across all device sizes.",
     image: "/images/amazon.png",
     techStack: ["NestJS", "TypeScript", "Tailwind CSS", "Swiper", "Next.js"],
     link: "https://amazon-clone.empty.com",
     category: "Frontend Development",
     type: "web",
     accentColor: "#f59e0b",
     accentColorSecondary: "#fbbf24",
     features: [
       "Product carousel",
       "Category navigation",
       "Shopping cart",
       "Responsive design",
       "Modern UI components",
     ],
   },
 {
     id: "luma-event-site",
     title: "Luma Event Site",
     description:
       "Full-stack events app where creators can save events as Draft or Publish, sell tickets via Flutterwave, issue email/NFT-style tickets with attendee check-in, and browse a vendor marketplace.",
     longDescription:
       "A comprehensive event management platform that allows event creators to manage their events, sell tickets, issue digital tickets, and connect with service vendors. Includes sophisticated admin controls and vendor marketplace features.",
     image: "/images/luma.png",
     techStack: [
       "Next.js",
       "React",
       "Flutterwave",
       "Tailwind CSS",
       "Clerk",
       "Node.js",
       "Express",
       "MongoDB",
       "Mongoose",
       "Nodemailer",
     ],
     link: "https://luma-rouge-one.vercel.app/",
     category: "Full Stack Development",
     type: "web",
     accentColor: "#ec4899",
     accentColorSecondary: "#f472b6",
     features: [
       "Event creation and management",
       "Ticket sales via Flutterwave",
       "Email/NFT ticket issuance",
       "Attendee check-in system",
       "Vendor marketplace",
       "Admin panel",
       "Event publishing workflow",
     ],
   },
  {
     id: "chatnest",
     title: "ChatNest",
     description:
       "Enterprise-grade, real-time messaging and social communication platform supporting iOS, Android, and web. Features WebRTC voice/video calls, social stories, media sharing, Redis caching, and comprehensive admin controls.",
     longDescription:
       "An enterprise-grade messaging platform with real-time communication, voice/video calling, social features, and comprehensive admin controls. Supports multiple platforms including iOS, Android, and web with a consistent user experience across all devices.",
     image: "/images/chatnest.png",
     techStack: [
       "React Native",
       "Expo",
       "Node.js",
       "Express",
       "MongoDB",
       "Socket.io",
       "WebRTC",
       "Cloudinary",
       "FFmpeg",
       "Redis",
       "TypeScript",
       "JWT",
       "Helmet",
       "Winston",
       "Nodemailer",
       "Tailwind CSS",
     ],
     link: "https://your-chatnest-demo-link.com",
     category: "Full Stack Development",
     type: "mobile",
     accentColor: "#06b6d4",
     accentColorSecondary: "#22d3ee",
     features: [
       "Real-time messaging",
       "Voice and video calls",
       "Social stories",
       "Media sharing",
       "User authentication",
       "Admin controls",
       "Activity logging",
       "2FA security",
       "Email notifications",
     ],
     apkUrl: "/apk/chatnest/ChatNest.apk",
    apkSize: 200,
    appStoreLink: "",
    playStoreLink: "",
    platforms: ["Android", "iOS", "Web"],
  },
  
];

// ---------- Skills ----------
export interface Skill {
  name: string;
  level: number;
  color: string;
}

export const skills: Skill[] = [
  { name: "HTML", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, color: "from-green-600 to-green-800" },
  { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", level: 85, color: "from-green-600 to-green-800" },
  { name: "React Native", level: 85, color: "from-green-600 to-green-800" },
  { name: "Expo", level: 80, color: "from-green-500 to-green-700" },
  { name: "Tailwind CSS", level: 95, color: "from-blue-500 to-cyan-500" },
  {
    name: "Framer Motion (for animation)",
    level: 75,
    color: "from-gray-700 to-gray-900",
  },
  { name: "Node.js", level: 85, color: "from-green-600 to-green-800" },
  { name: "Express.js", level: 80, color: "from-green-500 to-green-700" },
  { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
  { name: "JWT Auth", level: 80, color: "from-green-500 to-green-700" },
  { name: "Git & GitHub", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "UI/UX Design", level: 80, color: "from-green-500 to-green-700" },
];

// ---------- Services ----------
import { Code, Database, Palette, Server, Smartphone, Zap } from "lucide-react";
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: "Code",
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    features: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
  },
    {
      icon: "Server",
      title: "Backend Development", 
      description: "Creating robust server-side applications with Node.js, Express, and database integration.",
      features: ["Node.js", "Express.js", "MongoDB", "JWT Auth"]
    },
    {
      icon: "Palette",
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that prioritize user experience.",
      features: ["Figma", "Responsive Design", "User Research", "Prototyping"]
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and scalability with best practices.",
      features: ["SEO", "Core Web Vitals", "Caching", "Bundle Optimization"]
    },
    {
      icon: "Smartphone",
      title: "Mobile-First Design",
      description: "Ensuring perfect functionality across all devices with responsive design principles.",
      features: ["Responsive Design", "Mobile Optimization", "Cross-browser", "PWA"]
    },
    {
      icon: "Database",
      title: "Full-Stack Solutions",
      description: "End-to-end application development from database design to deployment.",
      features: ["API Design", "Database Design", "Authentication", "Deployment"]
    }
];

// ---------- Social Links ----------
export interface SocialLink {
  icon: string;
  href: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  { icon: "Github", href: "https://github.com/opemich" },
  { icon: "Linkedin", href: "https://www.linkedin.com/in/onaopemipo-michael-784147300/" },
  { icon: "Twitter", href: "https://x.com/Priest077" },
  { icon: "Instagram", href: "https://www.instagram.com/prie_st0/" },
  { icon: "Facebook", href: "https://web.facebook.com/profile.php?id=100084169692839" },
  { icon: "Mail", href: "mailto:excellentmichael2110@gmail.com" },
];

// ---------- Contact Info ----------
export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export const contactInfo: ContactItem[] = [
  { icon: "Mail", label: "Email", value: "excellentmichael2110@gmail.com", href: "mailto:excellentmichael2110@gmail.com" },
  { icon: "Phone", label: "Phone", value: "+234 806 668 8966", href: "tel:+2348066688966" },
  { icon: "MapPin", label: "Location", value: "Lagos, Nigeria", href: "#" },
];

// ---------- Personal Info ----------
export const personalInfo = {
  name: "Excellent Michael (Pyrex)",
  title: "Full-Stack Developer",
  shortBio: "Passionate Full-Stack Developer creating innovative digital solutions with cutting-edge technologies and creative problem-solving.",
  email: "excellentmichael2110@gmail.com",
};