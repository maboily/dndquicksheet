import { Component, h } from 'preact';
import { AbilitySave } from './AbilitySave';
import { useContext } from 'preact/hooks';
import { CharacterStoreContext } from '../../stores/CharacterStore';

export class AbilitySaveSet extends Component {
    render () {
        const charStore = useContext(CharacterStoreContext);
        const char = charStore.character;

        return (
            <div className="proficiency-set ability-save-set">
                <h2>Ability Saves</h2>

                {char.abilities.map((ability) => <AbilitySave name={ability.name} modifier={char.getAbilitySaveModifier(ability.name)} isProficient={ability.hasSaveProficiency} />)}
            </div>
        );
    }
}