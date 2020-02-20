import { observable, autorun, computed } from 'mobx';
import { AbilityNames } from '../data/AbilityNames';
import { SkillMappings } from '../data/SkillMappings';
import { createContext } from 'preact';
import { CustomModifierKind } from '../data/CustomModifierKind';

export class CharacterStore {
    @observable character;

    initWithDefaultCharacter () {
        const character = new Character();
        character.abilities = [
            Ability.build(20, AbilityNames.Strength, true),
            Ability.build(12, AbilityNames.Dexterity, false),
            Ability.build(16, AbilityNames.Constitution, true),
            Ability.build(8, AbilityNames.Intelligence, false),
            Ability.build(12, AbilityNames.Wisdom, false),
            Ability.build(9, AbilityNames.Charisma, false)
        ];
        character.skillProficiencies = [
            SkillProficiency.build('Insight'),
            SkillProficiency.build('Intimidation'),
            SkillProficiency.build('Perception'),
            SkillProficiency.build('Religion'),
            SkillProficiency.build('Survival'),
        ];
        character.customModifiers = [
            CustomModifier.build(CustomModifierKind.AddToAbilitySave, AbilityNames.Dexterity, 3, 'Fleetfloot Rune')
        ];

        character.ac = 14;
        character.name = 'Galuf du Triskelion';
        character.proficiency = 3;
        character.speed = '40ft';
        character.maxHp = 65;
        character.race = 'Half-Orc';
        character.vision = 'Darkvision';

        this.character = character;
    }
}

export class Ability {
    @observable score = 0;
    @observable name = '';
    @observable hasSaveProficiency = false;

    static build (score, name, hasSaveProficiency) {
        const ability = new Ability();
        ability.score = score;
        ability.name = name;
        ability.hasSaveProficiency = hasSaveProficiency;
        return ability;
    }
}

export class SkillProficiency {
    @observable name = '';

    static build (name) {
        const skillProficiency = new SkillProficiency();
        skillProficiency.name = name;
        return skillProficiency;
    }
}

export class CustomModifier {
    @observable kind = CustomModifierKind.Unknown;
    @observable affectedItem = '';
    @observable value = 0;
    @observable description = '';

    static build (kind, affectedItem, value, description) {
        const customModifier = new CustomModifier();
        customModifier.kind = kind;
        customModifier.affectedItem = affectedItem;
        customModifier.value = value;
        customModifier.description = description;
        return customModifier;
    }
}

export class Character {
    @observable abilities = [];
    @observable skillProficiencies = [];
    @observable customModifiers = [];

    @observable name = '';
    @observable ac = 0;
    @observable proficiency = 0;
    @observable speed = '0ft';
    @observable maxHp = 0;
    @observable race = '';
    @observable vision = '';

    getAbility (abilityName) {
        const matchingAbility = this.abilities.find((ability) => ability.name === abilityName);
        if (matchingAbility) {
            return matchingAbility;
        }
        return new Ability();
    }

    getAbilityModifier (abilityName) {
        return Math.floor((this.getAbility(abilityName).score - 10) / 2);
    }

    getAbilitySaveModifier (abilityName) {
        const ability = this.getAbility(abilityName);
        const modifier = this.getAbilityModifier(abilityName);
        const customAddModifier = this.customModifiers.find((customModifier) => customModifier.kind === CustomModifierKind.AddToAbilitySave && customModifier.affectedItem === abilityName);

        return (ability.hasSaveProficiency ? this.proficiency : 0) + (customAddModifier ? customAddModifier.value : 0) + modifier;
    }

    getSkillSave (skillName) {
        const skillMapping = SkillMappings.find((skillMapping) => skillMapping.name === skillName);
        if (!skillMapping) {
            return 0;
        }
        const abilityModifier = this.getAbilityModifier(skillMapping.ability);
        const hasProficiency = this.isSkillProficient(skillName);
        return (hasProficiency ? this.proficiency : 0) + abilityModifier;
    }

    isSkillProficient (skillName) {
        return !!this.skillProficiencies.find((skillProficiency) => skillProficiency.name === skillName);
    }

    abilityModifier (abilityName) {
        return computed(() => this.getAbilityModifier(abilityName));
    }

    abilitySave (abilityName) {
        return computed(() => this.getAbilitySaveModifier(abilityName));
    }

    skillSave (skillName) {
        return computed(() => this.getSkillSave(skillName));
    }

    @computed get passivePerception () {
        return 10 + this.getSkillSave('Perception');
    }

    @computed get passiveInsight () {
        return 10 + this.getSkillSave('Insight');
    }
}

export const CharacterStoreContext = createContext(undefined);

