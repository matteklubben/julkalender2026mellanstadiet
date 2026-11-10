const calendarContent = {
    1: { 
        title: "Tisdag 1 December", 
        dayType: "weekday",
        u1: { prompt: "340 + 250", answer: ["590"] },
        u2: { prompt: "Nisse packar 420 julklappar på morgonen och 160 på eftermiddagen. Hur många julklappar packar han totalt under dagen?", answer: ["580", "580 julklappar", "580julklappar"] },
        desc: "Välkommen till årets magiska julkalender! Svara på dagens två frågor för att tända en guldstjärna!", 
        rhyme: "", video: "", starVideo: "" 
    },
    2: { 
        title: "Onsdag 2 December", 
        dayType: "weekday",
        u1: { prompt: "Hur många minuter går det på 1 timme och 20 minuter?", answer: ["80", "80 minuter", "80minuter", "80 min", "80min"] },
        u2: { prompt: "Rudolf börjar sin flyglektion klockan 13:00 och flyger i 1 timme och 45 minuter. Vad är klockan när lektionen slutar?", answer: ["14:45", "14.45", "klockan 14:45", "kl 14:45"] },
        desc: "Härligt jobbat! Glöm inte att lösa båda uppgifterna för att tända en bakgrundsstjärna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/WM7M7zSMJcw?autoplay=1&mute=1" 
    },
    3: { 
        title: "Torsdag 3 December", 
        dayType: "weekday",
        u1: { prompt: "7 × 6", answer: ["42"] },
        u2: { prompt: "En tomtenisse bär 8 kartonger. I varje kartong ligger det 9 julkulor. Hur många julkulor har nissen totalt?", answer: ["72", "72 julkulor", "72julkulor", "72 kulor"] },
        desc: "Kura ihop dig i vintermörkret och lös dagens kluringar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    4: { 
        title: "Fredag 4 December", 
        dayType: "weekday",
        u1: { prompt: "Fyll i talet som saknas i mönstret: 5, 10, 15, __, 25, 30", answer: ["20"] },
        u2: { prompt: "Tomten bygger en trappa av snöblock. Första steget har 6 block, andra har 12, tredje har 18. Hur många block har det fjärde steget?", answer: ["24", "24 block", "24 snöblock", "24block"] },
        desc: "Fredagens utmaning! Lös båda frågorna för att tända helgens första stjärna!", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=1&mute=1" 
    },
    5: { 
        title: "Lördag 5 December", 
        dayType: "weekday", 
        u1: { prompt: "700 - 320", answer: ["380"] },
        u2: { prompt: "Tomteverkstaden ska tillverka 850 träbilar. De har redan gjort 410 stycken. Hur många bilar är det kvar att göra?", answer: ["440", "440 bilar", "440 träbilar", "440bilar"] },
        desc: "Lördagsutmaning! Svara på båda frågorna för att tända dagens stjärna.",
        video: "", starVideo: ""
    },
    6: { 
        title: "Söndag 6 December - 2:a Advent", 
        dayType: "minigame",
        minigameType: "multiplication",
        desc: "2:a Advent! Klara multiplikationsspelet genom att svara rätt på 20 frågor (tabellerna 1–10). Varje rätt svar tänder en stjärna i ramen. När alla 20 stjärnor lyser tänds det andra adventsljuset!", 
        video: "", starVideo: "https://www.youtube.com/embed/E8gmARGvPlI?autoplay=1&mute=1" 
    },
    7: { 
        title: "Måndag 7 December", 
        dayType: "weekday",
        u1: { prompt: "Klockan visar 08:15. Vad visar klockan om 45 minuter?", answer: ["09:00", "9:00", "09.00", "9.00", "klockan 09:00", "kl 09:00"] },
        u2: { prompt: "Luciatåget börjar öva kl. 09:20. Övningen håller på i 35 minuter. Vad är klockan när de är klara?", answer: ["09:55", "9:55", "09.55", "9.55", "klockan 09:55", "kl 09:55"] },
        desc: "Ny vecka och nya utmaningar!", 
        rhyme: "", video: "", starVideo: "" 
    },
    8: { 
        title: "Tisdag 8 December", 
        dayType: "weekday",
        u1: { prompt: "450 + 380", answer: ["830"] },
        u2: { prompt: "En ren äter 270 gram mossa på morgonen och 540 gram på kvällen. Hur mycket mossa äter renen under hela dagen?", answer: ["810", "810 gram", "810g", "810 gram mossa"] },
        desc: "Tomteverkstaden ångar på! Lös uppgifterna och samla fler stjärnor.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/ESWWoF657VE?start=22&autoplay=1&mute=1" 
    },
    9: { 
        title: "Onsdag 9 December", 
        dayType: "weekday",
        u1: { prompt: "Fyll i talen som saknas i mönstret : 40, 35, 30, __, 20, __", answer: ["25 och 15", "25, 15", "25,15", "25 15"] },
        u2: { prompt: "Temperaturen på tomtens semester var 30°C. Den sjunker med 4 grader varje timme. Vad är temperaturen efter 3 timmar?", answer: ["18", "18 grader", "18°c", "18°"] },
        desc: "Halvvägs genom veckan! Du kämpar på jättebra.", 
        rhyme: "", video: "", starVideo: "" 
    },
    10: { 
        title: "Torsdag 10 December", 
        dayType: "weekday",
        u1: { prompt: "8 × 9", answer: ["72"] },
        u2: { prompt: "Det står 6 renar i ett spann, och varje ren har 7 bjällror på sina seldon. Hur många bjällror finns det sammanlagt?", answer: ["42", "42 bjällror", "42bjällror"] },
        desc: "Snyggt klarat! Lös frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/xi4OpBMbyGY?autoplay=1&mute=1" 
    },
    11: { 
        title: "Fredag 11 December", 
        dayType: "weekday",
        u1: { prompt: "1000 - 450", answer: ["550"] },
        u2: { prompt: "Nisse hade 1 000 meter snöre till paketen. Efter en dag har han använt 620 meter. Hur mycket snöre har han kvar?", answer: ["380", "380 meter", "380m", "380 meter snöre"] },
        desc: "Lussebullsbaket närmar sig! Lös båda uppgifterna för att tända fredagsstjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    12: { 
        title: "Lördag 12 December", 
        dayType: "weekday", 
        u1: { prompt: "63 ÷ 7", answer: ["9"] },
        u2: { prompt: "Tomtemor har bakat 72 lussebullar och lägger dem i påsar med 8 i varje. Hur många påsar blir det?", answer: ["9", "9 påsar", "9påsar"] },
        desc: "Lördagsutmaning! Lös kluringarna och tänd dagens stjärna.",
        video: "", starVideo: "https://www.youtube.com/embed/kpSOWZCSPxo?autoplay=1&mute=1" 
    },
    13: { 
        title: "Söndag 13 December - Glad Lucia & 3:e Advent", 
        dayType: "minigame", 
        minigameType: "division",
        desc: "Glad Lucia & 3:e Advent! Klara divisionsspelet genom att svara rätt på 20 frågor (tabellerna 1–10). När alla 20 stjärnor i ramen lyser tänds det tredje adventsljuset!", 
        video: "https://www.youtube.com/embed/QVc5rAzMQCs?autoplay=1&mute=1", starVideo: "" 
    },
    14: { 
        title: "Måndag 14 December", 
        dayType: "weekday",
        u1: { prompt: "60 × 4", answer: ["240"] },
        u2: { prompt: "Varje tärna i luciatåget bär 3 levande ljus. Om det är 40 tärnor i tåget, hur många ljus brinner totalt?", answer: ["120", "120 ljus", "120ljus"] },
        desc: "Start på veckan efter Lucia! Lös båda frågorna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/j9jbdgZidu8?autoplay=1&mute=1" 
    },
    15: { 
        title: "Tisdag 15 December", 
        dayType: "weekday",
        u1: { prompt: "Fyll i talet som saknas i mönstret: 3, 6, 12, 24, __", answer: ["48"] },
        u2: { prompt: "Första dagen snöar det 4 cm, andra dagen dubbelt så mycket (8 cm), tredje dagen dubbelt igen (16 cm). Om mönstret fortsätter, hur mycket snö faller det den femte dagen?", answer: ["64", "64 cm", "64cm", "64 cm snö"] },
        desc: "Riktigt bra jobbat i tomteverkstaden!", 
        rhyme: "", video: "", starVideo: "" 
    },
    16: { 
        title: "Onsdag 16 December", 
        dayType: "weekday",
        u1: { prompt: "360 ÷ 6", answer: ["60"] },
        u2: { prompt: "En säck med 280 apelsiner ska fördelas lika på 4 olika tomtefamiljer. Hur många apelsiner får varje familj?", answer: ["70", "70 apelsiner", "70apelsiner"] },
        desc: "Knäck och julgodis koka! Lös uppgifterna.", 
        rhyme: "", video: "", starVideo: "https://www.youtube.com/embed/TS9vmrBTxEo?autoplay=1&mute=1" 
    },
    17: { 
        title: "Torsdag 17 December", 
        dayType: "weekday",
        u1: { prompt: "Klockan visar 16:40. Vad var klockan för 50 minuter sedan?", answer: ["15:50", "15.50", "klockan 15:50", "kl 15:50"] },
        u2: { prompt: "Tomtens gröt var färdig kl. 17:15. Den hade stått på spisen i 40 minuter. Vad var klockan när han satte på gröten?", answer: ["16:35", "16.35", "klockan 16:35", "kl 16:35"] },
        desc: "Torsdagsutmaning! Svara på båda frågorna för att tända stjärnan.", 
        rhyme: "", video: "", starVideo: "" 
    },
    18: { 
        title: "Fredag 18 December", 
        dayType: "weekday", 
        u1: { prompt: "520 + 290", answer: ["810"] },
        u2: { prompt: "Tomteverkstaden skickar 480 paket på måndagen och 350 paket på tisdagen. Hur många paket har de skickat totalt under dessa två dagar?", answer: ["830", "830 paket", "830paket"] },
        desc: "Fredagsutmaning! Lös båda frågorna för att tända stjärnan.", 
        video: "", starVideo: "https://www.youtube.com/embed/RH-xd5bPKTA?autoplay=1&mute=1" 
    },
    19: { 
        title: "Lördag 19 December", 
        dayType: "weekday", 
        u1: { prompt: "500 - 175", answer: ["325"] },
        u2: { prompt: "Nisse köper julpapper för 230 kr och betalar med en 500-kronorssedel. Hur mycket får han tillbaka i växel?", answer: ["270", "270 kr", "270kr", "270 kronor"] },
        desc: "Klä granen och lös dagens två matteutmaningar!", 
        video: "", starVideo: "" 
    },
    20: { 
        title: "Söndag 20 December - 4:e Advent", 
        dayType: "minigame", 
        minigameType: "mixed",
        desc: "Fjärde advent! Klara den mixade utmaningen (multiplikation & division 1–10) för att tända 20 stjärnor i ramen och tända det fjärde adventsljuset!", 
        video: "", starVideo: "https://www.youtube.com/embed/wKhRnZZ0cJI?autoplay=1&mute=1" 
    },
    21: { 
        title: "Måndag 21 December", 
        dayType: "weekday", 
        u1: { prompt: "7 × 50", answer: ["350"] },
        u2: { prompt: "En tomte hänger upp 9 ljusslingor. Varje ljusslinga har 40 små lampor. Hur många lampor hänger tomten upp sammanlagt?", answer: ["360", "360 lampor", "360lampor"] },
        desc: "Vintersolståndet! Lös frågorna för att tända stjärnan.", 
        video: "", starVideo: "" 
    },
    22: { 
        title: "Tisdag 22 December", 
        dayType: "weekday", 
        u1: { prompt: "80 ÷ 10", answer: ["8"] },
        u2: { prompt: "120 glaskulor ska packas i lådor där det får plats 10 kulor i varje låda. Hur många lådor behövs?", answer: ["12", "12 lådor", "12lådor"] },
        desc: "Uppesittarstämning! Lös båda matematikuppgifterna.", 
        video: "", starVideo: "https://www.youtube.com/embed/4Q7cIyWadUg?autoplay=1&mute=1" 
    },
    23: { 
        title: "Onsdag 23 December - Dan före dan", 
        dayType: "weekday", 
        u1: { prompt: "9 × 7", answer: ["63"] },
        u2: { prompt: "Dagen före dopparedagen tillverkas 8 stora granar. I varje gran hängs 6 röda rosetter. Hur många rosetter går det åt totalt?", answer: ["48", "48 rosetter", "48rosetter"] },
        desc: "Dan före dopparedagen! Svara på frågorna för att tända sista stjärnan innan julafton.", 
        video: "", starVideo: "" 
    },
    24: { 
        title: "Julafton 24 December", 
        dayType: "weekend", 
        desc: "GOD JUL! Njut av Kalle Anka och hans vänner och ha en underbar julafton!", 
        video: "https://www.youtube.com/embed/l49a9z8xBL0?autoplay=1&mute=1", starVideo: "https://www.youtube.com/embed/joWd2P-6keM?autoplay=1&mute=1" 
    }
};
