import { FaStar } from "react-icons/fa6";
function Star({starcount}){
    const star=[];
    for(let i=0;i<starcount;i++){
        star.push(<FaStar key={i}/>)
    }  
return (
    <div className="d-flex justify-content-center small text-warning mb-2">
        {star}
    </div>
)
}
export default Star;