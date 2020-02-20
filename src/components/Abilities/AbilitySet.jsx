import { Component, h } from 'preact';
import { Ability } from './Ability';
import { useContext } from 'preact/hooks';
import { CharacterStoreContext } from '../../stores/CharacterStore';

export class AbilitySet extends Component {
    render () {
        const charStore = useContext(CharacterStoreContext);
        const char = charStore.character;

        return (
            <div className="ability-set">
                {char.abilities.map((ability) => <Ability name={ability.name} score={ability.score} modifier={char.getAbilityModifier(ability.name)} />)}
            </div>
        );
    }
}