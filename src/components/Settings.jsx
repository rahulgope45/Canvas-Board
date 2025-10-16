import { Input } from 'blocksin-system';
import React,{useState, useEffect} from 'react'

function Settings({canvas}) {
  
  const [selectedObject, setSelectedObject] = useState(null);
  const [height , setHeight]= useState("");
  const [width , setWeidth]= useState("");
  const [diameter , setDiameter]= useState("");
  const [color , setColor]= useState("");

  useEffect(() =>{
   if(canvas) {
    canvas.on("selection:created", (e) =>{
      handleObjectSelection(e.selected[0]);
    });

    canvas.on("selection:updated", (e) =>{
      handleObjectSelection(e.selected[0]);
    });

    canvas.on("selection:cleared", (e) =>{
      handleObjectSelection(e.selected[0]);
    });

    canvas.on("selection:modified", (e) =>{
      handleObjectSelection(e.selected[0]);
    });

    canvas.on("selection:scaling", (e) =>{
      handleObjectSelection(e.selected[0]);
    });
    

   } 
  }, [canvas]);

  const handleObjectSelection =(object) =>{
    if(!object) return;

    setSelectedObject(object);
      
    if(object.type === "rect"){
      setWeidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter("")
    }else if(object.type === "circle"){
      setDiameter(Math.round(object.radius * 2 * object.scaleX));
      setColor(object.fill);
      setWeidth("");
      setHeight("");

    }
  }

  const clearSettings =() =>{
    setHeight("");
    setWeidth("");
    setColor("");
    setDiameter("");
  }

  const handleWidthChange=(e)=>{
   
     const value = e.target.value.replace(/,/g,"");
    const intValue = parseInt(value, 10);

    setWeidth(intValue);

    if (selectedObject && selectedObject.type === "rect" &&  intValue >= 0){
      selectedObject.set({ width: intValue / selectedObject.scaleX});
      canvas.renderAll();
    }

  };

  const handleHeightChange=(e)=>{
    const value = e.target.value.replace(/,/g,"");
    const intValue = parseInt(value, 10);

    setHeight(intValue);

    if (selectedObject && selectedObject.type === "rect" &&  intValue >= 0){
      selectedObject.set({ height: intValue / selectedObject.scaleY});
      canvas.renderAll();
    }
    

  };
  const handleDiameterChange=(e)=>{
    const value = e.target.value.replace(/,/g,"");
    const intValue = parseInt(value, 10);

    setDiameter(intValue);

    if (selectedObject && selectedObject.type === 'circle' && intValue >=0){
      selectedObject.set({ radius: intValue /2/ selectedObject.scaleX})
      canvas.renderAll();
    }
  };

  const handleColorChange=(e)=>{
    const value = e.target.value;
    setColor(value);
    if(selectedObject){
      selectedObject.set({ fill: value});
      canvas.renderAll();
    }
  };

  return (
    <>
    <div className='bg-black'>
      {selectedObject && selectedObject.type === 'rect' && (
        <>
        <Input
        value={height}
        onChange={handleHeightChange}
        label='Height'
        
        />
        <Input
        value={width}
        onChange={handleWidthChange}
        label='Width'
        
        />
        <Input
        type="color"
        value={color}
        onChange={handleColorChange}
        label='Color'
        
        />
        
        
        
        </>
      )}

      {/* For Circle */}
       <div>
      {selectedObject && selectedObject.type === 'circle' && (
        <>
        <Input
        value={diameter}
        onChange={handleDiameterChange}
        label='Diameter'
        
        />
        
        <Input
        type="color"
        value={color}
        onChange={handleColorChange}
        label='Color'
        
        />
        
        
        
        </>
      )}


    </div>


    </div>
    </>
  )
}

export default Settings