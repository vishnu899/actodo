import { useState } from "react"
import TodoItem from "./Todoitem"



function Activity(props)
{


    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    
    return(
        <div className="bg-[#BDB4EA]  flex-grow border rounded-md p-2">
                <h1 className="text-2xl font-medium">Today's Activities</h1>
                
                {activityArr.length === 0?<p>You haven't added any activity yet</p>:""}

{
    activityArr.map(function(item,index){
        return <TodoItem id={item.id} activity = {item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
    })
    }
            </div>
    )
}

export default Activity