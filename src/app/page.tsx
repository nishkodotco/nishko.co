"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Maximize2, Minimize2, ExternalLink, MapPin, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { experiences } from "@/data/experience";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";



export default function BentoPortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 22 },
    },
  };

  const [blogExpanded, setBlogExpanded] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#FFFFFF] p-3 lg:p-4 font-sans flex items-center justify-center">
      <motion.div
        className="w-full max-w-[1600px] h-full lg:h-[calc(100vh-2rem)] flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-3 [&>*]:min-h-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* ── 1. PROFILE — (0,0)→(2,2) square, rounded-xl ── */}
        <motion.div variants={itemVariants}
          className="lg:col-span-2 lg:col-start-1 lg:row-span-3 lg:row-start-1">
          <div className="w-full h-full rounded-xl overflow-hidden border border-[#E5E5E5]">
            <img
              src="/avatar.png"
              alt="Nishant Kant Ojha"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* ── 1b. NAME / LOCATION — col 1–2, row 3–4 ── */}
        <motion.div variants={itemVariants}
          className="lg:col-span-2 lg:col-start-1 lg:row-span-1 lg:row-start-4">
          <div className="w-full h-full rounded-xl border border-[#E5E5E5] bg-white flex flex-col justify-center px-4 py-3">
            <h2 className="text-4xl font-bold tracking-widest text-[#1A1A1A] mb-1">
              nishko
            </h2>

            <div className="flex items-center gap-1 mt-2">
              <MapPin className="h-3 w-3 text-[#737373] shrink-0" />
              <span className="text-xs text-[#737373]">Toronto, Ontario</span>
            </div>
          </div>
        </motion.div>

        {/* ── 2. EXPERIENCE HUB — (4,0)→(12,8) ── */}
        <motion.div variants={itemVariants}
          className="lg:col-span-8 lg:col-start-5 lg:row-span-8 lg:row-start-1 min-h-0">
          <Card className="h-full border border-[#E5E5E5] shadow-none rounded-xl flex flex-col overflow-hidden">
            <CardHeader className="border-b border-[#E5E5E5] bg-white py-3 px-6 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {/* Live Status — Cinnabar Orange */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-cinnabar opacity-50" />
                    <span className="relative inline-flex rounded-xl h-2.5 w-2.5 bg-cinnabar" />
                  </span>
                  <CardTitle className="text-sm font-semibold text-[#1A1A1A] tracking-tight">
                    Experience
                  </CardTitle>
                </div>
                <span className="text-xs text-[#737373]">Toronto, ON</span>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-1 overflow-y-auto">
              <div className="px-6 py-5 space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id}
                    className={index !== experiences.length - 1 ? "border-b border-[#E5E5E5] pb-8" : ""}>

                    {/* Role header */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 rounded-xl border border-[#E5E5E5] bg-white overflow-hidden flex items-center justify-center p-1">
                          <img src={exp.logo} alt={exp.company} className="object-contain h-full w-full" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1A1A1A] text-base leading-tight">{exp.role}</h3>
                          <p className="text-[#737373] text-xs mt-0.5">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#737373] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-1 rounded-xl w-fit whitespace-nowrap">
                        {exp.dateRange}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed text-[#1A1A1A] mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span key={tech}
                          className="text-xs font-medium text-[#1A1A1A] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-0.5 rounded-xl transition-colors hover:border-[#F97316] hover:text-[#F97316]">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ── 3. PROJECTS — (0,4)→(4,8) ── */}
        <motion.div variants={itemVariants}
          className="lg:col-span-4 lg:col-start-1 lg:row-span-8 lg:row-start-5">
          <Card className="h-full border border-[#E5E5E5] shadow-none rounded-xl flex flex-col group cursor-pointer transition-colors hover:border-[#F97316]/40">
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight">Projects</h3>
                  <ExternalLink className="h-4 w-4 text-[#737373] group-hover:text-[#F97316] transition-colors" />
                </div>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Enterprise-scale Azure architectures, automated deployment pipelines, and AI integrations.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Terraform", "Next.js", "Azure OpenAI", "+ 3 more"].map((t) => (
                  <span key={t}
                    className="text-xs font-medium text-[#1A1A1A] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-0.5 rounded-xl">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>


        {/* ── 5. RESUME — icon only with tooltip ── */}
        <motion.div variants={itemVariants}
          className="lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-1">
          <Link href="/resume" className="group relative flex items-center justify-center w-full h-full bg-[#F5F5F5] rounded-xl border border-[#E5E5E5] hover:border-[#F97316]/40 transition-colors p-2">
            <FileText
              className="w-full h-full text-[#A3A3A3] group-hover:text-[#F97316] transition-colors duration-200"
            />
            {/* Tooltip */}
            <span className="pointer-events-none absolute bottom-[-1.75rem] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[#1A1A1A] px-2 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Resume
            </span>
          </Link>
        </motion.div>

        {/* ── 6. BLOG — expands full grid (cols 5-12, rows 1-12) on toggle ── */}
        <motion.div
          variants={itemVariants}
          layout
          className={`lg:col-start-5 transition-all duration-300 ${
            blogExpanded
              ? 'lg:col-span-8 lg:row-span-12 lg:row-start-1 lg:z-10'
              : 'lg:col-span-4 lg:row-span-4 lg:row-start-9'
          }`}
        >
          <Card className="h-full border border-[#E5E5E5] shadow-none rounded-xl flex flex-col justify-between p-6 hover:border-[#F97316]/40 transition-colors">
            <div className="flex justify-between items-start">
              <Link href="/blog" className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-1">Blog</p>
                <h3 className="text-base font-semibold text-[#1A1A1A]">Technical Writing</h3>
              </Link>
              <button
                onClick={() => {
                  if (blogExpanded) {
                    setBlogExpanded(false);
                  } else {
                    setBlogExpanded(true);
                    router.push('/blog');
                  }
                }}
                className="ml-3 p-1.5 rounded-xl hover:bg-[#F5F5F5] transition-colors group"
                aria-label={blogExpanded ? 'Collapse blog' : 'Expand blog'}
              >
                {blogExpanded
                  ? <Minimize2 className="h-4 w-4 text-[#737373] group-hover:text-[#F97316] transition-colors" />
                  : <Maximize2 className="h-4 w-4 text-[#737373] group-hover:text-[#F97316] transition-colors" />
                }
              </button>
            </div>
            <p className="text-sm text-[#737373] leading-relaxed mt-3">
              Thoughts and deep-dives on Azure AI, cloud architecture, and developer tooling.
            </p>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  );
}
