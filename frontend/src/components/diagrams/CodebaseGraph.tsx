"use client";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import type { RepoSummary, GraphNodeType } from "@/types";

const COLUMN_X: Record<GraphNodeType, number> = {
  page: 0,
  component: 300,
  hook: 600,
  service: 900,
  apiRoute: 1200,
};

const NODE_STYLES: Record<GraphNodeType, React.CSSProperties> = {
  page:     { background: "#1C1917", border: "1px solid #CCD67F", color: "#F3E4C9", borderRadius: 8, fontSize: 11, padding: "6px 12px" },
  component:{ background: "#1C1917", border: "1px solid #8A5F41", color: "#F3E4C9", borderRadius: 8, fontSize: 11, padding: "6px 12px" },
  hook:     { background: "#1C1917", border: "1px solid #A77F60", color: "#F3E4C9", borderRadius: 8, fontSize: 11, padding: "6px 12px" },
  service:  { background: "#1C1917", border: "1px solid #F3E4C9", color: "#F3E4C9", borderRadius: 8, fontSize: 11, padding: "6px 12px" },
  apiRoute: { background: "#1C1917", border: "1px solid #CCD67F", color: "#CCD67F", borderRadius: 8, fontSize: 11, padding: "6px 12px" },
};

function buildNodes(summary: RepoSummary): { nodes: Node[], pathToNodeId: Record<string, string> } {
  const nodes: Node[] = [];
  const pathToNodeId: Record<string, string> = {};
  
  const entries: [GraphNodeType, string[]][] = [
    ["page",     summary.pages || []],
    ["component",summary.components || []],
    ["hook",     summary.hooks || []],
    ["service",  summary.services || []],
    ["apiRoute", summary.apiRoutes || []],
  ];

  for (const [type, paths] of entries) {
    paths.forEach((filePath, i) => {
      const label = filePath.split("/").pop() ?? filePath;
      const nodeId = `${type}-${i}`;
      pathToNodeId[filePath] = nodeId;
      
      nodes.push({
        id: nodeId,
        data: { label },
        position: { x: COLUMN_X[type], y: i * 80 },
        style: NODE_STYLES[type],
      });
    });
  }

  return { nodes, pathToNodeId };
}

function buildEdges(summary: RepoSummary, pathToNodeId: Record<string, string>): Edge[] {
  const edges: Edge[] = [];
  if (!summary.dependencies) return edges;

  const basenameToNodeId: Record<string, string> = {};
  for (const [path, nodeId] of Object.entries(pathToNodeId)) {
     const base = path.split("/").pop()?.split(".")[0];
     if (base) basenameToNodeId[base.toLowerCase()] = nodeId;
  }

  let edgeCount = 0;
  for (const [sourcePath, imports] of Object.entries(summary.dependencies)) {
    const sourceId = pathToNodeId[sourcePath];
    if (!sourceId) continue;

    for (const imp of imports) {
      const impBase = imp.split("/").pop()?.split(".")[0]?.toLowerCase();
      if (!impBase) continue;

      const targetId = basenameToNodeId[impBase];
      if (targetId && targetId !== sourceId) {
        // To avoid duplicate edges between same nodes
        const edgeId = `e-${sourceId}-${targetId}`;
        if (!edges.some(e => e.id === edgeId)) {
          edges.push({
            id: edgeId,
            source: sourceId,
            target: targetId,
            animated: true,
            style: { stroke: '#8A5F41', strokeWidth: 1.5, opacity: 0.5 },
          });
        }
      }
    }
  }

  return edges;
}

export default function CodebaseGraph({ summary }: { summary: RepoSummary }) {
  const { nodes, pathToNodeId } = buildNodes(summary);
  const edges = buildEdges(summary, pathToNodeId);

  return (
    <div className="h-full w-full bg-[#0C0A09]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} color="#2C2825" gap={24} size={1} />
        <Controls className="bg-[#1C1917] border-[#8A5F41]/30 fill-[#F3E4C9]" />
        <MiniMap
          nodeColor={(n) => {
            const type = n.id.split("-")[0] as GraphNodeType;
            return NODE_STYLES[type]?.border?.toString().replace("1px solid ", "") ?? "#8A5F41";
          }}
          style={{ background: "#121110", border: "1px solid #2C2825" }}
          maskColor="#0C0A0980"
        />
      </ReactFlow>
    </div>
  );
}
