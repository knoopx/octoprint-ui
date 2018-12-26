import React from 'react'
import { observer } from 'mobx-react'

const Arc = ({
  size, percent, strokeWidth, style,
}) => {
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      strokeWidth={strokeWidth}
      style={{
        ...style,
        transition: 'stroke-dasharray .3s ease',
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
        strokeDasharray: `${(percent / 100) * circumference} ${circumference}`,
        fill: 'none',
        strokeWidth,
      }}
    />
  )
}

const Counter = observer(({ percent, strokeWidth, size }) => (
  <svg width={size} height={size}>
    <Arc
      size={size}
      percent={percent}
      strokeWidth={strokeWidth}
      style={{
        stroke: 'currentColor',
        transition: 'stroke-dasharray .3s ease',
      }}
    />
    <text
      // fontSize={10}
      textAnchor="middle"
      x={size / 2}
      y={size / 2}
      dy={3}
      fill="currentColor"
    >
      {Math.round(percent)}
%
    </text>
  </svg>
))

export default Counter
