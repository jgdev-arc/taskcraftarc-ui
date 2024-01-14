import React, { useEffect, useState } from 'react';
import { completeTask, deleteTask, getAllTasks, incompleteTask } from '../services/TaskService';
import { useNavigate } from 'react-router-dom';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const ListTaskComponent: React.FC = () => {
    const [tasks, setTasks] = useState<Task[] | undefined>();
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        listTasks();
    }, []);

    const listTasks = () => {
        getAllTasks()
            .then((res) => {
                setTasks(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const addNewTask = () => {
        navigate('/add-task');
    };

    const updateTask = (id: number) => {
        navigate(`/update-task/${id}`);
    };

    const removeTask = (id: number) => {
        deleteTask(id)
            .then(() => {
                listTasks();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    };

    const markCompleteTask = (id: number) => {
        completeTask(id)
            .then(() => {
                listTasks();
                showToast('Task marked as completed. 🟢');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const markIncompleteTask = (id: number) => {
        incompleteTask(id)
            .then(() => {
                listTasks();
                showToast('Task marked as incomplete. 🔴');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Tasks</h2>
            <button className='btn btn-primary mb-2' onClick={addNewTask}>Add Task</button>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Task Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.completed ? 'Yes' : 'No'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTask(task.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeTask(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleteTask(task.id)} style={{ marginLeft: "10px" }}>Complete</button>
                                    <button className='btn btn-dark' onClick={() => markIncompleteTask(task.id)} style={{ marginLeft: "10px" }}>Incomplete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {toastMessage && (
                <div style={{ position: 'fixed', bottom: '70px', right: '20px', zIndex: 1000, backgroundColor: toastMessage.includes('🟢') ? 'green' : 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default ListTaskComponent;
