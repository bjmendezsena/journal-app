import React from 'react'

export const NothingSelected = () => {
    return (
        <div className = "nothing__main-content">
            <p className = "animate__animated animate__fadeInUp">
                Select something
                <br/>
                or create an entry!
            </p>

            <i className = "far fa-star fa-4x mt-5 animate__animated animate__rotateIn"/>
        </div>
    )
}
