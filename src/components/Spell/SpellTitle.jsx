import { SpellSchool, SpellLevels } from '../../assets/Spells/SpellEnums';

export default function SpellTitle(props) {
    let { name, level, school, source } = props;

    if (level === 0) {
        return (
            <div className='spell-title'>
                <div className='spell-title-name'>{name}</div>
                <div className='spell-title-level-school'>{`${SpellSchool[school]} ${SpellLevels[level]}`}</div>
                <div className='spell-title-source'>{source}</div>
            </div>
        );
    }

    return (
        <div className='spell-title'>
            <div className='spell-title-name'>{name}</div>
            <div className='spell-title-level-school'>{`${SpellLevels[level]} ${SpellSchool[school]}`}</div>
            <div className='spell-title-source'>{source}</div>
        </div>
    );
}
