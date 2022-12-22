import { SpellRanges } from '../../assets/Spells/SpellEnums';

export default function SpellRange(props) {
    let { type, distance } = props.range;
    return (
        <div className='spell-range'>{`${eval(
            `SpellRanges.${type}(distance)`
        )}`}</div>
    );
}
