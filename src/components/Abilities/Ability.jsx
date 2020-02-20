import { h } from 'preact';

export const Ability = ({ score, name, modifier, ability }) => (
    <div key={name} className="ability">
        <span className="score">{score}</span>
        <span className="name">{name}</span>
        <span className="modifier">{modifier >= 0 ? `+${modifier}` : modifier}</span>
    </div>
);