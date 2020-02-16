import { Component, h } from 'preact';
import { Skill } from './Skill';
import { Ability } from '../../data/Ability';

const SkillSetDummy = [
    { name: 'Acrobatics', ability: Ability.Dexterity, modifier: 0, isProficient: false },
    { name: 'Animal Handling', ability: Ability.Wisdom, modifier: 0, isProficient: false },
    { name: 'Arcana', ability: Ability.Intelligence, modifier: 0, isProficient: false },
    { name: 'Athletics', ability: Ability.Strength, modifier: 0, isProficient: false },
    { name: 'Deception', ability: Ability.Charisma, modifier: 0, isProficient: false },
    { name: 'History', ability: Ability.Intelligence, modifier: 0, isProficient: false },
    { name: 'Insight', ability: Ability.Wisdom, modifier: 0, isProficient: false },
    { name: 'Intimidation', ability: Ability.Charisma, modifier: 0, isProficient: false },
    { name: 'Investigation', ability: Ability.Intelligence, modifier: 0, isProficient: false },
    { name: 'Medicine', ability: Ability.Wisdom, modifier: 0, isProficient: false },
    { name: 'Nature', ability: Ability.Intelligence, modifier: 0, isProficient: false },
    { name: 'Perception', ability: Ability.Wisdom, modifier: 0, isProficient: false },
    { name: 'Performance', ability: Ability.Charisma, modifier: 0, isProficient: false },
    { name: 'Persuasion', ability: Ability.Charisma, modifier: 0, isProficient: false },
    { name: 'Religion', ability: Ability.Intelligence, modifier: 0, isProficient: false },
    { name: 'Sleight of Hand', ability: Ability.Dexterity, modifier: 0, isProficient: false },
    { name: 'Stealth', ability: Ability.Dexterity, modifier: 0, isProficient: false },
    { name: 'Survival', ability: Ability.Wisdom, modifier: 0, isProficient: false },
];

export class SkillSet extends Component {
    render () {
        return (
            <div>
                <span>Skills</span>
                {SkillSetDummy.map((skill) => <Skill {...skill} />)}
            </div>
        );
    }
}