import React from "react";

const Button = ({title = "Nothing"})=>
{
    return ( <button className ="btn">{title}</button>);
}

export default Button