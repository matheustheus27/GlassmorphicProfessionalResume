const path = require("path");
const LayoutBlock = require("./LayoutBlock");
const HeightEstimator = require("./HeightEstimator");

const summaryTemplate = require(path.resolve(__dirname, "../templates/summaryTemplate.js"));
const skillsTemplate = require(path.resolve(__dirname, "../templates/skillsTemplate.js"));
const experienceTemplate = require(path.resolve(__dirname, "../templates/experienceTemplate.js"));
const educationTemplate = require(path.resolve(__dirname, "../templates/educationTemplate.js"));

class BlockFactory {
    static createSummary(summaryData) {
        return LayoutBlock.summary(
            summaryTemplate({ summary: summaryData.summary }),
            HeightEstimator.estimateSummary(summaryData.summary)
        );
    }

    static createSkills(skillsData, settings) {
        return LayoutBlock.skills(
            skillsTemplate({ categories: skillsData.skills, settings }),
            HeightEstimator.estimateSkills(skillsData.skills)
        );
    }

    static createExperience(exp, settings) {
        return LayoutBlock.experience(
            experienceTemplate({ exp, settings }),
            HeightEstimator.estimateExperience(exp)
        );
    }

    static createEducation(edu, settings) {
        return LayoutBlock.education(
            educationTemplate({ edu, settings }),
            HeightEstimator.estimateEducation(edu)
        );
    }
}

module.exports = BlockFactory;