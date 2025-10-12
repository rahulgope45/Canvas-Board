import React,{useEffect, useRef , useState} from 'react'
import { Canvas } from 'fabric';

function Home() {

    const canvasRef = useRef(null);
    const [canas , setCanvas] =useState(null);

    useEffect(() =>{
        if(canvasRef.current){
            const initCanvas = new Canvas( canvasRef.current, {
                width: 500,
                height: 500,
            });
            initCanvas .backgroundColor = "#fff";
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () =>{
                initCanvas.dispose();

            }
        }

        
       

    },[])



  return (
    <div>

    </div>
  )
}

export default Home