export default function SpellDescription(props) {
    let { description } = props;
    return (
        <div className='spell-description'>
            {description.map((desc) => JSON.stringify(desc))}
        </div>
    );
    return <div className='spell-description'>Spell description here!</div>;
}
