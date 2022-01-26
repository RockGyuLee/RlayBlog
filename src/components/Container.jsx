import React from "react";
import styled from "styled-components";

export const Container = (props) => {
    return (
        <div className="w-full">
            {
                props.children
            }
        </div>
    )
}