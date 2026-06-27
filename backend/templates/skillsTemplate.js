module.exports = function skillsTemplate({ categories, settings }) {
  const chip = settings?.chip || {};
  const card = settings?.card || {};

  return (categories || []).map(category => `
    <div class="skill-group" style="display: flex; flex-direction: column; gap: 6px;">
      <h4 class="skill-group-title" style="margin: 0; padding: 0;">${category.title || category.name}</h4>
      <div class="badge-row" style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${(category.items || []).map(item => `
          <span class="badge" style="background-color: ${chip.backgroundColor} !important; color: ${chip.fontColor} !important; border-color: ${chip.borderColor || card.borderColor} !important;">
            ${item}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
};