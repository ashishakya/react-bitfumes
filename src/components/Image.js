import React from 'react'

function Image({image, handleRemove, index}) {
    return (
        <div className="p-2">
            <img src={image} width="100%" alt="images" onClick={() => handleRemove(index)}/>
        </div>
    )
}

const types = {
    index(props, propName) {
        if (typeof props[propName] !== "number") {
            return new Error(`Prop ${propName} must be a numeric value`)
        }
    }
}

Image.propTypes = {
    index: types.index
}

export default Image
