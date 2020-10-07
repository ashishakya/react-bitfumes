import React, {useRef, useState} from 'react'
import "@tensorflow/tfjs"
import * as mobilenet from '@tensorflow-models/mobilenet'

export default function Tensorflow() {
    const imageRef = useRef();
    const [predictions, setPredictions] = useState([]);

    const handlePredict = () => {
        const img = imageRef.current;
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
                setPredictions(predictions)
            });
        });
    }

    return (
        <div className="flex justify-center">
            <div className="w-1/3">
                <h1>Tensor Flow</h1>
                <img
                    crossOrigin="anonymous"
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2Nzc2N30"
                    width="300"
                    ref={imageRef}
                />
                <div className="text-center m-5">
                    {
                        predictions.length > 0 &&
                        predictions.map((prediction, index) => (
                            <div
                                className="flex justify-between"
                                key={index}
                            >
                                <p>{prediction.className}</p>
                                <p>{Math.floor(prediction.probability*100) } %</p>
                            </div>
                        ))
                    }
                    <button className="p-2 rounded bg-blue-500 text-white" onClick={handlePredict}>Predict Result</button>
                </div>
            </div>
        </div>
    )
}
