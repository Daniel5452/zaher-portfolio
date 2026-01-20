"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, Linkedin, FileText, Briefcase, BookOpen, Users, Globe, MapPin, Phone, 
  TrendingUp, Award, Building2, Handshake, Sparkles, ArrowRight, Settings,
  BarChart3, Shield, Zap, Crown, Star, Home, Hotel, Wrench, UserCheck, 
  ClipboardCheck, Target, DollarSign, CheckCircle2
} from "lucide-react";

// ---------- PERSONAL INFORMATION ----------
const META = {
  name: "Zaher Osman",
  title: "Senior Operations & Hospitality Services Leader",
  tagline: "Transforming large-scale residential communities and hospitality operations through strategic vision, operational excellence, and inspiring leadership.",
  about: "Senior operations leader with 15+ years managing large-scale residential communities (15,000+ residents) and hospitality operations (450+ rooms) across Saudi Arabia's most prestigious projects, including NEOM, Aramco-affiliated Petro Rabigh, and international luxury hospitality brands including Hilton and Waldorf Astoria (Qasr Al Sharq). Proven track record of delivering operational excellence, 95%+ SLA compliance, and cost optimization in remote, high-demand giga-project environments, while ensuring resident satisfaction. Proven track record developing and executing comprehensive communication strategies, founding community publication newsletters including The SUNRISE at NEOM (reaching 25,000+ individuals) and PETRO NEWS (reaching 5,000+ residents), and creating multimedia content that enhances stakeholder engagement and brand presence.",
  email: "zaher.osman@example.com",
  phone: "+966 555179456",
  location: "Jeddah, Saudi Arabia - NEOM, Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/zaherbosman",
  resumeUrl: "/Resume_Zaher.pdf",
};

// Core competencies from resume
const SKILLS = [
  { name: "Executive Leadership", icon: Crown },
  { name: "Multi-Site Operations (15K+ residents)", icon: Building2 },
  { name: "Hospitality Management (450+ rooms)", icon: Hotel },
  { name: "SLA Management (95%+ compliance)", icon: CheckCircle2 },
  { name: "Strategic Planning", icon: Target },
  { name: "Budget & Financial Management", icon: DollarSign },
  { name: "Stakeholder Relations", icon: Handshake },
  { name: "Team Leadership", icon: Users },
  { name: "Vendor Management", icon: Settings },
  { name: "Customer Satisfaction", icon: Star },
  { name: "Property Management", icon: Home },
  { name: "Risk Management & HSE", icon: Shield },
  { name: "Project Management", icon: ClipboardCheck },
  { name: "Facilities Planning", icon: Wrench },
  { name: "Service Excellence", icon: UserCheck },
  { name: "Performance Optimization", icon: BarChart3 },
];

const INTERESTS = [
  {
    icon: Users,
    title: "Community Building & Engagement",
    description: "Passionate about fostering vibrant communities through innovative engagement strategies, having founded successful community newsletters reaching 30,000+ individuals and creating programs that enhance resident satisfaction and cohesion.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Operational Excellence & Innovation", 
    description: "Dedicated to driving operational excellence through strategic planning, process optimization, and technology integration, consistently achieving 95%+ SLA compliance and industry-leading performance standards.",
    color: "from-green-500 to-emerald-500",
  },
];

// ---------- EXPERIENCE DATA ----------
const EXPERIENCE = [
  {
    company: "NEOM",
    role: "Senior Specialist - Resident Relations",
    period: "2024 – Present",
    duration: "1 year",
    logo: "/neom-logo-png_seeklogo-358578.png",
    bullets: [
      "Leading resident experience operations across multiple NEOM communities (Community 1, Community 2, OXAGON, TROJENA) serving 15,000+ individuals, overseeing conflict resolution, service delivery, and 24/7 service continuity.",
      "Founded and manage 'The SUNRISE' biannual newsletter, establishing key communication channel that enhances community cohesion and keeps residents informed across 4+ communities.",
      "Coordinate cross-functional teams to ensure seamless service delivery in one of the world's most ambitious giga-projects, maintaining high resident satisfaction in remote, challenging environments."
    ],
  },
  {
    company: "PlusTech Park (Petro Rabigh)",
    role: "Senior Administrator - Facilities Management",
    period: "2020 – 2024",
    duration: "4 years",
    logo: "/petro.jpg",
    bullets: [
      "Directed operational planning for large-scale industrial park properties serving 15+ companies, achieving 95%+ SLA compliance through strategic vendor management and process optimization.",
      "Managed comprehensive facilities operations including maintenance scheduling, space planning, and resource allocation, ensuring seamless business continuity for multiple tenants.",
      "Established and maintained vendor relationships, coordinating across multiple business units to deliver industry-leading service standards and cost-effective solutions."
    ],
  },
  {
    company: "Hilton International & Waldorf Astoria",
    role: "Operations Supervisor & Guest Services Manager",
    period: "2008 – 2020",
    duration: "12 years",
    logo: "/hilton-international-vector-logo-free-11574107517kspgfnlb4b.png",
    bullets: [
      "Supervised daily operations for 450+ room luxury hospitality properties, managing guest services, housekeeping coordination, and ensuring exceptional service delivery standards.",
      "Led guest relations and concierge services, maintaining high guest satisfaction scores while managing complex requests and resolving service issues in fast-paced luxury environments.",
      "Founded and managed 'PETRO NEWS' monthly community newsletter and 'E-Update - Sports & Recreation' video series, creating multimedia content that significantly improved community engagement across 5,000+ person residential community."
    ],
  },
];

// ---------- KEY ACHIEVEMENTS ----------
const PROJECTS = [
  {
    title: "The SUNRISE Newsletter - NEOM",
    subtitle: "Community Communication & Engagement",
    period: "2024-Present",
    impact: "Reach: 25,000+ individuals",
    highlights: [
      "Founded and lead NEOM's official biannual community newsletter, establishing a key communication channel that enhances community cohesion and keeps residents informed across 4+ communities in this transformative giga-project."
    ],
    logo: "/neom-logo-png_seeklogo-358578.png",
  },
  {
    title: "Multi-Site Operations Excellence at NEOM",
    subtitle: "Large-Scale Residential Management",
    period: "2024-Present",
    impact: "Scale: 15,000+ residents, 4+ communities",
    highlights: [
      "Leading resident experience operations across NEOM's multiple communities (Community 1, Community 2, OXAGON, TROJENA), overseeing conflict resolution, service delivery, and 24/7 service continuity in one of the world's most ambitious giga-projects."
    ],
    logo: "/neom-logo-png_seeklogo-358578.png",
  },
  {
    title: "95%+ SLA Compliance Achievement",
    subtitle: "Operational Excellence at PlusTech Park",
    period: "2020-2024",
    impact: "Achievement: 95%+ SLA compliance",
    highlights: [
      "Directed operational planning for large-scale industrial park properties serving 15+ companies, establishing vendor relationships and coordinating across multiple business units to maintain industry-leading service standards."
    ],
    logo: "/petro.jpg",
  },
  {
    title: "PETRO NEWS & Multimedia Content Creation",
    subtitle: "Community Engagement & Brand Building",
    period: "2008-2020",
    impact: "Reach: 5,000+ residents monthly",
    highlights: [
      "Launched and managed monthly community newsletter and 'E-Update - Sports & Recreation' video series, creating multimedia content that significantly improved community engagement and resident satisfaction across Petro Rabigh's residential community."
    ],
    logo: "/hilton-international-vector-logo-free-11574107517kspgfnlb4b.png",
  },
];

const EDUCATION = [
  {
    school: "American University of Beirut",
    program: "Bachelor of Arts (BA) in Public Administration",
    period: "1993 – 1997",
    status: "Completed",
    location: "Beirut, Lebanon",
  },
];

// ---------- ANIMATION VARIANTS ----------
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// ---------- COMPONENTS ----------
function Marquee({ items }: { items: { name: string; icon: string | React.ComponentType<any> | null }[] }) {
  return (
    <div className="relative overflow-hidden py-6 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, i) => {
          const IconComponent = typeof skill.icon === 'function' ? skill.icon : null;
          return (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-indigo-200 text-sm font-medium shadow-sm bg-white hover:bg-indigo-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              {IconComponent && <IconComponent size={16} className="text-indigo-600" />}
              {typeof skill.icon === 'string' && <span className="text-base">{skill.icon}</span>}
              {skill.name}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

function Card({ 
  children, 
  className = "", 
  hover = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div 
      className={`rounded-2xl border border-gray-200 shadow-sm bg-white p-6 ${
        hover ? "hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FloatingShape({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

// ---------- PAGE ----------
export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingShape delay={0} />
        <FloatingShape delay={5} />
      </div>

      {/* NAV */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Key Achievements" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.resumeUrl, icon: FileText, label: "Resume", external: true },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <motion.header 
        className="max-w-5xl mx-auto px-6 pt-12 pb-8 text-center relative"
        style={{ opacity, scale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={16} className="text-indigo-600" /> 
            <span>{META.location}</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              {META.name}
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            {META.title}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a 
              className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl font-medium" 
              href={`mailto:${META.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20}/> Connect
            </motion.a>
            <motion.a 
              className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center gap-2 font-medium" 
              href={META.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20}/> Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* Executive Skills Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
          Core Competencies
        </h2>
        <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-indigo-50/30">
          <Marquee items={SKILLS} />
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pb-16 space-y-16 relative z-10">
        {/* About Section */}
        <section id="about">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Sparkles className="text-indigo-600" size={28}/>
              Leadership Philosophy
            </h2>
          </motion.div>
          
          <motion.div {...scaleIn}>
            <Card className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border-indigo-200">
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {META.about}
              </p>
            </Card>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <BookOpen className="text-blue-600" size={28}/>
              Education & Credentials
            </h2>
            <p className="text-gray-600">Academic foundation and professional development</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto"
          >
            {EDUCATION.map((e, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover className="h-full group">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  >
                    <BookOpen className="text-blue-600" size={24}/>
                  </motion.div>
                  <div className="font-bold text-xl mb-2">{e.school}</div>
                  <div className="text-gray-700 mb-2">{e.program}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 font-semibold">{e.period}</span>
                    <span className="text-gray-500 italic">{e.location}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Briefcase className="text-indigo-600" size={28}/>
              Executive Experience
            </h2>
            <p className="text-gray-600">15+ years of leadership excellence across prestigious projects</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {EXPERIENCE.map((job, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-3 md:mb-0">
                      <div className="w-16 h-16 rounded-lg bg-gray-50 p-2 flex items-center justify-center border border-gray-200">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">{job.role}</div>
                        <div className="text-gray-600 font-medium">{job.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-indigo-600 font-semibold">{job.period}</div>
                      <div className="text-xs text-gray-500">{job.duration}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mt-4">
                    {job.bullets.map((b, j) => (
                      <motion.li 
                        key={j} 
                        className="flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Key Achievements */}
        <section id="achievements">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Award className="text-purple-600" size={28}/>
              Key Achievements
            </h2>
            <p className="text-gray-600">Strategic initiatives and measurable impact</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card hover className="h-full">
                  <div className="flex justify-between items-start mb-3">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gray-50 p-2 flex items-center justify-center border border-gray-200"
                      animate={{ 
                        scale: hoveredProject === i ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={p.logo}
                        alt="Company logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{p.period}</div>
                      <div className="text-sm font-semibold text-green-600">{p.impact}</div>
                    </div>
                  </div>
                  <div className="font-bold text-lg mb-2">{p.title}</div>
                  <div className="text-sm text-gray-600 mb-4">{p.subtitle}</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Leadership Values */}
        <section id="values">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Star className="text-yellow-500" size={28}/>
              Leadership Values
            </h2>
            <p className="text-gray-600">Core principles that drive success</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {INTERESTS.map((interest, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover className="text-center h-full group">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${interest.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="text-white" size={32}/>
                  </motion.div>
                  <div className="font-bold text-lg mb-2">{interest.title}</div>
                  <p className="text-sm text-gray-600">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Globe className="text-green-600" size={28}/>
              Let's Connect
            </h2>
            <p className="text-gray-600">Open to strategic partnerships and opportunities</p>
          </motion.div>
          
          <motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-white to-indigo-50/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { href: `mailto:${META.email}`, icon: Mail, label: META.email },
                    { href: META.linkedin, icon: Linkedin, label: "LinkedIn Profile", external: true },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors group"
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                        <link.icon size={20} className="text-indigo-600" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <motion.a
                    className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors group"
                    href={META.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                      <FileText size={20} className="text-indigo-600" />
                    </div>
                    <span className="font-medium">Download Resume</span>
                  </motion.a>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <Phone size={20} className="text-indigo-600" />
                    </div>
                    <span className="font-medium">{META.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <MapPin size={20} className="text-indigo-600" />
                    </div>
                    <span className="font-medium">{META.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <motion.footer 
        className="border-t border-gray-200 bg-gray-50 py-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {META.name}. Built with Next.js & Tailwind CSS.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Professional portfolio designed for executive leadership
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
