import React from 'react'
import { ScaleSVG, withParentSize } from '@vx/responsive'
import { LinePath } from '@vx/shape'
import { scaleTime, scaleLinear } from '@vx/scale'
import { extent, max } from 'd3-array'

const TempGraph = ({
  parentWidth, height, data, ...props
}) => {
  const xScale = scaleTime({
    range: [0, parentWidth],
    domain: extent(data, d => d.time),
  })
  const yScale = scaleLinear({
    range: [height, 0],
    domain: [0, 300],
  })

  return (
    <svg width={parentWidth} height={height}>
      <LinePath
        className="text-red"
        data={data}
        x={d => xScale(d.time)}
        y={d => yScale(d.tool0.target)}
        stroke="currentColor"
        strokeDasharray="3,2"
        strokeWidth={1}
      />
      <LinePath
        className="text-red"
        data={data}
        x={d => xScale(d.time)}
        y={d => yScale(d.tool0.actual)}
        stroke="currentColor"
        strokeWidth={2}
      />

      <LinePath
        className="text-blue"
        data={data}
        x={d => xScale(d.time)}
        y={d => yScale(d.bed.target)}
        stroke="currentColor"
        strokeDasharray="3,2"
        strokeWidth={1}
      />
      <LinePath
        className="text-blue"
        data={data}
        x={d => xScale(d.time)}
        y={d => yScale(d.bed.actual)}
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  )
}

export default withParentSize(TempGraph)
