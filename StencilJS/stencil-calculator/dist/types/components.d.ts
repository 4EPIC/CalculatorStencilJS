/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyCalculator {
    }
}
declare global {
    interface HTMLMyCalculatorElement extends Components.MyCalculator, HTMLStencilElement {
    }
    var HTMLMyCalculatorElement: {
        prototype: HTMLMyCalculatorElement;
        new (): HTMLMyCalculatorElement;
    };
    interface HTMLElementTagNameMap {
        "my-calculator": HTMLMyCalculatorElement;
    }
}
declare namespace LocalJSX {
    interface MyCalculator {
    }
    interface IntrinsicElements {
        "my-calculator": MyCalculator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-calculator": LocalJSX.MyCalculator & JSXBase.HTMLAttributes<HTMLMyCalculatorElement>;
        }
    }
}
