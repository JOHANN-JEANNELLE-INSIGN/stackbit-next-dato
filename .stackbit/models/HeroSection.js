export const HeroSection = {
    name: 'HeroSection',
    type: 'object',
    label: 'Hero',
    labelField: 'heading',
    groups: ['SectionComponents'],
    fields: [
        { type: 'string', name: 'heading', default: 'Hero Heading' },
        { type: 'markdown', name: 'subheading', default: 'Hero Subheading' },
    ]
};
