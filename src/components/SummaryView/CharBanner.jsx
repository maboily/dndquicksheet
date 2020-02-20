import { Component, h } from 'preact';
import { useContext } from 'preact/hooks';
import { CharacterStoreContext } from '../../stores/CharacterStore';
import { AbilityNames } from '../../data/AbilityNames';

export class CharBanner extends Component {
    render () {
        const charStore = useContext(CharacterStoreContext);
        const char = charStore.character;

        return (
            <div className="char-banner">
                <div className="hp">{char.maxHp}</div>

                <div className="personal-info">
                    <span className="char-name">{char.name}</span>
                    <span>{char.race}</span>
                    <span>{char.vision}</span>
                </div>

                <div className="quick-stats">
                    <span><label>AC</label>{char.ac}</span>
                    <span><label>Init.</label>{char.getAbilityModifier(AbilityNames.Dexterity)}</span>
                    <span><label>Speed</label>{char.speed}</span>
                    <span><label>Prof.</label>{char.proficiency}</span>
                </div>
            </div>
        );
    }
}