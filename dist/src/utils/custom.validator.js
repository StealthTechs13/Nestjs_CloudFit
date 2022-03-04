"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePageRecord = exports.validateSectionType = exports.validatePageStatus = exports.validateSections = exports.validateTemplate = exports.validateHeroSection = void 0;
const client_1 = require("@prisma/client");
const page_interfaces_1 = require("../types/interfaces/page.interfaces");
const class_validator_1 = require("class-validator");
const validateHeroSection = (obj) => {
    if ('heroHeading' in obj &&
        'heroSynopsis' in obj &&
        'heroImage' in obj &&
        'heroCtaText' in obj &&
        'heroCtaUrl' in obj) {
        if ((0, class_validator_1.isEmpty)(obj.heroHeading) &&
            (0, class_validator_1.isEmpty)(obj.heroSynopsis) &&
            (0, class_validator_1.isEmpty)(obj.heroImage))
            return { isValidTempHero: false, heroMsg: 'All fields in the hero section are required except the heroCta' };
        return { isValidTempHero: true, heroMsg: '' };
    }
    else {
        return { isValidTempHero: false, heroMsg: 'All fields in the hero section are required except the heroCta' };
    }
};
exports.validateHeroSection = validateHeroSection;
const validateTemplate = (obj) => {
    if ('templateName' in obj &&
        'templateHeroSection' in obj &&
        'templateSections' in obj) {
        if (Object.keys(client_1.PAGE_TEMPLATE).indexOf(obj.templateName.toUpperCase()) < 0) {
            return { isValidTemplate: false, msg: 'Invalid page template name' };
        }
        if (Object.keys(client_1.PAGE_STATUS).indexOf(obj.status.toUpperCase()) < 0) {
            return { isValidTemplate: false, msg: 'Invalid page status' };
        }
        if (typeof obj.templateHeroSection !== 'object') {
            return { isValidTemplate: false, msg: 'Invalid hero section' };
        }
        if (obj.templateSections.length === 0) {
            return { isValidTemplate: false, msg: 'A template must have at least one section' };
        }
        return { isValidTemplate: true, msg: '' };
    }
    else {
        return { isValidTemplate: false, msg: 'Invalid hero section' };
    }
};
exports.validateTemplate = validateTemplate;
const validateSections = (sections) => {
    if (sections.filter(section => Object.keys(client_1.SECTION_TYPE).indexOf(section.sectionType.toUpperCase()) < 0).length > 0) {
        return { isValidContent: false, sectionMsg: 'Template sections contains one or more invalid section type' };
    }
    if (sections.filter(section => !(0, class_validator_1.isNumber)(section.sectionHierarchy) || section.sectionHierarchy <= 0).length > 0) {
        return { isValidContent: false, sectionMsg: 'All Section hierarchy must be a number greater than 0' };
    }
    let numArray = [];
    let num;
    for (let i = 0; i < sections.length; i++) {
        if (num === sections[i].sectionHierarchy) {
            numArray.push('something');
            break;
        }
        num = sections[i].sectionHierarchy;
    }
    if (numArray.length > 0) {
        return { isValidContent: false, sectionMsg: 'No two sections can have the same hierarchy' };
    }
    return { isValidContent: true, sectionMsg: '' };
};
exports.validateSections = validateSections;
const validatePageStatus = (status) => {
    if (Object.keys(client_1.PAGE_STATUS).indexOf(status.toUpperCase()) < 0) {
        return { isValidStatus: false, message: 'Invalid page status' };
    }
    return { isValidStatus: true, message: '' };
};
exports.validatePageStatus = validatePageStatus;
const validateSectionType = (sectionType) => {
    if (Object.keys(client_1.SECTION_TYPE).indexOf(sectionType.toUpperCase()) < 0) {
        return { isValidStatus: false, message: 'Invalid Section type' };
    }
    return { isValidSectionType: true, message: '' };
};
exports.validateSectionType = validateSectionType;
const validatePageRecord = (page) => {
    const { isValidTemplate, msg } = (0, exports.validateTemplate)(page);
    if (!isValidTemplate)
        return { isValidPageRecord: false, message: msg };
    const { isValidTempHero, heroMsg } = (0, exports.validateHeroSection)(page.templateHeroSection);
    if (!isValidTempHero)
        return { isValidPageRecord: false, message: heroMsg };
    const { isValidContent, sectionMsg } = (0, exports.validateSections)(page.templateSections);
    if (!isValidContent)
        return { isValidPageRecord: false, message: sectionMsg };
    return { isValidPageRecord: true, message: '' };
};
exports.validatePageRecord = validatePageRecord;
//# sourceMappingURL=custom.validator.js.map