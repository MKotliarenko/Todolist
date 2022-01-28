import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    active: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={props.active ? "active" : ""}
            onClick={props.onClickHandler}>
            {props.title}
        </button>)
};

export default Button;