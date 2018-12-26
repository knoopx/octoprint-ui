import React from 'react'

export default ({ children, className, ...props }) => (
  <a
    {...props}
    className={[
      'flex flex-auto justify-center border border-blue rounded px-4 py-2',
      className,
    ].join(' ')}
  >
    {children}
  </a>
)
