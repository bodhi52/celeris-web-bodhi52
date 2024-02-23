// Import ECharts, loaded asynchronously from main.ts
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";

import {
  BarChart,
  BoxplotChart,
  CandlestickChart,
  CustomChart,
  EffectScatterChart,
  FunnelChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  LinesChart,
  MapChart,
  ParallelChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SunburstChart,
  ThemeRiverChart,
  TreeChart,
  TreemapChart,
} from "echarts/charts";

import {
  AriaComponent,
  AxisPointerComponent,
  BrushComponent,
  CalendarComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DatasetComponent,
  GeoComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  ParallelComponent,
  PolarComponent,
  SingleAxisComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
} from "echarts/components";

import {
  LabelLayout,
  UniversalTransition,
} from "echarts/features";

// -----------------
// Render engines
// -----------------

// Render via Canvas.
// echarts.init(dom, null, { renderer: 'canvas' })
use([CanvasRenderer]);
// Render via SVG.
// echarts.init(dom, null, { renderer: 'svg' })
use([SVGRenderer]);

// ----------------
// Charts (series)
// ----------------

// All of the series types, for example:
// chart.setOption({
//     series: [{
//         type: 'line' // or 'bar', 'pie', ...
//     }]
// });

use([
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
]);

// -------------------
// Coordinate systems
// -------------------

// All of the axis modules have been included in the
// coordinate system module below, do not need to
// make extra import.

// `cartesian` coordinate system. For some historical
// reasons, it is named as grid, for example:
// chart.setOption({
//     grid: {...},
//     xAxis: {...},
//     yAxis: {...},
//     series: [{...}]
// });
use(GridComponent);

// `polar` coordinate system, for example:
// chart.setOption({
//     polar: {...},
//     radiusAxis: {...},
//     angleAxis: {...},
//     series: [{
//         coordinateSystem: 'polar'
//     }]
// });
use(PolarComponent);

// `geo` coordinate system, for example:
// chart.setOption({
//     geo: {...},
//     series: [{
//         coordinateSystem: 'geo'
//     }]
// });
use(GeoComponent);

// `singleAxis` coordinate system (notice, it is a coordinate system
// with only one axis, work for chart like theme river), for example:
// chart.setOption({
//     singleAxis: {...}
//     series: [{type: 'themeRiver', ...}]
// });
use(SingleAxisComponent);

// `parallel` coordinate system, only work for parallel series, for example:
// chart.setOption({
//     parallel: {...},
//     parallelAxis: [{...}, ...],
//     series: [{
//         type: 'parallel'
//     }]
// });
use(ParallelComponent);

// `calendar` coordinate system. for example,
// chart.setOption({
//     calendar: {...},
//     series: [{
//         coordinateSystem: 'calendar'
//     }]
// );
use(CalendarComponent);

// ------------------
// Other components
// ------------------

// `graphic` component, for example:
// chart.setOption({
//     graphic: {...}
// });
use(GraphicComponent);

// `toolbox` component, for example:
// chart.setOption({
//     toolbox: {...}
// });
use(ToolboxComponent);

// `tooltip` component, for example:
// chart.setOption({
//     tooltip: {...}
// });
use(TooltipComponent);

// `axisPointer` component, for example:
// chart.setOption({
//     tooltip: {axisPointer: {...}, ...}
// });
// Or
// chart.setOption({
//     axisPointer: {...}
// });
use(AxisPointerComponent);

// `brush` component, for example:
// chart.setOption({
//     brush: {...}
// });
// Or
// chart.setOption({
//     tooltip: {feature: {brush: {...}}
// })
use(BrushComponent);

// `title` component, for example:
// chart.setOption({
//     title: {...}
// });
use(TitleComponent);

// `timeline` component, for example:
// chart.setOption({
//     timeline: {...}
// });
use(TimelineComponent);

// `markPoint` component, for example:
// chart.setOption({
//     series: [{markPoint: {...}}]
// });
use(MarkPointComponent);

// `markLine` component, for example:
// chart.setOption({
//     series: [{markLine: {...}}]
// });
use(MarkLineComponent);

// `markArea` component, for example:
// chart.setOption({
//     series: [{markArea: {...}}]
// });
use(MarkAreaComponent);

// `legend` component not scrollable. for example:
// chart.setOption({
//     legend: {...}
// });
use(LegendComponent);

// `dataZoom` component including both `dataZoomInside` and `dataZoomSlider`.
use(DataZoomComponent);

// `dataZoom` component providing drag, pinch, wheel behaviors
// inside coordinate system, for example:
// chart.setOption({
//     dataZoom: {type: 'inside'}
// });
use(DataZoomInsideComponent);

// `dataZoom` component providing a slider bar, for example:
// chart.setOption({
//     dataZoom: {type: 'slider'}
// });
use(DataZoomSliderComponent);

// `visualMap` component including both `visualMapContinuous` and `visualMapPiecewise`.
use(VisualMapComponent);

// `visualMap` component providing continuous bar, for example:
// chart.setOption({
//     visualMap: {type: 'continuous'}
// });
use(VisualMapContinuousComponent);

// `visualMap` component providing pieces bar, for example:
// chart.setOption({
//     visualMap: {type: 'piecewise'}
// });
use(VisualMapPiecewiseComponent);

// `aria` component providing aria, for example:
// chart.setOption({
//     aria: {...}
// });
use(AriaComponent);

// dataset transform
// chart.setOption({
//     dataset: {
//          transform: []
//     }
// });
use(TransformComponent);

use(DatasetComponent);

// universal transition
// chart.setOption({
//     series: {
//         universalTransition: { enabled: true }
//     }
// })
use(UniversalTransition);

// label layout
// chart.setOption({
//     series: {
//         labelLayout: { hideOverlap: true }
//     }
// })
use(LabelLayout);
export default ECharts;