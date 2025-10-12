import React,{useEffect, useRef , useState} from 'react'
import { Canvas } from 'fabric';

function Home() {

    const canvasRef = useRef(null);
    const [canvas , setCanvas] =useState(null);

    useEffect(() =>{
        if(canvasRef.current){
            const initCanvas = new Canvas( canvasRef.current, {
                width: 500,
                height: 500,
                
            });
            initCanvas.backgroundColor ='#fff';
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () =>{
                initCanvas.dispose();

            }
        }

        
       

    },[])



  return (
    <div className='flex item-center justify-center mt-30'>
        <div >
            <canvas style={{ backgroundColor: "#ffffff" }}
  className="border-2 border-gray-300 p-4 rounded-md" ref={canvasRef}/>
        </div>

    </div>
  )
}

export default Home