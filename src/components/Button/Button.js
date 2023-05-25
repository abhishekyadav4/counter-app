
import './Button.css'
 const Button=(props)=> {
    return (
        <>
            <div className="btn">
                <div className='incr'>
                    <button onClick={props.increment}>Increment</button>
                </div>
                <div className='decr'>
                    <button onClick={props.decrement}>Decrement</button>
                </div>
                <div className='reset'>
                    <button onClick={props.reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Button;