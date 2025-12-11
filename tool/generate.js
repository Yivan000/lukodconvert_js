
/*
Generates the library files from the main LukodConvert project folder

USAGE:
node tool/generate [LUKODCONVERT DIRECTORY] [CURRENT DIRECTORY]

EXAMPLE:
node tool/generate ../lukodconvert .
*/

import fs from 'fs/promises';
import fs_ from 'fs'
import YAML from 'yaml'
import minimist from 'minimist';
import { parse } from "csv-parse";
import { exec } from 'child_process';

var args = minimist(process.argv.slice(2));


/** the language used for the documentation of the generated code
 */
const lang = 'en';
const dontEditMessage = "This file is auto-generated. Please do not edit nor contribute here.";

const input = args._[0], output = args._[1];

const locales = {};
var currentLocale = "";

for await (let dirent of await fs.opendir(
    input + "/i18n", { recursive: true }
)) {
    if (dirent.isDirectory()) {
        currentLocale = dirent.name;
        locales[currentLocale] = {};
        console.log("new locale: " + currentLocale);
    } else if (dirent.isFile()) {
        var yaml = YAML.parse(
            await fs.readFile(dirent.parentPath + "/" + dirent.name, { encoding: 'utf8' })
        );

        locales[currentLocale][dirent.name.replace(".yaml", "")] = yaml

    }
}
// save to jsons per locale
for (const [key, value] of Object.entries(locales)) {
    try {
        await fs.mkdir(output + "/i18n");
    } catch (error) { } //disregard the EEXIST dir already exists error
    await fs.writeFile(
        output + "/i18n/" + key + ".json",
        JSON.stringify(value),
        { encoding: 'utf8' }
    );
}


for await (let dirent of await fs.opendir(input + "/data")) {
    if (dirent.name == "UnitCategories.csv") {
        console.log("Generating src/UnitCategories.ts");

        await fs.writeFile(
            output + "/src/UnitCategories.ts",
            await generateJsCategories(
                input + "/data/" + dirent.name,
                YAML.parse(await fs.readFile(input + "/i18n/" + lang + "/UnitCategories.yaml", { encoding: 'utf8' })),
            )

        )

    }

    else if (dirent.name.includes(".csv")) {
        let name = dirent.name.replace(".csv", "")

        console.log("Generating src/" + name + ".ts");

        try {
            await fs.mkdir(output + "/src/quantities");
        } catch (error) { } //disregard the EEXIST dir already exists error


        await fs.writeFile(
            output + "/src/quantities/" + name + ".ts",
            await generateJsQuantity(
                input + "/data/" + dirent.name,
                YAML.parse(await fs.readFile(input + "/i18n/" + lang + "/" + name + ".yaml", { encoding: 'utf8' })),
                JSON.parse(await fs.readFile(input + "/data/" + name + ".json", { encoding: 'utf8' })),
                name,
            )
        )

    }


}

// generate the index.ts file inside the quantities folder
console.log("Creating /src/quantities/index.ts")
await fs.writeFile(
    output + "/src/quantities/index.ts",
    generateJsIndexQuantity()
)

// excecute these commands
console.log("\nRunning tsc")
exec("tsc")
console.log("Done")

/**
 * 
 * @param {string} inputData  input data file path
 * @param {*} inputI18n 
 * @param {*} inputJson 
 * @param {string} name 
 * @returns {string}
 */
async function generateJsQuantity(
    inputData,
    inputI18n,
    inputJson,
    name,
) {

    const fields = fs_.createReadStream(inputData).pipe(parse())

    var output = `
// #############################################
// ${dontEditMessage}
// #############################################

import UnitCategory from "../UnitCategories";
import { Unit } from "../unit";
import { DerivedQuantity, QuantityInfo } from "../quantity";

export default class ${name} extends Unit {
`

    var currentCount = 0;
    var prevCat = "";

    for await (var i of fields) {
        // if first (headers) then skip
        if (i[0] == "id") continue;

        console.log("Creating " + currentCount + " : " + name + "." + i[0])

        // if the category changes, add category section comment
        if (i[5] != prevCat) {
            output += `
    // --------------------------------------------
    // ${i[5].toString().toUpperCase()}
    // --------------------------------------------
`;
            prevCat = i[5];
        }


        var desc =
            inputI18n[i[0]]["desc"].toString() ?? '_No description provided_';

        output += `
    /**
     * **${inputI18n[i[0]]["name"][0]["one"] ?? inputI18n[i[0]]["name"][0] ?? i[0]}**
     * 
     * Symbols: ${JSON.stringify(inputI18n[i[0]]["symbol"]).replaceAll(/[\[\]]/g, "") ?? '_none_'}
     * 
     * ${desc}
     */
    static readonly ${i[0]} = new ${name}(
        "${i[0]}",
        "${i[1]}",
        "${i[2]}",
        "${i[3]}",
        "${i[4]}",
        UnitCategory.${i[5]},
    )
`

        currentCount++;
    }


    console.log(inputJson);

    var derivedId = "";
    if (inputJson["derivedId"]) {
        derivedId += "\n"
        for (const i of inputJson["derivedId"]) {
            derivedId += `        new DerivedQuantity( "${i["id"]}", "${i["exponent"]}"),\n`;
        }
        derivedId += "    ";
    }

    output += `
}

export const info = new QuantityInfo(
    "${inputJson["id"]}",
    [${derivedId}],
    ${name}.${inputJson["baseUnit"]},
    ${name}.values
)
`;
    return output;

}

async function generateJsCategories(
    inputData,
    inputI18n,
) {
    const fields = fs_.createReadStream(inputData).pipe(parse())

    var output = `
// #############################################
// ${dontEditMessage}
// #############################################

enum UnitCategory {
`;

    var currentCount = 0;
    for await (var i of fields) {
        console.log("Creating " + currentCount + " : " + i[0])

        output += `
    ${i[0]} = "${i[0]}",`

        currentCount++;
    }

    return output += `
}

export default UnitCategory;`
}

/**
 * Generates the main index.ts file
 */
function generateJsIndexQuantity() {
    var output = `
// #############################################
// ${dontEditMessage}
// #############################################
`;

    for (let quantity of Object.keys(locales["en"])) {
        if (quantity == "UnitCategories") continue;
        output += `
export { default as ${quantity} } from "./${quantity}";`
    }

    return output;


}