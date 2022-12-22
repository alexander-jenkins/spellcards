import SpellTitle from './SpellTitle';
import SpellDescription from './SpellDescription';
import SpellCastTime from './SpellCastTime';
import SpellDuration from './SpellDuration';
import SpellComponents from './SpellComponents';
import SpellRange from './SpellRange.jsx';

// style the card
import './SpellCard.css';

export default function SpellCard(props) {
    let {
        name,
        level,
        school,
        time,
        duration,
        components,
        entries,
        range,
        meta,
    } = props.spell;

    return (
        <div className='spell-card'>
            <SpellTitle name={name} level={level} school={school} />
            <SpellDescription description={entries} />
            <SpellCastTime time={time} meta={meta} />
            <SpellDuration duration={duration} />
            <SpellComponents components={components} />
            <SpellRange range={range} />
        </div>
    );
}
