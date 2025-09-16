import { Unit } from "./unit";


export class QuantityInfo {
    constructor(
        public id: string,
        public derivedQuantities: DerivedQuantity[],
        public baseUnit: Unit,
        public units: Unit[],

    ) {}
}

export class DerivedQuantity {
    constructor(
        public id: string,
        public exponent: string,
    ) {}
}