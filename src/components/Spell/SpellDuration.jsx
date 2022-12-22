import { SpellDurations } from '../../assets/Spells/SpellEnums';
export default function SpellDuration(props) {
    let rawDuration = props.duration[0];
    let duration = SpellDurations[rawDuration.type];

    if (rawDuration.type === 'timed') {
        let { amount, type } = rawDuration.duration;
        duration = parseTimed(amount, type);
    }

    return <div className='spell-duration'>{`${duration}`}</div>;
}

// parse a timed duration
function parseTimed(amount, unit) {
    let duration = amount + ' ' + unit;
    if (amount > 1) {
        duration += 's';
    }
    return duration;
}
