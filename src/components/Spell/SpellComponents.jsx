export default function SpellComponents(props) {
    let { components } = props;
    let { v, s, m } = components;

    let items = [];
    v && items.push('V');
    s && items.push('S');
    m && items.push(parseMaterial(m));

    return (
        <div className='spell-components'>Components: {items.join(', ')}</div>
    );
}

// parse material components
function parseMaterial(m) {
    return typeof m === 'string' ? `M (${m})` : `M (${m.text})`;
}
