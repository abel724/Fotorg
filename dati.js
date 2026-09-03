const datiFoto = {};

for (let i = 1; i <= 100; i++) {
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
    persone: ["Cesarino Gervasi", "Nicola Mastrorocco",
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

datiFoto["F037"] = {
    evento: "Ufficio nuova DIS",
    persone: ["Enzo De Leonardis", "Enzo Innato", "Cesarino Gervasi",
              "Franco De Vitis", "Piero Spedicati"]              
};

datiFoto["F038"] = {
   evento: "Squadra di calcio torneo Interno ORG",
   persone: ["Peppe Marangi", "Franco Perna", "Pino Calamita", "Raffaele Aceto", 
              "Piero Spedicati"]
                            
};

datiFoto["F039"] = {
    evento: "Squadra di calcio torneo Interno ORG",
 persone: ["Maurizio Sarti", "Dino Rondinelli", "Enzo De Leonardis", "Claudio Virtù"]
                            
};

datiFoto["F040"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Enzo De Leonardis", "Orazio Meo"]                            
};

datiFoto["F041"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Lino Battista", "Antonio Candelli", "Piero Spedicati"]                            
};

datiFoto["F042"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Enfico zo De Leonardis", "Dino Rondinelli", "Anna Cavallo",
              "Matteo Mucci"]                            
};

datiFoto["F043"] = {
    evento: "Centro meccanografico",
    persone: ["Mimmo Pignatelli", "Pino Dalema"]                            
};

datiFoto["F044"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Orazio Meo"]                            
};

datiFoto["F045"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Pippo Pasquino"]                            
};

datiFoto["F046"] = { 
    evento: "Evento sconosciuto",
    persone: ["Sconosciuti", "Chi ha postato la foto su WhatsApp?"]                            
};

datiFoto["F047"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Elio Ferrari", "Matteo Mucci", "Franco Di Maggio"]                            
};

datiFoto["F048"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Orazio Meo", "Andrea Andolfatto", "Enzo De Leonardis"]                            
};

datiFoto["F049"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Rosa Lodeserto", "Mariapia De Marzo", "Vittorio Ritelli"]                            
};

datiFoto["F050"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Pippo Pasquino", "Renato Ingenito", "Mimmo Pignatelli"]                            
};

datiFoto["F051"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Renato Ingenito", "Mimmo Pignatelli", "Lino Battista"]                            
};

datiFoto["F052"] = {
    evento: "1° Raduno ORGonauti Presso Auchan del 18/12/2024",
    persone: ["Alberto Belforte", "Orazio Meo", "Claudio De Felice"]                            
};

datiFoto["F053"] = {
    evento: "Gli anni verdi",
    persone: ["Franco Di Maggio"]                            
};

datiFoto["F054"] = {
    evento: "Centro meccanografico",
    persone: ["Cesarino Gervasi"]                            
};

datiFoto["F055"] = {
    evento: "Salone nuova DIS",
    persone: ["Ciccio Lusso", "Alberto Valente", "Donato Sofia", "??",
              "Franco Presicci", "??", "Enzo De Leonardis", "Mario De Mitri",
              "Luciano Cambara", "Rosa Lodeserto"]
};

datiFoto["F056"] = {
    evento: "Ufficio nuova DIS",
    persone: ["Alberto Belforte", "Peppino Telegrafo", "Mauro Patacconi",
              "Antonio Ettorre", "Carmelo Cacace"]
};

datiFoto["F057"] = {
    evento: "Sconosciuto",
    persone: ["Enzo De Leonardis", "Enzo Antonacci",
              "??", "??"]
};

datiFoto["F058"] = {
    evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
    persone: ["Nicola Mastrorocco", "Michele Adamo", "Rocco De Luca"
              ]
};

datiFoto["F059"] = {
    evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
    persone: ["Nicola Mastrorocco", "Michele Adamo", "Rocco De Luca"
              ]
};

datiFoto["F060"] = {
    evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
    persone: ["Nicola Mastrorocco", "Michele Adamo", "Rocco De Luca"
              ]
};

datiFoto["F061"] = {
    evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
    persone: ["Nicola Mastrorocco", "Michele Adamo", "Rocco De Luca"
              ]
};

datiFoto["F062"] = {
    evento: "3° Raduno ORGonauti Presso ristorante daMe' del 14/05/2026",
    persone: ["Piero Spedicati", "Mimmo Pignatelli", "Renzo Dolfini",
              "Emmanuele Latanza", "Sig.ra Latanza", "Remo Epifani", "Tonia Epifani",
              "Rosa Lodeserto", "Franco Malknect", "Nicola Baldi", "Enzo Antonacci",
      "Vittorio Ritelli", "Mariapia De Marzo", "Mariella Tangorra", "Pippo Pasquino",
      "Orazio Eramo", "Rizzo G,", "Rizzo F.", "Egidio Burreddu", "Claudio Virtù",
      "Vito Calamita", "Angelo Nardelli"]
};

datiFoto["F063"] = {
    evento: "3° Raduno ORGonauti Presso ristorante daMe' del 14/05/2026",
    persone: ["Renzo Dolfini",
              "Emmanuele Latanza", "Sig.ra Latanza", "Tonia Epifani",
              "Rosa Lodeserto", "Franco Malknect", "Nicola Baldi", "Enzo Antonacci",
      "Vittorio Ritelli", "Mariapia De Marzo", "Mariella Tangorra", "Pippo Pasquino",
      "Rizzo G,", "Rizzo F.", "Egidio Burreddu", "Claudio Virtù",
      "Vito Calamita", "Angelo Nardelli"]
};

datiFoto["F064"] = {
    evento: "Da solo",
    persone: ["Remo Epifani"]                            
};

datiFoto["F065"] = {
    evento: "3° Raduno ORGonauti Presso ristorante daMe' del 14/05/2026",
    persone: ["Andrea Andolfatto", "Renzo Dolfini", "Renato Ingenito", 
       "Emmanuele Latanza", "Sig.ra Latanza", "Tonia Epifani", "Remo Epifani",
              "Vittorio Ritelli", "Michele Adamo", "Egidio Burreddu",        
              "Rizzo G,", "Rizzo F.", "Enzo Loperfido", "Nicola Baldi"
      ]
};

datiFoto["F066"] = {
    evento: "3° Raduno ORGonauti Presso ristorante daMe' del 14/05/2026",
    persone: ["Renzo Dolfini", "Renato Ingenito", 
              "Remo Epifani",
              "Vittorio Ritelli", "Michele Adamo"       
              
      ]
};

datiFoto["F067"] = {
    evento: "4° Raduno ORGonauti Presso ristorante daMe' del 2/7/2026",
    persone: ["Arturo Imperio", "Franco MalKnecht", "Nicola Baldi", "Andrea Andolfatto",     
              "Francesco Rizzo", "Renzo Dolfini", "Remo Epifani", "Giuseppe Rizzo",
              "Michele Adamo", "Renato Ingenito", "Enzo Loperfido", "Egidio Burreddu"]
};

datiFoto["F068"] = {
evento: "4° Raduno ORGonauti Presso ristorante daMe' del 2/7/2026",
persone: ["Rosa Lodeserto","Sig.ra Loperfido", "Franco MalKnecht", "Nicola Baldi",
          "Andrea Andolfatto", "Francesco Rizzo", "Renzo Dolfini", "Remo Epifani", 
          "Michele Adamo", "Giuseppe Rizzo", "Renato Ingenito",
          "Enzo Loperfido", "Egidio BUrreddu", "Francesca Baldi"
]
};

datiFoto["F069"] = {
evento: "evento non noto",
persone: [
  "Antonio Giove", "Piero Spedicati", "Remo Epifani", "Franco Di Maggio"] 
};

datiFoto["F070"] = {
evento: "4° Raduno ORGonauti Presso ristorante daMe' del 2/7/2026",
persone: ["Arturo Imperio", "Franco MalKnecht", "Nicola Baldi",
          "Andrea Andolfatto", "Francesco Rizzo", "Renzo Dolfini", "Remo Epifani",
          "Giuseppe Rizzo", "Enzo Loperfido", "Egidio Burreddu"]
};

datiFoto["F071"] = {
evento: "4° Raduno ORGonauti Presso ristorante daMe' del 2/7/2026",
persone: [
       "Francesca Baldi", "Tonia Epifani", "Sig.ra Imperio", "Rosa Lodeserto", 
       "Sig.ra Loperfido"]
};

datiFoto["F072"] = {
evento: "Centro meccanografico",
persone: [
       "Mario De Mitri", "Enzo Innato", "Paolo Pascale", "Franco Marzo", 
       "Peppe Rametta", "Michele Calabrese", "Peppe Perruccio"]
};

datiFoto["F073"] = {
 evento: "Centro meccanografico",
 persone: [
       "Benedetto Pignatelli", "Giovanni Sonnante", "Enzo innato",  
       "Peppe Perruccio", "Cesarino Gervasi"]
};

datiFoto["F074"] = {
 evento: "Centro meccanografico",
 persone: [
       "Enzo Innato", "Peppe Perruccio", "Leo Torchetti",  
       "Peppino Conte"]
};

datiFoto["F075"] = {
 evento: "Centro meccanografico",
 persone: [
       "??", "Peppe Perruccio", "Cesarino Gervasi",  
       "Peppe Perruccio", "Tonino Chimenti", "Enzo Innato"]
};

datiFoto["F076"] = {
evento: "2° Raduno ORGonauti presso ristorante Rosso di Sera del 9/05/2025",
persone: [
  "Vittorio Ritelli", "Orazio Eramo"] 
};

datiFoto["F077"] = {
evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
persone: [
  "Vittorio Ritelli", "Nicola Mastrorocco"] 
};

datiFoto["F078"] = {
evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
persone: [
  "Nicola Mastrorocco", "Michele Adamo", "Renzo Dolfini", "Rocco De Luca"] 
};

datiFoto["F079"] = {
evento: "Centro meccanografico",
persone: [
  "Franco Marzo", "Vittorio Ritelli", "e l'altro?"] 
};

datiFoto["F080"] = {
evento: "3° Raduno ORGonauti presso Auchan del 03/12/2025",
persone: [
  "Orazio Eramo", "Alberto Belforte", "Antonio Candelli", "Rocco De Luca",
  "Michele Adamo", "Franco Di Maggio", "Vito Calella", "Antonio Carrino"] 
};

datiFoto["F081"] = {
evento: "3° Raduno ORGonauti presso Auchan del 03/12/2025",
persone: [
   "Giuseppe Rizzo", "Aldo Galasso", "Sebastiano Gonnella", "Raffaele Aceto", 
   "Francesco Rizzo", "Renato Ingenito"] 
};

datiFoto["F082"] = {
evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
persone: [
  "Antonio Carrino","Renzo Dolfini", "Remo Epifani", 
  "Vittorio Ritelli", "Nicola Mastrorocco"] 
};

datiFoto["F083"] = {
evento: "Incontro a pranzo al ristorante la Paranza del 17/12/2025",
persone: [
  "Alberto Belforte", "Vittorio Ritelli", "Nicola Mastrorocco",  
  "Michele Adamo", "Rocco De Luca"] 
};




