

function LoggerComponent(props){
    console.log(props)
        return (
            <div className="logger-component">
            <p>{props.message}</p>   
            </div>
        );
    }


export default LoggerComponent;
