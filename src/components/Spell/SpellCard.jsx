import Spell from '../../assets/Spells/dummy-spell.json';
import SpellAreaTags from './SpellAreaTags';
import SpellComponents from './SpellComponents';
import SpellDescription from './SpellDescription';
import SpellDuration from './SpellDuration';
import SpellRange from './SpellRange.jsx';
import SpellTimeCosts from './SpellTimeCosts';
import SpellTitle from './SpellTitle';

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
            <SpellTimeCosts time={time} />
            <SpellDuration duration={duration[0]} />
            <SpellComponents components={components} />
            <SpellDescription description={entries} />
            <SpellRange range={range} />
            <SpellAreaTags tags={areaTags} />
        </div>
    );
}
