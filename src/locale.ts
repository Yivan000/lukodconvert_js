export var locale: string;
export var localeJsonObject: LocaleJson;

var pluralRules: Intl.PluralRules;

export function initLocale(_locale: string, _localeJsonObject: LocaleJson){
    locale = _locale;
    pluralRules = new Intl.PluralRules(locale);
    localeJsonObject = _localeJsonObject;
}

export type LocaleJson = {
    [quantity: string]: {
        [unit: string]: LocaleUnit
    }
}

export type LocaleUnit = {
    name: (string | LocalePlural)[],
    // optional since UnitCategories.yaml does not have this
    symbol?: (string | LocalePlural)[],
    desc: string,
}

/**
 * This follows the plural rules of https://cldr.unicode.org/index/cldr-spec/plural-rules
 */ 
export type LocalePlural = {
    zero?: string,
    one?: string,
    two?: string,
    few?: string,
    many?: string,
    other?: string,
}

export function _getListStringWithPluralizationFunction(
    list: (string | LocalePlural)[],
    number: number
): string[] {
    if (pluralRules == null || pluralRules == undefined) throw Error("initLocale() hasn't been called beforehand");
    
    return list.map((e) => {
        if (typeof e === "string") return e as string;
        else if (e instanceof Object) return e[pluralRules.select(number)]!;
        else throw new TypeError()
    })
}