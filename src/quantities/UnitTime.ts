
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitTime extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **second**
     * 
     * Symbols: s
     * 
     * Base SI metric unit.
     */
    static readonly second = new UnitTime(
        "second",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quettasecond**
     * 
     * Symbols: Qs
     * 
     * SI metric unit. Equal to 1000 [ronnasecond] or 1ᴇ30 [second]. Adopted 2022.
     */
    static readonly quettasecond = new UnitTime(
        "quettasecond",
        "1000000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **ronnasecond**
     * 
     * Symbols: Rs
     * 
     * SI metric unit. Equal to 1000 [yottasecond] or 1ᴇ27 [second]. Adopted 2022.
     */
    static readonly ronnasecond = new UnitTime(
        "ronnasecond",
        "1000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yottasecond**
     * 
     * Symbols: Ys
     * 
     * SI metric unit. Equal to 1000 [zettasecond] or 1ᴇ24 second. Adopted 1991.
     */
    static readonly yottasecond = new UnitTime(
        "yottasecond",
        "1000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zettasecond**
     * 
     * Symbols: Zs
     * 
     * SI metric unit. Equal to 1000 [exasecond] or 1ᴇ21 [second]. Adopted 1991.
     */
    static readonly zettasecond = new UnitTime(
        "zettasecond",
        "1000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **exasecond**
     * 
     * Symbols: Es
     * 
     * SI metric unit. Equal to 1000 [petasecond] or 1ᴇ18 [second]. Adopted 1975.
     */
    static readonly exasecond = new UnitTime(
        "exasecond",
        "1000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **petasecond**
     * 
     * Symbols: Ps
     * 
     * SI metric unit. Equal to 1000 [terasecond] or 1ᴇ15 [second]. Adopted 1975.
     */
    static readonly petasecond = new UnitTime(
        "petasecond",
        "1000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **terasecond**
     * 
     * Symbols: Ts
     * 
     * SI metric unit. Equal to 1000 [gigasecond] or 1ᴇ12 [second]. Adopted 1960.
     */
    static readonly terasecond = new UnitTime(
        "terasecond",
        "1000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **gigasecond**
     * 
     * Symbols: Gs
     * 
     * SI metric unit. Equal to 1000 [megasecond] or 1ᴇ9 [second]. Adopted 1960.
     */
    static readonly gigasecond = new UnitTime(
        "gigasecond",
        "1000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **megasecond**
     * 
     * Symbols: Ms
     * 
     * SI metric unit. Equal to 1000 [kilosecond] or 1ᴇ6 [second]. Adopted 1873.
     */
    static readonly megasecond = new UnitTime(
        "megasecond",
        "1000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **kilosecond**
     * 
     * Symbols: ks
     * 
     * SI metric unit. Equal to 10 [hectosecond] or 1000 [second]. Adopted 1795.
     */
    static readonly kilosecond = new UnitTime(
        "kilosecond",
        "1000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **hectosecond**
     * 
     * Symbols: hs
     * 
     * SI metric unit. Equal to 10 [decasecond] or 100 [second]. Adopted 1795.
     */
    static readonly hectosecond = new UnitTime(
        "hectosecond",
        "100",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decasecond**
     * 
     * Symbols: das
     * 
     * SI metric unit. Equal to 10 [second]. Adopted 1795.
     */
    static readonly decasecond = new UnitTime(
        "decasecond",
        "10",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decisecond**
     * 
     * Symbols: ds
     * 
     * SI metric unit. Equal to 10 [centisecond] or 0.1 [second]. Adopted 1795.
     */
    static readonly decisecond = new UnitTime(
        "decisecond",
        "1",
        "10",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **centisecond**
     * 
     * Symbols: cs
     * 
     * SI metric unit. Equal to 10 [millisecond] or 0.01 [second]. Adopted 1795.
     */
    static readonly centisecond = new UnitTime(
        "centisecond",
        "1",
        "100",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **millisecond**
     * 
     * Symbols: ms
     * 
     * SI metric unit. Equal to 1000 [microsecond] or 0.001 [second]. Adopted 1795.
     */
    static readonly millisecond = new UnitTime(
        "millisecond",
        "1",
        "1000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **microsecond**
     * 
     * Symbols: μs
     * 
     * SI metric unit. Equal to 1000 [nanosecond] or 1ᴇ-6 [second]. Adopted 1873.
     */
    static readonly microsecond = new UnitTime(
        "microsecond",
        "1",
        "1000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **nanosecond**
     * 
     * Symbols: ns
     * 
     * SI metric unit. Equal to 1000 [picosecond] or 1ᴇ-9 [second]. Adopted 1960.
     */
    static readonly nanosecond = new UnitTime(
        "nanosecond",
        "1",
        "1000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **picosecond**
     * 
     * Symbols: ps
     * 
     * SI metric unit. Equal to 1000 [femtosecond] or 1ᴇ-12 [second]. Adopted 1960.
     */
    static readonly picosecond = new UnitTime(
        "picosecond",
        "1",
        "1000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **femtosecond**
     * 
     * Symbols: fs
     * 
     * SI metric unit. Equal to 1000 [attosecond] or 1ᴇ-15 [second]. Adopted 1964.
     */
    static readonly femtosecond = new UnitTime(
        "femtosecond",
        "1",
        "1000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **attosecond**
     * 
     * Symbols: as
     * 
     * SI metric unit. Equal to 1000 [zeptosecond] or 1ᴇ-18 [second]. Adopted 1964.
     */
    static readonly attosecond = new UnitTime(
        "attosecond",
        "1",
        "1000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zeptosecond**
     * 
     * Symbols: zs
     * 
     * SI metric unit. Equal to 1000 [yoctosecond] or 1ᴇ-21 [second]. Adopted 1991.
     */
    static readonly zeptosecond = new UnitTime(
        "zeptosecond",
        "1",
        "1000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yoctosecond**
     * 
     * Symbols: ys
     * 
     * SI metric unit. Equal to 1000 [rontosecond] or 1ᴇ-24 [second]. Adopted 1991.
     */
    static readonly yoctosecond = new UnitTime(
        "yoctosecond",
        "1",
        "1000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **rontosecond**
     * 
     * Symbols: rs
     * 
     * SI metric unit. Equal to 1000 [quectosecond] or 1ᴇ-27 [second]. Adopted 2022.
     */
    static readonly rontosecond = new UnitTime(
        "rontosecond",
        "1",
        "1000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quectosecond**
     * 
     * Symbols: qs
     * 
     * SI metric unit. Equal to 1ᴇ-30 [second]. Adopted 2022.
     */
    static readonly quectosecond = new UnitTime(
        "quectosecond",
        "1",
        "1000000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    // --------------------------------------------
    // METRICNONSI
    // --------------------------------------------

    /**
     * **minute**
     * 
     * Symbols: object Object
     * 
     * Non-SI metric unit. Equal to 60 [second].
     */
    static readonly minute = new UnitTime(
        "minute",
        "60",
        "1",
        "0",
        "1",
        UnitCategory.metricNonSi,
    )

    /**
     * **hour**
     * 
     * Symbols: hr,h
     * 
     * Non-SI metric unit. Equal to 60 [minute] or 3600 [second].
     */
    static readonly hour = new UnitTime(
        "hour",
        "3600",
        "1",
        "0",
        "1",
        UnitCategory.metricNonSi,
    )

    /**
     * **day**
     * 
     * Symbols: d
     * 
     * Non-SI metric unit. Equal to 24 [hour] or 86400 [second].
     */
    static readonly dayCalendar = new UnitTime(
        "dayCalendar",
        "86400",
        "1",
        "0",
        "1",
        UnitCategory.metricNonSi,
    )

    // --------------------------------------------
    // CONVENTIONAL
    // --------------------------------------------

    /**
     * **week**
     * 
     * Symbols: wk
     * 
     * Conventional unit. Equal to 7 [dayCalendar].
     */
    static readonly week = new UnitTime(
        "week",
        "604800",
        "1",
        "0",
        "1",
        UnitCategory.conventional,
    )

    /**
     * **year**
     * 
     * Symbols: yr
     * 
     * Conventional unit. Equal to 52 [week] or 365 [dayCalendar].
     */
    static readonly yearCommon = new UnitTime(
        "yearCommon",
        "31536000",
        "1",
        "0",
        "1",
        UnitCategory.conventional,
    )

    /**
     * **leap year**
     * 
     * Symbols: leap year
     * 
     * Conventional unit. Equal 366 [dayCalendar].
     */
    static readonly yearLeap = new UnitTime(
        "yearLeap",
        "31622400",
        "1",
        "0",
        "1",
        UnitCategory.conventional,
    )

}

export const info = new QuantityInfo(
    "time",
    [],
    UnitTime.second,
    UnitTime.values
)
