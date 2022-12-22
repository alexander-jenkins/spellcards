import SpellAreaTags from './SpellAreaTags';
import SpellComponents from './SpellComponents';
import SpellDescription from './SpellDescription';
import SpellDuration from './SpellDuration';
import SpellRange from './SpellRange.jsx';
import SpellTimeCosts from './SpellTimeCosts';
import SpellTitle from './SpellTitle';

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
        areaTags,
        range,
    } = props.spell;
    let title = {
        name: name,
        level: level,
        school: school,
    };

    return (
        <div className='spell-card'>
            <SpellTitle title={title} />
            <SpellDescription description={entries} />
            <SpellTimeCosts time={time} />
            <SpellDuration duration={duration} />
            <SpellComponents components={components} />
            <SpellRange range={range} />
            <SpellAreaTags tags={areaTags} />
        </div>
    );
}
