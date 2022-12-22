import { SpellDurations } from '../../assets/Spells/SpellEnums';
export default function SpellDuration(props) {
    let duration = props.duration[0];
    let type = duration.type;
    let concentration = duration.concentration || false;
    let converter = SpellDurations[type];
    return (
        <div className='spell-duration'>
            Duration:{' '}
            {`${converter(duration.duration)} ${
                concentration ? ' (concentration)' : ''
            }`}
        </div>
    );
}
