import type { Components, JSX } from "../types/components";

interface MyCalculator extends Components.MyCalculator, HTMLElement {}
export const MyCalculator: {
  prototype: MyCalculator;
  new (): MyCalculator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
