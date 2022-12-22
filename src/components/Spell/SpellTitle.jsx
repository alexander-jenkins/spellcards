import { SpellSchool, SpellLevels } from './SpellEnums';

export default function SpellTitle(props) {
    let { name, level, school } = props.title;

    if (level === 0) {
        return (
            <div className='spell-title'>
                <h2 className='spell-title-name'>{name}</h2>
                <div className='spell-title-level-school'>{`${SpellSchool[school]} ${SpellLevels[level]}`}</div>
            </div>
        );
    }

    return (
        <div className='spell-title'>
            <h2 className='spell-title-name'>{name}</h2>
            <div className='spell-title-level-school'>{`${SpellLevels[level]} ${SpellSchool[school]}`}</div>
        </div>
    );
}
