import { useState } from "react"

function Todo()
{


     const [list,setlist] = useState([{id:1,activity:"Apple"},{id:2,activity:"Orange"}])
  
     const [newitem,setnewitem] = useState("")

function handleDelete(removeid)
{
    var temparr = list.filter(function(item){
        if(item.id == removeid)
        {
            return false
        }
        else{
            return true
        }
    })

    setlist(temparr)
}

function handlechange(evt)
{
    setnewitem(evt.target.value)
}



function addElement()
{
       setlist([...list,{id:list.length+1,activity:newitem}])
}
    return(
    <>
    
    <h1>Todo List</h1>
    <input type="text" value={newitem} onChange={handlechange} />
  <button onClick={addElement}>Add</button>



    <ul>
        {
            list.map(function(item){
                return <li>{item.activity} <button onClick={()=>{handleDelete(item.id)}}>Delete</button></li>
            })
        }
    </ul>
    
    </>
    )
}


export default Todo