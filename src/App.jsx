import { useEffect, useState } from 'react';

// import components
import SpellCard from './components/Spell/SpellCard';

// import all the spell json files
import { spell as AAG } from './assets/Spells/spells-aag.json';
import { spell as AI } from './assets/Spells/spells-ai.json';
import { spell as AVT } from './assets/Spells/spells-aitfr-avt.json';
import { spell as EGW } from './assets/Spells/spells-egw.json';
import { spell as FTD } from './assets/Spells/spells-ftd.json';
import { spell as GGR } from './assets/Spells/spells-ggr.json';
import { spell as IDROTF } from './assets/Spells/spells-idrotf.json';
import { spell as LLK } from './assets/Spells/spells-llk.json';
import { spell as phb } from './assets/Spells/spells-phb.json';
import { spell as SCC } from './assets/Spells/spells-scc.json';
import { spell as TCE } from './assets/Spells/spells-tce.json';
// TODO - import UA spells
import { spell as XGE } from './assets/Spells/spells-xge.json';

export default function App() {
    const [allSpells, setAllSpells] = useState([]);
    const [activeSpell, setActiveSpell] = useState([]);
    const [allSources, setAllSources] = useState();
    const [activeSources, setActiveSources] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        // combine all the imported spell arrays
        const imported = [
            ...AAG,
            ...AI,
            ...AVT,
            ...EGW,
            ...FTD,
            ...GGR,
            ...IDROTF,
            ...LLK,
            ...phb,
            ...SCC,
            ...TCE,
            ...XGE,
        ];

        // set the initial spell to a random spell in the array
        const randomSpell =
            imported[Math.floor(Math.random() * imported.length)];

        setAllSpells(...[imported]);
        setAllSources(12);
        setActiveSpell([randomSpell]);
    }, []);

    return (
        <div className='App'>
            <h1>5e Spellcards</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='spell-search'>Search for a spell: </label>
                <input
                    type='text'
                    placeholder='Spell name'
                    onChange={(e) => {
                        setTimeout(() => {
                            setSearch(e.target.value);
                            const filteredSpells = allSpells.filter((spell) => {
                                return spell.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase());
                            });
                            setActiveSpell(filteredSpells.slice(0, 1));
                        }, 400);
                    }}
                />
            </form>
            <em>
                {`Searching through ${allSpells.length} spells in ${allSources} books`}
            </em>
            {activeSpell.map((spell, idx) => (
                <SpellCard key={idx} spell={spell} />
            ))}
        </div>
    );
}
