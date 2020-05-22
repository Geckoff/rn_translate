import { Word } from "./entities";

export const addWord = (word: Word) => {
    return word.save();
};
