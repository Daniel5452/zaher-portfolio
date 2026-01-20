"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, Linkedin, FileText, MapPin, Phone, ArrowRight
} from "lucide-react";

// ---------- PERSONAL INFORMATION ----------
const META = {
  name: "Zaher Osman",
  title: "Senior Operations & Hospitality Services Leader",
  valueProposition: "Driving operational excellence across large-scale residential communities and hospitality operations in Saudi Arabia's transformative projects",
  about: "Senior operations leader with 15+ years managing large-scale residential communities (15,000+ residents) and hospitality operations (450+ rooms) across Saudi Arabia's most prestigious projects, including NEOM, Aramco-affiliated Petro Rabigh, and international luxury hospitality brands including Hilton and Waldorf Astoria (Qasr Al Sharq). Proven track record of delivering operational excellence, 95%+ SLA compliance, and cost optimization in remote, high-demand giga-project environments, while ensuring resident satisfaction. Proven track record developing and executing comprehensive communication strategies, founding community publication newsletters including The SUNRISE at NEOM (reaching 25,000+ individuals) and PETRO NEWS (reaching 5,000+ residents), and creating multimedia content that enhances stakeholder engagement and brand presence.",
  email: "zaher.osman@example.com",
  phone: "+966 555179456",
  location: "Jeddah, Saudi Arabia - NEOM, Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/zaherbosman",
  resumeUrl: "/Resume_Zaher.pdf",
};

// Executive KPIs
const EXECUTIVE_KPIS = [
  { label: "Residents Managed", value: "15,000+", sublabel: "Across NEOM communities" },
  { label: "Hotel Rooms", value: "450+", sublabel: "Hilton & Waldorf Astoria" },
  { label: "SLA Compliance", value: "95%+", sublabel: "Consistent delivery" },
  { label: "Years Experience", value: "15+", sublabel: "Senior leadership" },
  { label: "Communities", value: "4+", sublabel: "NEOM project sites" },
  { label: "Newsletter Reach", value: "25,000+", sublabel: "Community engagement" },
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
      "Oversee resident experience operations across 4+ NEOM communities serving 15,000+ individuals, managing stakeholder relations and service delivery coordination.",
      "Founded 'The SUNRISE' biannual community newsletter reaching 1,000+ residents, establishing key communication channel for community engagement.",
      "Coordinate cross-functional operations ensuring 24/7 service continuity in one of the world's most ambitious giga-projects."
    ],
  },
  {
    company: "Petro Rabigh (Aramco Joint Venture)",
    role: "Head of Tenant Services & Relations at PlusTech Park",
    period: "October 2020 – March 2024",
    duration: "3.5 years",
    logo: "/petro.png",
    bullets: [
      "Led operational activities across multi-million SAR property assets for Aramco-affiliated technology park, maintaining 95%+ SLA compliance.",
      "Directed operational planning for large-scale industrial park serving 15+ companies with strategic vendor management across multiple business units.",
      "Established vendor relationships with 15+ companies, coordinating Quality, Safety, Technology, and Compliance requirements."
    ],
  },
  {
    company: "Petro Rabigh (Aramco Joint Venture)",
    role: "Head of Community Recreation & Engagement",
    period: "May 2008 – October 2020",
    duration: "12.5 years",
    logo: "/petro.png",
    bullets: [
      "Managed community operations for 5,000+ residents, implementing engagement strategies that significantly improved resident satisfaction.",
      "Launched 'PETRO NEWS' monthly newsletter reaching 5,000+ employees and dependents, plus 'E-Update - Sports & Recreation' video series.",
      "Developed comprehensive recreational programs and CSR initiatives aligned with company vision and community needs."
    ],
  },
  {
    company: "Hilton Hotels & Resorts",
    role: "Recreation Manager",
    period: "April 2006 – April 2008",
    duration: "2 years",
    logo: "/hilton-international-vector-logo-free-11574107517kspgfnlb4b.png",
    bullets: [
      "Managed Sports & Leisure Department operations for 5-star luxury properties including Hilton and Qasr Al Sharq (Waldorf Astoria Collection).",
      "Developed comprehensive training programs for department team members while maintaining highest service standards.",
      "Led spa operations at Qasr Al Sharq (Waldorf Astoria), managing daily operations and staffing for luxury service delivery."
    ],
  },
  {
    company: "Alyarz Leisure Club",
    role: "Director of Operations",
    period: "July 2004 – April 2006",
    duration: "1.8 years",
    logo: "/alyarz.png",
    bullets: [
      "Oversaw comprehensive recreational operations including spa, pools, water sports, kids club, and indoor/outdoor sports facilities.",
      "Developed 'IN TOUCH' quarterly newsletter enhancing member communication and community engagement across facility offerings.",
      "Managed spa operations including training, staffing, recruitment, and market analysis while developing sales strategies and revenue growth initiatives."
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
    title: "Community Engagement Platform Development",
    period: "2008-2024",
    impact: "30,000+ total reach across newsletters",
    description: "Founded and managed multiple community publications including The SUNRISE (NEOM) and PETRO NEWS, significantly enhancing community engagement."
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
  transition: { duration: 0.4 },
};

// ---------- COMPONENTS ----------
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

// ---------- PAGE ----------
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Achievements" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.resumeUrl, icon: FileText, label: "Resume", external: true },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <MapPin size={16} />
            <span>{META.location}</span>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{META.name}</h1>
            <h2 className="text-xl text-slate-700 mb-3">{META.title}</h2>
            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">{META.valueProposition}</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a 
              href={`mailto:${META.email}`}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2 font-medium"
            >
              <Mail size={18} /> Contact
            </a>
            <a 
              href={META.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-2 font-medium"
            >
              <FileText size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-12">
        {/* Executive Snapshot */}
        <section>
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Executive Snapshot</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {EXECUTIVE_KPIS.map((kpi, i) => (
                <Card key={i} className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{kpi.label}</div>
                  <div className="text-xs text-slate-500">{kpi.sublabel}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section>
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Summary</h2>
            <Card>
              <p className="text-slate-700 leading-relaxed">{META.about}</p>
            </Card>
          </motion.div>
        </section>

        {/* Leadership Focus Areas */}
        <section>
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Leadership Focus Areas</h2>
            <Card>
              <div className="grid md:grid-cols-2 gap-4">
                {LEADERSHIP_FOCUS.map((area, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Experience</h2>
            <div className="space-y-6">
              {EXPERIENCE.map((job, i) => (
                <Card key={i}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-3 md:mb-0">
                      <div className="w-12 h-12 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-1">{job.role}</h3>
                        <div className="text-slate-600 font-medium">{job.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{job.period}</div>
                      <div className="text-xs text-slate-500">{job.duration}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2">
                        <ArrowRight size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Key Achievements */}
        <section id="achievements">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Achievements</h2>
            <Card>
              <div className="space-y-6">
                {PROJECTS.map((project, i) => (
                  <div key={i} className="border-b border-slate-100 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900">{project.title}</h3>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">{project.period}</div>
                        <div className="text-sm font-medium text-slate-700">{project.impact}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Education</h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <Card key={i}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{edu.school}</h3>
                      <div className="text-slate-700 mb-1">{edu.program}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{edu.period}</div>
                      <div className="text-xs text-slate-500">{edu.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <Card>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <a
                    href={`mailto:${META.email}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <Mail size={18} className="text-slate-400" />
                    <span>{META.email}</span>
                  </a>
                  <a
                    href={META.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <Linkedin size={18} className="text-slate-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone size={18} className="text-slate-400" />
                    <span>{META.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin size={18} className="text-slate-400" />
                    <span>{META.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {META.name}. Professional Executive Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}
