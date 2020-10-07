import React from 'react'
import PropTypes from 'prop-types';


function Image({image, handleRemove, index}) {
    return (
        <div className="p-2">
            <img src={image} width="100%" alt="images" onClick={() => handleRemove(index)}/>
        </div>
    )
}

/*
***** Manually *****

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
*/

Image.propTypes = {
    index:PropTypes.number,
    image:PropTypes.string,
    handleRemove:PropTypes.func
}

export default Image
