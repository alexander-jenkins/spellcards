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

// convert the spell duration abbreviation to a string
export const SpellDurations = Object.freeze({
    instant: 'Instantaneous',
    permanent: 'Permanent (until dispelled)',
    timed: 'timed',
});
