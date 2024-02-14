import React from 'react'

const Container = ({
    className="",
    children
}) => {
  return (
    <div className={`${className} px-[18px] md:px-[42px]`}>
        {children}
    </div>
  )
}

export default Container