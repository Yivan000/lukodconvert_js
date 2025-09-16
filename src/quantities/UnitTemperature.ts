
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitTemperature extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **kelvin**
     * 
     * Symbols: K
     * 
     * Base SI metric unit.
     */
    static readonly kelvin = new UnitTemperature(
        "kelvin",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quettakelvin**
     * 
     * Symbols: QK
     * 
     * SI metric unit. Equal to 1000 [ronnakelvin] or 1ᴇ30 [kelvin]. Adopted 2022.
     */
    static readonly quettakelvin = new UnitTemperature(
        "quettakelvin",
        "1000000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **ronnakelvin**
     * 
     * Symbols: RK
     * 
     * SI metric unit. Equal to 1000 [yottakelvin] or 1ᴇ27 [kelvin]. Adopted 2022.
     */
    static readonly ronnakelvin = new UnitTemperature(
        "ronnakelvin",
        "1000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yottakelvin**
     * 
     * Symbols: YK
     * 
     * SI metric unit. Equal to 1000 [zettakelvin] or 1ᴇ24 kelvin. Adopted 1991.
     */
    static readonly yottakelvin = new UnitTemperature(
        "yottakelvin",
        "1000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zettakelvin**
     * 
     * Symbols: ZK
     * 
     * SI metric unit. Equal to 1000 [exakelvin] or 1ᴇ21 [kelvin]. Adopted 1991.
     */
    static readonly zettakelvin = new UnitTemperature(
        "zettakelvin",
        "1000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **exakelvin**
     * 
     * Symbols: EK
     * 
     * SI metric unit. Equal to 1000 [petakelvin] or 1ᴇ18 [kelvin]. Adopted 1975.
     */
    static readonly exakelvin = new UnitTemperature(
        "exakelvin",
        "1000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **petakelvin**
     * 
     * Symbols: PK
     * 
     * SI metric unit. Equal to 1000 [terakelvin] or 1ᴇ15 [kelvin]. Adopted 1975.
     */
    static readonly petakelvin = new UnitTemperature(
        "petakelvin",
        "1000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **terakelvin**
     * 
     * Symbols: TK
     * 
     * SI metric unit. Equal to 1000 [gigakelvin] or 1ᴇ12 [kelvin]. Adopted 1960.
     */
    static readonly terakelvin = new UnitTemperature(
        "terakelvin",
        "1000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **gigakelvin**
     * 
     * Symbols: GK
     * 
     * SI metric unit. Equal to 1000 [megakelvin] or 1ᴇ9 [kelvin]. Adopted 1960.
     */
    static readonly gigakelvin = new UnitTemperature(
        "gigakelvin",
        "1000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **megakelvin**
     * 
     * Symbols: MK
     * 
     * SI metric unit. Equal to 1000 [kilokelvin] or 1ᴇ6 [kelvin]. Adopted 1873.
     */
    static readonly megakelvin = new UnitTemperature(
        "megakelvin",
        "1000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **kilokelvin**
     * 
     * Symbols: kK
     * 
     * SI metric unit. Equal to 10 [hectokelvin] or 1000 [kelvin]. Adopted 1795.
     */
    static readonly kilokelvin = new UnitTemperature(
        "kilokelvin",
        "1000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **hectokelvin**
     * 
     * Symbols: hK
     * 
     * SI metric unit. Equal to 10 [decakelvin] or 100 [kelvin]. Adopted 1795.
     */
    static readonly hectokelvin = new UnitTemperature(
        "hectokelvin",
        "100",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decakelvin**
     * 
     * Symbols: daK
     * 
     * SI metric unit. Equal to 10 [kelvin]. Adopted 1795.
     */
    static readonly decakelvin = new UnitTemperature(
        "decakelvin",
        "10",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decikelvin**
     * 
     * Symbols: dK
     * 
     * SI metric unit. Equal to 10 [centikelvin] or 0.1 [kelvin]. Adopted 1795.
     */
    static readonly decikelvin = new UnitTemperature(
        "decikelvin",
        "1",
        "10",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **centikelvin**
     * 
     * Symbols: cK
     * 
     * SI metric unit. Equal to 10 [millikelvin] or 0.01 [kelvin]. Adopted 1795.
     */
    static readonly centikelvin = new UnitTemperature(
        "centikelvin",
        "1",
        "100",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **millikelvin**
     * 
     * Symbols: mK
     * 
     * SI metric unit. Equal to 1000 [microkelvin] or 0.001 [kelvin]. Adopted 1795.
     */
    static readonly millikelvin = new UnitTemperature(
        "millikelvin",
        "1",
        "1000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **microkelvin**
     * 
     * Symbols: μK
     * 
     * SI metric unit. Equal to 1000 [nanokelvin] or 1ᴇ-6 [kelvin]. Adopted 1873.
     */
    static readonly microkelvin = new UnitTemperature(
        "microkelvin",
        "1",
        "1000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **nanokelvin**
     * 
     * Symbols: nK
     * 
     * SI metric unit. Equal to 1000 [picokelvin] or 1ᴇ-9 [kelvin]. Adopted 1960.
     */
    static readonly nanokelvin = new UnitTemperature(
        "nanokelvin",
        "1",
        "1000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **picokelvin**
     * 
     * Symbols: pK
     * 
     * SI metric unit. Equal to 1000 [femtokelvin] or 1ᴇ-12 [kelvin]. Adopted 1960.
     */
    static readonly picokelvin = new UnitTemperature(
        "picokelvin",
        "1",
        "1000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **femtokelvin**
     * 
     * Symbols: fK
     * 
     * SI metric unit. Equal to 1000 [attokelvin] or 1ᴇ-15 [kelvin]. Adopted 1964.
     */
    static readonly femtokelvin = new UnitTemperature(
        "femtokelvin",
        "1",
        "1000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **attokelvin**
     * 
     * Symbols: aK
     * 
     * SI metric unit. Equal to 1000 [zeptokelvin] or 1ᴇ-18 [kelvin]. Adopted 1964.
     */
    static readonly attokelvin = new UnitTemperature(
        "attokelvin",
        "1",
        "1000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zeptokelvin**
     * 
     * Symbols: zK
     * 
     * SI metric unit. Equal to 1000 [yoctokelvin] or 1ᴇ-21 [kelvin]. Adopted 1991.
     */
    static readonly zeptokelvin = new UnitTemperature(
        "zeptokelvin",
        "1",
        "1000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yoctokelvin**
     * 
     * Symbols: yK
     * 
     * SI metric unit. Equal to 1000 [rontokelvin] or 1ᴇ-24 [kelvin]. Adopted 1991.
     */
    static readonly yoctokelvin = new UnitTemperature(
        "yoctokelvin",
        "1",
        "1000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **rontokelvin**
     * 
     * Symbols: rK
     * 
     * SI metric unit. Equal to 1000 [quectokelvin] or 1ᴇ-27 [kelvin]. Adopted 2022.
     */
    static readonly rontokelvin = new UnitTemperature(
        "rontokelvin",
        "1",
        "1000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quectokelvin**
     * 
     * Symbols: qK
     * 
     * SI metric unit. Equal to 1ᴇ-30 [kelvin]. Adopted 2022.
     */
    static readonly quectokelvin = new UnitTemperature(
        "quectokelvin",
        "1",
        "1000000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **Celsius**
     * 
     * Symbols: ˚C
     * 
     * SI derived metric unit. 0˚C is equal to 273.15 [kelvin].
     */
    static readonly celsius = new UnitTemperature(
        "celsius",
        "1",
        "1",
        "5463",
        "20",
        UnitCategory.metricSi,
    )

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **Fahrenheit**
     * 
     * Symbols: ˚F
     * 
     * Imperial unit. 0 ˚F is equal to -17.7̅ [celsius] or 255.372̅ [kelvin].
     */
    static readonly fahrenheit = new UnitTemperature(
        "fahrenheit",
        "5",
        "9",
        "45967",
        "180",
        UnitCategory.english,
    )

    /**
     * **Rankine**
     * 
     * Symbols: ˚R
     * 
     * Imperial derived unit. 0 ˚R is equal to -459.67 [fahrenheit], -275.15 [celsius], or 0 [kelvin].
     */
    static readonly rankine = new UnitTemperature(
        "rankine",
        "5",
        "9",
        "0",
        "1",
        UnitCategory.english,
    )

    // --------------------------------------------
    // FRENCH
    // --------------------------------------------

    /**
     * **Réaumur**
     * 
     * Symbols: ˚Ré,˚Re
     * 
     * Old French unit. 0 ˚Ré is equal to 0 [celsius]; 80 ˚Ré is equal to 100 [celsius].
     */
    static readonly reaumur = new UnitTemperature(
        "reaumur",
        "5",
        "4",
        "5463",
        "20",
        UnitCategory.french,
    )

}

export const info = new QuantityInfo(
    "temperature",
    [],
    UnitTemperature.kelvin,
    UnitTemperature.values
)
