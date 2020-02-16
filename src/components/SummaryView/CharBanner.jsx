import { Component, h } from 'preact';

const CharInfoDummy = {
    maxHp: 0,
    characterName: 'IAm A Character',
    race: 'Half-Orc',
    vision: 'Darkvision',

    ac: 10,
    initiativeBonus: 0,
    speed: '30ft',
    proficiencyBonus: 2
};

export class CharBanner extends Component {
    render () {
        return (
            <div>
                <span>{CharInfoDummy.maxHp}</span>
                <span>{CharInfoDummy.characterName}</span>
                <span>{CharInfoDummy.race}</span>
                <span>{CharInfoDummy.vision}</span>

                <span>{CharInfoDummy.ac}</span>
                <span>{CharInfoDummy.initiativeBonus}</span>
                <span>{CharInfoDummy.speed}</span>
                <span>{CharInfoDummy.proficiencyBonus}</span>
            </div>
        );
    }
}