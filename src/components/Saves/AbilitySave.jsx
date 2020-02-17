import { h } from 'preact';

export const AbilitySave = ({ name, modifier, isProficient }) => {
    return (
        <div className={`proficiency-save ${isProficient ? 'proficient' : ''}`}>
            <span className="modifier">{modifier > 0 ? `+${modifier}` : modifier}</span>
            <span className="name">{name}</span>
        </div>
    );
};