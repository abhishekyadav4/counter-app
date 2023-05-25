
import './Count.css'
 const Counter=(props)=>{
   

    return(
        <>
        <div className="container">
            <div className='items'>
            <h1>Result</h1>
           <h2>{props.result}</h2>
        </div>
        </div>
    </>

    )
}
export default Counter;