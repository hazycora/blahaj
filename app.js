let listingsDiv = document.getElementById('listings')

let ikeaData = {
    gb: {
        name: "United Kingdom",
        abbrv: "the UK",
        url: "https://www.ikea.com/gb/en/p/blahaj-soft-toy-shark-30373588/",
        apiUrl: "cia/availabilities/ru/gb?itemNos=30373588&expand=StoresList,Restocks,SalesLocations",
        stores: [{
            value: "113",
            name: "Belfast"
        }, {
            value: "264",
            name: "Bristol"
        }, {
            value: "267",
            name: "Cardiff"
        }, {
            value: "144",
            name: "Croydon"
        }, {
            value: "548",
            name: "Exeter"
        }, {
            value: "143",
            name: "Gateshead"
        }, {
            value: "567",
            name: "Greenwich"
        }, {
            value: "261",
            name: "Leeds"
        }, {
            value: "186",
            name: "Manchester"
        }, {
            value: "185",
            name: "Milton Keynes"
        }, {
            value: "263",
            name: "Nottingham"
        }, {
            value: "461",
            name: "Reading"
        }, {
            value: "519",
            name: "Sheffield"
        }, {
            value: "125",
            name: "Southampton"
        }, {
            value: "255",
            name: "Tottenham"
        }, {
            value: "140",
            name: "Warrington"
        }, {
            value: "266",
            name: "Glasgow"
        }, {
            value: "265",
            name: "Edinburgh"
        }, {
            value: "262",
            name: "Lakeside"
        }, {
            value: "142",
            name: "Birmingham"
        }, {
            value: "141",
            name: "Wembley"
        }]
    },
    us: {
        name: "United States",
        abbrv: "the US",
        url: "https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/",
        apiUrl: "cia/availabilities/ru/us?itemNos=90373590&expand=StoresList,Restocks,SalesLocations",
        stores: [{
            value: "257",
            name: "Atlanta, GA",
            storePageUrl: "https://www.ikea.com/us/en/stores/atlanta/"
        }, {
            value: "152",
            name: "Baltimore, MD",
            storePageUrl: "https://www.ikea.com/us/en/stores/baltimore/"
        }, {
            value: "170",
            name: "Bolingbrook, IL",
            storePageUrl: "https://www.ikea.com/us/en/stores/bolingbrook/"
        }, {
            value: "921",
            name: "Brooklyn, NY",
            storePageUrl: "https://www.ikea.com/us/en/stores/brooklyn/"
        }, {
            value: "399",
            name: "Burbank, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/burbank/"
        }, {
            value: "026",
            name: "Canton, MI",
            storePageUrl: "https://www.ikea.com/us/en/stores/canton/"
        }, {
            value: "162",
            name: "Carson, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/carson/"
        }, {
            value: "064",
            name: "Centennial, CO",
            storePageUrl: "https://www.ikea.com/us/en/stores/centennial/"
        }, {
            value: "067",
            name: "Charlotte, NC",
            storePageUrl: "https://www.ikea.com/us/en/stores/charlotte/"
        }, {
            value: "411",
            name: "College Park, MD",
            storePageUrl: "https://www.ikea.com/us/en/stores/college-park/"
        }, {
            value: "511",
            name: "Columbus, OH",
            storePageUrl: "https://www.ikea.com/us/en/stores/columbus/"
        }, {
            value: "211",
            name: "Conshohocken, PA",
            storePageUrl: "https://www.ikea.com/us/en/stores/conshohocken/"
        }, {
            value: "167",
            name: "Costa Mesa, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/costa-mesa/"
        }, {
            value: "413",
            name: "Covina, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/covina/"
        }, {
            value: "103",
            name: "Draper, UT",
            storePageUrl: "https://www.ikea.com/us/en/stores/draper/"
        }, {
            value: "347",
            name: "East Palo Alto, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/east-palo-alto/"
        }, {
            value: "154",
            name: "Elizabeth, NJ",
            storePageUrl: "https://www.ikea.com/us/en/stores/elizabeth/"
        }, {
            value: "165",
            name: "Emeryville, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/emeryville/"
        }, {
            value: "536",
            name: "Fishers, IN",
            storePageUrl: "https://www.ikea.com/us/en/stores/fishers/"
        }, {
            value: "183",
            name: "Frisco, TX",
            storePageUrl: "https://www.ikea.com/us/en/stores/frisco/"
        }, {
            value: "535",
            name: "Grand Prairie, TX",
            storePageUrl: "https://www.ikea.com/us/en/stores/grand-prairie/"
        }, {
            value: "379",
            name: "Houston, TX",
            storePageUrl: "https://www.ikea.com/us/en/stores/houston/"
        }, {
            value: "537",
            name: "Jacksonville, FL",
            storePageUrl: "https://www.ikea.com/us/en/stores/jacksonville/"
        }, {
            value: "462",
            name: "Las Vegas, NV",
            storePageUrl: "https://www.ikea.com/us/en/stores/las-vegas/"
        }, {
            value: "570",
            name: "Live Oak, TX",
            storePageUrl: "https://www.ikea.com/us/en/stores/live-oak/"
        }, {
            value: "156",
            name: "Long Island, NY",
            storePageUrl: "https://www.ikea.com/us/en/stores/long-island/"
        }, {
            value: "508",
            name: "Memphis, TN",
            storePageUrl: "https://www.ikea.com/us/en/stores/memphis/"
        }, {
            value: "374",
            name: "Merriam, KS",
            storePageUrl: "https://www.ikea.com/us/en/stores/merriam/"
        }, {
            value: "327",
            name: "Miami, FL",
            storePageUrl: "https://www.ikea.com/us/en/stores/miami/"
        }, {
            value: "213",
            name: "New Haven, CT",
            storePageUrl: "https://www.ikea.com/us/en/stores/new-haven/"
        }, {
            value: "569",
            name: "Norfolk, VA",
            storePageUrl: "https://www.ikea.com/us/en/stores/norfolk/"
        }, {
            value: "560",
            name: "Oak Creek, WI",
            storePageUrl: "https://www.ikea.com/us/en/stores/oak-creek/"
        }, {
            value: "145",
            name: "Orlando, FL",
            storePageUrl: "https://www.ikea.com/us/en/stores/orlando/"
        }, {
            value: "409",
            name: "Paramus, NJ",
            storePageUrl: "https://www.ikea.com/us/en/stores/paramus/"
        }, {
            value: "153",
            name: "Pittsburgh, PA",
            storePageUrl: "https://www.ikea.com/us/en/stores/pittsburgh/"
        }, {
            value: "028",
            name: "Portland, OR",
            storePageUrl: "https://www.ikea.com/us/en/stores/portland/"
        }, {
            value: "622",
            name: "Queens, NY",
            storePageUrl: "https://www.ikea.com/us/en/stores/queens/"
        }, {
            value: "488",
            name: "Renton, WA",
            storePageUrl: "https://www.ikea.com/us/en/stores/renton/"
        }, {
            value: "027",
            name: "Round Rock, TX",
            storePageUrl: "https://www.ikea.com/us/en/stores/round-rock/"
        }, {
            value: "166",
            name: "San Diego, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/san-diego/"
        }, {
            value: "210",
            name: "Schaumburg, IL",
            storePageUrl: "https://www.ikea.com/us/en/stores/schaumburg/"
        }, {
            value: "215",
            name: "South Philadelphia, PA",
            storePageUrl: "https://www.ikea.com/us/en/stores/south-philadelphia/"
        }, {
            value: "410",
            name: "St. Louis, MO",
            storePageUrl: "https://www.ikea.com/us/en/stores/st-louis/"
        }, {
            value: "158",
            name: "Stoughton, MA",
            storePageUrl: "https://www.ikea.com/us/en/stores/stoughton/"
        }, {
            value: "207",
            name: "Sunrise, FL",
            storePageUrl: "https://www.ikea.com/us/en/stores/sunrise/"
        }, {
            value: "042",
            name: "Tampa, FL",
            storePageUrl: "https://www.ikea.com/us/en/stores/tampa/"
        }, {
            value: "209",
            name: "Tempe, AZ",
            storePageUrl: "https://www.ikea.com/us/en/stores/tempe/"
        }, {
            value: "212",
            name: "Twin Cities, MN",
            storePageUrl: "https://www.ikea.com/us/en/stores/twin-cities/"
        }, {
            value: "175",
            name: "West Chester, OH",
            storePageUrl: "https://www.ikea.com/us/en/stores/west-chester/"
        }, {
            value: "157",
            name: "West Sacramento, CA",
            storePageUrl: "https://www.ikea.com/us/en/stores/west-sacramento/"
        }, {
            value: "168",
            name: "Woodbridge, VA",
            storePageUrl: "https://www.ikea.com/us/en/stores/woodbridge/"
        }]
    },
    ca: {
        name: "Canada",
        url: "https://www.ikea.com/ca/en/p/blahaj-soft-toy-shark-90373590/",
        apiUrl: "cia/availabilities/ru/ca?itemNos=90373590&expand=StoresList,Restocks,SalesLocations",
        stores: [{
            value: "414",
            name: "Boucherville",
            storePageUrl: "https://www.ikea.com/ca/en/stores/boucherville/"
        }, {
            value: "040",
            name: "Burlington",
            storePageUrl: "https://www.ikea.com/ca/en/stores/burlington/"
        }, {
            value: "216",
            name: "Calgary",
            storePageUrl: "https://www.ikea.com/ca/en/stores/calgary/"
        }, {
            value: "313",
            name: "Coquitlam",
            storePageUrl: "https://www.ikea.com/ca/en/stores/coquitlam/"
        }, {
            value: "349",
            name: "Edmonton",
            storePageUrl: "https://www.ikea.com/ca/en/stores/edmonton/"
        }, {
            value: "256",
            name: "Etobicoke",
            storePageUrl: "https://www.ikea.com/ca/en/stores/etobicoke/"
        }, {
            value: "529",
            name: "Halifax",
            storePageUrl: "https://www.ikea.com/ca/en/stores/halifax/"
        }, {
            value: "039",
            name: "Montreal",
            storePageUrl: "https://www.ikea.com/ca/en/stores/montreal/"
        }, {
            value: "149",
            name: "North York",
            storePageUrl: "https://www.ikea.com/ca/en/stores/north-york/"
        }, {
            value: "004",
            name: "Ottawa",
            storePageUrl: "https://www.ikea.com/ca/en/stores/ottawa/"
        }, {
            value: "559",
            name: "Quebec City",
            storePageUrl: "https://www.ikea.com/ca/en/stores/quebec/"
        }, {
            value: "003",
            name: "Richmond",
            storePageUrl: "https://www.ikea.com/ca/en/stores/richmond/"
        }, {
            value: "372",
            name: "Vaughan",
            storePageUrl: "https://www.ikea.com/ca/en/stores/vaughan/"
        }, {
            value: "249",
            name: "Winnipeg",
            storePageUrl: "https://www.ikea.com/ca/en/stores/winnipeg/"
        }]
    },
    sw: {
        name: "Sweden",
        url: "https://www.ikea.com/se/sv/p/blahaj-mjukleksak-haj-30373588/",
        apiUrl: "cia/availabilities/ru/se?itemNos=30373588&expand=StoresList,Restocks,SalesLocations",
        stores: [{
            value: "248",
            name: "Borlänge",
            storePageUrl: "https://www.ikea.com/se/sv/stores/borlange/"
        }, {
            value: "122",
            name: "Gävle",
            storePageUrl: "https://www.ikea.com/se/sv/stores/gavle/"
        }, {
            value: "398",
            name: "Göteborg Bäckebol",
            storePageUrl: "https://www.ikea.com/se/sv/stores/goteborg-backebol/"
        }, {
            value: "014",
            name: "Göteborg Kållered",
            storePageUrl: "https://www.ikea.com/se/sv/stores/goteborg-kallered/"
        }, {
            value: "470",
            name: "Haparanda",
            storePageUrl: "https://www.ikea.com/se/sv/stores/haparandatornio/"
        }, {
            value: "468",
            name: "Helsingborg",
            storePageUrl: "https://www.ikea.com/se/sv/stores/helsingborg/"
        }, {
            value: "109",
            name: "Jönköping",
            storePageUrl: "https://www.ikea.com/se/sv/stores/jonkoping/"
        }, {
            value: "469",
            name: "Kalmar",
            storePageUrl: "https://www.ikea.com/se/sv/stores/kalmar/"
        }, {
            value: "471",
            name: "Karlstad",
            storePageUrl: "https://www.ikea.com/se/sv/stores/karlstad/"
        }, {
            value: "017",
            name: "Linköping",
            storePageUrl: "https://www.ikea.com/se/sv/stores/linkoping/"
        }, {
            value: "445",
            name: "Malmö",
            storePageUrl: "https://www.ikea.com/se/sv/stores/malmo/"
        }, {
            value: "019",
            name: "Stockholm Barkarby",
            storePageUrl: "https://www.ikea.com/se/sv/stores/stockholm-barkarby/"
        }, {
            value: "012",
            name: "Stockholm Kungens Kurva",
            storePageUrl: "https://www.ikea.com/se/sv/stores/stockholm-kungens-kurva/"
        }, {
            value: "467",
            name: "Sundsvall",
            storePageUrl: "https://www.ikea.com/se/sv/stores/sundsvall/"
        }, {
            value: "053",
            name: "Uddevalla",
            storePageUrl: "https://www.ikea.com/se/sv/stores/uddevalla/"
        }, {
            value: "416",
            name: "Umeå",
            storePageUrl: "https://www.ikea.com/se/sv/stores/umea/"
        }, {
            value: "070",
            name: "Uppsala",
            storePageUrl: "https://www.ikea.com/se/sv/stores/uppsala/"
        }, {
            value: "020",
            name: "Västerås",
            storePageUrl: "https://www.ikea.com/se/sv/stores/vasteras/"
        }, {
            value: "268",
            name: "Älmhult",
            storePageUrl: "https://www.ikea.com/se/sv/stores/almhult/"
        }, {
            value: "106",
            name: "Örebro",
            storePageUrl: "https://www.ikea.com/se/sv/stores/orebro/"
        }]
    },
    de: {
        name: "Deutschland",
        url: "https://www.ikea.com/de/de/p/blahaj-stoffspielzeug-hai-30373588/",
        apiUrl: "cia/availabilities/ru/de?itemNos=30373588&expand=StoresList,Restocks,SalesLocations",
        stores: [{
            value: "066",
            name: "Augsburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/augsburg/"
        }, {
            value: "324",
            name: "Berlin-Lichtenberg",
            storePageUrl: "https://www.ikea.com/de/de/stores/berlin-lichtenberg/"
        }, {
            value: "394",
            name: "Berlin-Spandau",
            storePageUrl: "https://www.ikea.com/de/de/stores/berlin-spandau"
        }, {
            value: "421",
            name: "Berlin-Tempelhof",
            storePageUrl: "https://www.ikea.com/de/de/stores/berlin-tempelhof/"
        }, {
            value: "129",
            name: "Berlin-Waltersdorf",
            storePageUrl: "https://www.ikea.com/de/de/stores/berlin-waltersdorf/"
        }, {
            value: "119",
            name: "Bielefeld",
            storePageUrl: "https://www.ikea.com/de/de/stores/bielefeld/"
        }, {
            value: "117",
            name: "Braunschweig",
            storePageUrl: "https://www.ikea.com/de/de/stores/braunschweig/"
        }, {
            value: "412",
            name: "Bremerhaven",
            storePageUrl: "https://www.ikea.com/de/de/stores/bremerhaven/"
        }, {
            value: "228",
            name: "Brinkum",
            storePageUrl: "https://www.ikea.com/de/de/stores/brinkum/"
        }, {
            value: "118",
            name: "Chemnitz",
            storePageUrl: "https://www.ikea.com/de/de/stores/chemnitz/"
        }, {
            value: "223",
            name: "Dortmund",
            storePageUrl: "https://www.ikea.com/de/de/stores/dortmund/"
        }, {
            value: "221",
            name: "Dresden",
            storePageUrl: "https://www.ikea.com/de/de/stores/dresden/"
        }, {
            value: "425",
            name: "Duisburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/duisburg/"
        }, {
            value: "321",
            name: "Düsseldorf",
            storePageUrl: "https://www.ikea.com/de/de/stores/duesseldorf/"
        }, {
            value: "396",
            name: "Erfurt",
            storePageUrl: "https://www.ikea.com/de/de/stores/erfurt/"
        }, {
            value: "148",
            name: "Essen",
            storePageUrl: "https://www.ikea.com/de/de/stores/essen/"
        }, {
            value: "393",
            name: "Frankfurt",
            storePageUrl: "https://www.ikea.com/de/de/stores/frankfurt/"
        }, {
            value: "320",
            name: "Freiburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/freiburg/"
        }, {
            value: "226",
            name: "Großburgwedel",
            storePageUrl: "https://www.ikea.com/de/de/stores/grossburgwedel/"
        }, {
            value: "139",
            name: "Halle/Leipzig",
            storePageUrl: "https://www.ikea.com/de/de/stores/halle-leipzig/"
        }, {
            value: "245",
            name: "Hamburg-Altona",
            storePageUrl: "https://www.ikea.com/de/de/stores/hamburg-altona/"
        }, {
            value: "325",
            name: "Hamburg-Moorfleet",
            storePageUrl: "https://www.ikea.com/de/de/stores/hamburg-moorfleet/"
        }, {
            value: "146",
            name: "Hamburg-Schnelsen",
            storePageUrl: "https://www.ikea.com/de/de/stores/hamburg-schnelsen/"
        }, {
            value: "222",
            name: "Hanau",
            storePageUrl: "https://www.ikea.com/de/de/stores/hanau/"
        }, {
            value: "187",
            name: "Hannover EXPO-Park",
            storePageUrl: "https://www.ikea.com/de/de/stores/hannover-expo-park/"
        }, {
            value: "494",
            name: "Kaarst",
            storePageUrl: "https://www.ikea.com/de/de/stores/kaarst/"
        }, {
            value: "430",
            name: "Kaiserslautern",
            storePageUrl: "https://www.ikea.com/de/de/stores/kaiserslautern/"
        }, {
            value: "323",
            name: "Kamen",
            storePageUrl: "https://www.ikea.com/de/de/stores/kamen/"
        }, {
            value: "551",
            name: "Karlsruhe",
            storePageUrl: "https://www.ikea.com/de/de/stores/karlsruhe/"
        }, {
            value: "174",
            name: "Kassel",
            storePageUrl: "https://www.ikea.com/de/de/stores/kassel/"
        }, {
            value: "333",
            name: "Kiel",
            storePageUrl: "https://www.ikea.com/de/de/stores/kiel/"
        }, {
            value: "332",
            name: "Koblenz",
            storePageUrl: "https://www.ikea.com/de/de/stores/koblenz/"
        }, {
            value: "102",
            name: "Köln-Am Butzweilerhof",
            storePageUrl: "https://www.ikea.com/de/de/stores/koeln-am-butzweilerhof/"
        }, {
            value: "147",
            name: "Köln-Godorf",
            storePageUrl: "https://www.ikea.com/de/de/stores/koeln-godorf/"
        }, {
            value: "289",
            name: "Lübeck",
            storePageUrl: "https://www.ikea.com/de/de/stores/luebeck/"
        }, {
            value: "225",
            name: "Ludwigsburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/ludwigsburg/"
        }, {
            value: "520",
            name: "Magdeburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/magdeburg/"
        }, {
            value: "397",
            name: "Mannheim",
            storePageUrl: "https://www.ikea.com/de/de/stores/mannheim/"
        }, {
            value: "343",
            name: "München-Brunnthal",
            storePageUrl: "https://www.ikea.com/de/de/stores/muenchen-brunnthal/"
        }, {
            value: "063",
            name: "München-Eching",
            storePageUrl: "https://www.ikea.com/de/de/stores/muenchen-eching/"
        }, {
            value: "326",
            name: "Nürnberg-Fürth",
            storePageUrl: "https://www.ikea.com/de/de/stores/nuernberg-fuerth/"
        }, {
            value: "069",
            name: "Oldenburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/oldenburg/"
        }, {
            value: "184",
            name: "Osnabrück",
            storePageUrl: "https://www.ikea.com/de/de/stores/osnabrueck/"
        }, {
            value: "617",
            name: "Potsdam",
            storePageUrl: "https://www.ikea.com/de/de/stores/potsdam/"
        }, {
            value: "229",
            name: "Regensburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/regensburg/"
        }, {
            value: "092",
            name: "Rostock",
            storePageUrl: "https://www.ikea.com/de/de/stores/rostock/"
        }, {
            value: "227",
            name: "Saarlouis",
            storePageUrl: "https://www.ikea.com/de/de/stores/saarlouis/"
        }, {
            value: "369",
            name: "Siegen",
            storePageUrl: "https://www.ikea.com/de/de/stores/siegen/"
        }, {
            value: "224",
            name: "Sindelfingen",
            storePageUrl: "https://www.ikea.com/de/de/stores/sindelfingen/"
        }, {
            value: "328",
            name: "Ulm",
            storePageUrl: "https://www.ikea.com/de/de/stores/ulm/"
        }, {
            value: "322",
            name: "Wallau",
            storePageUrl: "https://www.ikea.com/de/de/stores/wallau/"
        }, {
            value: "075",
            name: "Walldorf",
            storePageUrl: "https://www.ikea.com/de/de/stores/walldorf/"
        }, {
            value: "493",
            name: "Wetzlar",
            storePageUrl: "https://www.ikea.com/de/de/stores/wetzlar/"
        }, {
            value: "492",
            name: "Wuppertal",
            storePageUrl: "https://www.ikea.com/de/de/stores/wuppertal/"
        }, {
            value: "124",
            name: "Würzburg",
            storePageUrl: "https://www.ikea.com/de/de/stores/wuerzburg/"
        }]
    }
}

function asciiFix(t) {
    return utf8.decode(t)
}

async function get(path) {
    let req
    try {
        req = await fetch(`https://api.ingka.ikea.com/${path}`, {
            headers: {
                'Accept': 'application/json;version=2',
                'X-Client-ID': 'b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631'
            }
        })
        return await req.json()
    } catch (error) {
        document.getElementById('error').style.display = 'block'
        document.getElementById('error-message').innerText = error.message
        if (document.getElementById('listings')) document.getElementById('listings').remove()
        throw error
    }
}

function parseStock(availability, code) {
    let store = ikeaData[code].stores.find(e => {
        return e.value === availability.classUnitKey.classUnitCode
    })
    if (!store) {
        return {
            err: true,
            store: 'unknown',
            quantity: 0
        }
    }
    let nextRestock = undefined
    if (availability.buyingOption?.cashCarry?.availability?.restocks) {
        nextRestock = availability.buyingOption.cashCarry.availability.restocks[0]
    }
    let quantity = availability.buyingOption?.cashCarry?.availability?.quantity??null
    if (quantity===null) {
        return {
            store: store.name,
            message: 'unavailable',
            quantity: 0,
            nextRestock: nextRestock
        }
    }
    return {
        store: store.name,
        quantity: quantity,
        nextRestock: nextRestock
    }
}

function formatDate(str) {
    let date = new Date(str)
    return new Intl.DateTimeFormat('en-US').format(date)
}

function makeStockElem(parsed) {
    let elem = document.createElement('div')
    elem.classList.add('listing')
    if (parsed.quantity&&parsed.quantity > 0) elem.classList.add('positive')
    else elem.classList.add('negative')
    let title = document.createElement('h3')
    title.innerText = parsed.store
    let quantity = document.createElement('p')
    quantity.classList.add('quantity')
    quantity.innerText = (parsed.message)?parsed.message:`${parsed.quantity} sharks`
    elem.appendChild(title)
    elem.appendChild(quantity)
    if (parsed.nextRestock) {
        let nextRestock = document.createElement('p')
        nextRestock.classList.add('restock-date')
        let dateEarliest = formatDate(parsed.nextRestock.earliestDate)
        let dateLatest = formatDate(parsed.nextRestock.latestDate)
        let range = (dateEarliest === dateLatest) ? dateEarliest : `${dateEarliest}-${dateLatest}`
        nextRestock.innerText = `Restocking ${parsed.nextRestock.quantity} sharks on ${range}`
        elem.appendChild(nextRestock)
    }
    return elem
}

async function loadCountryListings(countrycode) {
    let countriesListingsDiv = document.createElement('details')
    let heading = document.createElement('summary')
    heading.innerText = ikeaData[countrycode].name + ' (Loading)'
    let link = document.createElement('a')
    link.setAttribute('href', ikeaData[countrycode].url)
    link.innerText = `See the listings for BLÅHAJ in ${ikeaData[countrycode].abbrv??ikeaData[countrycode].name}`
    countriesListingsDiv.appendChild(heading)
    countriesListingsDiv.appendChild(link)
    listingsDiv.appendChild(countriesListingsDiv)

    let listingsContainer = document.createElement('div')

    let dat
    try {
        dat = await get(ikeaData[countrycode].apiUrl)
    } catch (error) {
        throw error
    }

    let listings = dat.availabilities.map(e => parseStock(e, countrycode))

    listings.sort((a, b) => {
        return b.quantity - a.quantity;
    })

    for (let i in listings) {
        if (!listings[i].err) listingsContainer.appendChild(makeStockElem(listings[i]))
    }

    countriesListingsDiv.appendChild(listingsContainer)

    heading.innerText = ikeaData[countrycode].name
}

async function start() {
    let debug = false
    let countryCodes = Object.keys(ikeaData).sort((a, b) => ikeaData[a].name.localeCompare(ikeaData[b].name))
    for (let i in countryCodes) {
        if (debug) {
            // Fix ASCII encoding stuff cause idontknow. i def implemented this poorly too but im lazy and dont know the proper way to do this
            ikeaData[countryCodes[i]].stores = ikeaData[countryCodes[i]].stores.map(e => {
                let name
                try {
                    name = asciiFix(e.name)
                } catch (error) {
                    name = e.name
                }
                return {
                    value: e.value,
                    name,
                    storePageUrl: e.storePageUrl
                }
            })
        }
        try {
            loadCountryListings(countryCodes[i])
        } catch (error) {
            return
        }
    }
    // log so i can replace it if i add more things
    if (debug) console.log(JSON.stringify(ikeaData, null, 2))
}

start()