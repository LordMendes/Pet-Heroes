import { Router } from 'express';
import { parseISO } from 'date-fns';

import OrganizationRepository from '../repositories/OrganizationRepository';
import CreateOrganizationService from '../services/CreateOrganizationService';

const organizationsRouter = Router();
const organizationRepository = new OrganizationRepository();

// LIST THE ORGANIZATIONS
organizationsRouter.get('/', (request, response) => {
  const organizations = organizationRepository.all();

  return response.json(organizations);
});

// CREATE AN ORGANIZATION
organizationsRouter.post('/', (request, response) => {
  try {
    const {
      address,
      city,
      cnpj,
      description,
      foundationDate,
      name,
      responsable,
    } = request.body;

    const parsedDate = parseISO(foundationDate);

    const createorganization = new CreateOrganizationService(
      organizationRepository,
    );

    const organization = createorganization.execute({
      address,
      city,
      cnpj,
      description,
      foundationDate: parsedDate,
      name,
      responsable,
    });

    return response.status(200).json(organization);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default organizationsRouter;
