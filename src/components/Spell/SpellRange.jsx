function SpellRange(props) {
    let { range } = props;
    let area = range.type;
    let unit = range.distance.type;
    let distance = range.distance.amount;

    return <div className='spell-range'>{`${distance} ${unit} (${area})`}</div>;
}

export default SpellRange;
