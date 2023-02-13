import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';



const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log("Tarea creada")
        return () => {
            console.log(`Task: ${task.name} is going to`);
        };
    }, [task]);

    return (
        <div>

            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripcion: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? "Completed":"Pending" }
            </h5>

        </div>
    );

}
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
