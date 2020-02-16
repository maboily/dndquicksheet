import { h } from 'preact';

export const Passive = ({ name, value }) => {
    return (
        <div>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    );
};