import Organization from '../models/Organization';

interface CreateAppointmentDTO {
  address: string;
  city: string;
  cnpj: string;
  description: string;
  foundationDate: Date;
  name: string;
  responsable: string;
  // members: Member [];
}

class OrganizationRepository {
  private organizations: Organization[];

  constructor() {
    this.organizations = [];
  }

  public all(): Organization[] {
    return this.organizations;
  }

  public create({
    address,
    city,
    cnpj,
    description,
    foundationDate,
    name,
    responsable,
  }: CreateAppointmentDTO): Organization {
    const organization = new Organization({
      address,
      city,
      cnpj,
      description,
      foundationDate,
      name,
      responsable,
    });

    this.organizations.push(organization);

    return organization;
  }
}

export default OrganizationRepository;
