
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitAcceleration extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **meter per second squared**
     * 
     * Symbols: "m/s²"
     * 
     * SI base metric unit.
     */
    static readonly meterPerSecondSquared = new UnitAcceleration(
        "meterPerSecondSquared",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **foot per second squared**
     * 
     * Symbols: "ft/s²"
     * 
     * FPS unit. Equal to 0.3048 [meterPerSecondSquared].
     */
    static readonly footPerSecondSquared = new UnitAcceleration(
        "footPerSecondSquared",
        "381",
        "1250",
        "0",
        "1",
        UnitCategory.english,
    )

}

export const info = new QuantityInfo(
    "acceleration",
    [
        new DerivedQuantity( "speed", "1"),
        new DerivedQuantity( "time", "-1"),
    ],
    UnitAcceleration.meterPerSecondSquared,
    UnitAcceleration.values
)
