import { Router } from "express";
import * as todoController from '../controllers/todoControllers'
const router = Router();

router.get('/todo', todoController.showTasks);
router.get('/todocompleted', todoController.showCompletedTasks);
router.get('/todopeding', todoController.showPedingTasks);
router.post('/todo', todoController.createTask);
router.put('/todo/:id', todoController.updateTask);
router.delete('/todo/:id', todoController.removeTask);

export default router