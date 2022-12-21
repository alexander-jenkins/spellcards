import Spellcard from './components/spellcard/Spellcard';

function App() {
    return (
        <div className='App'>
            <h1>5e Spellcards</h1>
            <div id='card-list'>
                <Spellcard />
            </div>
            <footer>
                <p>
                    {'<'}-- Data taken from 5e.tools --{'>'}
                </p>
            </footer>
        </div>
    );
}

export default App;
