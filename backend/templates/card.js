/**
 * Wraps content and a title within a cohesive Glass Card
 */
module.exports = function cardTemplate(title, contentHtml) {
  return `
    <div class="glass-card">
      <div class="section-title">${title}</div>
      ${contentHtml}
    </div>
  `;
};