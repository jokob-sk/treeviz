import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
export declare const drawNodeExit: <T>(node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>, settings: ITreeConfig<T>, nodes: ExtendedHierarchyPointNode[], oldNodes: ExtendedHierarchyPointNode[]) => void;
