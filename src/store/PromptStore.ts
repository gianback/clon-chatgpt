import { create } from "zustand";

type Prompt = {
  id: string;
  prompt: string;
};

interface PromptState {
  history: Prompt[];
  setPrompt: (newPrompt: Prompt) => void;
}

export const usePromptStore = create<PromptState>()((set) => ({
  history: [],
  setPrompt: (newPrompt) =>
    set((state) => ({ history: state.history.concat(newPrompt) })),
}));
