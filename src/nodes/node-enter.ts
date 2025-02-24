import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
import { getFirstDisplayedAncestor, setNodeLocation } from "../utils";

export const drawNodeEnter = <T>(
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig<T>, // Add the generic argument <T>
  nodes: ExtendedHierarchyPointNode[],
  oldNodes: ExtendedHierarchyPointNode[]
) => {
  const nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    // @ts-ignore
    .attr("id", (d) => d?.id)
    .attr("transform", (d: any) => {
      const firstDisplayedParentNode = getFirstDisplayedAncestor(
        nodes,
        oldNodes,
        d.id
      );
      return setNodeLocation(
        firstDisplayedParentNode.x0,
        firstDisplayedParentNode.y0,
        settings
      );
    });

  nodeEnter
    .append("foreignObject")
    .attr("width", settings.nodeWidth)
    .attr("height", settings.nodeHeight);

  return nodeEnter;
};
