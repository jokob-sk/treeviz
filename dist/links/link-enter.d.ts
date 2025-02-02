import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
export declare const drawLinkEnter: <T>(link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>, settings: ITreeConfig<T>, nodes: ExtendedHierarchyPointNode[], oldNodes: ExtendedHierarchyPointNode[]) => Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>;
