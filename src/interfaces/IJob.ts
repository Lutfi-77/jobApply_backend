export interface ICreateJobRequest {
  title: string;
  description: string;
  salary?: string;
  type: string;
  location: string;
}

export interface IJobResponse {
  id: string;
  companyId: string;
  title: string;
  description: string;
  salary: string | null;
  type: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}
