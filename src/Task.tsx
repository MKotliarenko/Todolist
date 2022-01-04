import React from 'react';

type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}
const Task: React.FC<TaskPropsType> = ({
      id,
      title,
      isDone
      }) => {
    return (
        <div>
            <li>
                <input type="checkbox" checked={isDone}/>
                <span>{title}</span>
            </li>
        </div>
    );
};

export default Task;