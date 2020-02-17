import { h } from 'preact';
import { AbilitySet } from '../Abilities/AbilitySet';
import { CharBanner } from './CharBanner';
import { SkillSet } from '../Skills/SkillSet';
import { AbilitySaveSet } from '../Saves/AbilitySaveSet';
import { PassiveSet } from '../Passives/PassiveSet';

export const SummaryView = () => (
    <div className="summary-view">
        <CharBanner/>
        <AbilitySet/>
        <AbilitySaveSet/>
        <PassiveSet/>
        <SkillSet/>
    </div>
);