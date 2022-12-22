export default function SpellComponents(props) {
    let { components } = props;
    let { v, s, m } = components;

    let items = [];
    v && items.push('V');
    s && items.push('S');
    // if (m.text !== '') items.push(`M (${m.text})`);
    // else items.push('M');

    return <div className='spell-components'>{items.join(', ')}</div>;
}
