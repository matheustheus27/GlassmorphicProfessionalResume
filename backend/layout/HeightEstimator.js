class HeightEstimator {

    static estimateSummary(text = "") {
        // 116px = Section Title (15px) + Border/Gap (11px) + Card Inner Padding (24px top + 24px bottom) + Block Outer Margin (42px)
        return 116 + this.lines(text, 105) * 20;
    }

    static estimateSkills(categories = []) {
        // 116px = Base structure of the unified Glass Card (Margins, Section Title, and Padding)
        let height = 116;

        for (const category of categories) {
            height += 30; // Subcategory title (Languages, Methodologies, etc.)

            const skills = category.items || [];
            // Simulates flex-wrap: an average of 4 badges per physical line within the usable width of an A4 page
            const rows = Math.ceil(skills.length / 4);

            height += rows * 38; // Badge height (28px) + Vertical gap (10px)
        }

        return height;
    }

    static estimateExperience(exp) {
        // 48px = Vertical inner padding of the card (.glass-card has 24px top + 24px bottom)
        let height = 48;

        if (exp.role) height += 22;
        if (exp.company) height += 22;
        if (exp.date) height += 20;

        const bullets = exp.bullets || [];
        for (const bullet of bullets) {
            // On A4-sized paper, excluding margins, the text wraps at around 82 characters per line
            height += this.lines(bullet, 82) * 20; 
        }

        // On A4-sized paper, excluding margins, the text wraps at around 82 characters per line
        return height + 20;
    }

    static estimateEducation(item) {
        let height = 48; // Padding interno vertical do card

        if (item.role) height += 22;
        if (item.company) height += 22;
        if (item.date) height += 20;

        if (item.description) {
            height += this.lines(item.description, 85) * 20;
        }

        return height + 20;
    }

    static lines(text = "", charsPerLine = 100) {
        if (!text) return 1;

        const baseLines = Math.ceil(text.length / charsPerLine);
        // A subtle mathematical adjustment to compensate for the browser's "word-wrap" (long words that wrap to the next line)
        const wordWrapPenalty = text.length > 150 ? Math.floor(text.length / 240) : 0;

        return Math.max(1, baseLines + wordWrapPenalty);
    }
}

module.exports = HeightEstimator;