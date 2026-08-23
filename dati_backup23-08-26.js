const datiFoto = {};

for (let i = 1; i <= 200; i++) {
    const numero = String(i).padStart(3, "0");

    datiFoto["F" + numero] = {
        evento: "",
        persone: []
    };
}
datiFoto["F001"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Enzo Antonacci", "Mariella Tangorra"]
};

datiFoto["F002"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Enzo Loperfido", "Raffaele Cocchiaro"]
};
datiFoto["F003"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Antonio Giove", "Antonio Candelli"]
};
datiFoto["F004"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Orazio Meo", "Antonio Candelli"]
};

datiFoto["F005"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Rosa Lodeserto", "Vittorio Ritelli"]
};

datiFoto["F006"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Vito Calella", "Piero Spedicati"]
};
datiFoto["F007"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Peppe Perruccio", "Michele Birtolo", "Lorenzo Barulli",
              "Raffaele Cocchiaro", "Giancarlo Maccagnani", "Franco Fuggiano",
             ]
};
datiFoto["F008"] = {
    evento: "Cena per avviamento progetto",
    persone: [
        "Cesarino Gervasi",
        "Sebastiano Gonnella",
        "Piero Spedicati",
        "Antonio Violino",
        "Vito Calamita",
        "Peppe Axo",
        "Lino Battista",
        "Pasquale Ferrara",
        "Antonio Candelli"
    ]
};

datiFoto["F009"] = {
    evento: "Centro meccanografico siderurgico",
    persone: [
        "Enzo Picheca", "Franco Presicci", "Tonino Otranto",
        "Enzo De Leonardis", 
        "Remo Epifani",
        "Donato Addabbo",
        "Giacinto Garofalo",
        "Nicola Chisena",
        "Luciano Cambara",
        "Franco Perna",
        "Franco De Vitis",
        "Giacinto Dell'Erba",
        "Donato Sofia"
    ]
};

datiFoto["F010"] = {
    evento: "Partita di calcio aziendale",
    persone: [
        "Mimmo Pignatelli",
        "Giacinto Garofalo",
        "Enzo De Leonardis",
        "Donato Sofia",
        "Antonio Violino",
        "Michele Calabrese",
        "Peppe Rizzo",
        "Orazio Meo",
        "Leonardo Francavilla",
        "Stefano Bellucco",
        "Giovanni Spagnuolo",
        "Raffaele Aceto",
        "Pippo Pasquino"
    ]
};

datiFoto["F011"] = {
    evento: "Squadra di calcio torneo interno ORG",
    persone: [
        "Giacinto Dell'Erba",
        "Remo Epifani",
        "Nicola Chisena",
        "Donato Addabbo",
        "Enzo De Leonardis"        
    ]
};
datiFoto["F012"] = {
    evento: "Squadra di calcio torneo interno ORG",
    persone: [
        "Giacinto Dell'Erba",
        "Mimmo Pignatelli",
        "Stefano Bellucco",
        "Orazio Meo",
        "Enzo Antonacci", "Pippo Pasquino", "altri..."        
    ]
};
datiFoto["F017"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: [
        "Alberto Belforte",
        "Vittorio Ritelli",
        "Franco Di Maggio",
        "Mariapia De Marzo",
        "Rosa Lodeserto"
    ]
};

