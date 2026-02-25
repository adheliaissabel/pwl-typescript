function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo saya ${input}`;
    } else {
        return `Umur saya ${input} tahun`;
    }
}

console.log(sapaan("Adhelia Issabel"));
console.log(sapaan(19));