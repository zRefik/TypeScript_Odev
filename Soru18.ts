// SADECE BU SATIRI DEĞİŞTİRİN
type LastParameter<T> = T extends (...args: [...infer Rest, infer L]) => any ? L : never;

// ---- KOD BLOKU (DOKUNMAYIN) ----
const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

let p1: LastParameter<typeof fn1> = true;
let p2: LastParameter<typeof fn2> = new Date();

// @ts-expect-error - 'fn1'in son parametresi 'boolean', 'string' değil
let errorP: LastParameter<typeof fn1> = "string";

console.log("Soru 18 Başarılı!", p1);
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 18 Başarılı!" yazması)
