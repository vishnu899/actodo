function Card(props)
{
    return(
        <div style={{backgroundColor:props.bgcolor}} className="px-10 flex-grow  py-5 rounded-md text-center">
               <h1 className="text-2xl font-medium">{props.title}</h1>
               <h1>{props.subtitle}</h1>
       </div>
    )
}

export default Card