const datiFoto = {};

for (let i = 1; i <= 75; i++) {
    const numero = String(i).padStart(3, "0");

    datiFoto["F" + numero] = {
        evento: "",
        persone: []
    };
}