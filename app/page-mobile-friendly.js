"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, Linkedin, FileText, MapPin, Phone, ArrowRight, Crown, Building2, Hotel,
  CheckCircle2, Target, DollarSign, Handshake, Users, Settings, Star, Home,
  Shield, ClipboardCheck, Wrench, UserCheck, BarChart3, Sparkles, Briefcase
} from "lucide-react";

// ---------- PERSONAL INFORMATION ----------
const META = {
  name: "Zaher Osman",
  title: "Senior Operations & Hospitality Services Leader",
  tagline: "Driving operational excellence across large-scale residential communities and hospitality operations in Saudi Arabia's transformative projects",
  about: "Senior operations leader with 15+ years managing large-scale residential communities (15,000+ residents) and hospitality operations (450+ rooms) across Saudi Arabia's most prestigious projects, including NEOM, Aramco-affiliated Petro Rabigh, and international luxury hospitality brands including Hilton and Waldorf Astoria (Qasr Al Sharq). Proven track record of delivering operational excellence, 95%+ SLA compliance, and cost optimization in remote, high-demand giga-project environments, while ensuring resident satisfaction.",
  email: "zaher_osman@hotmail.com",
  phone: "+966 555179456",
  location: "Jeddah, Saudi Arabia - NEOM, Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/zaherbosman",
  resumeUrl: "/Resume_Zaher.pdf",
};

// Core Skills for floating animation
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

// Executive KPIs - Achievement Focused
const EXECUTIVE_KPIS = [
  { label: "Residents Successfully Managed", value: "15,000+", sublabel: "Across NEOM communities delivered" },
  { label: "Hotel Operations Overseen", value: "450+", sublabel: "Rooms managed (Hilton & Waldorf Astoria)" },
  { label: "SLA Compliance Achieved", value: "95%+", sublabel: "Consistently delivered excellence" },
  { label: "Executive Experience Gained", value: "15+", sublabel: "Years of senior leadership" },
  { label: "Communities Transformed", value: "4+", sublabel: "NEOM project sites delivered" },
  { label: "Stakeholders Engaged", value: "25,000+", sublabel: "Through newsletter publications" },
];

// Leadership Focus Areas
const LEADERSHIP_FOCUS = [
  "Operations Governance & Strategy",
  "SLA & Service Excellence Management", 
  "Cost Optimization & Budget Control",
  "Stakeholder & Vendor Relations",
  "HSE & Risk Management",
  "Multi-site Operations Delivery"
];

// ---------- EXPERIENCE DATA ----------
const EXPERIENCE = [
  {
    company: "NEOM",
    role: "Senior Resident Relations Specialist",
    period: "April 2024 – Present",
    duration: "10 months",
    logo: "/neom-logo-png_seeklogo-358578.png",
    bullets: [
      "Directed resident experience operations across 4+ NEOM communities, overseeing end-to-end service delivery, governance, and compliance for 15,000+ residents within a high-complexity giga-project environment.",
      "Acted as senior operational interface between residents, property management, and service providers, ensuring 24/7 continuity, issue resolution, and adherence to NEOM community standards and policies.",
      "Established enterprise-scale communication and reporting frameworks, including founding The SUNRISE official community publication, enabling executive visibility into resident sentiment, service performance, and operational risks."
    ],
  },
  {
    company: "Petro Rabigh (Aramco Joint Venture)",
    role: "Head of Tenant Services & Relations at PlusTech Park",
    period: "October 2020 – March 2024",
    duration: "3.5 years",
    logo: "/petro.png",
    bullets: [
      "Oversaw operational services and relations for multi-million SAR industrial property assets, leading tenant services, facilities coordination, and service delivery while sustaining 95%+ SLA compliance.",
      "Led multi-vendor and multi-stakeholder operational ecosystems, managing relationships with 15+ tenant companies and cross-functional departments (Quality, Safety, Technology, Compliance).",
      "Implemented risk, HSE, and emergency response frameworks, ensuring regulatory compliance, operational resilience, and uninterrupted service across all park facilities."
    ],
  },
  {
    company: "Petro Rabigh (Aramco Joint Venture)",
    role: "Head of Community Recreation & Engagement",
    period: "May 2008 – October 2020",
    duration: "12.5 years",
    logo: "/petro.png",
    bullets: [
      "Led residential community operations for 5,000+ residents, designing engagement, recreation, and service programs aligned with corporate objectives and long-term community sustainability.",
      "Owned annual operational and engagement budgets, translating strategic objectives into scalable programs, events, and services while maintaining safety and quality standards.",
      "Built enterprise communication and engagement platforms, including PETRO NEWS and multimedia initiatives, strengthening organizational alignment and community cohesion across the residential ecosystem."
    ],
  },
  {
    company: "Qasr Al Sharq (Waldorf Astoria)",
    role: "Director of Operations (Acting)",
    period: "2008 – 2009",
    duration: "1 year",
    logo: "/waldorf.png",
    bullets: [
      "Served as Acting Director of Operations for luxury 5-star 450+ room Waldorf Astoria property, overseeing guest services, housekeeping, maintenance, and all operational departments during transition period.",
      "Maintained luxury service standards and guest satisfaction metrics across all hotel operations, ensuring continued brand compliance and operational excellence.",
      "Coordinated with senior management on operational strategies, staff optimization, and service delivery improvements during organizational transition."
    ],
  },
  {
    company: "Hilton Jeddah",
    role: "Assistant Manager Operations",
    period: "2005 – 2008",
    duration: "3 years",
    logo: "/hilton.png",
    bullets: [
      "Managed day-to-day hotel operations including guest services, housekeeping coordination, and departmental oversight for international luxury hospitality brand.",
      "Coordinated between multiple operational departments to ensure seamless guest experience and service delivery standards.",
      "Supported senior management in operational planning, staff development, and service quality initiatives."
    ],
  }
];

const EDUCATION = [
  {
    school: "American University of Beirut",
    program: "Bachelor of Arts (BA) in Public Administration", 
    period: "1993 – 1997",
    location: "Beirut, Lebanon",
  },
  {
    school: "American Community School (A.C.S.)",
    program: "American High School Degree",
    period: "1993", 
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
function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden py-6 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [-800, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...items, ...items].map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-blue-200 text-sm font-medium shadow-sm bg-white hover:bg-blue-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <IconComponent size={16} className="text-blue-600" />
              {skill.name}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

function Card({ children, className = "", hover = false }) {
  return (
    <motion.div 
      className={`rounded-2xl border border-gray-200 shadow-sm bg-white p-6 ${
        hover ? "hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FloatingShape({ delay = 0 }) {
  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/30 to-slate-200/30 blur-3xl"
      animate={{
        x: [0, 50, 0],
        y: [0, -50, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

// ---------- PAGE ----------
export default function Portfolio() {
  const [hoveredExperience, setHoveredExperience] = useState(null);
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
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.resumeUrl, icon: FileText, label: "Resume", external: true },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
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
        className="max-w-4xl mx-auto px-6 pt-12 pb-8 text-center relative"
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
            <MapPin size={16} className="text-blue-600" /> 
            <span>{META.location}</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              {META.name}
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl">
            {META.title}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a 
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl font-medium" 
              href={`mailto:${META.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20}/> Let's Connect
            </motion.a>
            <motion.a 
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2 font-medium" 
              href={META.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20}/> Executive Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* Technical Skills Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
          Executive Leadership Skills
        </h2>
        <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50/30">
          <Marquee items={SKILLS} />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-16 relative z-10">
        {/* Executive KPIs */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Crown className="text-blue-600" size={28}/>
              Executive Impact & Results
            </h2>
            <p className="text-gray-600">Measurable achievements in senior leadership roles</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {EXECUTIVE_KPIS.map((kpi, index) => (
              <motion.div key={kpi.label} variants={fadeUp}>
                <Card hover className="text-center h-full">
                  <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{kpi.value}</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 mb-1">{kpi.label}</div>
                  <div className="text-xs md:text-sm text-slate-600">{kpi.sublabel}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Sparkles className="text-blue-600" size={28}/>
              Executive Summary
            </h2>
          </motion.div>
          
          <motion.div {...scaleIn}>
            <Card className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 border-blue-200">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {META.about}
                  </p>
                </div>
                <div className="md:w-64 w-full">
                  <div className="bg-blue-50/50 rounded-xl p-4 md:p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Leadership Focus</h3>
                    <div className="space-y-2">
                      {LEADERSHIP_FOCUS.map((focus, index) => (
                        <motion.div
                          key={focus}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{focus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Shield className="text-green-600" size={28}/>
              Education
            </h2>
            <p className="text-gray-600">Academic foundation</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {EDUCATION.map((e, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover className="h-full group">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  >
                    <Shield className="text-green-600" size={24}/>
                  </motion.div>
                  <div className="font-bold text-xl mb-2">{e.school}</div>
                  <div className="text-gray-700 mb-2">{e.program}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-semibold">{e.period}</span>
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
              <Briefcase className="text-blue-600" size={28}/>
              Executive Experience
            </h2>
            <p className="text-gray-600">Senior leadership roles across Saudi Arabia's most prestigious projects</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {EXPERIENCE.map((job, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                onMouseEnter={() => setHoveredExperience(i)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <Card hover>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-xl flex items-center justify-center"
                        animate={{ 
                          scale: hoveredExperience === i ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900">{job.role}</h3>
                          <p className="text-lg font-semibold text-blue-700">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-600 font-medium">{job.period}</p>
                          <p className="text-sm text-slate-500">{job.duration}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: bulletIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <ArrowRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Mail className="text-green-600" size={28}/>
              Professional Contact
            </h2>
            <p className="text-gray-600">Ready for executive opportunities</p>
          </motion.div>
          
          <motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-white to-blue-50/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { href: `mailto:${META.email}`, icon: Mail, label: META.email },
                    { href: META.linkedin, icon: Linkedin, label: "LinkedIn Profile", external: true },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <link.icon size={20} className="text-blue-600" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <span className="font-medium">{META.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <span className="font-medium">{META.location}</span>
                  </div>
                  
                  <motion.a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                    href={META.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText size={16} />
                    Download Resume
                  </motion.a>
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {META.name}. Professional Executive Portfolio.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Ready for leadership opportunities in Saudi Arabia's transformative projects
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
