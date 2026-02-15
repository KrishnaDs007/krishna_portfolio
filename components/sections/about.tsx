"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { socialLinks, contactInfo } from "@/lib/constants";

const expertiseAreas = [
  { id: "overview", label: "Overview" },
  { id: "frontend", label: "Frontend Development" },
  { id: "architecture", label: "Architecture & Scalability" },
  { id: "design", label: "Design Systems" },
];

const coreExpertise = [
  "React & Next.js",
  "Node.js",
  "TypeScript",
  "Cloud Architecture",
  "UI/UX Design",
];

export function About() {
  const [activeArea, setActiveArea] = useState("overview");

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-accent/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-sm text-primary font-semibold uppercase tracking-[0.2em] mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Architecting digital experiences with{" "}
              <span className="text-primary">precision</span>.
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Column - Profile Image (Smaller) */}
            <div className="order-1 lg:order-1">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />

                {/* Profile Image Card */}
                <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/images/Krishna.jpeg"
                      alt="Krishna Devashish"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{contactInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span>Available for projects</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const iconMap: Record<string, any> = {
                        github: Github,
                        linkedin: Linkedin,
                        twitter: Twitter,
                        email: Mail,
                      };
                      const Icon = iconMap[social.platform];
                      if (!Icon) return null;

                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors"
                          aria-label={social.platform}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Core Expertise */}
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coreExpertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-card border border-border text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content with Tags */}
            <div className="order-2 lg:order-2">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {expertiseAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area.id)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeArea === area.id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent"
                    }`}
                  >
                    {area.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="space-y-6">
                {activeArea === "overview" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-2xl font-bold">
                      Senior Frontend Engineer & Architect
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With over 7 years of experience in building scalable web
                      applications, I specialize in creating high-performance,
                      user-centric interfaces that solve real-world problems. My
                      journey in software development has been driven by a
                      passion for clean code, exceptional user experiences, and
                      continuous learning.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I've had the privilege of working with diverse teams
                      across multiple industries, from startups to
                      enterprise-level organizations. My expertise spans the
                      entire frontend ecosystem, with a strong focus on React,
                      Next.js, and TypeScript. I believe in writing
                      maintainable, testable code that stands the test of time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond coding, I'm passionate about mentoring junior
                      developers, contributing to open-source projects, and
                      staying at the forefront of web technologies. I approach
                      every project with a problem-solving mindset, always
                      looking for innovative solutions that balance technical
                      excellence with business objectives.
                    </p>
                  </div>
                )}

                {activeArea === "frontend" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-2xl font-bold">
                      Frontend Development Excellence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      My frontend development philosophy centers around building
                      applications that are not just functional, but delightful
                      to use. I leverage modern frameworks like React and
                      Next.js to create dynamic, responsive interfaces that
                      provide seamless user experiences across all devices and
                      platforms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Performance optimization is at the core of my development
                      process. I implement best practices such as code
                      splitting, lazy loading, and efficient state management to
                      ensure applications load quickly and run smoothly. I'm
                      experienced in working with various styling solutions
                      including Tailwind CSS, CSS Modules, and
                      styled-components.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Accessibility and SEO are never afterthoughts in my
                      projects. I build with semantic HTML, ARIA labels, and
                      follow WCAG guidelines to ensure applications are usable
                      by everyone. My attention to detail extends to
                      implementing proper meta tags, structured data, and
                      server-side rendering for optimal search engine
                      visibility.
                    </p>
                  </div>
                )}

                {activeArea === "architecture" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-2xl font-bold">
                      Architecture & Scalability
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Designing scalable architectures is where technical
                      expertise meets strategic thinking. I architect
                      applications with growth in mind, implementing patterns
                      and structures that can evolve with changing business
                      requirements. My approach emphasizes modularity,
                      reusability, and maintainability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I have extensive experience with state management
                      solutions including Redux, Zustand, and React Context,
                      choosing the right tool based on application complexity
                      and team needs. I design component hierarchies that
                      promote code reuse while maintaining clear separation of
                      concerns and single responsibility principles.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      My architectural decisions are always data-driven. I
                      implement comprehensive monitoring and analytics to
                      understand application performance and user behavior. This
                      insight guides optimization efforts and helps prioritize
                      feature development. I also have experience with
                      microservices architecture, API design, and integrating
                      with various backend systems.
                    </p>
                  </div>
                )}

                {activeArea === "design" && (
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-2xl font-bold">
                      Design Systems & Component Libraries
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building and maintaining design systems is one of my core
                      strengths. I create comprehensive component libraries that
                      ensure consistency across products while empowering teams
                      to move faster. My design systems include well-documented
                      components, design tokens, and clear usage guidelines.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I leverage tools like Storybook for component development
                      and documentation, making it easy for designers and
                      developers to collaborate effectively. Each component is
                      built with flexibility in mind, supporting theming,
                      customization, and various use cases while maintaining a
                      consistent visual language.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Accessibility is baked into every component from the
                      start. I use Radix UI primitives and other accessible
                      foundations to ensure keyboard navigation, screen reader
                      support, and proper ARIA attributes. The result is a
                      design system that not only looks great but works for
                      everyone, reducing technical debt and accelerating product
                      development.
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                  <a
                    href="/assets/KRISHNA-DEVASHISH.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background font-medium hover:bg-accent transition-colors"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
