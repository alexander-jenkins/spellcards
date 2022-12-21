import Spell from './Spell.json';
import SpellAreaTags from './SpellAreaTags';
import SpellComponents from './SpellComponents';
import SpellDescription from './SpellDescription';
import SpellDuration from './SpellDuration';
import SpellRange from './SpellRange.jsx';

export default function Spellcard(props) {
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
    } = Spell;

    return (
        <div className='spell'>
            <h2>{name}</h2>
            <p>{level}</p>
            <p>{school}</p>
            <p>{time.map((time) => `${time.number} ${time.unit}`)}</p>
            <SpellDuration duration={duration[0]} />
            <SpellComponents components={components} />
            <SpellDescription description={entries} />
            <SpellRange range={range} />
            <SpellAreaTags tags={areaTags} />
        </div>
    );
}
