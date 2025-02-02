import { ITreeConfig } from "../typings";
interface ICoordinates {
    x: number;
    y: number;
}
export declare const generateLinkLayout: <T>(s: ICoordinates, d: ICoordinates, treeConfig: ITreeConfig<T>) => string;
export {};
