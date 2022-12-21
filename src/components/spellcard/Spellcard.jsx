import Spell from './SampleSpell.json';
import SpellComponents from './SpellComponents';
import SpellRange from './SpellRange.jsx';

function Spellcard() {
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
            <p>{duration.map((dur) => `${dur.type}`)}</p>
            <SpellComponents components={components} />
            <p>{entries}</p>
            <p>{areaTags.map((tag) => `${tag + ' '}`)}</p>
            <SpellRange range={range} />
        </div>
    );
}

export default Spellcard;
