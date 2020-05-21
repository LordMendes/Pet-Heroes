import Organization from '../models/Organization';
import OrganzationRepository from '../repositories/OrganizationRepository';

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

class UpdateOrganizationService {
  private organizationRepository: OrganzationRepository;

  constructor(organizationRepository: OrganzationRepository) {
    this.organizationRepository = organizationRepository;
  }

  public execute(
    id: string,
    {
      address,
      city,
      cnpj,
      description,
      foundationDate,
      name,
      responsable,
    }: Request,
  ): Organization {
    const organizations = this.organizationRepository.all();
    const index = organizations.findIndex(
      organization => organization.id === id,
    );
    console.log(id);
    if (index < 0) {
      throw Error("This organization doesn' exist");
    }

    const organization = {
      id,
      address,
      city,
      cnpj,
      description,
      foundationDate,
      name,
      responsable,
    };

    organizations[index] = organization;
    return organization;
  }
}

export default UpdateOrganizationService;
