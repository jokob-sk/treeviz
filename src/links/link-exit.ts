import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
import { getFirstDisplayedAncestor } from "../utils";
import { generateLinkLayout } from "./draw-links";

export const drawLinkExit = <T>(
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig<T>, // Specify the generic argument <T>
  nodes: ExtendedHierarchyPointNode[],
  oldNodes: ExtendedHierarchyPointNode[]
) => {
  link
    .exit()
    //@ts-ignore
    .transition()
    .duration(settings.duration)
    .style("opacity", 0)
    .attr("d", (d: any) => {
      const firstDisplayedParentNode = getFirstDisplayedAncestor(
        oldNodes,
        nodes,
        d.id
      );
      const o = {
        x: firstDisplayedParentNode.x0,
        y: firstDisplayedParentNode.y0,
      };
      return generateLinkLayout(o, o, settings);
    })
    .remove();
};
