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
        "Ciccio Lusso",
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

datiFoto["F013"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Enzo Innato"]
 
};

datiFoto["F014"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Enzo Innato", "Giovanni Sonnante"]
 
};

datiFoto["F015"] = {
    evento: "Centro meccanografico siderurgico",
    
    persone: ["Vito Calella", "Stefano Bellucco", "Nando Carfora",
            "Ciccio Pignatelli", "Massimo Fornaro", "Emanuele Galasso",         
             "Angelo Rusciano"]
 
};

datiFoto["F016"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: [
        "Piero Nasole",
        "Pippo Pasquino",
        "Renato Ingenito",
        "Enzo Antonacci"
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

datiFoto["F018"] = {
evento:  "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Pippo Pasquino", "Ciccio Di Maggio",
             "Renato Ingenito", "Mimmo Pignatelli", 
             "Andrea Andolfatto", "Lino Battista"]
};

datiFoto["F019"] = {
evento:  "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Piero Spedicati", "Ciccio Di Maggio",
             "Renato Ingenito", "Mimmo Pignatelli", 
             "Andrea Andolfatto", "Lino Battista"]
};

datiFoto["F020"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Cesarino Gervasi", "Gianni Fusco",
              "Antonio De Pascale", "Alfonso Nitto", 
              "Franco Di Maggio", "Vittorio Ritelli"] 
};

datiFoto["F021"] = {
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Orazio Meo", "Enzo Antonacci", "Mario Stranieri",
            "Mimmo Pignatelli", "Vito Calella", "Maurizio Sarti", "Mimmo Ferrucci"] 
};

datiFoto["F022"] = {   
    evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
    persone: ["Piero Spedicati", "Vito Calella", 
            "Mimmo Pignatelli", "Lino Battista", "Mimmo Ferrucci",
             "Mario Stranieri"]
};

datiFoto["F023"] = {
    evento:  "Brindisi per avviamento progetto",
    persone: ["Ciccio Caroli", "Peppe Margarita", "Nicola Chisena",
             "Donato Sofia", "Gigi Presta", "Cesarino Gervasi", "Carmine Mariella"]
};

datiFoto["F024"] = {
evento: "In attesa di ...",
persone: [
          "Arturo Imperio"]
};
   
datiFoto["F025"] = {
evento: "1° Raduno ORGonauti presso Auchan del 18/12/2024",
persone: [
          "Mario Stranieri", "Antonio Giove"]
};

datiFoto["F026"] = {
evento: "In pensione?",
persone: [
"Arturo Imperio"
]
};

datiFoto["F027"] = {
evento: "Matrimonio di Arturo Imperio",
persone: [
          "Cecchino Sossi", "Tonino Blasi", "Bruno Di  Castri", 
          "Michele Adamo", "Ciccio Gentile", "Arturo Imperio", 
          "Manlio Lomartire"
]
};
   
datiFoto["F028"] = {
evento: "A spasso",
persone: [
"Manlio Lomartire", "Ivan D'Ambrosio", "Tommaso Amendolito", 
"?", "Bruno Di Castri", "Voltolina", 
"Giovanni Passantino"
]
};

datiFoto["F029"] = {
evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
persone: [
"Claudio Virtù", "Franco Di Maggio", "Maria Pia De Marzo",
"Vittorio Ritelli"
]
};

datiFoto["F030"] = {
evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
persone: [
"Dino Tucci", "Claudio De Felice"
]
};
datiFoto["F031"] = {
    evento: "Discorso Sommelier AIS Taranto",
    persone: ["Domenico Stanzione"]
};

datiFoto["F032"] = {
    evento: "Controllo Avviamento progetto",
    persone: ["Peppe Perruccio", 
              "Remo Epifani", "Ciccio Pignatelli", "Gigi Presta"],
};

datiFoto["F033"] = {
    evento: "Centro meccanografico siderurgico",

    persone: ["Enzo Loperfido", "Franco Fuggiano", "??"]
};

datiFoto["F034"] = {
    evento: "Squadra di calcio torneo Interno ORG",
    persone: ["Arturo Imperio", "Ciccio Lusso", "?", "?", "?", 
              "Franco Perna", "Pietro Primiceri", 
              "Vito Calamita", "Franco Presicci", "Mario Sarra", "e Altri"]
};

datiFoto["F035"] = {
    evento: "Salone nuova DIS",
    persone: ["Antonio Giove", "Pasquale Ferrara", "Nando Carfora",
              "Carmine Mariella"]
};

datiFoto["F036"] = {
    evento: "Ufficio nuova DIS",
    persone: ["Angelo Prete", "Ciccio Lomartire", "Antonio Violino",
              "Vito Calamita", "Peppe Rametta", "Luigi Presta",
              "Stefano Bellucco", "Ciccio Pignatelli", "Gino Palomba",
              "Nicola Chisena"]
};
