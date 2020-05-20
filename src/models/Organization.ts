import { uuid } from 'uuidv4';

interface OrganizationConstructor {
  address: string;
  city: string;
  cnpj: string;
  description: string;
  foundationDate: Date;
  name: string;
  responsable: string;
  // members: Member [];
}

class Organization {
  id: string;

  address: string;

  city: string;

  description: string;

  name: string;

  responsable: string;

  foundationDate: Date;

  cnpj: string;

  constructor({
    address,
    city,
    cnpj,
    description,
    foundationDate,
    name,
    responsable,
  }: Omit<Organization, 'id'>) {
    this.id = uuid();
    this.address = address;
    this.city = city;
    this.cnpj = cnpj;
    this.description = description;
    this.foundationDate = foundationDate;
    this.name = name;
    this.responsable = responsable;
  }
}

export default Organization;
