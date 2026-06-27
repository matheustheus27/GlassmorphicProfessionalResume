import React, { useEffect, useState } from 'react';

import { GlassCard } from './components/GlassCard';
import { SkillBadge } from './components/SkillBadge';
import { SectionTitle } from './components/SectionTitle';
import { ExperienceMeta } from './components/ExperienceMeta';
import { LanguageSelector } from './components/LanguageSelector';

import { Translations } from './data/TranslationsData';
import { LanguageCode } from './data/LanguagesData';
import { settingsData } from './data/SettingsData';
import { Settings } from './types/settingsType';
import { ResumeDTO } from './dto/ResumeDTO';
import { fileNameBuilder } from './utils/fileNameBuilder';

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(() => {
    return (localStorage.getItem('glass_lang') as LanguageCode) || 'pt-BR';
  });

  const [isLight, setIsLight] = useState<boolean>(() => {
    return localStorage.getItem('glass_theme') === 'light';
  });

  const [openMenu, setOpenMenu] = useState(false);

  // Loads the complete style settings based on the active theme
  const currentTheme = isLight ? 'light' : 'dark';
  const styles: Settings = settingsData[currentTheme];

  // Selects the complete dictionary for the active language directly from TranslationsData
  const t = Translations[lang];
  const personal = t.personalDetails;

  useEffect(() => {
    localStorage.setItem('glass_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('glass_theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const exportToPDF = async () => {
    const payload: ResumeDTO = {
      settings: {
        language: lang,
        theme: currentTheme,
        card: styles.card,
        title: styles.title,
        subtitle: styles.subtitle,
        caption: styles.caption,
        meta: styles.meta,
        chip: styles.chip,
        backgroundColor: styles.backgroundColor
      },
      personal: {
        title: personal.name,
        personal: {
          name: personal.name,
          title: personal.title,
          location: {
            title: personal.location.location,
            link: personal.location.link
          },
          contact: [
            { title: personal.contact.email.email, link: `mailto:${personal.contact.email.email}` },
            { title: personal.contact.phone.phone, link: personal.contact.phone.link },
            ...(personal.contact.networking.github ? [{ title: personal.contact.networking.github.name, link: personal.contact.networking.github.url }] : []),
            ...(personal.contact.networking.linkedin ? [{ title: personal.contact.networking.linkedin.name, link: personal.contact.networking.linkedin.url }] : [])
          ]
        }
      },
      summary: {
        title: t.summaryDetails.summaryTitle,
        summary: t.summaryDetails.summary
      },
      skills: {
        title: t.skillsDetails.skillsTitle,
        skills: t.skillsDetails.skills.map(cat => ({
          title: cat.name,
          items: cat.items
        }))
      },
      experiences: {
        title: t.experienceDetails.experienceTitle,
        experiences: t.experienceDetails.experiences.map(exp => ({
          company: exp.company,
          role: exp.position,
          period: exp.period,
          bullets: exp.bullets
        }))
      },
      education: {
        title: t.educationDetails.educationTitle,
        education: t.educationDetails.educations.map(edu => ({
          institution: edu.organization,
          role: edu.degree,
          period: edu.period,
          description: edu.description
        }))
      }
    };

    const response = await fetch("http://localhost:3001/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileNameBuilder(personal, lang);
    link.click();
    URL.revokeObjectURL(url);
  };

  const themeBg = isLight ? 'text-slate-900' : 'text-slate-50';
  const borderCol = isLight ? 'border-blue-200/60' : 'border-slate-800';

  return (
    <div 
      className="min-h-screen flex justify-center p-6 md:p-12 font-sans transition-colors duration-300"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="w-full max-w-3xl">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6 print:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="px-3 py-2 rounded-lg border text-xs font-medium hover:bg-slate-800 hover:text-white transition cursor-pointer text-slate-400 border-slate-800"
          >
            ⚙️ {lang === 'pt-BR' ? 'Configurações' : 'Settings'}
          </button>

          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-cyan-400 transition cursor-pointer shadow-sm"
          >
            {lang === 'pt-BR' ? 'Exportar PDF' : 'Export PDF'}
          </button>
        </div>

        {/* SETTINGS PANEL */}
        {openMenu && (
          <div className="mb-6 p-4 border border-slate-800 rounded-xl bg-slate-900/90 space-y-4 print:hidden">
            <div>
              <p className="text-xs mb-2 text-slate-400 font-semibold">Language</p>
              <LanguageSelector value={lang} onChange={setLang} />
            </div>
            <div>
              <p className="text-xs mb-2 text-slate-400 font-semibold">Theme</p>
              <button
                onClick={() => setIsLight(!isLight)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition cursor-pointer ${isLight ? 'bg-cyan-500' : 'bg-slate-700'}`}
              >
                <div
                  className="bg-white w-5 h-5 rounded-full shadow-md transform transition"
                  style={{ transform: isLight ? 'translateX(28px)' : 'translateX(0px)' }}
                />
              </button>
            </div>
          </div>
        )}

        {/* REAL CV AREA */}
        <main id="cv-root" className="space-y-5">

          {/* HEADER VISUAL */}
          <header 
            className={`flex flex-col gap-2 border-b pb-6 ${borderCol}`}
            style={{ borderBottomColor: styles.card.borderColor }}
          >
            <h1 
              className="tracking-tight"
              style={{ 
                color: styles.title.primary.fontColor, 
                fontFamily: styles.title.primary.fontType,
                fontSize: styles.title.primary.fontSize,
                fontWeight: styles.title.primary.fontWeight 
              }}
            >
              {personal.name}
            </h1>
            <h2 
              className="tracking-widest uppercase"
              style={{ 
                color: styles.subtitle.primary.fontColor, 
                fontFamily: styles.subtitle.primary.fontType,
                fontSize: styles.subtitle.primary.fontSize,
                fontWeight: styles.subtitle.primary.fontWeight
              }}
            >
              {personal.title}
            </h2>

            <div 
              className="flex flex-wrap gap-x-4 gap-y-2 mt-2"
              style={{ 
                color: styles.meta.fontColor, 
                fontFamily: styles.meta.fontType,
                fontSize: styles.meta.fontSize,
                fontWeight: styles.meta.fontWeight
              }}
            >
              <a href={personal.location.link} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors cursor-pointer group">
                {personal.location.icon} <span className="underline decoration-dotted group-hover:decoration-solid">{personal.location.location}</span>
              </a>
              <a href={`mailto:${personal.contact.email.email}`} className="hover:text-cyan-500 transition-colors">
                {personal.contact.email.icon} {personal.contact.email.email}
              </a>
              <a href={personal.contact.phone.link} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors">
                {personal.contact.phone.icon} {personal.contact.phone.phone}
              </a>
              {personal.contact.networking.github && (
                <a href={personal.contact.networking.github.url} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors">
                  {personal.contact.networking.github.icon} {personal.contact.networking.github.name}
                </a>
              )}
              {personal.contact.networking.linkedin && (
                <a href={personal.contact.networking.linkedin.url} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors">
                  {personal.contact.networking.linkedin.icon} {personal.contact.networking.linkedin.name}
                </a>
              )}
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <div>
            <GlassCard 
              style={{ backgroundColor: styles.card.backgroundColor, borderColor: styles.card.borderColor }}
              className={themeBg}
            >
              <SectionTitle style={{ color: styles.title.secondary.fontColor, fontFamily: styles.title.secondary.fontType, fontSize: styles.title.secondary.fontSize }}>
                {t.summaryDetails.summaryTitle}
              </SectionTitle>
              <p 
                className="text-sm text-justify leading-relaxed mt-3"
                style={{ color: styles.caption.secondary.fontColor, fontFamily: styles.caption.secondary.fontType, fontSize: styles.caption.secondary.fontSize }}
              >
                {t.summaryDetails.summary}
              </p>
            </GlassCard>
          </div>

          {/* SKILLS */}
          <div>
            <GlassCard 
              style={{ backgroundColor: styles.card.backgroundColor, borderColor: styles.card.borderColor }}
              className={themeBg}
            >
              <SectionTitle style={{ color: styles.title.secondary.fontColor, fontFamily: styles.title.secondary.fontType, fontSize: styles.title.secondary.fontSize }}>
                {t.skillsDetails.skillsTitle}
              </SectionTitle>
              <div className="flex flex-col gap-4 mt-3">
                {t.skillsDetails.skills.map((cat, idx) => (
                  <div 
                    key={cat.name} 
                    className="pb-2"
                    style={{ borderBottom: idx !== t.skillsDetails.skills.length - 1 ? `1px solid ${styles.card.borderColor}` : 'none' }}
                  >
                    <h4 
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ 
                        color: styles.subtitle.secondary.fontColor, 
                        fontFamily: styles.subtitle.secondary.fontType,
                        fontSize: styles.subtitle.secondary.fontSize,
                        fontWeight: styles.subtitle.secondary.fontWeight
                      }}
                    >
                      {cat.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map(skill => (
                        <SkillBadge 
                          key={skill}
                          style={{ 
                            backgroundColor: styles.chip.backgroundColor, 
                            color: styles.chip.fontColor, 
                            borderColor: styles.chip.borderColor,
                            fontFamily: styles.chip.fontType, 
                            fontSize: styles.chip.fontSize,
                            fontWeight: styles.chip.fontWeight 
                          }}
                        >
                          {skill}
                        </SkillBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* EXPERIENCES */}
          <div>
            <GlassCard 
              style={{ backgroundColor: styles.card.backgroundColor, borderColor: styles.card.borderColor }}
              className={themeBg}
            >
              <SectionTitle style={{ color: styles.title.secondary.fontColor, fontFamily: styles.title.secondary.fontType, fontSize: styles.title.secondary.fontSize }}>
                {t.experienceDetails.experienceTitle}
              </SectionTitle>
              <div className="flex flex-col gap-6 mt-4">
                {t.experienceDetails.experiences.map((exp, index) => (
                  <div key={index}>
                    <div style={{ color: styles.caption.primary.fontColor }}>
                      <ExperienceMeta 
                        company={exp.company} 
                        date={exp.period} 
                        role={exp.position}
                        style={{
                          color: styles.meta.fontColor,
                          fontFamily: styles.meta.fontType,
                          fontSize: styles.meta.fontSize,
                          fontWeight: styles.meta.fontWeight as any
                        }}
                      >
                        <ul 
                          className="list-disc pl-4 flex flex-col gap-1.5 text-sm text-justify mt-2"
                          style={{ color: styles.caption.secondary.fontColor, fontFamily: styles.caption.secondary.fontType, fontSize: styles.caption.secondary.fontSize }}
                        >
                          {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                        </ul>
                      </ExperienceMeta>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* ACADEMIC BACKGROUND */}
          <div>
            <GlassCard 
              style={{ backgroundColor: styles.card.backgroundColor, borderColor: styles.card.borderColor }}
              className={themeBg}
            >
              <SectionTitle style={{ color: styles.title.secondary.fontColor, fontFamily: styles.title.secondary.fontType, fontSize: styles.title.secondary.fontSize }}>
                {t.educationDetails.educationTitle}
              </SectionTitle>
              <div className="flex flex-col gap-6 mt-4">
                {t.educationDetails.educations.map((edu, index) => (
                  <div key={index}>
                    <div style={{ color: styles.caption.primary.fontColor }}>
                      <ExperienceMeta 
                        company={edu.organization} 
                        date={edu.period} 
                        role={edu.degree}
                        style={{
                          color: styles.meta.fontColor,
                          fontFamily: styles.meta.fontType,
                          fontSize: styles.meta.fontSize,
                          fontWeight: styles.meta.fontWeight as any
                        }}
                      >
                        <p 
                          className="text-sm text-justify mt-2"
                          style={{ color: styles.caption.secondary.fontColor, fontFamily: styles.caption.secondary.fontType, fontSize: styles.caption.secondary.fontSize }}
                        >
                          {edu.description}
                        </p>
                      </ExperienceMeta>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </main>
      </div>
    </div>
  );
}