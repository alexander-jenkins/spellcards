import { SpellRanges } from '../../assets/Spells/SpellEnums';

export default function SpellRange(props) {
    let { type, distance } = props.range;
    let converter = SpellRanges[type];
    return <div className='spell-range'>{converter(distance)}</div>;
}
