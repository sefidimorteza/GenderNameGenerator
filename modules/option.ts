import type { Gender, Length, Populariy } from "~/Enums/enum";

export interface optionState {

    gender: Gender;
    populariy: Populariy;
    length: Length;
}
export interface Name {
    id: number;
    name: string;
    gender: Gender;
    populariy: Populariy;
    length: Length;
}
