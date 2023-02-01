import { PermissionGroupDatabaseTypes } from 'node-ts';
import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TaskInstance extends Model{
    id: number,
    taskTitle: string,
    done: boolean
};

export const Task = sequelize.define<TaskInstance>('task', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    taskTitle: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'tasks',
    timestamps: false
})