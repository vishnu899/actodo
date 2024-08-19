import Addtodoform from "./Addtodoform"
import Activity from "./Activitylist"
import { useState } from "react"

function TodoContainer() {


    const [activityArr,setActivityArr] = useState([
        {id:1,
            activity:"Wakeup"}

            ,
            {id:2,
                activity:"Breakfast"}
    ])
    return (
        <div>

<div className="flex gap-5 flex-wrap">


            <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>

            <Activity activityArr={activityArr} setActivityArr={setActivityArr}/>


            </div>



        </div>
    )
}

export default TodoContainer