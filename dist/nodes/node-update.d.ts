import { Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
export declare const drawNodeUpdate: <T>(nodeEnter: Selection<SVGGElement, ExtendedHierarchyPointNode, SVGGElement, {}>, node: Selection<SVGGElement, ExtendedHierarchyPointNode, SVGGElement, {}>, settings: ITreeConfig<T>) => void;
