const Page = require("./Page");

class LayoutEngine {
    constructor(pageHeight = 980) {
        this.pageHeight = pageHeight;
        this.pages = [];
    }

    build(blocks) {
        this.pages = [];

        let currentPage = new Page(this.pageHeight);
        let currentSection = null;

        for (const block of blocks) {
            if (currentSection !== block.type) {
                currentSection = block.type;
            }

            /*
             * If the individual block does not fit in the remaining space on the sheet,
             * move the current page to the collection and open a new page on a new sheet
             */
            if (!currentPage.canFit(block.height)) {
                this.pages.push(currentPage);
                currentPage = new Page(this.pageHeight);
            }

            currentPage.addSection(block);
        }

        if (!currentPage.isEmpty()) {
            this.pages.push(currentPage);
        }

        return this.pages;
    }
}

module.exports = LayoutEngine;