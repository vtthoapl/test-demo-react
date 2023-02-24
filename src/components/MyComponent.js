//class component
// function component

import React from "react";
class MyComponent extends React.Component{
    //JSX: cho phep viet Js ben trong HTML
    render(){
        return(
            <div>my first component
            {Math.random() + 1}
            </div>
        )
    }
}

export default MyComponent;