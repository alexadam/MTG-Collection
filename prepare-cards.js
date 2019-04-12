
/////
// https://mtgjson.com/downloads/compiled/
///

const fs = require('fs');

let rawdata = fs.readFileSync('resources/mtg-cards.json');
let jsonData = JSON.parse(rawdata);

let newData = []

for (var key in jsonData) {
    let tmpObj = jsonData[key]
    let tmpNewData = {
        'name': tmpObj['name'],
        'colorIdentity': tmpObj['colorIdentity'],
        'colors': tmpObj['colors'],
        'convertedManaCost': tmpObj['convertedManaCost'],
        'manaCost': tmpObj['manaCost'],
        'text': tmpObj['text'],
        'type': tmpObj['type'],
        'types': tmpObj['types'],
        'power': tmpObj['power'],
        'toughness': tmpObj['toughness'],
    }
    newData.push(tmpNewData)
}

fs.writeFile('resources/mtg-cards.js', 'export const cardData=' + JSON.stringify(newData, null, 4), function(err) {
    if(err) {
      console.log(err);
    }
});



/*

"\"Ach! Hans, Run!\"": {
    "colorIdentity": [
        "G",
        "R"
    ],
    "colors": [
        "G",
        "R"
    ],
    "convertedManaCost": 6.0,
    "foreignData": [],
    "layout": "normal",
    "legalities": {},
    "manaCost": "{2}{R}{R}{G}{G}",
    "name": "\"Ach! Hans, Run!\"",
    "printings": [
        "UNH"
    ],
    "rulings": [],
    "scryfallIllustrationId": "be49af2a-e561-49d6-b21f-4f3bf451f11b",
    "scryfallOracleId": "a2c5ee76-6084-413c-bb70-45490d818374",
    "subtypes": [],
    "supertypes": [],
    "tcgplayerProductId": 37816,
    "tcgplayerPurchaseUrl": "https://mtgjson.com/links/85b366724beadefd",
    "text": "At the beginning of your upkeep, you may say \"Ach Hans, run It's the . . .\" and the name of a creature card. If you do, search your library for a card with that name, put it onto the battlefield, then shuffle your library. That creature gains haste. Exile it at the beginning of the next end step.",
    "type": "Enchantment",
    "types": [
        "Enchantment"
    ],
    "uuid": "8f9a35d5-a3a2-556b-88da-6686da3aaa34",
    "uuidV421": "d4492969-dc3a-5617-bc14-4f15afc12b2b"
},



*/
