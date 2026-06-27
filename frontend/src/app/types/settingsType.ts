export type LanguageCode = 'pt-BR' | 'en-US';

export type FontStyle = {
    fontType: string;
    fontSize: string;
    fontColor: string;
    fontWeight?: string; // Added to control the bold formatting of dates and text
};

export type Settings = {
    language: LanguageCode;
    theme: 'light' | 'dark';
    card: {
        borderColor: string;
        backgroundColor: string;
    };
    title: {
        primary: FontStyle;   // Candidate's Name (Header macro)
        secondary: FontStyle; // Section Headings (SUMMARY, SKILLS, etc.)
    };
    subtitle: {
        primary: FontStyle;   // Main Position (Header)
        secondary: FontStyle; // Subheadings for Competencies (LANGUAGES)
    };
    caption: {
        primary: FontStyle;   // Companies and Academic Institutions
        secondary: FontStyle; // Descriptive Text and Bullet Points
    };
    meta: FontStyle;          // Time Periods / Dates / Location (Now supports fontWeight)
    chip: FontStyle & {
        backgroundColor: string;
        borderColor: string;
    };
    backgroundColor?: string;
};