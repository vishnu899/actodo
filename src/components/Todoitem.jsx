import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TodoItem(props) {


    const activityArr = props.activityArr
        const setActivityArr = props.setActivityArr


    function handleDelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if(item.id == deleteid)
            {
      return(false,toast.success("Task deleted successfully"))
            }

            else{
                return true
            }
        })
            
        setActivityArr(temparr)
              
    }


    return (
        <>
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button onClick={()=>handleDelete(props.id)} className="text-red-500">Delete</button>
            
        </div>
        <ToastContainer position="top-center"/>
        </>
    )
}

export default TodoItem