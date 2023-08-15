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
  history: [
    { id: "asdasdas", prompt: "qwxeqwxewqxeqwxexqwexqw" },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
    {
      id: "asdasdas",
      prompt: "qwxeqwxewqxeqwxexqwexqw",
    },
  ],
  setPrompt: (newPrompt) =>
    set((state) => ({ history: state.history.concat(newPrompt) })),
}));
