import { _getListStringWithPluralizationFunction, localeJsonObject } from "./locale"
import UnitCategory from "./UnitCategories"

import Fraction from "fraction.js"

export abstract class Unit {
    constructor(
        private readonly key: string,

        /**
         * Numerator of the slope of the line, the 'm' in 'y=mx+b', aka the conversion factor.
         * 
         * Access {@link slope} for the full rational.
         */
        public readonly slopeNumerator: string,
        /**
         * Denominator of the slope of the line, the 'm' in 'y=mx+b', aka the conversion factor.
         * 
         * Access {@link slope} for the full rational.
         */
        public readonly slopeDenominator: string,

        /**
         * Numerator of the Y-intercept of the line, the 'b' in 'y=mx+b', aka the zero point.
         * 
         * Access {@link yintercept} for the full rational.
         */
        public readonly yinterceptNumerator: string,
        /**
         * Denominator of the Y-intercept of the line, the 'b' in 'y=mx+b', aka the zero point.
         * 
         * Access {@link yintercept} for the full rational.
         */
        public readonly yinterceptDenominator: string,

        /**
         * The category that this unit falls into.
         */
        public readonly category: UnitCategory,
    ) { }

    toString(): string { return this.key }

    static get values(): Unit[] {
        return Object.values(this)
    }

    /**
     * The combination of {@link slopeNumerator} and {@link slopeDenominator}.
     */
    get slope(): Fraction {
        return new Fraction(`${this.slopeNumerator}/${this.slopeDenominator}`)
    }

    /**
     * The combination of {@link yinterceptNumerator} and {@link yinterceptDenominator}.
     */
    get yintercept(): Fraction {
        return new Fraction(`${this.yinterceptNumerator}/${this.yinterceptDenominator}`)
    }

    convertFromBase(base: Fraction): Fraction {
        return base.sub(this.yintercept).div(this.slope);
    }

    convertToBase(input: Fraction): Fraction {
        return input.mul(this.slope).add(this.yintercept);
    }

    isSameType(other: Unit): boolean {
        return this.constructor == other.constructor;
    }

    // `this.constructor.name` is the name of the class, e.g. "UnitLength"
    /** 
     * 
     * @param number The number that this unit is in reference to, for pluralization purposes. Defaults to 1.
     * @returns A string array of the possible names for this unit. Contains at least 1 string.
     */
    getName(number: number = 1): string[]{
        return _getListStringWithPluralizationFunction(localeJsonObject[this.constructor.name][this.key].name, number)
    }

    /** 
     * 
     * @param number The number that this unit is in reference to, for pluralization purposes. Defaults to 1.
     * @returns A string array of the possible symbols for this unit. Contains at least 1 string.
     */
    getSymbol(number: number = 1): string[]{
        return _getListStringWithPluralizationFunction(localeJsonObject[this.constructor.name][this.key].symbol!, number)
    }
}

export function checkIfSameType(a: Unit, b: Unit,) {
    if (a.isSameType(b)) return;
    throw TypeError(`Type of "${a}" is not the same as the type of "${b}"`);
}

export function convert(
    inputUnit: Unit,
    inputFraction: Fraction,
    outputUnit: Unit,
    checkSameType = true,
) {
    if (checkSameType) checkIfSameType(inputUnit, outputUnit);
    return outputUnit.convertFromBase(
        inputUnit.convertToBase(inputFraction),
    );
}

