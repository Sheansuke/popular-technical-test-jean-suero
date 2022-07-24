import { createContext } from "react";


interface IUIContext {
    // MENU
    scoreModalOpen: boolean;
    openScoreModal: () => void;
    closeScoreModal: () => void;
}

export const UIContext = createContext({} as IUIContext);