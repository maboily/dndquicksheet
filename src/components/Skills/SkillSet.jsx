import { Component, h } from 'preact';
import { Skill } from './Skill';
import { SkillMappings } from '../../data/SkillMappings';
import { useContext } from 'preact/hooks';
import { CharacterStoreContext } from '../../stores/CharacterStore';

export class SkillSet extends Component {
    render () {
        const charStore = useContext(CharacterStoreContext);
        const char = charStore.character;

        return (
            <div className="proficiency-set skill-set">
                <h2>Skills</h2>

                <div className="skills">
                    {SkillMappings.map((skill) => (
                        <Skill name={skill.name} ability={skill.ability} modifier={char.getAbilityModifier(skill.ability)} isProficient={char.isSkillProficient(skill.name)} />
                    ))}
                </div>
            </div>
        );
    }
}