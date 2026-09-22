import type {
  CalculatorDefinition,
  CalculatorResult,
} from "@/types/calculator";

export type CalculatorValues = Record<string, unknown>;

export function runCalculator(
  calculator: CalculatorDefinition,
  values: CalculatorValues
): CalculatorResult[] {
  validateRequiredInputs(calculator, values);

  return calculator.calculate(values);
}

function validateRequiredInputs(
  calculator: CalculatorDefinition,
  values: CalculatorValues
): void {
  for (const input of calculator.inputs) {
    if (!input.required) {
      continue;
    }

    const value = values[input.id];

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      throw new Error(`${input.label} alanı zorunludur.`);
    }
  }
}
