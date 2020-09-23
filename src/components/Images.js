import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";
import InfiniteScroll from "react-infinite-scroll-component";
/*
class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {interval: null}
    }

    componentDidMount() {
        console.log("Image component mounted")
        this.setState({
            interval: setInterval(() => {
                console.log("hello")
            }, 1000)
        })
    }

    componentWillUnmount() {
        console.log('image component unmounted')
        clearInterval(this.state.interval)
    }

    render() {
        return (
            <img src="https://images.unsplash.com/photo-1600319213199-25e1503dbb7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
        )
    }
}

 */


const Images = () => {

    const [page, setPage] = useState(1)
    const [searchKeyword, setSearchKeyword] = useState("")
    const [images, setImages, errors, setErrors, isLoading] = useFetchImage(page, searchKeyword)
    const scrollPosition = useScroll();


    const [imageUrl, setImageUrl] = useState("")

    function handleRemove(index) {
        // using filter
        // setImages(images.filter((image, imageIndex)=>imageIndex!==index))

        //using spread operator
        setImages(
            [
                ...images.slice(0, index),
                ...images.slice(index + 1, images.length)
            ]
        )
        console.log("im changing state inside handleRemove method")
    }

    function ShowImages() {
        return <InfiniteScroll dataLength={images.length} next={()=>setPage(page+1)} hasMore={true}>
            {
                images.map((image, index) => {
                    return (
                        <div key={index} className="p-2">
                            <img src={image.urls.regular} width="100%" alt="images" onClick={() => handleRemove(index)}/>
                        </div>
                    )
                })
            }
        </InfiniteScroll>

    }

    const inputRef = useRef(null)

    useEffect(() => {
        // inputRef.current.focus()

        console.log("image component mount")
        const interval = (setInterval(() => {
            console.log("hello")
        }, 1000));


        return () => clearInterval(interval)
    }, [])


    useEffect(() => {
        console.log('i am use effect 1');
    })

    useLayoutEffect(() => {
        console.log('i am use effect 2');
    })

    const handleAdd = () => {
        if (imageUrl !== "") {
            setImages([
                ...images,
                imageUrl
            ])
            setImageUrl("");
        }
    }

    const handleChange = (event) => {
        setImageUrl(event.target.value);
    }
    // const handleLoadMore = () => {
    //     setPage(page + 1)
    // }

    // useEffect(() => {
    //     if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
    //         handleLoadMore();
    //     }
    //     console.log(scrollPosition, window.innerHeight, document.body.offsetHeight)
    // }, [scrollPosition])

    const handleInput = (event)=>{
        setSearchKeyword(event.target.value)
    }

    // return isLoading ? <p>Loading...</p> : (
    return (
        <section>
            <h1>Click on the image to remove</h1>
            <div className="my-5">
                <input type="text" placeholder="Add keyword" onChange={handleInput} className="w-full border rounded"/>
            </div>
            <span style={{color: 'red'}}>{errors[0]}</span>
            <div className="gap-0" style={{columnCount: 3}}>
                <ShowImages/>
            </div>
            {/*{*/}
            {/*    errors.length > 0 ? null : (*/}
            {/*        <div>*/}
            {/*            /!*<button onClick={handleLoadMore}>Load More</button>*!/*/}
            {/*            <div className="flex justify-center">*/}
            {/*                <input id="input-box" ref={inputRef} type="text" className="p-2 border border-gray-800 shadow rounded" value={imageUrl} onChange={handleChange}/>*/}
            {/*                <button*/}
            {/*                    disabled={imageUrl === ""}*/}
            {/*                    className={`p-2  text-white ${imageUrl !== "" ? "bg-green-600" : "bg-green-300"}`}*/}
            {/*                    onClick={handleAdd}>*/}
            {/*                    Add New*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            /!*<span>https://images.unsplash.com/photo-1599687350916-a8be7f9b68f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80</span>*!/*/}

            {/*        </div>*/}
            {/*    )*/}

            {/*}*/}

        </section>
    )
}

export default Images;

