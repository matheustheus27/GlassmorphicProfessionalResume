class Page {
    constructor(maxHeight = 980) {
        // Usable height of the sheet (A4 minus margins)
        this.maxHeight = maxHeight;

        // Height currently in use
        this.usedHeight = 0;

        // Page sections
        this.sections = [];
    }

    /**
     * Checks whether a block fits on the page.
     * @param {number} height
     * @returns {boolean}
     */
    canFit(height) {
        return this.usedHeight + height <= this.maxHeight;
    }

    /**
     * Add an entire section.
     * @param {Object} section
     */
    addSection(section) {
        this.sections.push(section);
        this.usedHeight += section.height;
    }

    /**
     * Removes the most recently added section.
     */
    removeLastSection() {
        const removed = this.sections.pop();

        if (removed) {
            this.usedHeight -= removed.height;
        }

        return removed;
    }

    /**
     * Remaining space.
     */
    remainingHeight() {
        return this.maxHeight - this.usedHeight;
    }

    /**
     * Empty page?
     */
    isEmpty() {
        return this.sections.length === 0;
    }

    /**
     * Reload the page.
     */
    clear() {
        this.sections = [];
        this.usedHeight = 0;
    }

    /**
     * JSON used by ResumeBuilder.
     */
    toJSON() {
        return {
            usedHeight: this.usedHeight,
            remainingHeight: this.remainingHeight(),
            sections: this.sections
        };
    }
}

module.exports = Page;