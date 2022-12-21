export default function SpellAreaTags(props) {
    let { tags } = props;
    return <div className='spell-area-tags'>{tags.join(', ')}</div>;
}
