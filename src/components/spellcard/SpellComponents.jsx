export default function SpellComponents(props) {
    let { components } = props;
    let { v, s, m } = components;
    console.log(components);

    return JSON.stringify(components);
}
