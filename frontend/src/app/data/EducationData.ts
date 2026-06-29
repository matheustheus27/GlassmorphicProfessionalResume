import {EducationDetails} from '../types/resumeType';

export const educationDetails: Record<string, EducationDetails> = {
    "pt-BR": {
        educationTitle: "FORMAÇÃO ACADÊMICA",
        educations: [
            {
                organization: "Universid1ade Federal de Tecnologia (UFT)",
                degree: "Bacharelado em Engenharia de Computação",
                period: "2020 - Em andamento",
                description: "Formação conceitual e empírica sólida englobando Teoria da Computação, Compiladores, Engenharia de Software, Sistemas Operacionais Distribuídos e Arquitetura de Redes. Desenvolvimento de projetos de pesquisa focados em Interação Humano-Computador (IHC) e Realidade Aumentada aplicada à otimização de fluxos operacionais."
            },
            {
                organization: "Instituto Técnico de Inclusão Digital",
                degree: "Curso Técnico em Informática / Desenvolvimento",
                period: "Concluído",
                description: "Ensino Técnico focado em infraestrutura e desenvolvimento de aplicações. Domínio aprofundado em lógica de programação estruturada, algoritmos, estruturas de dados fundamentais, topologias de rede de computadores e modelagem conceitual/física de bancos de dados relacionais."
            }
        ]
    },
    'en-US': {
        educationTitle: "EDUCATION",
        educations: [
            {
                organization: "Federal University of Technology",
                degree: "Bachelor's Degree in Computer Engineering",
                period: "2020 - Present",
                description: "Solid practical and theoretical engineering baseline encompassing Computer Theory, Compilers, Software Architecture, Distributed Systems, and Systems Networks. Participated in university research groups focused on Human-Computer Interaction (HCI) and operational process enhancement via Augmented Reality."
            },
            {
                organization: "Technical Institute of Computer Science",
                degree: "Technical Degree in Information Technology",
                period: "Graduated",
                description: "Vocational Technical program focused on systems architecture, data models, and software integration. Deep understanding of syntax algorithms, underlying core data structures, computer networking baselines, and database query development."
            }
        ]
    }
};