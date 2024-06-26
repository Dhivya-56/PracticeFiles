import { scaleOrdinal } from "d3";
import { sankey, sankeyJustify, sankeyLinkHorizontal } from "d3-sankey";

const MARGIN_Y = 2;
const MARGIN_X = 5;
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

 const Pract2 = ({ width, height, data }) => {
  const allGroups = [...new Set(data.nodes.map((d) => d.category))].sort();
  const colorScale = scaleOrdinal().domain(allGroups).range(COLORS);

  // Set the sankey diagram properties
  const sankeyGenerator = sankey()
    .nodeWidth(26)
    .nodePadding(10)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y],
    ])
    .nodeId((node) => node.name)
    .nodeAlign(sankeyJustify);

  // Compute nodes and links positions
  const { nodes, links } = sankeyGenerator(data);

  //
  // Draw the nodes
  //
  const allNodes = nodes.map((node) => {
    return (
      '<g key="' +
      node.index +
      '">' +
      '<rect ' +
      'height="' +
      (node.y1 - node.y0) +
      '" ' +
      'width="' +
      sankeyGenerator.nodeWidth() +
      '" ' +
      'x="' +
      node.x0 +
      '" ' +
      'y="' +
      node.y0 +
      '" ' +
      'stroke="black" ' +
      'fill="' +
      colorScale(node.category) +
      '" ' +
      'fillOpacity="1" ' +
      'rx="0.9"></rect>' +
      '</g>'
    );
  });

  //
  // Draw the links
  //
  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link);

    return (
      '<path ' +
      'key="' +
      i +
      '" ' +
      'd="' +
      path +
      '" ' +
      'stroke="' +
      colorScale(link.source.category) +
      '" ' +
      'fill="none" ' +
      'strokeOpacity="0.3" ' +
      'strokeWidth="' +
      link.width +
      '"></path>'
    );
  });

  //
  // Draw the Labels
  //
  const allLabels = nodes.map((node, i) => {
    return (
      '<text ' +
      'key="' +
      i +
      '" ' +
      'x="' +
      (node.x0 < width / 2 ? node.x1 + 6 : node.x0 - 6) +
      '" ' +
      'y="' +
      (node.y1 + node.y0) / 2 +
      '" ' +
      'dy="0.35rem" ' +
      'textAnchor="' +
      (node.x0 < width / 2 ? "start" : "end") +
      '" ' +
      'fontSize="12">' +
      node.name +
      '</text>'
    );
  });

  return (
    '<div>' +
    '<svg width="' +
    width +
    '" height="' +
    height +
    '">' +
    allLinks.join("") +
    allNodes.join("") +
    allLabels.join("") +
    '</svg>' +
    '</div>'
  );
};
export default Pract2
// Example usage:

