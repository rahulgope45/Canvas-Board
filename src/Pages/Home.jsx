// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from 'fabric';
import { IconButton } from 'blocksin-system';
import { SquareIcon } from 'sebikostudio-icons';

function Home() {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,

            });
            initCanvas.backgroundColor = '#fff';
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();

            }
        }


    }, []);

    const addRectangle = () => {

    }



    return (
        <div className='flex  item-center justify-center mt-30'>
            <div >
                <canvas style={{ backgroundColor: "#ffffff" }}
                    className="border-2 border-gray-300 p-4 rounded-md" ref={canvasRef} />
            </div>

            <div className="bg-gray-400 border border-gray-300 rounded-md p-2 hover:shadow-md transition">
                <IconButton
                    onClick={addRectangle}
                    className="text-gray-700 hover:text-black-600 focus:outline-none"
                    
                >
                    <SquareIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Home