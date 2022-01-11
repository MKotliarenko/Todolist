import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: ()=>void
}

const Button = (props:ButtonPropsType) => {
    return <button onClick={props.onClickHandler}>{props.title}</button>
};

export default Button;