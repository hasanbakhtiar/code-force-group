import { useEffect, useState } from "react"


const Example = () => {

        // const [data,setData] = useState({
    //     img:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg",
    //     text:"Nature"
    // })
    
    
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("text-primary");
    // const [deyer,funksiya] = useState(0);
    useEffect(()=>{
        console.log('running');
    },[color,count])

    const increment = () => {

        setCount(count + 1)

    }

    return (
        <div className="mt-5 container">
            <h1 className={color}>Test data</h1>
            <div><button onClick={()=>{setColor("text-danger")}}>change color</button></div>
            <button className="btn btn-danger" onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>-</button>
            <span className="mx-3">{count}</span>
            <button className="btn btn-success" onClick={increment}>+</button>


            {/* <img width={300} src={data.img} alt="" />
            <p>{data.text}</p>

            <button onClick={()=>{
                setData({
                    img:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Backgrounds-HD-Car-Wallpapers.jpg",
                    text:"car"
                })
            }}>change data</button> */}
        </div>
    )
}

export default Example