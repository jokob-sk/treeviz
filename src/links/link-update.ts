import { HierarchyPointNode } from "d3-hierarchy";
import { Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
import { generateLinkLayout } from "./draw-links";

export const drawLinkUpdate = <T>(
  linkEnter: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>,
  link: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig<T>
) => {
  const linkUpdate = linkEnter.merge(link);

  linkUpdate
    //@ts-ignore
    .transition()
    .duration(settings.duration)
    .attr("d", (d: any) => {
      return generateLinkLayout(d, d.parent, settings);
    })
    .attr("fill", "none")
    .attr("stroke-width", (d: any) => {
      // Pass the actual node data (d) which is of type ExtendedHierarchyPointNode
      return settings.linkWidth(d);
    })
    .attr("stroke", (d: any) => {
      // Pass the actual node data (d) which is of type ExtendedHierarchyPointNode
      return settings.linkColor(d);
    });
};
