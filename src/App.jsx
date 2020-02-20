import { h } from 'preact';
import { SummaryView } from './components/SummaryView/SummaryView';
import { CharacterStore, CharacterStoreContext } from './stores/CharacterStore';

export const App = () => {
    const characterStore = new CharacterStore();
    characterStore.initWithDefaultCharacter();

    return (
        <CharacterStoreContext.Provider value={characterStore}>
            <SummaryView/>
        </CharacterStoreContext.Provider>
    );
};