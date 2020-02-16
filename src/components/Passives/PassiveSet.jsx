import { Component, h } from 'preact';
import { Passive } from './Passive';

const PassiveSetDataDummy = [
    { name: 'Perception', value: 10 },
    { name: 'Insight', value: 10 }
];

export class PassiveSet extends Component {
    render () {
        return (
            <div>
                <span>Passives</span>
                {PassiveSetDataDummy.map((passive) => <Passive {...passive} />)}
            </div>
        );
    }
}