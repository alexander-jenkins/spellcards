// convert the spell school abbreviation to a string
export const SpellSchool = Object.freeze({
    A: 'Abjuration',
    C: 'Conjuration',
    D: 'Divination',
    E: 'Enchantment',
    EV: 'Evocation',
    I: 'Illusion',
    N: 'Necromancy',
    T: 'Transmutation',
});

// convert the spell component abbreviation to a string
export const SpellMaterials = Object.freeze({
    V: 'Verbal',
    S: 'Somatic',
    M: 'Material',
});

// convert the spell level number to a string
export const SpellLevels = Object.freeze({
    0: 'Cantrip',
    1: '1st-level',
    2: '2nd-level',
    3: '3rd-level',
    4: '4th-level',
    5: '5th-level',
    6: '6th-level',
    7: '7th-level',
    8: '8th-level',
    9: '9th-level',
});

// convert the spell durations to a string
export const SpellDurations = Object.freeze({
    instant: 'Instantaneous',
    permanent: 'Permanent (until dispelled)',
    timed: 'timed',
});

// convert the spell ranges to a string
export const SpellRanges = Object.freeze({
    point: (distance) => {
        let { type } = distance;
        switch (type) {
            case 'self':
                return 'Self';
            case 'touch':
                return 'Touch';
            default:
                let { amount } = distance;
                return `${amount}${UnitConverter[type]}`;
        }
    },
    cone: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} cone`;
    },
    sphere: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} sphere`;
    },
    radius: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} radius`;
    },
    special: (distance) => {
        return JSON.stringify(distance);
    },
    line: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} line`;
    },
    cube: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} cube`;
    },
    hemisphere: (distance) => {
        let { type, amount } = distance;
        return `${amount}${UnitConverter[type]} hemisphere`;
    },
});

const UnitConverter = Object.freeze({
    feet: 'ft',
    miles: 'mi',
    meters: 'm',
    kilometers: 'km',
    hours: 'hr',
});
