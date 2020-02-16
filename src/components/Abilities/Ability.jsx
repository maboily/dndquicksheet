import { h } from 'preact';

export const Ability = ({ score, name, modifier, ability }) => (
    <div key={name}>
        <span>{score}</span>
        <span>{name}</span>
        <span>{modifier > 0 ? `+${modifier}` : modifier}</span>
    </div>
);