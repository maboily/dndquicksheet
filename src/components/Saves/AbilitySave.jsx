import { h } from 'preact';

export const AbilitySave = ({ name, modifier, isProficient }) => {
    return (
        <div>
            <span>{isProficient ? 'Prof.' : ''}</span>
            <span>{name}</span>
            <span>{modifier > 0 ? `+${modifier}` : modifier}</span>
        </div>
    );
};