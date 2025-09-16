
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitForce extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **newton**
     * 
     * Symbols: N
     * 
     * Base SI metric unit.
     */
    static readonly newton = new UnitForce(
        "newton",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quettanewton**
     * 
     * Symbols: QN
     * 
     * SI metric unit. Equal to 1000 [ronnanewton] or 1ᴇ30 [newton]. Adopted 2022.
     */
    static readonly quettanewton = new UnitForce(
        "quettanewton",
        "1000000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **ronnanewton**
     * 
     * Symbols: RN
     * 
     * SI metric unit. Equal to 1000 [yottanewton] or 1ᴇ27 [newton]. Adopted 2022.
     */
    static readonly ronnanewton = new UnitForce(
        "ronnanewton",
        "1000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yottanewton**
     * 
     * Symbols: YN
     * 
     * SI metric unit. Equal to 1000 [zettanewton] or 1ᴇ24 newton. Adopted 1991.
     */
    static readonly yottanewton = new UnitForce(
        "yottanewton",
        "1000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zettanewton**
     * 
     * Symbols: ZN
     * 
     * SI metric unit. Equal to 1000 [exanewton] or 1ᴇ21 [newton]. Adopted 1991.
     */
    static readonly zettanewton = new UnitForce(
        "zettanewton",
        "1000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **exanewton**
     * 
     * Symbols: EN
     * 
     * SI metric unit. Equal to 1000 [petanewton] or 1ᴇ18 [newton]. Adopted 1975.
     */
    static readonly exanewton = new UnitForce(
        "exanewton",
        "1000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **petanewton**
     * 
     * Symbols: PN
     * 
     * SI metric unit. Equal to 1000 [teranewton] or 1ᴇ15 [newton]. Adopted 1975.
     */
    static readonly petanewton = new UnitForce(
        "petanewton",
        "1000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **teranewton**
     * 
     * Symbols: TN
     * 
     * SI metric unit. Equal to 1000 [giganewton] or 1ᴇ12 [newton]. Adopted 1960.
     */
    static readonly teranewton = new UnitForce(
        "teranewton",
        "1000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **giganewton**
     * 
     * Symbols: GN
     * 
     * SI metric unit. Equal to 1000 [meganewton] or 1ᴇ9 [newton]. Adopted 1960.
     */
    static readonly giganewton = new UnitForce(
        "giganewton",
        "1000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **meganewton**
     * 
     * Symbols: MN
     * 
     * SI metric unit. Equal to 1000 [kilonewton] or 1ᴇ6 [newton]. Adopted 1873.
     */
    static readonly meganewton = new UnitForce(
        "meganewton",
        "1000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **kilonewton**
     * 
     * Symbols: kN
     * 
     * SI metric unit. Equal to 10 [hectonewton] or 1000 [newton]. Adopted 1795.
     */
    static readonly kilonewton = new UnitForce(
        "kilonewton",
        "1000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **hectonewton**
     * 
     * Symbols: hN
     * 
     * SI metric unit. Equal to 10 [decanewton] or 100 [newton]. Adopted 1795.
     */
    static readonly hectonewton = new UnitForce(
        "hectonewton",
        "100",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decanewton**
     * 
     * Symbols: daN
     * 
     * SI metric unit. Equal to 10 [newton]. Adopted 1795.
     */
    static readonly decanewton = new UnitForce(
        "decanewton",
        "10",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decinewton**
     * 
     * Symbols: dN
     * 
     * SI metric unit. Equal to 10 [centinewton] or 0.1 [newton]. Adopted 1795.
     */
    static readonly decinewton = new UnitForce(
        "decinewton",
        "1",
        "10",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **centinewton**
     * 
     * Symbols: cN
     * 
     * SI metric unit. Equal to 10 [millinewton] or 0.01 [newton]. Adopted 1795.
     */
    static readonly centinewton = new UnitForce(
        "centinewton",
        "1",
        "100",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **millinewton**
     * 
     * Symbols: mN
     * 
     * SI metric unit. Equal to 1000 [micronewton] or 0.001 [newton]. Adopted 1795.
     */
    static readonly millinewton = new UnitForce(
        "millinewton",
        "1",
        "1000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **micronewton**
     * 
     * Symbols: μN
     * 
     * SI metric unit. Equal to 1000 [nanonewton] or 1ᴇ-6 [newton]. Adopted 1873.
     */
    static readonly micronewton = new UnitForce(
        "micronewton",
        "1",
        "1000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **nanonewton**
     * 
     * Symbols: nN
     * 
     * SI metric unit. Equal to 1000 [piconewton] or 1ᴇ-9 [newton]. Adopted 1960.
     */
    static readonly nanonewton = new UnitForce(
        "nanonewton",
        "1",
        "1000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **piconewton**
     * 
     * Symbols: pN
     * 
     * SI metric unit. Equal to 1000 [femtonewton] or 1ᴇ-12 [newton]. Adopted 1960.
     */
    static readonly piconewton = new UnitForce(
        "piconewton",
        "1",
        "1000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **femtonewton**
     * 
     * Symbols: fN
     * 
     * SI metric unit. Equal to 1000 [attonewton] or 1ᴇ-15 [newton]. Adopted 1964.
     */
    static readonly femtonewton = new UnitForce(
        "femtonewton",
        "1",
        "1000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **attonewton**
     * 
     * Symbols: aN
     * 
     * SI metric unit. Equal to 1000 [zeptonewton] or 1ᴇ-18 [newton]. Adopted 1964.
     */
    static readonly attonewton = new UnitForce(
        "attonewton",
        "1",
        "1000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zeptonewton**
     * 
     * Symbols: zN
     * 
     * SI metric unit. Equal to 1000 [yoctonewton] or 1ᴇ-21 [newton]. Adopted 1991.
     */
    static readonly zeptonewton = new UnitForce(
        "zeptonewton",
        "1",
        "1000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yoctonewton**
     * 
     * Symbols: yN
     * 
     * SI metric unit. Equal to 1000 [rontonewton] or 1ᴇ-24 [newton]. Adopted 1991.
     */
    static readonly yoctonewton = new UnitForce(
        "yoctonewton",
        "1",
        "1000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **rontonewton**
     * 
     * Symbols: rN
     * 
     * SI metric unit. Equal to 1000 [quectonewton] or 1ᴇ-27 [newton]. Adopted 2022.
     */
    static readonly rontonewton = new UnitForce(
        "rontonewton",
        "1",
        "1000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quectonewton**
     * 
     * Symbols: qN
     * 
     * SI metric unit. Equal to 1ᴇ-30 [newton]. Adopted 2022.
     */
    static readonly quectonewton = new UnitForce(
        "quectonewton",
        "1",
        "1000000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **pound-force**
     * 
     * Symbols: lbf,object Object
     * 
     * English unit. Equal to 4.4482216152605 [newton].
     */
    static readonly poundForce = new UnitForce(
        "poundForce",
        "13838155",
        "3110941",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **kip**
     * 
     * Symbols: object Object,kipf
     * 
     * English unit. Equal to 1000 [poundForce] or 4448.2216152605 [newton].
     */
    static readonly kip = new UnitForce(
        "kip",
        "395411",
        "88891929",
        "0",
        "1",
        UnitCategory.english,
    )

}

export const info = new QuantityInfo(
    "force",
    [
        new DerivedQuantity( "acceleration", "1"),
        new DerivedQuantity( "mass", "1"),
    ],
    UnitForce.newton,
    UnitForce.values
)
