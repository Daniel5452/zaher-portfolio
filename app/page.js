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
  valueProposition: "Driving operational excellence across large-scale residential communities and hospitality operations in Saudi Arabia's transformative projects",
  about: "Senior operations leader with 15+ years managing large-scale residential communities (15,000+ residents) and hospitality operations (450+ rooms) across Saudi Arabia's most prestigious projects, including NEOM, Aramco-affiliated Petro Rabigh, and international luxury hospitality brands including Hilton and Waldorf Astoria (Qasr Al Sharq). Proven track record of delivering operational excellence, 95%+ SLA compliance, and cost optimization in remote, high-demand giga-project environments, while ensuring resident satisfaction. Proven track record developing and executing comprehensive communication strategies, founding community publication newsletters including The SUNRISE at NEOM (reaching 25,000+ individuals) and PETRO NEWS (reaching 5,000+ residents), and creating multimedia content that enhances stakeholder engagement and brand presence.",
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
    duration: "1.75 years",
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
      "Managed annual operational and engagement budgets, translating strategic objectives into scalable programs, events, and services while maintaining safety and quality standards.",
      "Built enterprise communication and engagement platforms, including PETRO NEWS and multimedia initiatives, strengthening organizational alignment and community cohesion across the residential ecosystem."
    ],
  },
  {
    company: "Hilton Hotels & Resorts",
    role: "Recreation Manager",
    period: "April 2006 – April 2008",
    duration: "2 years",
    logo: "/hilton-international-vector-logo-free-11574107517kspgfnlb4b.png",
    bullets: [
      "Managed Sports, Leisure, and Spa operations for 5-star luxury hospitality assets, including Hilton and Qasr Al Sharq (Waldorf Astoria Collection), delivering premium guest experiences.",
      "Led workforce planning, recruitment, and training, ensuring service excellence, brand compliance, and consistent guest satisfaction across all leisure facilities.",
      "Oversaw health, safety, and regulatory compliance, aligning departmental operations with Hilton international standards and luxury hospitality benchmarks."
    ],
  },
  {
    company: "Alyarz Leisure Club",
    role: "Director of Operations",
    period: "July 2004 – April 2006",
    duration: "1.8 years",
    logo: "/alyarz.png",
    bullets: [
      "Held full operational accountability for a multi-facility leisure complex, overseeing spa, aquatic, sports, and family recreation services.",
      "Directed commercial strategy, staffing, and service delivery, driving membership growth, revenue optimization, and operational efficiency.",
      "Established structured communication and engagement channels, supporting brand positioning and member retention through executive-level messaging."
    ],
  },
];

// ---------- KEY ACHIEVEMENTS ----------
const PROJECTS = [
  {
    title: "Multi-Site NEOM Operations Excellence",
    period: "2024-Present",
    impact: "15,000+ residents across 4+ communities",
    description: "Leading resident experience operations across NEOM's transformative giga-project communities, overseeing service delivery and stakeholder coordination."
  },
  {
    title: "Multi-Million SAR Asset Management",
    period: "2020-2024", 
    impact: "95%+ SLA compliance, 15+ companies",
    description: "Delivered operational excellence across Aramco-affiliated technology park assets, achieving consistent SLA performance and tenant satisfaction."
  },
  {
    title: "Executive Communication & KPI Management Platform",
    period: "2008-2024",
    impact: "30,000+ stakeholders reached",
    description: "Developed and executed comprehensive executive communication strategies, founding multiple high-impact publication platforms including The SUNRISE (NEOM) and PETRO NEWS. Established KPI tracking systems and stakeholder engagement protocols that significantly enhanced organizational transparency, community cohesion, and executive visibility across multiple business units."
  },
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
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// ---------- COMPONENTS ----------
function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden py-6 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-slate-300 text-sm font-medium shadow-sm bg-white hover:bg-slate-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              {IconComponent && <IconComponent size={16} className="text-slate-600" />}
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
      className={`rounded-2xl border border-slate-200 shadow-sm bg-white p-6 ${
        hover ? "hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300" : ""
      } ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// ---------- PAGE ----------
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="min-h-screen bg-white text-slate-800 relative overflow-hidden">
      {/* NAV */}
      <nav className="border-b border-blue-200/40 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Achievements" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.resumeUrl, icon: FileText, label: "Resume", external: true },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.header 
        className="max-w-4xl mx-auto px-6 pt-16 pb-12 relative z-10"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-slate-600"
          >
            <MapPin size={16} />
            <span>{META.location}</span>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent mb-2"
            >
              {META.name}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-700 mb-3"
            >
              {META.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              {META.valueProposition}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a 
              href={`mailto:${META.email}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2 font-medium shadow-lg"
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} /> Contact
            </motion.a>
            <motion.a 
              href={META.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-blue-300 text-slate-800 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 inline-flex items-center gap-2 font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={18} /> Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* FLOATING SKILLS MARQUEE */}
      <section className="relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Core Competencies</h2>
          <p className="text-sm text-slate-600">15+ years of executive leadership excellence</p>
        </motion.div>
        <Marquee items={SKILLS} />
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-16 relative z-10">
        {/* Key Performance Indicators */}
        <section>
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8 text-center">Key Performance Indicators</h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {EXECUTIVE_KPIS.map((kpi, i) => (
                <Card key={i} className="text-center" hover={true}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-2">{kpi.value}</div>
                    <div className="text-sm font-medium text-slate-700 mb-1">{kpi.label}</div>
                    <div className="text-xs text-slate-500">{kpi.sublabel}</div>
                  </motion.div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Executive Summary */}
        <section>
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8">Executive Summary</h2>
            <Card hover={true}>
              <p className="text-slate-700 leading-relaxed text-lg">{META.about}</p>
            </Card>
          </motion.div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-20">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8">Professional Experience</h2>
            <div className="space-y-6">
              {EXPERIENCE.map((job, i) => (
                <Card 
                  key={i} 
                  hover={false}
                  className="p-4 md:p-6"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2 flex items-center justify-center border border-blue-200 flex-shrink-0">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={32}
                            height={32}
                            className="object-contain w-full h-full"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-lg sm:text-xl text-slate-900 leading-tight">{job.role}</h3>
                          <div className="text-blue-700 font-medium text-base sm:text-lg">{job.company}</div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <div className="text-sm font-medium text-slate-900">{job.period}</div>
                        <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">{job.duration}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                      {job.bullets.map((bullet, j) => (
                        <li 
                          key={j} 
                          className="flex gap-2 leading-relaxed"
                        >
                          <ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Key Achievements */}
        <section id="achievements">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8">Key Achievements</h2>
            <Card hover={true}>
              <div className="space-y-8">
                {PROJECTS.map((project, i) => (
                  <motion.div 
                    key={i} 
                    className="border-b border-slate-100 last:border-b-0 pb-8 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>
                      <div className="text-right">
                        <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{project.period}</div>
                        <div className="text-sm font-medium bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mt-1">{project.impact}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8">Education</h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <Card key={i} hover={true}>
                  <motion.div 
                    className="flex justify-between items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">{edu.school}</h3>
                      <div className="text-blue-700 mb-1 font-medium">{edu.program}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{edu.period}</div>
                      <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{edu.location}</div>
                    </div>
                  </motion.div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-8">Contact Information</h2>
            <Card hover={true}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${META.email}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail size={20} className="text-blue-500 group-hover:text-blue-700 transition-colors" />
                    <span className="font-medium">{META.email}</span>
                  </motion.a>
                  <motion.a
                    href={META.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin size={20} className="text-blue-500 group-hover:text-blue-700 transition-colors" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </motion.a>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-3 text-slate-700"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone size={20} className="text-blue-500" />
                    <span className="font-medium">{META.phone}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-slate-700"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin size={20} className="text-blue-500" />
                    <span className="font-medium">{META.location}</span>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/50 py-8 mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p 
            className="text-sm text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} {META.name}. Professional Executive Portfolio.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
