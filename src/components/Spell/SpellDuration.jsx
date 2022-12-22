export default function SpellDuration(props) {
    let { duration } = props;

    let durationString = '';
    switch (duration.type) {
        case 'timed':
            if (duration.concentration)
                durationString = `${duration.duration.amount} ${duration.duration.type} (concentration)`;
            durationString = `${duration.duration.amount} ${duration.duration.type}`;
            break;
        case 'instant':
            durationString = 'Instant';
            break;
        case 'permanent':
            durationString = 'Permanent until dispelled';
            break;
        default:
            durationString = 'Unknown duration';
            break;
    }

    return <div className='spell-duration'>{durationString}</div>;
}
