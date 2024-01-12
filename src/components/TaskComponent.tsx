import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, saveTask } from '../services/TaskService';

interface Task {
    title: string;
    description: string;
    completed: string;
}

const TaskComponent: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [completed, setCompleted] = useState<string>('false');
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();

    const saveOrUpdateTask = (e: FormEvent) => {
        e.preventDefault();

        const task: Task = { title, description, completed };
        console.log(task);

        saveTask(task)
            .then((res) => {
                console.log(res.data);
                navigate('/tasks');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center'>Update Task</h2>;
        } else {
            return <h2 className='text-center'>Add Task</h2>;
        }
    };

    useEffect(() => {
        if (id) {
            getTask(id)
                .then((res) => {
                    console.log(res.data);
                    setTitle(res.data.title);
                    setDescription(res.data.description);
                    setCompleted(res.data.completed.toString());
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [id]);

    return (
        <div>
            <div className='container'>
                <br />
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {pageTitle()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Task Title:</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Task Title'
                                        name='title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Task Description:</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Task Description'
                                        name='description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Task Completed:</label>
                                    <select
                                        className='form-control'
                                        value={completed}
                                        onChange={(e) => setCompleted(e.target.value)}
                                    >
                                        <option value='false'>No</option>
                                        <option value='true'>Yes</option>
                                    </select>
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateTask(e)}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;
