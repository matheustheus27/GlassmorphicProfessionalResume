import { PersonalDetails, SummaryDetails, SkillsDetails, ExperienceDetails, EducationDetails } from './resumeType';

export type Locale = 'pt-BR' | 'en-US';

export interface TranslationDict {
  personalDetails: PersonalDetails;
  summaryDetails: SummaryDetails;
  skillsDetails: SkillsDetails;
  experienceDetails: ExperienceDetails;
  educationDetails: EducationDetails;
}