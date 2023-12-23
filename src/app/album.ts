export class Album {
    constructor(
        public id: string,
        public ref: string,
        public name: string,
        public title: string,
        public description: string,
        public duration: number,
        public url?: string, // optionnel
        public like?: string, // optionnel
        public status?: Status, // optionnel
        public tags?: string[], // tags: Array<string>
    ) {
        
    }
}

export type Status = "off" | "on";

export interface List {
    id: string,
    list: string[],
}