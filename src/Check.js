function Check(props){
    const checked = (props.checkValue);

    
    return(
        <>
        <label>
            <input type="checkbox" checked={checked}></input>
        </label>
        </>
    )
}
export default Check;