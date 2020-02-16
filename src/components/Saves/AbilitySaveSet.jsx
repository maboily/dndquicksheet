import { Component, h } from 'preact';
import { AbilitySave } from './AbilitySave';

const AbilitySaveDataDummy = [
    { name: 'Strength', modifier: 0, isProficient: false },
    { name: 'Dexterity', modifier: 0, isProficient: false },
    { name: 'Constitution', modifier: 0, isProficient: false },
    { name: 'Intelligence', modifier: 0, isProficient: false },
    { name: 'Wisdom', modifier: 0, isProficient: false },
    { name: 'Charisma', modifier: 0, isProficient: false },
];

export class AbilitySaveSet extends Component {
    render () {
        return (
            <div>
                <span>Ability Saves</span>
                {AbilitySaveDataDummy.map((abilitySave) => <AbilitySave {...abilitySave} />)}
            </div>
        );
    }
}