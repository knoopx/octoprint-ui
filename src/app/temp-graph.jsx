import React from 'react'
import { ScaleSVG } from '@vx/responsive'
import { Group } from '@vx/group'
import { LinePath } from '@vx/shape'
import { scaleTime, scaleLinear } from '@vx/scale'
import { extent, max } from 'd3-array'

const x = d => d.time

export default ({ width, height, data }) => {
  const xScale = scaleTime({
    range: [0, width],
    domain: extent(data, x),
  })
  const yScale = scaleLinear({
    range: [height, 0],
    domain: [0, 300],
  })

  return (
    <svg width={width} height={height}>
      <LinePath
        className="text-red"
        data={data}
        x={d => xScale(x(d))}
        y={d => yScale(d.tool0.target)}
        stroke="currentColor"
        strokeDasharray="3,2"
        strokeWidth={1}
      />
      <LinePath
        className="text-red"
        data={data}
        x={d => xScale(x(d))}
        y={d => yScale(d.tool0.actual)}
        stroke="currentColor"
        strokeWidth={2}
      />

      <LinePath
        className="text-blue"
        data={data}
        x={d => xScale(x(d))}
        y={d => yScale(d.bed.target)}
        stroke="currentColor"
        strokeDasharray="3,2"
        strokeWidth={1}
      />
      <LinePath
        className="text-blue"
        data={data}
        x={d => xScale(x(d))}
        y={d => yScale(d.bed.actual)}
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  )
}
