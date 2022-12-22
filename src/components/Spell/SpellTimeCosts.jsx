export default function SpellTimeCosts(props) {
    let { time } = props;
    let times = ['Takes '];

    time.map((time) => times.push(`${time.number} ${time.unit}`));

    return (
        <div className='spell-time-costs'>
            {times.map((time, idx) => (
                <span className='spell-time-cost' key={idx}>
                    {time}
                </span>
            ))}
        </div>
    );
}
