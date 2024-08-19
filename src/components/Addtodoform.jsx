import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addtodoform(props)


{

    
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setnewactivity] = useState("")

   function handleChange(evt)
    {
setnewactivity(evt.target.value)
    }


    function addElement()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
        
    }

    return(
        <div className="flex  flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>

     <div>
        <input type="text" value={newactivity}  onChange={handleChange} placeholder="Enter your Activities" className="border border-black p-1 " />
        <button onClick={addElement} className="bg-emerald-500 p-1 text-white border">Add</button>
        
    </div>
    </div>
    )
}

export default Addtodoform