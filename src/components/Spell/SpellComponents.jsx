export default function SpellComponents(props) {
    let { components } = props;
    let { v, s, m } = components;

    let items = [];
    v && items.push('V');
    s && items.push('S');
    m && items.push(`M (${m})`);

    return <div className='spell-components'>{items.join(', ')}</div>;
}
