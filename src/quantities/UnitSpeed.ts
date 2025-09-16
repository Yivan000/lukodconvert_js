
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitSpeed extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **meter per second**
     * 
     * Symbols: m/s,m·s⁻¹
     * 
     * SI base metric unit.
     */
    static readonly meterPerSecond = new UnitSpeed(
        "meterPerSecond",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **kilometer per hour**
     * 
     * Symbols: km/h,kph,kmph,km/hr,km·h⁻¹
     * 
     * SI metric unit.
     */
    static readonly kilometerPerHour = new UnitSpeed(
        "kilometerPerHour",
        "3600",
        "1000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **foot per second**
     * 
     * Symbols: fps
     * 
     * FPS unit. Equal to 0.3048 [meterPerSecond].
     */
    static readonly footPerSecond = new UnitSpeed(
        "footPerSecond",
        "381",
        "1250",
        "0",
        "1",
        UnitCategory.english,
    )

}

export const info = new QuantityInfo(
    "speed",
    [
        new DerivedQuantity( "length", "1"),
        new DerivedQuantity( "time", "-1"),
    ],
    UnitSpeed.meterPerSecond,
    UnitSpeed.values
)
