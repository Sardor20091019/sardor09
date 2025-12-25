console.log(+typeof typeof {});

console.log(+(+"0") + 1);

console.log(+231 + "21" - 23121);

console.log(+23.4 | (0 - -2));

console.log(+[] + []);

console.log(+[] + {});

console.log(+"1: " + {} + []);

console.log(+{} + {});

console.log(+1 + "2" + 3);

console.log(+"1" - "2" + "3");

console.log(+null == 0);

console.log(+null >= 0);

console.log(+NaN === NaN);

console.log(+"5" - -"2");

console.log(+0.1 + 0.2 === 0.3);

console.log(+" \t\n" - 2);

//1
class Talaba {
  constructor(ism, familiya, yosh, guruh) {
    this.ism = ism;
    this.familiya = familiya;
    this.yosh = yosh;
    this.guruh = guruh;
  }
  info() {
    return `Talaba: ${this.ism} ${this.familiya}, Yosh: ${this.yosh}, Guruh: ${this.guruh}`;
  }
}
let t1 = new Talaba("Ali", "Valiyev", 20, "CS101");
console.log(t1.info());

//2
class Kalkulyator {
  qoshish(a, b) {
    return a + b;
  }
  ayirish(a, b) {
    return a - b;
  }
  kopaytirish(a, b) {
    return a * b;
  }
  bolish(a, b) {
    return b === 0 ? "Xato: 0 ga bo'lish mumkin emas" : a / b;
  }
}
let k = new Kalkulyator();
console.log(k.qoshish(5, 3));
console.log(k.ayirish(5, 3));
console.log(k.kopaytirish(5, 3));
console.log(k.bolish(5, 0));

//3
class Kitob {
  constructor(nomi, muallif, sahifalar_soni) {
    this.nomi = nomi;
    this.muallif = muallif;
    this.sahifalar_soni = sahifalar_soni;
  }
  info() {
    return `Kitob: ${this.nomi}, Muallif: ${this.muallif}, Sahifalar soni: ${this.sahifalar_soni}`;
  }
}
let k1 = new Kitob("Python Darsligi", "Ali Valiyev", 350);
console.log(k1.info());

//4
class BankHisobi {
  constructor(hisob_raqami, egasi_ismi, balans = 0) {
    this.hisob_raqami = hisob_raqami;
    this.egasi_ismi = egasi_ismi;
    this.balans = balans;
  }
  pul_qoshish(summa) {
    this.balans += summa;
    console.log(`${summa} qo‘shildi. Yangi balans: ${this.balans}`);
  }
  pul_yechish(summa) {
    if (summa <= this.balans) {
      this.balans -= summa;
      console.log(`${summa} yechildi. Yangi balans: ${this.balans}`);
    } else {
      console.log("Balans yetarli emas!");
    }
  }
  balans_korish() {
    console.log(`Joriy balans: ${this.balans}`);
  }
}
let b = new BankHisobi("12345", "Ali", 1000);
b.pul_qoshish(500);
b.pul_yechish(2000);
b.pul_yechish(1000);
b.balans_korish();

//5
class Transport {
  constructor(nomi, tezligi) {
    this.nomi = nomi;
    this.tezligi = tezligi;
  }
  harakatlanish() {
    console.log(
      `${this.nomi} ${this.tezligi} km/h tezlik bilan harakatlanmoqda`
    );
  }
}
class Avtomobil extends Transport {
  constructor(nomi, tezligi, yoqilgi_turi) {
    super(nomi, tezligi);
    this.yoqilgi_turi = yoqilgi_turi;
  }
  signal_berish() {
    console.log(`${this.nomi} signal berdi! Beep beep!`);
  }
}
class Mototsikl extends Transport {
  constructor(nomi, tezligi, turi) {
    super(nomi, tezligi);
    this.turi = turi;
  }
  signal_berish() {
    console.log(`${this.nomi} mototsikl signal berdi!`);
  }
}
let car = new Avtomobil("Toyota", 120, "Benzin");
car.harakatlanish();
car.signal_berish();
let moto = new Mototsikl("Yamaha", 100, "sport");
moto.harakatlanish();
moto.signal_berish();

//6
class Mahsulot {
  constructor(nomi, narxi, soni) {
    this.nomi = nomi;
    this.narxi = narxi;
    this.soni = soni;
  }
  umumiy_qiymat() {
    return this.narxi * this.soni;
  }
}
let m1 = new Mahsulot("Olma", 5000, 10);
let m2 = new Mahsulot("Non", 3000, 5);
console.log(m1.umumiy_qiymat());
console.log(m2.umumiy_qiymat());

//7
class KitobK {
  constructor(id, nomi, muallif, mavjudmi = true) {
    this.id = id;
    this.nomi = nomi;
    this.muallif = muallif;
    this.mavjudmi = mavjudmi;
  }
}
class Foydalanuvchi {
  constructor(id, ismi) {
    this.id = id;
    this.ismi = ismi;
    this.olingan_kitoblar = [];
  }
}
class Kutubxona {
  constructor() {
    this.kitoblar = [];
    this.foydalanuvchilar = [];
  }
  kitob_qoshish(kitob) {
    this.kitoblar.push(kitob);
  }
  kitob_berish(foydalanuvchi_id, kitob_id) {
    let user = this.foydalanuvchilar.find((u) => u.id === foydalanuvchi_id);
    let book = this.kitoblar.find((k) => k.id === kitob_id);
    if (book && book.mavjudmi) {
      user.olingan_kitoblar.push(book);
      book.mavjudmi = false;
      console.log(`${book.nomi} foydalanuvchi ${user.ismi} ga berildi`);
    } else {
      console.log("Kitob mavjud emas yoki allaqachon berilgan");
    }
  }
  kitob_qaytarish(foydalanuvchi_id, kitob_id) {
    let user = this.foydalanuvchilar.find((u) => u.id === foydalanuvchi_id);
    let index = user.olingan_kitoblar.findIndex((k) => k.id === kitob_id);
    if (index !== -1) {
      user.olingan_kitoblar[index].mavjudmi = true;
      console.log(`${user.olingan_kitoblar[index].nomi} qaytarildi`);
      user.olingan_kitoblar.splice(index, 1);
    } else {
      console.log("Kitob topilmadi foydalanuvchida");
    }
  }
  mavjud_kitoblar() {
    return this.kitoblar.filter((k) => k.mavjudmi);
  }
}
let kutubx = new Kutubxona();
let fk1 = new Foydalanuvchi(1, "Ali");
kutubx.foydalanuvchilar.push(fk1);
let kb1 = new KitobK(1011, "Albert Eintsttein Darsligi", "Albert Eintsttein");
kutubx.kitob_qoshish(kb1);
kutubx.kitob_berish(1, 101);
kutubx.kitob_qaytarish(1, 101);
console.log(kutubx.mavjud_kitoblar());

//8
class MProduct {
  constructor(nomi, narxi) {
    this.nomi = nomi;
    this.narxi = narxi;
  }
  chegirma_hisoblash() {
    return this.narxi;
  }
}
class Elektronika extends MProduct {
  chegirma_hisoblash() {
    return this.narxi * 0.9;
  }
}
class Kiyim extends MProduct {
  chegirma_hisoblash() {
    return this.narxi * 0.85;
  }
}
class OziqOvoq extends MProduct {
  chegirma_hisoblash() {
    return this.narxi * 0.95;
  }
}
class Savatcha {
  constructor() {
    this.mashulotlar = [];
  }
  qoshish1(m) {
    this.mashulotlar.push(m);
  }
  umumiy_narx() {
    return this.mashulotlar.reduce((sum, m) => sum + m.chegirma_hisoblash(), 0);
  }
}
let s = new Savatcha();
s.qoshish1(new Elektronika("Telefon", 1000));
s.qoshish1(new Kiyim("Kofta", 100));
s.qoshish1(new OziqOvoq("Olma", 10));
console.log(s.umumiy_narx());

//9
class Xodim {
  constructor(ismi) {
    if (this.constructor === Xodim) throw new Error("Abstract class");
    this.ismi = ismi;
  }
  maosh_hisoblash() {
    throw new Error("Implement me");
  }
}
class Dasturchi extends Xodim {
  constructor(ismi, soatlik, soatlar) {
    super(ismi);
    this.soatlik = soatlik;
    this.soatlar = soatlar;
  }
  maosh_hisoblash() {
    return this.soatlik * this.soatlar;
  }
}
class Dizayner extends Xodim {
  constructor(ismi, oylik, bonus) {
    super(ismi);
    this.oylik = oylik;
    this.bonus = bonus;
  }
  maosh_hisoblash() {
    return this.oylik + this.bonus;
  }
}
class Menejer extends Xodim {
  constructor(ismi, asosiy, jamoa_bonus) {
    super(ismi);
    this.asosiy = asosiy;
    this.jamoa_bonus = jamoa_bonus;
  }
  maosh_hisoblash() {
    return this.asosiy + this.jamoa_bonus;
  }
}
class Kompaniya {
  constructor() {
    this.xodimlar = [];
  }
  umumiy_maosh() {
    return this.xodimlar.reduce((s, x) => s + x.maosh_hisoblash(), 0);
  }
}
let comp = new Kompaniya();
let d = new Dasturchi("Ali", 50, 160);
let di = new Dizayner("Vali", 3000, 500);
let m = new Menejer("Olim", 4000, 1000);
comp.xodimlar.push(d, di, m);
console.log(comp.umumiy_maosh());

//10
class Hayvon {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
  ovoz_chiqarish() {
    console.log("Ovoz chiqadi");
  }
}
class Mushuk extends Hayvon {
  ovoz_chiqarish() {
    console.log("Myau!");
  }
}
class It extends Hayvon {
  ovoz_chiqarish() {
    console.log("Vov-vov!");
  }
}
class Qush extends Hayvon {
  ovoz_chiqarish() {
    console.log("Chirp-chirp!");
  }
}
let h1 = new Mushuk("Mushuk", 3);
let h2 = new It("It", 5);
let h3 = new Qush("Qush", 1);
h1.ovoz_chiqarish();
h2.ovoz_chiqarish();
h3.ovoz_chiqarish();

//11
class Shakl {
  constructor(rang) {
    this.rang = rang;
  }
  malumot() {
    console.log(`Shakl rangi: ${this.rang}`);
  }
}
class Doira extends Shakl {
  constructor(rang, radius) {
    super(rang);
    this.radius = radius;
  }
  yuza_hisoblash() {
    return 3.14 * this.radius ** 2;
  }
  malumot() {
    console.log(`Doira, rangi: ${this.rang}, radiusi: ${this.radius}`);
  }
}
class Kvadrat extends Shakl {
  constructor(rang, tomon) {
    super(rang);
    this.tomon = tomon;
  }
  yuza_hisoblash() {
    return this.tomon ** 2;
  }
  malumot() {
    console.log(`Kvadrat, rangi: ${this.rang}, tomoni: ${this.tomon}`);
  }
}
class Uchburchak extends Shakl {
  constructor(rang, a, b, c) {
    super(rang);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  yuza_hisoblash() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  malumot() {
    console.log(
      `Uchburchak, rangi: ${this.rang}, tomonlari: ${this.a},${this.b},${this.c}`
    );
  }
}
let d2 = new Doira("Qizil", 5);
let k2 = new Kvadrat("Ko'k", 4);
let u2 = new Uchburchak("Yashil", 3, 4, 5);
d2.malumot();
console.log(d2.yuza_hisoblash());
k2.malumot();
console.log(k2.yuza_hisoblash());
u2.malumot();
console.log(u2.yuza_hisoblash());

//12
class Inson {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
  tanishuv() {
    return `Salom, mening ismim ${this.ism}, yoshim ${this.yosh}`;
  }
}
class TalabaI extends Inson {
  constructor(ism, yosh, guruh, baholar = []) {
    super(ism, yosh);
    this.guruh = guruh;
    this.baholar = baholar;
  }
}
class Oqituvchi extends Inson {
  constructor(ism, yosh, fan, tajriba) {
    super(ism, yosh);
    this.fan = fan;
    this.tajriba = tajriba;
  }
}
class Ishchi extends Inson {
  constructor(ism, yosh, lavozim, maosh) {
    super(ism, yosh);
    this.lavozim = lavozim;
    this.maosh = maosh;
  }
}
let ti = new TalabaI("Ali", 20, "CS101", [5, 4, 3]);
let oq = new Oqituvchi("Vali", 35, "Matematika", 10);
let ish = new Ishchi("Olim", 40, "Muhandis", 5000);
console.log(ti.tanishuv());
console.log(oq.tanishuv());
console.log(ish.tanishuv());

//13
class TransportI {
  constructor(nomi, tezligi, sigimi) {
    this.nomi = nomi;
    this.tezligi = tezligi;
    this.sigimi = sigimi;
  }
  harakatlanish() {
    console.log(`${this.nomi} harakatlanmoqda`);
  }
  toxtash() {
    console.log(`${this.nomi} to'xtadi`);
  }
}
class YerTransporti extends TransportI {
  constructor(nomi, tezligi, sigimi, gildiraklar_soni) {
    super(nomi, tezligi, sigimi);
    this.gildiraklar_soni = gildiraklar_soni;
  }
}
class HavoTransporti extends TransportI {
  constructor(nomi, tezligi, sigimi, balandlik) {
    super(nomi, tezligi, sigimi);
    this.balandlik = balandlik;
  }
}
class SuvTransporti extends TransportI {
  constructor(nomi, tezligi, sigimi, suvdagi_tezlik) {
    super(nomi, tezligi, sigimi);
    this.suvdagi_tezlik = suvdagi_tezlik;
  }
}
class AvtomobilI extends YerTransporti {}
class AvtobusI extends YerTransporti {}
class SamolyotI extends HavoTransporti {}
class VertolyotI extends HavoTransporti {}
class KemaI extends SuvTransporti {}
class QayiqI extends SuvTransporti {}
let avto = new AvtomobilI("Toyota", 120, 5, 4);
let bus = new AvtobusI("Mercedes", 100, 50, 6);
let sam = new SamolyotI("Boeing", 900, 200, 10000);
avto.harakatlanish();
bus.harakatlanish();
sam.harakatlanish();

//14
class Qurilma {
  constructor(nomi, ishlab_chiqaruvchi, narxi) {
    this.nomi = nomi;
    this.ishlab_chiqaruvchi = ishlab_chiqaruvchi;
    this.narxi = narxi;
  }
  yoqish() {
    console.log(`${this.nomi} yoqildi`);
  }
  ochirish() {
    console.log(`${this.nomi} o'chirildi`);
  }
  kafolat_muddati() {
    return "1 yil";
  }
}
class Kompyuter extends Qurilma {
  constructor(nomi, ishlab_chiqaruvchi, narxi, ram) {
    super(nomi, ishlab_chiqaruvchi, narxi);
    this.ram = ram;
  }
  texnik_xususiyatlar() {
    console.log(`${this.nomi}: RAM=${this.ram}, Narx=${this.narxi}`);
  }
}
class Telefon extends Qurilma {
  constructor(nomi, ishlab_chiqaruvchi, narxi, kamera) {
    super(nomi, ishlab_chiqaruvchi, narxi);
    this.kamera = kamera;
  }
  texnik_xususiyatlar() {
    console.log(`${this.nomi}: Kamera=${this.kamera}, Narx=${this.narxi}`);
  }
}
class Planshet extends Qurilma {
  constructor(nomi, ishlab_chiqaruvchi, narxi, ekran) {
    super(nomi, ishlab_chiqaruvchi, narxi);
    this.ekran = ekran;
  }
  texnik_xususiyatlar() {
    console.log(`${this.nomi}: Ekran=${this.ekran}, Narx=${this.narxi}`);
  }
}
let pc = new Kompyuter("Dell", "Dell", 1200, 16);
let phone = new Telefon("iPhone", "Apple", 2000, 12);
let tab = new Planshet("iPad", "Apple", 1500, 11);
pc.yoqish();
pc.texnik_xususiyatlar();
phone.yoqish();
phone.texnik_xususiyatlar();
tab.yoqish();
tab.texnik_xususiyatlar();
