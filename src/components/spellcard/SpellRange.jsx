function SpellRange(props) {
    let { range } = props;
    let area = range.type;
    let unit = range.distance.type;
    let distance = range.distance.amount;

    return `${distance} ${unit} / ${area}`;
}

export default SpellRange;
