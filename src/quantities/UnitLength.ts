
// #############################################
// This file is auto-generated. Please do not edit nor contribute here.
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class UnitLength extends Unit {

    // --------------------------------------------
    // METRICSI
    // --------------------------------------------

    /**
     * **meter**
     * 
     * Symbols: m
     * 
     * Base SI metric unit.
     */
    static readonly meter = new UnitLength(
        "meter",
        "1",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quettameter**
     * 
     * Symbols: Qm
     * 
     * SI metric unit. Equal to 1000 [ronnameter] or 1ᴇ30 [meter]. Adopted 2022.
     */
    static readonly quettameter = new UnitLength(
        "quettameter",
        "1000000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **ronnameter**
     * 
     * Symbols: Rm
     * 
     * SI metric unit. Equal to 1000 [yottameter] or 1ᴇ27 [meter]. Adopted 2022.
     */
    static readonly ronnameter = new UnitLength(
        "ronnameter",
        "1000000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yottameter**
     * 
     * Symbols: Ym
     * 
     * SI metric unit. Equal to 1000 [zettameter] or 1ᴇ24 meter. Adopted 1991.
     */
    static readonly yottameter = new UnitLength(
        "yottameter",
        "1000000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zettameter**
     * 
     * Symbols: Zm
     * 
     * SI metric unit. Equal to 1000 [exameter] or 1ᴇ21 [meter]. Adopted 1991.
     */
    static readonly zettameter = new UnitLength(
        "zettameter",
        "1000000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **exameter**
     * 
     * Symbols: Em
     * 
     * SI metric unit. Equal to 1000 [petameter] or 1ᴇ18 [meter]. Adopted 1975.
     */
    static readonly exameter = new UnitLength(
        "exameter",
        "1000000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **petameter**
     * 
     * Symbols: Pm
     * 
     * SI metric unit. Equal to 1000 [terameter] or 1ᴇ15 [meter]. Adopted 1975.
     */
    static readonly petameter = new UnitLength(
        "petameter",
        "1000000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **terameter**
     * 
     * Symbols: Tm
     * 
     * SI metric unit. Equal to 1000 [gigameter] or 1ᴇ12 [meter]. Adopted 1960.
     */
    static readonly terameter = new UnitLength(
        "terameter",
        "1000000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **gigameter**
     * 
     * Symbols: Gm
     * 
     * SI metric unit. Equal to 1000 [megameter] or 1ᴇ9 [meter]. Adopted 1960.
     */
    static readonly gigameter = new UnitLength(
        "gigameter",
        "1000000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **megameter**
     * 
     * Symbols: Mm
     * 
     * SI metric unit. Equal to 1000 [kilometer] or 1ᴇ6 [meter]. Adopted 1873.
     */
    static readonly megameter = new UnitLength(
        "megameter",
        "1000000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **kilometer**
     * 
     * Symbols: km
     * 
     * SI metric unit. Equal to 10 [hectometer] or 1000 [meter]. Adopted 1795.
     */
    static readonly kilometer = new UnitLength(
        "kilometer",
        "1000",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **hectometer**
     * 
     * Symbols: hm
     * 
     * SI metric unit. Equal to 10 [decameter] or 100 [meter]. Adopted 1795.
     */
    static readonly hectometer = new UnitLength(
        "hectometer",
        "100",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decameter**
     * 
     * Symbols: dam
     * 
     * SI metric unit. Equal to 10 [meter]. Adopted 1795.
     */
    static readonly decameter = new UnitLength(
        "decameter",
        "10",
        "1",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **decimeter**
     * 
     * Symbols: dm
     * 
     * SI metric unit. Equal to 10 [centimeter] or 0.1 [meter]. Adopted 1795.
     */
    static readonly decimeter = new UnitLength(
        "decimeter",
        "1",
        "10",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **centimeter**
     * 
     * Symbols: cm
     * 
     * SI metric unit. Equal to 10 [millimeter] or 0.01 [meter]. Adopted 1795.
     */
    static readonly centimeter = new UnitLength(
        "centimeter",
        "1",
        "100",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **millimeter**
     * 
     * Symbols: mm
     * 
     * SI metric unit. Equal to 1000 [micrometer] or 0.001 [meter]. Adopted 1795.
     */
    static readonly millimeter = new UnitLength(
        "millimeter",
        "1",
        "1000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **micrometer**
     * 
     * Symbols: μm
     * 
     * SI metric unit. Equal to 1000 [nanometer] or 1ᴇ-6 [meter]. Adopted 1873.
     */
    static readonly micrometer = new UnitLength(
        "micrometer",
        "1",
        "1000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **nanometer**
     * 
     * Symbols: nm
     * 
     * SI metric unit. Equal to 1000 [picometer] or 1ᴇ-9 [meter]. Adopted 1960.
     */
    static readonly nanometer = new UnitLength(
        "nanometer",
        "1",
        "1000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **picometer**
     * 
     * Symbols: pm
     * 
     * SI metric unit. Equal to 1000 [femtometer] or 1ᴇ-12 [meter]. Adopted 1960.
     */
    static readonly picometer = new UnitLength(
        "picometer",
        "1",
        "1000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **femtometer**
     * 
     * Symbols: fm
     * 
     * SI metric unit. Equal to 1000 [attometer] or 1ᴇ-15 [meter]. Adopted 1964.
     */
    static readonly femtometer = new UnitLength(
        "femtometer",
        "1",
        "1000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **attometer**
     * 
     * Symbols: am
     * 
     * SI metric unit. Equal to 1000 [zeptometer] or 1ᴇ-18 [meter]. Adopted 1964.
     */
    static readonly attometer = new UnitLength(
        "attometer",
        "1",
        "1000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **zeptometer**
     * 
     * Symbols: zm
     * 
     * SI metric unit. Equal to 1000 [yoctometer] or 1ᴇ-21 [meter]. Adopted 1991.
     */
    static readonly zeptometer = new UnitLength(
        "zeptometer",
        "1",
        "1000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **yoctometer**
     * 
     * Symbols: ym
     * 
     * SI metric unit. Equal to 1000 [rontometer] or 1ᴇ-24 [meter]. Adopted 1991.
     */
    static readonly yoctometer = new UnitLength(
        "yoctometer",
        "1",
        "1000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **rontometer**
     * 
     * Symbols: rm
     * 
     * SI metric unit. Equal to 1000 [quectometer] or 1ᴇ-27 [meter]. Adopted 2022.
     */
    static readonly rontometer = new UnitLength(
        "rontometer",
        "1",
        "1000000000000000000000000000",
        "0",
        "1",
        UnitCategory.metricSi,
    )

    /**
     * **quectometer**
     * 
     * Symbols: qm
     * 
     * SI metric unit. Equal to 1ᴇ-30 [meter]. Adopted 2022.
     */
    static readonly quectometer = new UnitLength(
        "quectometer",
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
     * **myriameter**
     * 
     * Symbols: object Object
     * 
     * Non-SI deprecated metric unit. Equal to 10 [kilometer].
     */
    static readonly myriameter = new UnitLength(
        "myriameter",
        "10000",
        "1",
        "0",
        "1",
        UnitCategory.metricNonSi,
    )

    /**
     * **ångström**
     * 
     * Symbols: Å
     * 
     * Non-SI metric unit. Equal to 0.1 [nanometer].
     */
    static readonly angstrom = new UnitLength(
        "angstrom",
        "1",
        "10000000000",
        "0",
        "1",
        UnitCategory.metricNonSi,
    )

    // --------------------------------------------
    // ENGLISH
    // --------------------------------------------

    /**
     * **UK league**
     * 
     * Symbols: lg,st. lg
     * 
     * Imperial linear unit. Equal to 3 [mileImperial] or 4.828032 [kilometer].
     */
    static readonly leagueImperial = new UnitLength(
        "leagueImperial",
        "603504",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **UK mile**
     * 
     * Symbols: mi,st. mi
     * 
     * Imperial linear unit. Equal to 1760 [yardImperial], 320 [rod], or 1.609344 [kilometer].
     */
    static readonly mileImperial = new UnitLength(
        "mileImperial",
        "201168",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **rod**
     * 
     * Symbols: rd
     * 
     * Imperial unit. Equal to 16.5 [footImperial], 11⁄2 [yardImperial], or 5.0292 [meter].
     */
    static readonly rod = new UnitLength(
        "rod",
        "12573",
        "2500",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **yard**
     * 
     * Symbols: yd
     * 
     * Imperial unit. Equal to 3 [footImperial], 6⁄5 [pace], or 0.9144 [meter].
     */
    static readonly yardImperial = new UnitLength(
        "yardImperial",
        "1143",
        "1250",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **pace**
     * 
     * Symbols: pc
     * 
     * Imperial linear unit. Equal to 30 [inchImperial], 5⁄3 [cubitImperial], or 0.762 [meter].
     */
    static readonly pace = new UnitLength(
        "pace",
        "381",
        "500",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **cubit**
     * 
     * Symbols: cu
     * 
     * Imperial linear unit. Equal to 18 [inchImperial], 3⁄2 [footImperial], or 0.4572 [meter].
     */
    static readonly cubitImperial = new UnitLength(
        "cubitImperial",
        "1143",
        "2500",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **foot**
     * 
     * Symbols: ft
     * 
     * Imperial unit. Equal to 12 [inchImperial], 4⁄3 [spanImperial], or 30.48 [centimeter].
     */
    static readonly footImperial = new UnitLength(
        "footImperial",
        "381",
        "1250",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **span**
     * 
     * Symbols: sp
     * 
     * Imperial linear unit. Equal to 9 [inchImperial], 9⁄4 [hand], or 22.86 [centimeter].
     */
    static readonly spanImperial = new UnitLength(
        "spanImperial",
        "1143",
        "5000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **hand**
     * 
     * Symbols: hd
     * 
     * Imperial linear unit. Equal to 4 [inchImperial], 4⁄3 [palmImperial], or 10.16 [centimeter].
     */
    static readonly hand = new UnitLength(
        "hand",
        "127",
        "1250",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **palm**
     * 
     * Symbols: plm
     * 
     * Imperial linear unit. Equal to 3 [inchImperial] or 7.62 [centimeter].
     */
    static readonly palmImperial = new UnitLength(
        "palmImperial",
        "381",
        "5000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **inch**
     * 
     * Symbols: in,"
     * 
     * Imperial linear unit. Equal to 12 [lineImperialUK], 40 [lineImperialUS], or 2.54 [centimeter].
     */
    static readonly inchImperial = new UnitLength(
        "inchImperial",
        "127",
        "5000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **UK line**
     * 
     * Symbols: object Object
     * 
     * Imperial linear unit. Equal to 12 [point] or 2.116̅ [millimeter].
     */
    static readonly lineImperialUK = new UnitLength(
        "lineImperialUK",
        "127",
        "60000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **point**
     * 
     * Symbols: pt
     * 
     * Smallest UK imperial linear unit. Equal to 0.17638̅ [millimeter].
     */
    static readonly point = new UnitLength(
        "point",
        "127",
        "720000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **furlong**
     * 
     * Symbols: fur
     * 
     * Imperial surveyor unit. Equal to 220 [yardImperial], 10 [chainGunter], or 201.168 [meter].
     */
    static readonly furlong = new UnitLength(
        "furlong",
        "25146",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **Gunter's chain**
     * 
     * Symbols: ch
     * 
     * Imperial surveyor unit. Equal to 4 [rod] or 20.1168 [meter].
     */
    static readonly chainGunter = new UnitLength(
        "chainGunter",
        "12573",
        "625",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **Gunter's link**
     * 
     * Symbols: lk
     * 
     * Smallest imperial surveyor unit. Equal to 20.1168 [centimeter].
     */
    static readonly linkGunter = new UnitLength(
        "linkGunter",
        "12573",
        "62500",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **lea**
     * 
     * Symbols: lea
     * 
     * Imperial (UK) linear unit. Equal to 360 [footImperial] or 109.728 [meter].
     */
    static readonly lea = new UnitLength(
        "lea",
        "13716",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **wrap**
     * 
     * Symbols: wrap
     * 
     * Imperial (UK) unit. Equal to 240 [footImperial] or 73.152 [meter].
     */
    static readonly wrap = new UnitLength(
        "wrap",
        "9144",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **bolt**
     * 
     * Symbols: bolt
     * 
     * Imperial (UK) unit. Equal to 120 [footImperial] or 36.576 [meter].
     */
    static readonly bolt = new UnitLength(
        "bolt",
        "4572",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **shackle**
     * 
     * Symbols: shackle
     * 
     * Imperial (UK) unit. Equal to 90 [footImperial] or 27.432 [meter].
     */
    static readonly shackle = new UnitLength(
        "shackle",
        "3429",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **rope**
     * 
     * Symbols: rope
     * 
     * Imperial (UK) unit. Equal to 20 [footImperial] or 6.096 [meter].
     */
    static readonly rope = new UnitLength(
        "rope",
        "762",
        "125",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **ell**
     * 
     * Symbols: ell
     * 
     * Imperial (UK) unit. Equal to 45 [inchImperial] or 1.143 [meter].
     */
    static readonly ellImperial = new UnitLength(
        "ellImperial",
        "1143",
        "1000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **nail**
     * 
     * Symbols: nail
     * 
     * Imperial (UK) unit. Equal to 9⁄4 [inchImperial] or 5.715 [centimeter].
     */
    static readonly nail = new UnitLength(
        "nail",
        "1143",
        "20000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **finger**
     * 
     * Symbols: finger
     * 
     * Imperial (UK) unit. Equal to 7⁄8 [inchImperial] or 2.2225 [centimeter].
     */
    static readonly fingerImperial = new UnitLength(
        "fingerImperial",
        "889",
        "40000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **barleycorn**
     * 
     * Symbols: Bc
     * 
     * Imperial (UK) unit. Equal to ⅓ [inchImperial] or 8.46̅ [millimeter].
     */
    static readonly barleycorn = new UnitLength(
        "barleycorn",
        "127",
        "15000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **button**
     * 
     * Symbols: button
     * 
     * Imperial (UK) unit. Equal to 1⁄12 [inchImperial] or 2.116̅ [millimeter].
     */
    static readonly button = new UnitLength(
        "button",
        "127",
        "60000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **iron**
     * 
     * Symbols: iron
     * 
     * Imperial (UK) unit. Equal to 1⁄48 [inchImperial] or 0.52916̅ [millimeter].
     */
    static readonly iron = new UnitLength(
        "iron",
        "127",
        "240000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **calibre**
     * 
     * Symbols: calibre
     * 
     * Imperial (UK) unit. Equal to 1⁄100 [inchImperial] or 0.254 [millimeter].
     */
    static readonly calibre = new UnitLength(
        "calibre",
        "127",
        "500000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **thou**
     * 
     * Symbols: th
     * 
     * Imperial (UK) unit. Equal to 1⁄1000 [inchImperial] or 25.4 [micrometer].
     */
    static readonly thouImperial = new UnitLength(
        "thouImperial",
        "127",
        "5000000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **UK nautical league**
     * 
     * Symbols: nlg,naut. lg
     * 
     * Imperial unit. Equal to 3 [mileNauticalUK] or 5.559552 [kilometer].
     */
    static readonly leagueNauticalUK = new UnitLength(
        "leagueNauticalUK",
        "5559552",
        "1000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **UK nautical mile**
     * 
     * Symbols: nmi,naut. mi
     * 
     * Imperial nautical unit. Equal to 10 [cableNauticalUK] or 1.853184 [kilometer].
     */
    static readonly mileNauticalUK = new UnitLength(
        "mileNauticalUK",
        "1853184",
        "1000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **UK nautical cable**
     * 
     * Symbols: ncbl
     * 
     * Imperial nautical unit. Equal to 608 [footImperial], 608⁄15 [chainNauticalUK], or 185.3184 meter.
     */
    static readonly cableNauticalUK = new UnitLength(
        "cableNauticalUK",
        "1853184",
        "10000",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **nautical chain**
     * 
     * Symbols: nch
     * 
     * Imperial nautical unit. Equal to 5 [yardImperial], 5⁄2 [fathomImperial]:, or 4.572 [meter].
     */
    static readonly chainNauticalUK = new UnitLength(
        "chainNauticalUK",
        "1143",
        "250",
        "0",
        "1",
        UnitCategory.english,
    )

    /**
     * **fathom**
     * 
     * Symbols: fath
     * 
     * Imperial nautical unit. Equal to 2 [yardImperial] or 1.8288 [meter].
     */
    static readonly fathomImperial = new UnitLength(
        "fathomImperial",
        "1143",
        "625",
        "0",
        "1",
        UnitCategory.english,
    )

    // --------------------------------------------
    // CONSTANTS
    // --------------------------------------------

    /**
     * **copper X unit**
     * 
     * Symbols: xu(CuKα₁)
     * 
     * Copper X-ray wavelength unit. Equal to 1.00207697(28)ᴇ-13 [meter]. {2018 CODATA}
     */
    static readonly xunitCopper = new UnitLength(
        "xunitCopper",
        "100207697",
        "1000000000000000000000",
        "0",
        "1",
        UnitCategory.constants,
    )

    /**
     * **molybdenum X unit**
     * 
     * Symbols: xu(MoKα₁)
     * 
     * Molybdenum X-ray wavelength unit. Equal to 1.00209952(53)ᴇ-13 [meter]. {2018 CODATA}
     */
    static readonly xunitMolybdenum = new UnitLength(
        "xunitMolybdenum",
        "3131561",
        "3125000000",
        "0",
        "1",
        UnitCategory.constants,
    )

    /**
     * **Plank length**
     * 
     * Symbols: Lₚ
     * 
     * Equal to 1.6160(12)ᴇ-35 [meter]
     */
    static readonly plank = new UnitLength(
        "plank",
        "323251",
        "20000000000000000000000000000000000000000",
        "0",
        "1",
        UnitCategory.constants,
    )

    // --------------------------------------------
    // BYZANTINE
    // --------------------------------------------

    /**
     * **Byzantine digit**
     * 
     * Symbols: δάκτυλος
     * 
     * Ancient Byzantine unit. Equal to 1⁄16 [pousByzantine] or 1.951875 [centimeter].
     */
    static readonly digitByzantine = new UnitLength(
        "digitByzantine",
        "3123",
        "160000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **Byzantine palm**
     * 
     * Symbols: παλαιστή
     * 
     * Ancient Byzantine unit. Equal to ¼ [pousByzantine] or 7.8075 [centimeter].
     */
    static readonly palmByzantine = new UnitLength(
        "palmByzantine",
        "3123",
        "40000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **Byzantine half-pous**
     * 
     * Symbols: ἡμιπόδιον
     * 
     * Ancient Byzantine unit. Equal to ½ [pousByzantine] or 15.615 [centimeter].
     */
    static readonly halfpous = new UnitLength(
        "halfpous",
        "3123",
        "20000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **Byzantine span**
     * 
     * Symbols: σπιθαμή
     * 
     * Ancient Byzantine unit. Equal to ¾ [pousByzantine] or 23.4225 [centimeter].
     */
    static readonly spanByzantine = new UnitLength(
        "spanByzantine",
        "9369",
        "40000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **Byzantine pous**
     * 
     * Symbols: ποῦς
     * 
     * Ancient Byzantine unit. Equal to 31.23 [centimeter].
     */
    static readonly pousByzantine = new UnitLength(
        "pousByzantine",
        "3123",
        "10000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **public cubit**
     * 
     * Symbols: δημόσιος πῆχυς
     * 
     * Ancient Byzantine unit. Equal to 1.5 [pousByzantine] or 46.845 [centimeter].
     */
    static readonly cubitPublic = new UnitLength(
        "cubitPublic",
        "9369",
        "20000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **geometric cubit**
     * 
     * Symbols: γεωμετρικός πῆχυς
     * 
     * Ancient Byzantine unit. Equal to 2 [pousByzantine] or 62.46 [centimeter].
     */
    static readonly cubitGeometric = new UnitLength(
        "cubitGeometric",
        "3123",
        "5000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **single pace**
     * 
     * Symbols: βῆμα ἁπλοῦν
     * 
     * Ancient Byzantine unit. Equal to 2.5 [pousByzantine] or 78.075 [centimeter].
     */
    static readonly paceSingle = new UnitLength(
        "paceSingle",
        "3123",
        "4000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **double pace**
     * 
     * Symbols: βῆμα διπλοῦν
     * 
     * Ancient Byzantine unit. Equal to 5 [pousByzantine] or 1.5615 [meter].
     */
    static readonly paceDouble = new UnitLength(
        "paceDouble",
        "3123",
        "2000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **simple orguia**
     * 
     * Symbols: ἁπλὴ ὀργυιά
     * 
     * Ancient Byzantine unit. Equal to 6 [pousByzantine] or 1.8738 [meter].
     */
    static readonly orguiaSimple = new UnitLength(
        "orguiaSimple",
        "9369",
        "5000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **geometric orguia**
     * 
     * Symbols: geômetrikê orguiá
     * 
     * Ancient Byzantine unit. Equal to 6¾ [pousByzantine] or 2.108025 [meter].
     */
    static readonly orguiaGeometric = new UnitLength(
        "orguiaGeometric",
        "84321",
        "40000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **perch**
     * 
     * Symbols: δεκάποδον
     * 
     * Ancient Byzantine unit. Equal to 10 [pousByzantine] or 3.123 [meter].
     */
    static readonly perch = new UnitLength(
        "perch",
        "3123",
        "1000",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **schoinion (Balkan & West Anatolian)**
     * 
     * Symbols: σχοινιον
     * 
     * Ancient Byzantine unit in Balkan and west Anatolian. Equal to 60 [pousByzantine] or 18.738 [meter].
     */
    static readonly schoinionBalkan = new UnitLength(
        "schoinionBalkan",
        "9369",
        "500",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **schoinion (Asia Minor)**
     * 
     * Symbols: σχοινιον
     * 
     * Ancient Byzantine unit in the rest of Asia Minor. Equal to 72 [pousByzantine] or 22.4856 [meter].
     */
    static readonly schoinionAsia = new UnitLength(
        "schoinionAsia",
        "28107",
        "1250",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **plethron**
     * 
     * Symbols: πλέθρον
     * 
     * Ancient Byzantine unit. Equal to 100 [pousByzantine] or 31.23 [meter].
     */
    static readonly plethron = new UnitLength(
        "plethron",
        "3123",
        "100",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **stade**
     * 
     * Symbols: στάδιον
     * 
     * Ancient Byzantine unit. Equal to 600 [pousByzantine] or 187.38 [meter].
     */
    static readonly stade = new UnitLength(
        "stade",
        "9369",
        "50",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **bowshot**
     * 
     * Symbols: δοξαριού βολή
     * 
     * Ancient Byzantine unit. Equal to 1000 [pousByzantine] or 312.3 [meter].
     */
    static readonly bowshot = new UnitLength(
        "bowshot",
        "3123",
        "10",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **Byzantine mile**
     * 
     * Symbols: μίλιον
     * 
     * Ancient Byzantine unit. Equal to 5000 [pousByzantine] or 1.5615 [kilometer].
     */
    static readonly mileByzantine = new UnitLength(
        "mileByzantine",
        "3123",
        "2",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **schoenus**
     * 
     * Symbols: σχοινος
     * 
     * Ancient Byzantine unit. Equal to 20000 [pousByzantine] or 6.246 [kilometer].
     */
    static readonly schoenus = new UnitLength(
        "schoenus",
        "6246",
        "1",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **day's journey**
     * 
     * Symbols: ὁδός ἡμέρας
     * 
     * Ancient Byzantine unit. Equal to 150000 [pousByzantine] or 46.845 [kilometer].
     */
    static readonly journeyDay = new UnitLength(
        "journeyDay",
        "46845",
        "1",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    /**
     * **week's journey**
     * 
     * Symbols: ὁδός σαββάτου
     * 
     * Ancient Byzantine unit. Equal to 1050000 [pousByzantine] or 327.915 [kilometer].
     */
    static readonly journeyWeek = new UnitLength(
        "journeyWeek",
        "327915",
        "1",
        "0",
        "1",
        UnitCategory.byzantine,
    )

    // --------------------------------------------
    // CORNISH
    // --------------------------------------------

    /**
     * **Cornish fathom**
     * 
     * Symbols: ftm
     * 
     * Old Cornish unit. Equal to 5 [footImperial] or 1.524 [meter].
     */
    static readonly fathomCornish = new UnitLength(
        "fathomCornish",
        "381",
        "250",
        "0",
        "1",
        UnitCategory.cornish,
    )

    /**
     * **Cornish mile**
     * 
     * Symbols: mi
     * 
     * Old Cornish unit. Equal to 1.5 [mileImperial] or 2.414016 [kilometer].
     */
    static readonly mileCornish = new UnitLength(
        "mileCornish",
        "301752",
        "125",
        "0",
        "1",
        UnitCategory.cornish,
    )

    // --------------------------------------------
    // CYPRIOT
    // --------------------------------------------

    /**
     * **pic**
     * 
     * Symbols: pic
     * 
     * Old Cypriot unit. Equal to 2 [footCypriot] or 60.96 [centimeter].
     */
    static readonly pic = new UnitLength(
        "pic",
        "381",
        "625",
        "0",
        "1",
        UnitCategory.cypriot,
    )

    /**
     * **Cypriot foot**
     * 
     * Symbols: ft
     * 
     * Old Cypriot unit. Equal to 30.48 [centimeter].
     */
    static readonly footCypriot = new UnitLength(
        "footCypriot",
        "381",
        "1250",
        "0",
        "1",
        UnitCategory.cypriot,
    )

    // --------------------------------------------
    // CZECH
    // --------------------------------------------

    /**
     * **Bohemian stopa**
     * 
     * Symbols: stopa
     * 
     * Old Czech unit in Bohemia. Equal to 0.296 [meter].
     */
    static readonly stopaBohemian = new UnitLength(
        "stopaBohemian",
        "37",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Bohemian loket**
     * 
     * Symbols: loket
     * 
     * Old Czech unit in Bohemia. Equal to 2 [stopaBohemian] or 0.592 [meter].
     */
    static readonly loketBohemian = new UnitLength(
        "loketBohemian",
        "74",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Bohemian sah**
     * 
     * Symbols: sah
     * 
     * Old Czech unit in Bohemia. Equal to 3 [stopaBohemian] or 1.776 [meter].
     */
    static readonly sahBohemian = new UnitLength(
        "sahBohemian",
        "222",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Bohemian latro**
     * 
     * Symbols: latro
     * 
     * Old Czech unit in Bohemia. Equal to 129⁄120 [sahBohemian] or 1.9092 [meter].
     */
    static readonly latroBohemian = new UnitLength(
        "latroBohemian",
        "4773",
        "2500",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Bohemian mile**
     * 
     * Symbols: mi
     * 
     * Old Czech unit in Bohemia. Equal to 3660 [latroBohemian] or 6.987672 [kilometer].
     */
    static readonly mileBohemian = new UnitLength(
        "mileBohemian",
        "873459",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha stopa**
     * 
     * Symbols: stopa
     * 
     * Old Czech unit in Prague. Equal to 0.2965 [meter].
     */
    static readonly stopaPraha = new UnitLength(
        "stopaPraha",
        "593",
        "2000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha loket**
     * 
     * Symbols: loket
     * 
     * Old Czech unit in Prague. Equal to 2 [stopaPraha] or 0.593 [meter].
     */
    static readonly loketPraha = new UnitLength(
        "loketPraha",
        "593",
        "1000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha sah**
     * 
     * Symbols: sah
     * 
     * Old Czech unit in Prague. Equal to 3 [loketPraha] or 1.779 [meter].
     */
    static readonly sahPraha = new UnitLength(
        "sahPraha",
        "1779",
        "1000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha latro**
     * 
     * Symbols: latro
     * 
     * Old Czech unit in Prague. Equal to 129⁄120 Praha sah or 1.912425 [meter].
     */
    static readonly latroPraha = new UnitLength(
        "latroPraha",
        "76497",
        "40000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha mile**
     * 
     * Symbols: mi
     * 
     * Old Czech unit in Prague. Equal to 3660 [latroPraha] or 6.9994755 [kilometer].
     */
    static readonly milePraha = new UnitLength(
        "milePraha",
        "13998951",
        "2000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Praha stopa**
     * 
     * Symbols: stopa
     * 
     * Old Czech unit in Moravia. Equal to 0.284 [meter].
     */
    static readonly stopaMoravian = new UnitLength(
        "stopaMoravian",
        "71",
        "250",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Moravian loket**
     * 
     * Symbols: loket
     * 
     * Old Czech unit in Moravia. Equal to 2 [stopaMoravian] or 0.568 [meter].
     */
    static readonly loketMoravian = new UnitLength(
        "loketMoravian",
        "71",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Moravian sah**
     * 
     * Symbols: sah
     * 
     * Old Czech unit in Moravia. Equal to 3 [loketMoravian] or 1.704 [meter].
     */
    static readonly sahMoravian = new UnitLength(
        "sahMoravian",
        "213",
        "125",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Moravian latro**
     * 
     * Symbols: latro
     * 
     * Old Czech unit in Moravia. Equal to 129⁄120 [sahMoravian] or 1.8318 [meter].
     */
    static readonly latroMoravian = new UnitLength(
        "latroMoravian",
        "9159",
        "5000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Morovian mile**
     * 
     * Symbols: mi
     * 
     * Old Czech unit in Moravia. Equal to 3660 [latroMoravian] or 6.704388 [kilometer].
     */
    static readonly mileMoravian = new UnitLength(
        "mileMoravian",
        "1676097",
        "250",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **stopa**
     * 
     * Symbols: stopa
     * 
     * Old Czech unit in Silesia. Equal to 0.2895 [meter].
     */
    static readonly stopaSilesian = new UnitLength(
        "stopaSilesian",
        "579",
        "2000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Silesian loket**
     * 
     * Symbols: loket
     * 
     * Old Czech unit in Silesia. Equal to 2 [stopaSilesian] or 0.579 [meter].
     */
    static readonly loketSilesian = new UnitLength(
        "loketSilesian",
        "579",
        "1000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Silesian sah**
     * 
     * Symbols: sah
     * 
     * Old Czech unit in Silesia. Equal to 3 [loketSilesian] or 1.737 [meter].
     */
    static readonly sahSilesian = new UnitLength(
        "sahSilesian",
        "1737",
        "1000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Silesian latro**
     * 
     * Symbols: latro
     * 
     * Old Czech unit in Silesia. Equal to 129⁄120 [sahSilesian] or 1.867275 [meter].
     */
    static readonly latroSilesian = new UnitLength(
        "latroSilesian",
        "74691",
        "40000",
        "0",
        "1",
        UnitCategory.czech,
    )

    /**
     * **Silesian mile**
     * 
     * Symbols: mi
     * 
     * Old Czech unit in Silesia. Equal to 3660 [latroSilesian] or 6.8342265 [kilometer].
     */
    static readonly mileSilesian = new UnitLength(
        "mileSilesian",
        "13668453",
        "2000",
        "0",
        "1",
        UnitCategory.czech,
    )

    // --------------------------------------------
    // DANISH
    // --------------------------------------------

    /**
     * **miil**
     * 
     * Symbols: miil
     * 
     * Old Danish unit. Equal to 2000 [ruthe] or 7.532568 [kilometer].
     */
    static readonly miil = new UnitLength(
        "miil",
        "7532568",
        "1000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **ruthe**
     * 
     * Symbols: ruthe
     * 
     * Old Danish unit. Equal to 2 [favn] or 3.766284 [meter].
     */
    static readonly ruthe = new UnitLength(
        "ruthe",
        "3766284",
        "1000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **favn**
     * 
     * Symbols: favn
     * 
     * Old Danish unit. Equal to 3 [aln] or 1.883142 [meter].
     */
    static readonly favn = new UnitLength(
        "favn",
        "1883142",
        "1000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **aln**
     * 
     * Symbols: aln
     * 
     * Old Danish unit. Equal to 2 [fod] or 0.627714 [meter].
     */
    static readonly aln = new UnitLength(
        "aln",
        "627714",
        "1000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **fod**
     * 
     * Symbols: fod
     * 
     * Old Danish unit. Equal to 12 [tomme] or 0.313857 [meter].
     */
    static readonly fod = new UnitLength(
        "fod",
        "313857",
        "1000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **tomme**
     * 
     * Symbols: tomme
     * 
     * Old Danish unit. Equal to 12 [linie] or 2.615475 [centimeter].
     */
    static readonly tomme = new UnitLength(
        "tomme",
        "2615475",
        "100000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    /**
     * **linie**
     * 
     * Symbols: linie
     * 
     * Old Danish unit. Equal to 2.1795625 [millimeter].
     */
    static readonly linie = new UnitLength(
        "linie",
        "21795625",
        "10000000000",
        "0",
        "1",
        UnitCategory.danish,
    )

    // --------------------------------------------
    // DUTCH
    // --------------------------------------------

    /**
     * **uren**
     * 
     * Symbols: uren
     * 
     * Old Dutch unit. Equal to 5 [myl] or 5.000244301 [kilometer].
     */
    static readonly uren = new UnitLength(
        "uren",
        "5000244301",
        "1000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **myl**
     * 
     * Symbols: myl
     * 
     * Old Dutch unit. Equal to 3533⁄13 [roeden] or 1.0000488602 [kilometer].
     */
    static readonly myl = new UnitLength(
        "myl",
        "5000244301",
        "5000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **roeden**
     * 
     * Symbols: roeden
     * 
     * Old Dutch unit. Equal to 26⁄5 elle or 3.6797722 [meter].
     */
    static readonly roeden = new UnitLength(
        "roeden",
        "18398861",
        "5000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **elle**
     * 
     * Symbols: elle
     * 
     * Old Dutch unit. Equal to 5⁄2 [voeten] or 0.7076485 [meter].
     */
    static readonly elle = new UnitLength(
        "elle",
        "1415297",
        "2000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **voeten**
     * 
     * Symbols: voeten
     * 
     * Old Dutch unit. Equal to 12 [duime] or 0.2830594 [meter].
     */
    static readonly voeten = new UnitLength(
        "voeten",
        "1415297",
        "5000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **duime**
     * 
     * Symbols: duime
     * 
     * Old Dutch unit. Equal to 12 [lyne] or 2.3588283̅ [centimeter].
     */
    static readonly duime = new UnitLength(
        "duime",
        "1415297",
        "60000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

    /**
     * **lyne**
     * 
     * Symbols: lyne
     * 
     * Old Dutch unit. Equal to 1.96569027̅ [millimeter].
     */
    static readonly lyne = new UnitLength(
        "lyne",
        "1415297",
        "720000000",
        "0",
        "1",
        UnitCategory.dutch,
    )

}

export const info = new QuantityInfo(
    "length",
    [],
    UnitLength.meter,
    UnitLength.values
)
