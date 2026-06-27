const cardTemplate = require("./card");

module.exports = function summaryTemplate({ summary }) {
  return `<p class="description-text" style="margin: 0; text-align: justify;">${summary}</p>`;
};