import Organization from '../models/Organization';
import OrganizationRepository from '../repositories/OrganizationRepository';

interface Request {
  address: string;
  city: string;
  cnpj: string;
  description: string;
  foundationDate: Date;
  name: string;
  responsable: string;
  // members: Member [];
}

class CreateOrganizationService {
  private organizationRepository: OrganizationRepository;

  constructor(organizationRepository: OrganizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  public execute({
    address,
    city,
    cnpj,
    description,
    foundationDate,
    name,
    responsable,
  }: Request): Organization {
    const organization = this.organizationRepository.create({
      address,
      city,
      cnpj,
      description,
      foundationDate,
      name,
      responsable,
    });
    return organization;
  }
}

export default CreateOrganizationService;
