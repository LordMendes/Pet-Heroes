import { Router } from 'express';
import organizationsRouter from './organizations.routes';

const routes = Router();

routes.use('/organizations', organizationsRouter);

export default routes;
