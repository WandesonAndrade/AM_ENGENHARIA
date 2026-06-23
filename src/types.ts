/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectCategory =
  | "todos"
  | "residencial"
  | "comercial"
  | "corporativo"
  | "reformas"
  | "instalacoes"
  | "infraestrutura"
  | "industrial"
  | "outros";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  image: string;
  images: string[];
  location: string;
  year: string;
  area: string;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedTitle: string;
  detailedDesc: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  projectAssoc: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: ProjectCategory;
  area: number;
  qualityStandard: "premium" | "medio" | "economico";
  additionalServices: string[];
  notes: string;
  totalEstimatedValue: number;
  submittedAt: string;
}
