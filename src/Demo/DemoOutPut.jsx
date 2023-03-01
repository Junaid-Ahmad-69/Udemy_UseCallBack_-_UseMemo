import React, {memo} from 'react';
const  DemoOutPut  = (props) =>{
    console.log("child one Render")
    return (
        <div>
            <p>{props.show ? "THis is a child paragraph" : ""}</p>
        </div>
    )
}
export default memo(DemoOutPut)