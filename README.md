# 📄 GlassmorphicProfessionalResume - Dynamic CV Builder & PDF Engine

A modern, full-stack ecosystem designed to manage, render, and export a professional resume dynamically. This project replaces traditional, rigid styling approaches with a decoupled architecture, utilizing a highly customizable frontend and a dedicated backend service exclusively focused on consistent PDF document generation.

---

## 🎯 Project Objectives

* **Content Abstraction:** Decouple professional data (experiences, skills, contact information) from the presentation layer using modular data schemas and structures.
* **Internationalization (i18n):** Native support for multiple languages (Portuguese and English) switchable dynamically at runtime.
* **Rendering Consistency:** Eliminate layout and formatting inconsistencies caused by client-side browser print engines by delegating PDF generation to a controlled server-side Linux environment inside a container.
* **Development Reactivity:** Full Hot Reload integration across both services, making changes to data, layouts, or server scripts immediately available without service interruption.
* **Layout Calibration:** Fine-tune the rendering engine's virtual pixel measurements via environment variables to perfectly handle complex text wrap scenarios.

---

## 🏗️ Project Architecture & Directory Structure

The project is structured with the frontend application at the core workspace root and the backend isolated in a dedicated subdirectory:

* **Frontend (`/frontend`):** An interactive, rich user interface built with **React and TypeScript** to manage CV data layouts, dynamic translations, custom styling typography, and theme tokens.
* **Backend (`/backend`):** A dedicated microservice acting as the PDF export engine. It processes structural and layout payload data through Puppeteer to deliver an identical PDF document on any device.

---

## 📁 CV Data Customization & Privacy Shield

To protect your personal information (such as real phone numbers, emails, addresses, and employment history) when publishing your fork or repository publicly, the project utilizes an automated **Template Customization Layer**.

All candidate structure models are stored in the **`frontend/src/app/data/`** directory. The real `.ts` production files are automatically ignored by `.gitignore` to prevent data leaks, while public `.ts.example` files are provided as structural templates.

### 👤 Candidate Information Templates

To build your own resume, customize the fields inside these structural files:

* **`frontend/src/app/data/PersonalData.ts.example`**: Contains core personal details (Full Name, professional title, location map links, and contact channels like Email, Phone, GitHub, and LinkedIn).
* **`frontend/src/app/data/SummaryData.ts.example`**: Holds the professional summary or profile pitch paragraph for each supported language.
* **`frontend/src/app/data/SkillsData.ts.example`**: Defines the technical skills categories (e.g., Languages, Frameworks, Databases) and their respective skill items.
* **`frontend/src/app/data/ExperienceData.ts.example`**: Stores the professional background history grid, roles, periods, and accomplishment bullet points.
* **`frontend/src/app/data/EducationData.ts.example`**: Contains academic degrees, vocational courses, certifications, and institutional descriptions.

### 🎨 Visual & Layout Settings

* **`src/app/data/SettingsData.ts.example`**: Edit this template to change the color palettes, fonts, font sizes, weights, or container dimensions for both Light and Dark modes.

### 🌐 Pre-bundled Global Settings

* **`src/app/data/LanguagesData.ts`**: This file is tracked publicly by default as it does not contain private user information. It bootstraps the system with **Brazilian Portuguese (`pt-BR`)** and **US English (`en-US`)**. You can easily append new locales here.

---

## 🐳 Dockerization & Automated Bootstrap

The entire ecosystem is containerized using Docker and calibrated with local volumes. To provide a zero-setup onboarding experience, the orchestration layer handles all file initialization automatically.

### 🔄 Intelligent Initialization Automation

When you execute `docker-compose up`, the multi-stage environment performs the following automated synchronization routines before starting up the dev servers:

1. **Frontend Bootstrapping:** The container scans the `src/app/data/` folder. For every missing production file (e.g., `PersonalData.ts`), it automatically creates a functional clone from its corresponding template (`PersonalData.ts.example`).
2. **Backend Bootstrapping:** The container verifies the existence of the runtime configuration environment. If no `.env` file is present, it instantly bootstraps one from the `.env.example` template.

Any changes subsequently made to your active data components or backend rendering scripts will trigger an instant Hot Reload in the running container without service interruption.

### Prerequisites

* [Docker](https://docs.docker.com/get-docker/) installed.
* [Docker Compose](https://docs.docker.com/compose/install/) installed.

---

## ⚙️ Environment Variables (.env)

The backend service utilizes a `.env` file to calibrate layout dimensions.

* **`PARAMETER_PAGE_WIDTH`**: Defines the virtual page height calculation factor used by the layout engine to determine page splits. **The default recommended value is `1000`**.

---

## 🚀 How to Run the Project

You can spin up the entire ecosystem simultaneously using the Docker Compose configuration located at the root of the project.

### 1. Build and Start the Containers

Run the following command to build the images, initialize the missing data files from templates, and launch the services in development mode:

```bash
docker-compose up --build
```

### 2. Access the Applications

Once the orchestration is complete, the entry points will be available at:

* Frontend UI: [http://localhost:5173](http://localhost:5173)

* Backend API: [http://localhost:3001](http://localhost:3001)

### 3. Stopping the Environment

To halt the containers preserving your disk state, use:

```bash
docker-compose down
```
