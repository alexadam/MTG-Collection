
const fs = require('fs');

// let rawdata = fs.readFileSync('resources/mtg-cards.json');
let rawdata = fs.readFileSync('resources/AllCards.json');
// let rawdata = fs.readFileSync('resources/scryfall-default-cards.json');
let jsonData = JSON.parse(rawdata);

let newData = []

for (var key in jsonData) {
    let tmpObj = jsonData[key]

    /////
    // https://mtgjson.com/downloads/compiled/
    ///
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

    ///
    /// for cards from https://scryfall.com/docs/api/bulk-data
    ///
    // let tmpNewData = {
    //     'name': tmpObj['name'],
    //     'colorIdentity': tmpObj['color_identity'],
    //     'colors': tmpObj['colors'],
    //     'convertedManaCost': tmpObj['cmc'],
    //     'manaCost': tmpObj['mana_cost'],
    //     'text': tmpObj['oracle_text'],
    //     'type': tmpObj['type_line'],
    //     'power': tmpObj['power'],
    //     'toughness': tmpObj['toughness'],
    // }


    newData.push(tmpNewData)
}

fs.writeFile('resources/mtg-cards.js', 'export const cardData=' + JSON.stringify(newData, null, 4), function(err) {
    if(err) {
      console.log(err);
    }
});



/*

/////
// https://mtgjson.com/downloads/compiled/
///

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








/*

///
/// for cards from https://scryfall.com/docs/api/bulk-data
///

{"object":"card","id":"9dccac19-a915-4189-beb8-5d279a15a54e","oracle_id":"dca51281-fb21-45b6-beb4-1f13397caee2","multiverse_ids":[],"tcgplayer_id":188990,"name":"Blackblade Reforged","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/9dccac19-a915-4189-beb8-5d279a15a54e","scryfall_uri":"https://scryfall.com/card/ss2/8/blackblade-reforged?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155","normal":"https://img.scryfall.com/cards/normal/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155","large":"https://img.scryfall.com/cards/large/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155","png":"https://img.scryfall.com/cards/png/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.png?1555602155","art_crop":"https://img.scryfall.com/cards/art_crop/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155","border_crop":"https://img.scryfall.com/cards/border_crop/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155"},"mana_cost":"{2}","cmc":2.0,"type_line":"Legendary Artifact — Equipment","oracle_text":"Equipped creature gets +1/+1 for each land you control.\nEquip legendary creature {3}\nEquip {7}","colors":[],"color_identity":[],"legalities":{"standard":"legal","future":"legal","frontier":"legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/9dccac19-a915-4189-beb8-5d279a15a54e/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Adca51281-fb21-45b6-beb4-1f13397caee2\u0026unique=prints","collector_number":"8","digital":false,"rarity":"rare","flavor_text":"A weapon of evil, redeemed in Gideon's hand.","illustration_id":"9d94140e-64d3-4f28-aa21-e2bd5504a807","artist":"Richard Kane Ferguson","border_color":"black","frame":"2015","frame_effect":"legendary","full_art":false,"story_spotlight":false,"edhrec_rank":429,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Blackblade+Reforged\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Blackblade+Reforged","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Blackblade+Reforged"}},
{"object":"card","id":"9aef2a48-07bb-44e4-943f-f62fdc384a81","oracle_id":"99f9a4c8-b59f-4a41-8577-6c1e4684b240","multiverse_ids":[],"tcgplayer_id":188997,"name":"Worship","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/9aef2a48-07bb-44e4-943f-f62fdc384a81","scryfall_uri":"https://scryfall.com/card/ss2/7/worship?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113","normal":"https://img.scryfall.com/cards/normal/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113","large":"https://img.scryfall.com/cards/large/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113","png":"https://img.scryfall.com/cards/png/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.png?1555602113","art_crop":"https://img.scryfall.com/cards/art_crop/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113","border_crop":"https://img.scryfall.com/cards/border_crop/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113"},"mana_cost":"{3}{W}","cmc":4.0,"type_line":"Enchantment","oracle_text":"If you control a creature, damage that would reduce your life total to less than 1 reduces it to 1 instead.","colors":["W"],"color_identity":["W"],"legalities":{"standard":"not_legal","future":"not_legal","frontier":"not_legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/9aef2a48-07bb-44e4-943f-f62fdc384a81/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A99f9a4c8-b59f-4a41-8577-6c1e4684b240\u0026unique=prints","collector_number":"7","digital":false,"rarity":"rare","flavor_text":"Even after all that befell Amonkhet, Gideon never believed that his trust in Oketra was misplaced.","illustration_id":"aed4f5b9-0370-4081-8bc2-b320c28632bf","artist":"Matt Stewart","border_color":"black","frame":"2015","full_art":false,"story_spotlight":false,"edhrec_rank":4613,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Worship\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Worship","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Worship"}},
{"object":"card","id":"f8f4c56b-76d1-4c1c-a9d6-383278de272d","oracle_id":"fc299c1c-50f3-492a-b6b8-a3664bb72ab7","multiverse_ids":[],"tcgplayer_id":188996,"name":"True Conviction","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/f8f4c56b-76d1-4c1c-a9d6-383278de272d","scryfall_uri":"https://scryfall.com/card/ss2/6/true-conviction?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060","normal":"https://img.scryfall.com/cards/normal/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060","large":"https://img.scryfall.com/cards/large/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060","png":"https://img.scryfall.com/cards/png/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.png?1555602060","art_crop":"https://img.scryfall.com/cards/art_crop/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060","border_crop":"https://img.scryfall.com/cards/border_crop/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060"},"mana_cost":"{3}{W}{W}{W}","cmc":6.0,"type_line":"Enchantment","oracle_text":"Creatures you control have double strike and lifelink.","colors":["W"],"color_identity":["W"],"legalities":{"standard":"not_legal","future":"not_legal","frontier":"not_legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/f8f4c56b-76d1-4c1c-a9d6-383278de272d/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Afc299c1c-50f3-492a-b6b8-a3664bb72ab7\u0026unique=prints","collector_number":"6","digital":false,"rarity":"rare","flavor_text":"\"Heroism is more than a single act; it is hundreds of small decisions, made every day, in pursuit of a heroic cause.\"","illustration_id":"3863db90-9331-4a4f-b3a6-20c3d02b00cf","artist":"Ekaterina Burmak","border_color":"black","frame":"2015","full_art":false,"story_spotlight":false,"edhrec_rank":449,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=True+Conviction\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=True+Conviction","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=True+Conviction"}},
{"object":"card","id":"27946cc0-8278-4b45-8239-c22b5a57c40f","oracle_id":"79085dea-8daa-41c0-a975-61e3e6da2e26","multiverse_ids":[],"tcgplayer_id":188995,"name":"Shielded by Faith","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/27946cc0-8278-4b45-8239-c22b5a57c40f","scryfall_uri":"https://scryfall.com/card/ss2/5/shielded-by-faith?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022","normal":"https://img.scryfall.com/cards/normal/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022","large":"https://img.scryfall.com/cards/large/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022","png":"https://img.scryfall.com/cards/png/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.png?1555602022","art_crop":"https://img.scryfall.com/cards/art_crop/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022","border_crop":"https://img.scryfall.com/cards/border_crop/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022"},"mana_cost":"{1}{W}{W}","cmc":3.0,"type_line":"Enchantment — Aura","oracle_text":"Enchant creature\nEnchanted creature has indestructible.\nWhenever a creature enters the battlefield, you may attach Shielded by Faith to that creature.","colors":["W"],"color_identity":["W"],"legalities":{"standard":"not_legal","future":"not_legal","frontier":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/27946cc0-8278-4b45-8239-c22b5a57c40f/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A79085dea-8daa-41c0-a975-61e3e6da2e26\u0026unique=prints","collector_number":"5","digital":false,"rarity":"rare","illustration_id":"0a08cb52-1187-4036-9092-23771c2fa167","artist":"Zack Stella","border_color":"black","frame":"2015","full_art":false,"story_spotlight":false,"edhrec_rank":1466,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Shielded+by+Faith\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Shielded+by+Faith","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Shielded+by+Faith"}},
{"object":"card","id":"bd29035d-819f-43c4-a8fb-d056b1ccfe16","oracle_id":"087f9ad7-e74f-40e2-8102-1ed2925d0418","multiverse_ids":[],"tcgplayer_id":188994,"name":"Rest in Peace","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/bd29035d-819f-43c4-a8fb-d056b1ccfe16","scryfall_uri":"https://scryfall.com/card/ss2/4/rest-in-peace?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999","normal":"https://img.scryfall.com/cards/normal/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999","large":"https://img.scryfall.com/cards/large/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999","png":"https://img.scryfall.com/cards/png/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.png?1555601999","art_crop":"https://img.scryfall.com/cards/art_crop/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999","border_crop":"https://img.scryfall.com/cards/border_crop/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999"},"mana_cost":"{1}{W}","cmc":2.0,"type_line":"Enchantment","oracle_text":"When Rest in Peace enters the battlefield, exile all cards from all graveyards.\nIf a card or token would be put into a graveyard from anywhere, exile it instead.","colors":["W"],"color_identity":["W"],"legalities":{"standard":"not_legal","future":"not_legal","frontier":"not_legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/bd29035d-819f-43c4-a8fb-d056b1ccfe16/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A087f9ad7-e74f-40e2-8102-1ed2925d0418\u0026unique=prints","collector_number":"4","digital":false,"rarity":"rare","flavor_text":"\"I will keep watch.\"","illustration_id":"013d8086-74cc-4823-b596-6e83a4b6608e","artist":"Jason Rainville","border_color":"black","frame":"2015","full_art":false,"story_spotlight":false,"edhrec_rank":1219,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Rest+in+Peace\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Rest+in+Peace","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Rest+in+Peace"}},
{"object":"card","id":"206fd18a-f263-42cd-a77a-e40ae31a468a","oracle_id":"d683d985-9888-4d21-8b5f-69e69ce4a03b","multiverse_ids":[],"tcgplayer_id":188993,"name":"Path to Exile","lang":"en","released_at":"2019-06-28","uri":"https://api.scryfall.com/cards/206fd18a-f263-42cd-a77a-e40ae31a468a","scryfall_uri":"https://scryfall.com/card/ss2/3/path-to-exile?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966","normal":"https://img.scryfall.com/cards/normal/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966","large":"https://img.scryfall.com/cards/large/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966","png":"https://img.scryfall.com/cards/png/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.png?1555601966","art_crop":"https://img.scryfall.com/cards/art_crop/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966","border_crop":"https://img.scryfall.com/cards/border_crop/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966"},"mana_cost":"{W}","cmc":1.0,"type_line":"Instant","oracle_text":"Exile target creature. Its controller may search their library for a basic land card, put that card onto the battlefield tapped, then shuffle their library.","colors":["W"],"color_identity":["W"],"legalities":{"standard":"not_legal","future":"not_legal","frontier":"not_legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":true,"oversized":false,"promo":false,"reprint":true,"set":"ss2","set_name":"Signature Spellbook: Gideon","set_uri":"https://api.scryfall.com/sets/9ae53f04-9cbb-45db-8b5c-972fe847a984","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ass2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ss2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/206fd18a-f263-42cd-a77a-e40ae31a468a/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Ad683d985-9888-4d21-8b5f-69e69ce4a03b\u0026unique=prints","collector_number":"3","digital":false,"rarity":"rare","illustration_id":"1a907a39-418c-4663-a2a3-2edb41bf59e7","artist":"Daarken","border_color":"black","frame":"2015","full_art":false,"story_spotlight":false,"edhrec_rank":39,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Path+to+Exile\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Path+to+Exile","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Path+to+Exile"}},

*/
