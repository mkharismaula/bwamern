import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
    const className = [props.className] 
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if(props.onClick) props.onClick()
    };

    if(props.isDisable || props.isLoading) {
        if(props.isDisable) className.push("disable");
        return (
            <span className={className.join(" ")} style={props.style}>
                {
                props.isLoading ? ( 
                    <>
                    <span className="spinner-border spinner-border-sm.mx-5"></span>
                    <span className="sr-only">Loading...</span>
                    </>
                 )  : (
                    props.children
                )}
            </span>
            ); 
    }


    if(props.type === "Link") {
        if(props.isExternal) {
            return (
                <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ?"_blank":undefined} rel={props.target === "_blank" ?"noopener noreferrerk":undefined}>{props.children}</a>
            );
        } else {
            return (
                <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onclick}>
                    {props.children}
                </Link>
            );
        }
    }
    return (<button className={className.join(" ")} style={props.style} onClick={onclick}> {props.children} </button>);
}



Button.prototype = {
    type: propTypes.oneOf(["button","Link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isExternal: propTypes.bool,
    isDisable: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,  
}