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
            <div className="char-banner">
                <div className="hp">{CharInfoDummy.maxHp}</div>

                <div className="personal-info">
                    <span className="char-name">{CharInfoDummy.characterName}</span>
                    <span>{CharInfoDummy.race}</span>
                    <span>{CharInfoDummy.vision}</span>
                </div>

                <div className="quick-stats">
                    <span><label>AC</label>{CharInfoDummy.ac}</span>
                    <span><label>Init.</label>{CharInfoDummy.initiativeBonus}</span>
                    <span><label>Speed</label>{CharInfoDummy.speed}</span>
                    <span><label>Prof.</label>{CharInfoDummy.proficiencyBonus}</span>
                </div>
            </div>
        );
    }
}