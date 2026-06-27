import { SkillsDetails } from '../types/resumeType';

export const skillsDetails: Record<string, SkillsDetails> = {
    'pt-BR': {
        skillsTitle: "COMPETÊNCIAS TÉCNICAS",
        skills: [
            {
                name: "LINGUAGENS",
                items: ["PHP", "Python", "C", "C++", "C#", "Java", "JavaScript", "HTML", "CSS"]
            },
            {
                name: "PROTOCOLOS E FRAMEWORKS",
                items: ["Webhooks", "WebSockets", "Pooling", "APIs REST", "Laravel", "Node.js", "Vue", "React", "Angular", "Slim", "Symfony", "Doctrine"]
            },
            {
                name: "BANCOS DE DADOS E DEVOPS",
                items: ["MongoDB", "Oracle SQL", "SQL Server", "MySQL", "Redis", "Docker", "Git", "Jenkins", "CI/CD"]
            },
            {
                name: "METODOLOGIAS",
                items: ["Scrum", "Kanban", "Desenvolvimento Ágil de Software", "Documentação Técnica", "Arquitetura de Software"]
            }
        ]
    },
    'en-US': {
        skillsTitle: "CORE TECHNICAL SKILLS",
        skills: [
            {
                name: "LANGUAGES",
                items: ["PHP", "Python", "C", "C++", "C#", "Java", "JavaScript", "HTML", "CSS", "TypeScript"]
            },
            {
                name: "FRAMEWORKS AND LIBRARIES",
                items: ["Webhooks", "WebSockets", "Pooling", "APIs REST", "Laravel", "Node.js", "Vue", "React", "Angular", "Slim", "Symfony", "Doctrine"]
            },
            {
                name: "DATABASES AND DEVOPS",
                items: ["MongoDB", "Oracle SQL", "SQL Server", "MySQL", "Redis", "Docker", "Git", "Jenkins", "CI/CD"]
            },
            {
                name: "METHODOLOGIES",
                items: ["Scrum", "Kanban", "Agile Software Development", "Technical Documentation", "Software Architecture"]
            }
        ]
    }
};