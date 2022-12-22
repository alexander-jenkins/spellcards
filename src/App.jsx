import SpellCard from './components/Spell/SpellCard';
import { spell } from './assets/Spells/spells-phb.json';

export default function App() {
    return (
        <div className='App'>
            <h1>5e Spellcards</h1>
            {spell.map((spell, idx) => (
                <SpellCard key={idx} spell={spell} />
            ))}

            <div id='card-list'></div>
        </div>
    );
}
