import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

function Landing()
{
    const data = useLocation()
    return(
        <div className="bg-black p-16">
      <div className="bg-slate-100 p-10 rounded-md">
         <Header name={data.state.user} />
         <div className="flex gap-7 my-5 items-center justify-between flex-wrap">
           <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
           <Card bgcolor={"#FD6663"} title={"July"} subtitle={"13:27"} />
       <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
         </div>

        
<TodoContainer/>
</div>

 </div>
    )
}

export default Landing