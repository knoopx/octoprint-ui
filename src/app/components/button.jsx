import React from 'react'
import { Link } from 'react-router-dom'

export default ({ children, className, ...props }) => {
  const Component = 'to' in props ? Link : 'a'
  return (
    <Component
      {...props}
      className={[
        'flex flex-auto justify-center border border-blue text-white rounded px-4 py-2',
        className,
      ]}
    >
      {children}
    </Component>
  )
}
