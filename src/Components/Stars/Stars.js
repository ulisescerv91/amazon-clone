import React, { Fragment } from 'react'

export default function Stars({ numberStars }) {
    return (
        <Fragment>
            {
                Array(numberStars)
                    .fill()
                    .map((_, i) => (
                        <span key={i}>⭐</span>
                    )
                    )
            }
        </Fragment>
    )
}
