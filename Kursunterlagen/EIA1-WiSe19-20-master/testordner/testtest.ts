var europa = "EUROPA";
var asien = "ASIEN";
var afrika = "AFRIKA";
var südamerika = "SÜDAMERIKA";
var nordamerika = "NORDAMERIKA";
var australien = "AUSTRALIEN";
var afrikae2018 = 1235.5;
var südamerikae2018 = 1261.5;
var europae2018 = 4209.3;
var nordamerikae2018 = 6035.6;
var asiene2018 = 16274.1;
var australiene2018 = 2100.5;
var afrikae2008 = 1028;
var südamerikae2008 = 1132.6;
var europae2008 = 4965.7;
var nordamerikae2008 = 6600.4;
var asiene2008 = 12954.7;
var australiene2008 = 1993;
var gesamte2018 = afrikae2018 + europae2018 + südamerikae2018 + nordamerikae2018 + asiene2018 + australiene2018;

console.log(australien);
console.log("Die Emission von Australien beträgt: " + australiene2018 + "kg CO2.");
var anteilaustralien2018 = (australiene2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + anteilaustralien2018 + "%.");
var wachstumaustralienvon2008zu2018absolut = australiene2018 - australiene2008;
var wachstumaustralienvon2008zu2018prozentual = -((wachstumaustralienvon2008zu2018absolut / australiene2008) * 100);
console.log("In Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumasienvon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumaustralienvon2008zu2018absolut + "kg CO2.");
console.log(südamerika);
console.log("Die Emission von Südamerika beträgt: " + südamerikae2018 + "kg CO2.");
var anteilsüdamerika2018 = (südamerikae2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + anteilsüdamerika2018 + "%.");
var wachstumsüdamerikavon2008zu2018absolut = südamerikae2018 - südamerikae2008;
var wachstumsüdamerikavon2008zu2018prozentual = -((wachstumsüdamerikavon2008zu2018absolut / südamerikae2008) * 100);
console.log("In Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumsüdamerikavon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumsüdamerikavon2008zu2018absolut + "kg CO2.");
console.log(afrika);
console.log("Die Emission von Afrika beträgt: " + afrikae2018 + "kg CO2.");
var anteilafrika2018 = (afrikae2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + anteilafrika2018 + "%.");
var wachstumafrikavon2008zu2018absolut = afrikae2018 - afrikae2008;
var wachstumafrikavon2008zu2018prozentual = -((wachstumafrikavon2008zu2018absolut / afrikae2008) * 100);
console.log("In Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumafrikavon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumafrikavon2008zu2018absolut + "kg CO2.");
console.log(nordamerika);
console.log("Die Emission von Nordamerika beträgt: " + nordamerikae2018 + "kg CO2.");
var anteilnordamerika2018 = (nordamerikae2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + anteilnordamerika2018 + "%.");
var wachstumnordamerikavon2008zu2018absolut = nordamerikae2018 - nordamerikae2008;
var wachstumnordamerikavon2008zu2018prozentual = -((wachstumnordamerikavon2008zu2018absolut / nordamerikae2008) * 100);
console.log("In Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumnordamerikavon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumnordamerikavon2008zu2018absolut + "kg CO2.");
console.log(europa);
console.log("Die Emission von Europa beträgt: " + europae2018 + "kg CO2.");
var anteileuropa2018 = (europae2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + anteileuropa2018 + "%.");
var wachstumeuropavon2008zu2018absolut = europae2018 - europae2008;
var wachstumeuropavon2008zu2018prozentual = -((wachstumeuropavon2008zu2018absolut / europae2008) * 100);
console.log("In Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumeuropavon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumeuropavon2008zu2018absolut + "kg CO2.");
console.log(asien);
console.log("Die Emission von Asien beträgt: " + asiene2018 + "kg CO2.");
var anteilasien2018 = (asiene2018 / gesamte2018) * 100;
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + anteilasien2018 + "%.");
var wachstumasienvon2008zu2018absolut = asiene2018 - asiene2008;
var wachstumasienvon2008zu2018prozentual = -((wachstumasienvon2008zu2018absolut / asiene2008) * 100);
console.log("In Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + wachstumasienvon2008zu2018prozentual + "% verändert.");
console.log("Im Vergleich von 2018 zu 2008 sind das " + wachstumasienvon2008zu2018absolut + "kg CO2.");
