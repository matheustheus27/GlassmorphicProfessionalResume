import { PersonalDetails } from '../types/resumeType';
import { GetResumeLabel } from '../components/LanguageSelector';
import { LanguageCode } from '../types/settingsType';

export function fileNameBuilder(personal: PersonalDetails, locale: LanguageCode) {
  const candidateName = personal.name
  .trim()
  .toLowerCase()
  .replace(/^(\w+)\s+(?:.*\s+)?(\w+)$/, (_, p1, p2) => {
    const first = p1.charAt(0).toUpperCase() + p1.slice(1);
    const last = p2.charAt(0).toUpperCase() + p2.slice(1);
    return `${first}_${last}`;
  });

  return `${GetResumeLabel(locale)}_${candidateName}_${locale}.pdf`;
}