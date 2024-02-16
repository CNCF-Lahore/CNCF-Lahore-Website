import React from 'react'
import Container from './Container'

const SectionContainer = ({
    title,
    className="",
    children
}) => {
  return (
    <section className={`${className} flex flex-col gap-[36px] w-full`}>
        <Container>
            <h2 className="text-2xl md:text-3xl mb-2 font-medium">
                {title}
            </h2>
        </Container>
        {children}
    </section>
  )
}

export default SectionContainer