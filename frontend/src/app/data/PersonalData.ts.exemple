import { PersonalDetails } from '../types/resumeType';

export const title: Record<string, string> = {
    'pt-BR': "ENGENHEIRO DE SOFTWARE BACKEND",
    'en-US': "BACKEND SOFTWARE ENGINEER"
};

export const personalDetails = (language: string): PersonalDetails => {
    return {
        name: "ALEX SILVA SANTOS",
        title: title[language],
        location: {
            location: "São Paulo, SP",
            link: "https://maps.google.com",
            icon: "📍"
        },
        contact: {
            email: {
                email: "alex.silva.example@email.com",
                icon: "✉️"
            },
            phone: {
                phone: "+55 (11) 99999-0000",
                link: "https://wa.me/5511999990000",
                icon: "📞"
            },
            networking: {
                github: { name: "GitHub", url: "https://github.com/yourusername", icon: "🐙" },
                linkedin: { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "💼" }
            }
        }
    }
};