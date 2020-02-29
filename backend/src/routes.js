import BullBoard from 'bull-board';
import { Router } from 'express';
import multer from 'multer';

import AppointmentController from './app/controller/AppointmentController';
import AvailableController from './app/controller/AvailableController';
import FileController from './app/controller/FileController';
import NotificationController from './app/controller/NotificationController';
import ProviderController from './app/controller/ProviderController';
import ScheduleController from './app/controller/ScheduleController';
import SessionController from './app/controller/SessionController';
import UserController from './app/controller/UserController';
import Queue from './app/lib/Queue';
import authMiddleware from './app/middleware/auth';
import validateAppointmentStore from './app/validators/AppointmentStore';
import validateSessionStore from './app/validators/SessionStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/sessions', validateSessionStore, SessionController.store);

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

routes.use('/admin/queues', BullBoard.UI);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdate, UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post(
    '/appointments',
    validateAppointmentStore,
    AppointmentController.store
);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
