const Shimmer=()=>{
    return(
    <div className="card-container">
      {Array(13).fill("").map((sim,index)=>(
        <div className="shimmer" key={index}></div>))}
      </div>
    );
}
export default Shimmer;
