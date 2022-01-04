import React from 'react';
type TodoListHeaderPropsType = {
    title: string
}

const TodoListHeader = (props:TodoListHeaderPropsType) => {
    return <h3>{props.title}</h3>
};
{/*const TodoListHeader = ({title}:TodoListHeaderPropsType) => {
    return <h3>{title}</h3>
};
*/}
{/*const TodoListHeader : React.FC<TodoListHeaderPropsType> = ({ title:string}) => {
    return <h3>{title}</h3>
};
*/}

export default TodoListHeader;