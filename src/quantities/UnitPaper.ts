
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitPaper extends Unit {

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **sheet**
     * 
     * Symbols: sheet
     * 
     * A single sheet of paper.
     */
    static readonly sheet = new UnitPaper(
        "sheet",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **bale**
     * 
     * Symbols: bale
     * 
     * Equal to 5 [bundle] or 5000 [sheet].
     */
    static readonly bale = new UnitPaper(
        "bale",
        "5000",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **bundle**
     * 
     * Symbols: bundle
     * 
     * Equal to 10 [ream] or 1000 [sheet].
     */
    static readonly bundle = new UnitPaper(
        "bundle",
        "1000",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **ream**
     * 
     * Symbols: ream
     * 
     * Equal to 20 [quires] or 500 [sheet].
     */
    static readonly ream = new UnitPaper(
        "ream",
        "500",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **quire**
     * 
     * Symbols: quire
     * 
     * Equal to 25 [sheet].
     */
    static readonly quire = new UnitPaper(
        "quire",
        "25",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **bale (old)**
     * 
     * Symbols: bale
     * 
     * Equal to 5 [bundleOld] or 4800 [sheet].
     */
    static readonly baleOld = new UnitPaper(
        "baleOld",
        "4800",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **bundle (old)**
     * 
     * Symbols: bundle
     * 
     * Equal to 10 [reamOld] or 960 [sheet].
     */
    static readonly bundleOld = new UnitPaper(
        "bundleOld",
        "960",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **ream (old)**
     * 
     * Symbols: ream
     * 
     * Equal to 20 [quiresOld] or 480 [sheet].
     */
    static readonly reamOld = new UnitPaper(
        "reamOld",
        "480",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **quire (old)**
     * 
     * Symbols: quire
     * 
     * Equal to 24 [sheet].
     */
    static readonly quireOld = new UnitPaper(
        "quireOld",
        "24",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **perfect ream**
     * 
     * Symbols: perfect ream
     * 
     * Equal to 516 [sheet].
     */
    static readonly reamPerfect = new UnitPaper(
        "reamPerfect",
        "516",
        "1",
        "0",
        "1",
        UnitCategory.english,
    )

}

export const info = new QuantityInfo(
    "paper",
    [],
    UnitPaper.sheet,
    UnitPaper.values
)
