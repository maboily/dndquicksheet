import { Component, h } from 'preact';
import { Passive } from './Passive';
import { useContext } from 'preact/hooks';
import { CharacterStoreContext } from '../../stores/CharacterStore';

export class PassiveSet extends Component {
    render () {
        const charStore = useContext(CharacterStoreContext);
        const char = charStore.character;

        return (
            <div className="proficiency-set passive-set">
                <h2>Passives</h2>
                <Passive name='Perception' value={char.passivePerception} />
                <Passive name='Insight' value={char.passiveInsight} />
            </div>
        );
    }
}