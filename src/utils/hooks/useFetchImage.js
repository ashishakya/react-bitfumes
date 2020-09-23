import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl = process.env.REACT_APP_UNSPLASH_API_BASE_RL;
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function useFetchImage(page, searchKeyword) {
    const [images, setImages] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function fetchSearch(param) {
        axios.get(`${baseUrl}/search/photos?client_id=${accessKey}&page=${page}&query=${searchKeyword}`)
            .then(({data}) => {
                if(page>1){
                    setImages([...images, ...data.results])
                }else {
                    setImages([...data.results])

                }
                setIsLoading(false)
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
                setIsLoading(false)
            });
    }

    function fetchRandom() {
        axios.get(`${baseUrl}/photos?client_id=${accessKey}&page=${page}`)
            .then(({data}) => {
                setImages([...images, ...data])
                setIsLoading(false)
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
                setIsLoading(false)
            });

    }

    useEffect(() => {
        setIsLoading(true)
        if (searchKeyword !== "") {
            fetchSearch()
        } else {
            fetchRandom();
        }

    }, [page])

    useEffect(() => {
        if (searchKeyword === "") {
            return;
        }
        fetchSearch()

    }, [searchKeyword])
    return [images, setImages, errors, setErrors, isLoading];
}
