import {useState} from "react";
function Check(props){
    const [checked, setCheck] = useState(props.checkValue);

    return(
        <>
        <label>
            <input type="checkbox" checked={checked} onChange={()=>{setCheck(!checked)}}></input>
        </label>
        </>
    )
}
export default Check;