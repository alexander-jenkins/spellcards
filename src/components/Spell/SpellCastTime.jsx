import { SpellCastTimes } from '../../assets/Spells/SpellEnums';

export default function SpellCastTime(props) {
    let time = props.time[0];
    let meta = props.meta || { ritual: false };
    let converter = SpellCastTimes[time.unit];

    return (
        <div className='spell-time-costs'>
            Cast: {`${converter(time)} ${meta.ritual ? ' (or ritual)' : ''}`}
        </div>
    );
}
