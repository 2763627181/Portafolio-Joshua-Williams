import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ContactSection } from "@/components/sections/contact-section";
import { getCertificateItems } from "@/data/certificates";
import { getExperienceItems } from "@/data/experience";
import { getProfile } from "@/data/profile";
import { getProjects } from "@/data/projects";
import { getServiceItems } from "@/data/services";
import { getStackCategories } from "@/data/stack";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const profile = getProfile(lang);

  return (
    <main id="main-content">
      <HeroSection profile={profile} dict={dict.hero} />
      <AboutSection profile={profile} dict={dict.about} />
      <StackSection categories={getStackCategories(lang)} dict={dict.stack} />
      <ProjectsSection projects={getProjects(lang)} dict={dict.projects} />
      <ExperienceSection
        items={getExperienceItems(lang)}
        dict={dict.experience}
      />
      <ServicesSection items={getServiceItems(lang)} dict={dict.services} />
      <CertificatesSection
        items={getCertificateItems(lang)}
        dict={dict.certificates}
      />
      <ContactSection profile={profile} dict={dict.contact} />
    </main>
  );
}
