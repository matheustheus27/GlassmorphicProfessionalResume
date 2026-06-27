# 📄 Dynamic CV Builder & PDF Engine

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

* **Frontend (Root Directory):** An interactive, rich user interface built with **React and TypeScript** to manage CV data layouts, dynamic translations, custom styling typography, and theme tokens.
* **Backend (`/backend`):** A dedicated microservice acting as the PDF export engine. It processes structural and layout payload data through Puppeteer to deliver an identical PDF document on any device.

---

## 📁 CV Data Customization

All the content, language dictionary nodes, and visual styling rules are defined inside the **`/src/data`** directory on the frontend. To build your own resume, you need to customize the following files:

### 👤 Candidate Information

The following files must be edited with the actual candidate's real information to populate the resume sections:

* **`PersonalData.ts`**: Contains core personal details (Full Name, professional title, location map links, and contact channels like Email, Phone, GitHub, and LinkedIn).
* **`SummaryData.ts`**: Holds the professional summary or profile pitch paragraph for each supported language.
* **`SkillsData.ts`**: Defines the technical skills categories (e.g., Languages, Frameworks, Databases) and their respective skill items.
* **`ExperienceData.ts`**: Stores the professional background history grid, roles, periods, and accomplishment bullet points.
* **`EducationData.ts`**: Contains academic degrees, vocational courses, certifications, and institutional descriptions.

### 🎨 Visual & Layout Settings

* **`SettingsData.ts`**: Edit this file if you wish to change the color palettes, fonts, font sizes, weights, or container dimensions for both Light and Dark modes.

### 🌐 Adding New Languages

* **`LanguagesData.ts`**: By default, the system comes bootstrapped with **Brazilian Portuguese (`pt-BR`)** and **US English (`en-US`)**. If you want to support a third language, register its locale metadata code, flag emoji, and label here, then add its corresponding dictionary translation node into the data files mentioned above.

---

## 🐳 Dockerization & Hot Reload

The entire ecosystem is containerized using Docker and calibrated with local volumes. Any changes made to your data components (such as `ExperienceData.ts`, `PersonalData.ts`) or backend rendering scripts will trigger an instant reload in the running application environment.

### Prerequisites

* [Docker](https://docs.docker.com/get-docker/) installed.
* [Docker Compose](https://docs.docker.com/compose/install/) installed.

---

## ⚙️ Environment Variables (.env)

The backend service utilizes a `.env` file to calibrate layout dimensions.

* **`PARAMETER_PAGE_WIDTH`**: Defines the virtual page height calculation factor used by the layout engine to determine page splits. **The default recommended value is `1000`**.

> 💡 **Automation:** When starting the environment via Docker Compose, the orchestrator automatically checks if the `/backend/.env` file exists. If it doesn't, it will automatically clone and bootstrap one from `/backend/.env.example`.

---

## 🚀 How to Run the Project

You can spin up the entire ecosystem simultaneously using the Docker Compose configuration located at the root of the project.

### 1. Build and Start the Containers

Run the following command to build the images and launch the services in development mode:

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
