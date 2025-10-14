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
  const handleDiameterChange=()=>{};

  const handleColorChange=()=>{};

  return (
    <div>
      {selectedObject && selectedObject.type === 'rect' && (
        <>
        <Input
        value={height}
        onChange={handleHeightChange}
        
        />
        <Input
        value={width}
        onChange={handleWidthChange}
        
        />
        <Input
        value={color}
        onChange={handleColorChange}
        
        />
        
        
        
        </>
      )}


    </div>
  )
}

export default Settings