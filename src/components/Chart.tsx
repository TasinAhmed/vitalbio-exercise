import Card from "./Card";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data1 = [
  { x: 1, y: 1 },
  { x: 2, y: 0.5 },
  { x: 3, y: -0.5 },
  { x: 4, y: -1 },
  { x: 6, y: 1.5 },
  { x: 8, y: -0.5 },
  { x: 9, y: 1 },
  { x: 10, y: 0 },
  { x: 11.8, y: 0.5 },
];

const data2 = [
  { x: 5, y: 3 },
  { x: 7, y: -3 },
  { x: 11, y: -3 },
];

const ScatterPlot = () => (
  <ResponsiveContainer width="100%" height="100%">
    <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
      <XAxis
        type="number"
        dataKey="x"
        domain={[0, 12]}
        ticks={Array.from({ length: 13 }, (_, i) => i)}
        stroke="#D5DEE3"
      />
      <YAxis
        type="number"
        dataKey="y"
        domain={[-4, 3]}
        ticks={[-3, -2, -1, 0, 1, 2, 3]}
        stroke="#D5DEE3"
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <ReferenceLine
        y={2}
        stroke="white"
        strokeWidth={1}
        strokeDasharray="4 4"
      />
      <ReferenceLine
        y={-2}
        stroke="white"
        strokeWidth={1}
        strokeDasharray="4 4"
      />
      <ReferenceLine x={3} stroke="#D5DEE3" strokeWidth={1} />
      <ReferenceLine x={6} stroke="#D5DEE3" strokeWidth={1} />
      <ReferenceLine x={9} stroke="#D5DEE3" strokeWidth={1} />
      <ReferenceLine x={12} stroke="#D5DEE3" strokeWidth={1} />

      <ReferenceLine y={1} stroke="#00C068" strokeWidth={1} />
      <ReferenceLine y={-1} stroke="#00C068" strokeWidth={1} />
      <ReferenceLine y={3} stroke="#FF6B34" strokeWidth={1} />
      <ReferenceLine y={-3} stroke="#FF6B34" strokeWidth={1} />
      <ReferenceLine y={0} stroke="#D5DEE3" strokeWidth={1} />
      <Scatter name="Data 1" data={data1} fill="#00C068" />
      <Scatter name="Data 2" data={data2} fill="#FF6B34" />
    </ScatterChart>
  </ResponsiveContainer>
);

const Chart = () => {
  return (
    <Card className="p-4 m-4 h-96">
      <ScatterPlot />
    </Card>
  );
};
export default Chart;
