export default function SpellDescription(props) {
    let { description } = props;

    return (
        <div className='spell-description'>
            {description.map((chunk, idx) => {
                if (typeof chunk === 'object') {
                    return (
                        <div key={idx}>
                            {CleanDescription[chunk.type](chunk)}
                        </div>
                    );
                }
                return chunk;
            })}
        </div>
    );
}

const CleanDescription = Object.freeze({
    entries: (chunk) => {
        return (
            <div className='spell-description-sub'>
                <div className='spell-description-sub-name'>{chunk.name}</div>
                <div className='spell-description-sub-entry'>
                    {chunk.entries.join(' ')}
                </div>
            </div>
        );
    },
    table: (chunk) => {
        return (
            <table className='spell-description-table'>
                <caption>{chunk.caption}</caption>
                <thead>
                    <tr>
                        {chunk.colLabels.map((label, idx) => (
                            <th key={idx}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {chunk.rows.map((row, idx) => (
                        <tr key={idx}>
                            {row.map((cell, idx) => (
                                <td key={idx}>
                                    {typeof cell === 'object'
                                        ? JSON.stringify(cell)
                                        : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    },
    list: (chunk) => {
        return (
            <div className='spell-description-list'>
                <ul>
                    {chunk.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    },
});
