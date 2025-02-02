import { HierarchyNode } from "d3-hierarchy";
import { ITreeConfig } from "./typings";
export declare const generateNestedData: <T>(data: any, treeConfig: ITreeConfig<T>) => HierarchyNode<any>;
export declare const generateBasicTreemap: <T>(treeConfig: ITreeConfig<T>) => import("d3-hierarchy").TreeLayout<unknown>;
