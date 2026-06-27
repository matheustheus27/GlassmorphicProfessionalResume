import {ExperienceDetails} from '../types/resumeType';

export const experienceDetails: Record<string, ExperienceDetails> = {
    'pt-BR': {
        experienceTitle: "EXPERIÊNCIA PROFISSIONAL",
        experiences: [
            {
                company: "TechCorp Soluções Globais",
                position: "Desenvolvedor Backend Pleno",
                period: "Jan 2025 – Presente",
                bullets: [
                    "Responsável pela engenharia de rotas e sincronização distribuída de dados entre sistemas ERP legados e plataformas externas parceiras.",
                    "Desenvolvimento e manutenção de integrações críticas orientadas a microsserviços, gerenciando fluxos de autenticação dinâmica (OAuth2), conciliação financeira e tratamento de falhas transacionais.",
                    "Otimização de consultas, rotinas de concorrência concorrente e refatoração de queries complexas em ambientes relacionais de grande escala.",
                    "Criação e padronização de documentações técnicas detalhadas das APIs internas sob o padrão OpenAPI/Swagger para consumo de parceiros."
                ]
            },
            {
                company: "LogiSystems Logística Avançada",
                position: "Desenvolvedor Backend Júnior / Estagiário",
                period: "Mar 2022 – Dez 2024",
                bullets: [
                    "Atuação no desenvolvimento core de sistemas de rastreamento de cargas e comprovação eletrônica de entregas em tempo real.",
                    "Refatoração de rotinas legadas e acopladas aplicando padrões de projeto modernos como Domain-Driven Design (DDD) leve, Services e Repositories, minimizando gargalos de performance.",
                    "Implementação e monitoramento de webhooks e estratégias de polling persistente para sincronização contínua de status operacionais.",
                    "Gerenciamento e persistência de dados em ambientes híbridos usando bancos relacionais para dados ACID e NoSQL para auditoria de payloads e logs brutos."
                ]
            },
            {
                company: "DevStudio Enterprise",
                position: "Desenvolvedor de Software Independente",
                period: "Jan 2021 – Jan 2022",
                bullets: [
                    "Liderança técnica no escopo de lógica de programação estruturada e arquitetura de componentes reutilizáveis para aplicações interativas comerciais.",
                    "Coordenação direta de pequenos times utilizando metodologias ágeis (Scrum) e divisão sistemática de entregas técnicas."
                ]
            }
        ]
    },
    'en-US': {
        experienceTitle: "PROFESSIONAL EXPERIENCE",
        experiences: [
            {
                company: "TechCorp Global Solutions",
                position: "Mid-level Backend Developer",
                period: "Jan 2025 – Present",
                bullets: [
                    "Responsible for route engineering and distributed data synchronization between legacy ERP systems and external cloud platforms.",
                    "Developing and maintaining critical microservice-oriented integrations, managing dynamic authentication flows (OAuth2), financial reconciliation, and transactional error handling.",
                    "Optimizing database operations, handling high-concurrency race conditions, and refactoring complex queries in large-scale environments.",
                    "Creating and standardizing comprehensive technical documentation for internal APIs using OpenAPI/Swagger guidelines."
                ]
            },
            {
                company: "LogiSystems Logistics",
                position: "Junior Backend Developer / Intern",
                period: "Mar 2022 – Dec 2024",
                bullets: [
                    "Contributed to core product development for real-time fleet tracking and digital proof-of-delivery applications.",
                    "Refactored tightly coupled legacy systems using modern design patterns like lightweight Domain-Driven Design (DDD), Services, and Repositories to scale down bottlenecks.",
                    "Implemented and monitored high-availability webhooks and custom polling mechanisms for continuous operational status syncing.",
                    "Modeled and managed data persistence across hybrid database stacks, leveraging transactional stores and NoSQL repositories for audit trailing."
                ]
            },
            {
                company: "DevStudio Enterprise",
                position: "Independent Software Developer",
                period: "Jan 2021 – Jan 2022",
                bullets: [
                    "Technical execution regarding application logic flow and architecture of modular reusable entities for commercial tools.",
                    "Coordinated sprint delivery metrics using agile methodologies and feature mapping frameworks."
                ]
            }
        ]
    }
};