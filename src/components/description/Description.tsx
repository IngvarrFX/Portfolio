import React from "react"

type DescriptionPropsType = {
    text: string
}


export const Description = (props: DescriptionPropsType)=> {
    return (
        <p>{props.text}</p>
    )
}
