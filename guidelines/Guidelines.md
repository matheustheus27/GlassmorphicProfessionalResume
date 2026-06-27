# CV Project Guidelines

* **Tailwind & Print:** Always include print-specific classes (`@media print` or `print:hidden`) when modifying layouts to ensure they don't break during PDF generation.
* **Component Splitting:** Keep data structures isolated in configuration files (like `contactInfo.ts`) and presentation in the components.
* **Internationalization:** Never hardcode text strings inside React components. Always use the translation dictionary keys.
* **Docker Context:** Remember that the frontend is at the root `/` and the backend is inside `/cv-export-server`. Keep paths aligned.
