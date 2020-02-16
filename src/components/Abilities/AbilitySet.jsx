import { Component, h } from 'preact';
import { Ability } from './Ability';

const AbilitySetDummy = [
    { name: 'STR', score: 0, modifier: 0 },
    { name: 'DEX', score: 0, modifier: 0 },
    { name: 'CON', score: 0, modifier: 0 },
    { name: 'INT', score: 0, modifier: 0 },
    { name: 'WIS', score: 0, modifier: 0 },
    { name: 'CHA', score: 0, modifier: 0 },
];

export class AbilitySet extends Component {
    render () {
        return (
            <div>
                {AbilitySetDummy.map((ability) => <Ability {...ability} />)}
            </div>
        );
    }
}