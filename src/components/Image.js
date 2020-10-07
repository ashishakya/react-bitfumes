import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import useTFPrediction from "../utils/hooks/useTFPrediction";


function Image({image, handleRemove, index}) {
    const [handlePredict, predictions] = useTFPrediction();
    const imageRef = useRef();
    return (
        <div className="p-2">
            {
                predictions.length > 0 &&
                (
                    <span className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5">
                        {
                            predictions.map((prediction) => (
                                <div
                                    className="flex justify-between text-sm"
                                    key={index}
                                >
                                    <p>{prediction.className}</p>
                                    <p>{Math.floor(prediction.probability * 100)} %</p>
                                </div>
                            ))
                        }
                    </span>
                )
            }

            <img
                src={image}
                ref={imageRef}
                width="100%"
                alt="images"
                onClick={() => handleRemove(index)}
                crossOrigin="anonymous"
            />
            <button className="p-2 rounded bg-blue-500 text-white" onClick={() => handlePredict(imageRef.current)}>Predict</button>
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
    index: PropTypes.number,
    image: PropTypes.string,
    handleRemove: PropTypes.func
}

export default Image
