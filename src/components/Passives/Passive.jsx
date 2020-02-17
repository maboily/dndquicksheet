import { h } from 'preact';

export const Passive = ({ name, value }) => {
    return (
        <div className="proficiency-save">
            <span className="modifier">{value}</span>
            <span>{name}</span>
        </div>
    );
};