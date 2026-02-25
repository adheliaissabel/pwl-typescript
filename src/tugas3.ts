class Lingkaran{
    jariJari: number;

    constructor(jariJari: number){
        this.jariJari = jariJari;
    }

    hitungLuas(): number{
        return Math.PI * this.jariJari ** 2;
    }
}

const Lingkaran1 = new Lingkaran(10);
console.log("LuasLingkaran:", Lingkaran1.hitungLuas());