import React from 'react'
import PropTypes from 'prop-types';
import * as mobilenet from "@tensorflow-models/mobilenet";


function Image({image, handleRemove, index}) {

    function handlePredict(index) {
    //     const img = imageRef.current;
    //     mobilenet.load().then(model => {
    //         // Classify the image.
    //         model.classify(img).then(predictions => {
    //             setPredictions(predictions)
    //         });
    //     });
    }
    return (
        <div className="p-2">
            <img src={image} width="100%" alt="images" onClick={() => handleRemove(index)}/>
            <button className="p-2 rounded bg-blue-500 text-white" onClick={handlePredict(index)}>Predict</button>
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
