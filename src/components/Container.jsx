import React from "react";

export const Container = (props) => {
    return (
        <div className="w-full">
            {
                props.children
            }
        </div>
    )
}