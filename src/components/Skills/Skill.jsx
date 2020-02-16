import { h } from 'preact';

export const Skill = ({ ability, name, modifier, isProficient }) => {
    return (
        <div>
            <span>{isProficient ? 'Prof.' : ''}</span>
            <span>{name}</span>
            <span>{modifier > 0 ? `+${modifier}` : modifier}</span>
            <span>({ability})</span>
        </div>
    );
};