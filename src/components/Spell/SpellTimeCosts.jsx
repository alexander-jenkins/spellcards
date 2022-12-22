export default function SpellTimeCosts(props) {
    let { time } = props;
    let times = [];

    time.map((time) => times.push(`${time.number} ${time.unit}`));

    return (
        <div className='spell-time-costs'>
            {times.map((time, idx) => (
                <div className='spell-time-cost' key={idx}>
                    {time}
                </div>
            ))}
        </div>
    );
}
