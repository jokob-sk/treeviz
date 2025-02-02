import { ITreeConfig } from "./typings";
export declare const Treeviz: {
    create: typeof create;
};
declare function create<T>(userSettings: Partial<ITreeConfig<T>>): {
    refresh: (data: any, newSettings?: Partial<ITreeConfig<T>>) => void;
    clean: (keepConfig: boolean) => void;
};
export {};
