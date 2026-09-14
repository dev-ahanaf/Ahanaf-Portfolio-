import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SocialStripSection } from "@/components/sections/SocialStripSection";
import { GlowingOrbDivider } from "@/components/ui/GlowingOrbDivider";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { EducationSection } from "@/components/sections/EducationSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0 bg-[#0a0612] text-slate-100">
      <HeroSection />
      <TechMarquee />
      <AchievementsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <SocialStripSection />
      <GlowingOrbDivider />
      <ProjectsSection />
      <PhotographySection />
      <CurrentlyBuilding />
      <EducationSection />
      <LeadershipSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
