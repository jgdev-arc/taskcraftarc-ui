import React, { useState } from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const ListTaskComponent: React.FC = () => {
    const dummyData: Task[] = [
        {
            id: 1,
            title: "Learn Core Java",
            description: "Learn Core Java with examples",
            completed: false,
        },
        {
            id: 2,
            title: "Learn Spring Core",
            description: "Learn Spring Core with examples",
            completed: false,
        },
        {
            id: 3,
            title: "Learn Spring Boot",
            description: "Learn Spring Boot with examples",
            completed: false,
        },
    ];

    const [tasks, setTasks] = useState<Task[]>(dummyData);

    return (
        <div className="container">
            <h2 className="text-center">List of Tasks</h2>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Task Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.completed ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTaskComponent;
