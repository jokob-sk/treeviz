import { Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig, NodeData } from "../typings";

export const drawNodeUpdate = <T>(
  nodeEnter: Selection<
    SVGGElement,
    ExtendedHierarchyPointNode,
    SVGGElement,
    {}
  >,
  node: Selection<SVGGElement, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings:  ITreeConfig<T> 
) => {
  const nodeUpdate = nodeEnter.merge(node);
  nodeUpdate
    //@ts-ignore
    .transition()
    .duration(settings.duration)
    //@ts-ignore
    .attr("transform", (d) => {
      return settings.isHorizontal
        ? "translate(" + d.y + "," + d.x + ")"
        : "translate(" + d.x + "," + d.y + ")";
    });

  nodeUpdate
    .select("foreignObject")
    .attr("width", settings.nodeWidth)
    .attr("height", settings.nodeHeight)
    .style("overflow", "visible")
    .on("click", (_, d) => settings.onNodeClick({ ...d, settings } as NodeData<T>))
    .on("mouseenter", (_, d) => settings.onNodeMouseEnter({ ...d, settings } as NodeData<T>))
    .on("mouseleave", (_, d) => settings.onNodeMouseLeave({ ...d, settings } as NodeData<T>))
    .html((d) => settings.renderNode({ ...d, settings } as NodeData<T>));
};
