import React, {useState} from 'react';
import "@tensorflow/tfjs"
import * as mobilenet from '@tensorflow-models/mobilenet'

export default function useTFPrediction() {

    const [predictions, setPredictions] = useState([]);

    function handlePredict(image) {
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(image).then(predictions => {
                setPredictions(predictions)
            });
        });
    }

    return [handlePredict, predictions];
}
