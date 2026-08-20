const datiFoto = {};

for (let i = 1; i <= 75; i++) {
    const numero = String(i).padStart(3, "0");

    datiFoto["F" + numero] = {
        evento: "",
        persone: []
    };
}

// DATI DI PROVA

datiFoto["F001"] = {
    evento: "Raduno ORGonauti presso Auchan del 18/12/2025",
    persone: ["Enzo Antonacci", "Mariella Tangorra"]
};

datiFoto["F002"] = {
    evento: "Centro meccanografico siderurgico",
    persone: ["Enzo Loperfido", "Raffaele Cocchiaro"]
};

datiFoto["F008"] = {
    evento: "Centro meccanografico siderurgico",
    persone: [
        "Cesarin Gervasi",
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
    evento: "Evento sconosciuto",
    persone: [
        "Donato Sofia",
        "Enzo Picheca",
        "Enzo De Leonardis",
        "Remo Epifani"
    ]
};

datiFoto["F017"] = {
    evento: "Raduno ORGonauti presso Auchan del 18/12/2025",
    persone: [
        "Alberto Belforte",
        "Vittorio Ritelli",
        "Ciccio Di Maggio",
        "Mariapia De Marzo",
        "Rosa Lodeserto"
    ]
};