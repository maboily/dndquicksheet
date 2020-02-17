import { h } from 'preact';

export const Skill = ({ ability, name, modifier, isProficient }) => {
    return (
        <div className={`proficiency-save ${isProficient ? 'proficient' : ''}`}>
            <span className="modifier">{modifier > 0 ? `+${modifier}` : modifier}</span>
            <span className="name">{name} ({ability})</span>
        </div>
    );
};