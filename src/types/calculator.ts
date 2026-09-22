export type CalculatorInputType =
  | "number"
  | "text"
  | "date"
  | "select"
  | "checkbox";

export interface CalculatorInput {
  id: string;
  label: string;
  type: CalculatorInputType;
  placeholder?: string;
  unit?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: {
    label: string;
    value: string;
  }[];
}

export interface CalculatorResult {
  title: string;
  value: string;
  description?: string;
}

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface CalculatorDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  keywords: string[];

  inputs: CalculatorInput[];

  calculate: (
    values: Record<string, unknown>
  ) => CalculatorResult[];

  description?: string;
  howItWorks?: string;

  faq?: CalculatorFaq[];

  relatedCalculators?: string[];

  seo?: {
    title?: string;
    description?: string;
  };
}