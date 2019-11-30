var Europa2008 = 4965.7;
var Europa2018 = 4209.3;
var NorthAmerica2008 = 6600.4;
var NorthAmerica2018 = 6035.6;
var SouthAmerica2008 = 1132.6;
var SouthAmerica2018 = 1261.5;
var Africa2008 = 1028;
var Africa2018 = 1235.5;
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
var Australia2008 = 1993;
var Australia2018 = 2100.5;
var EmmiGesamt = (Africa2018 + SouthAmerica2018 + Europa2018 + NorthAmerica2018 + Asia2018 + Australia2018);
var resultEuropa1 = Europa2018;
var resultEuropa2 = (Europa2018 / EmmiGesamt) * 100;
var resultEuropa3 = (Europa2018 - Europa2008) / Europa2008 * 100;
var resultEuropa4 = Europa2018 - Europa2008;
var resultNorthAmerica1 = NorthAmerica2018;
var resultNorthAmerica2 = (NorthAmerica2018 / EmmiGesamt) * 100;
var resultNorthAmerica3 = (NorthAmerica2018 - NorthAmerica2008) / NorthAmerica2008 * 100;
var resultNorthAmerica4 = NorthAmerica2018 - NorthAmerica2008;
var resultSouthAmerica1 = SouthAmerica2018;
var resultSouthAmerica2 = (SouthAmerica2018 / EmmiGesamt) * 100;
var resultSouthAmerica3 = (SouthAmerica2018 - SouthAmerica2008) / SouthAmerica2008 * 100;
var resultSouthAmerica4 = SouthAmerica2018 - SouthAmerica2008;
var resultAfrica1 = Africa2018;
var resultAfrica2 = (Africa2018 / EmmiGesamt) * 100;
var resultAfrica3 = (Africa2018 - Africa2008) / Africa2008 * 100;
var resultAfrica4 = Africa2018 - Africa2008;
var resultAsia1 = Asia2018;
var resultAsia2 = (Asia2018 / EmmiGesamt) * 100;
var resultAsia3 = (Asia2018 - Asia2008) / Asia2008 * 100;
var resultAsia4 = Asia2018 - Asia2008;
var resultAustralia1 = Australia2018;
var resultAustralia2 = (Australia2018 / EmmiGesamt) * 100;
var resultAustralia3 = (Australia2018 - Australia2008) / Australia2008 * 100;
var resultAustralia4 = Australia2018 - Australia2008;
function functionEurope() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in Europe";
    document.querySelector("#result1").innerHTML = "" + resultEuropa1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#result2").innerHTML = "" + resultEuropa2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultEuropa3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultEuropa4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 13.53 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#europe").addEventListener('click', functionEurope);
});
function functionNorthAmerica() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in North America";
    document.querySelector("#result1").innerHTML = "" + resultNorthAmerica1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#result2").innerHTML = "" + resultNorthAmerica2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultNorthAmerica3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultNorthAmerica4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 19.4 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#northamerica").addEventListener('click', functionNorthAmerica);
});
function functionSouthAmerica() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in South America";
    document.querySelector("#result1").innerHTML = "" + resultSouthAmerica1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#result2").innerHTML = "" + resultSouthAmerica2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultSouthAmerica3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultSouthAmerica4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 4.05 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#southamerica").addEventListener('click', functionSouthAmerica);
});
function functionAfrica() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in Africa";
    document.querySelector("#result1").innerHTML = "" + resultAfrica1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#result2").innerHTML = "" + resultAfrica2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultAfrica3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultAfrica4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 3.97 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#africa").addEventListener('click', functionAfrica);
});
function functionAsia() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in Asia";
    document.querySelector("#result1").innerHTML = "" + resultAsia1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#result2").innerHTML = "" + resultAsia2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultAsia3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultAsia4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 52.30 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#asia").addEventListener('click', functionAsia);
});
function functionAustralia() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emission in Australia";
    document.querySelector("#result1").innerHTML = "" + resultAustralia1;
    document.querySelector("#result1text").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#result2").innerHTML = "" + resultAustralia2;
    document.querySelector("#result2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#result3").innerHTML = "" + resultAustralia3;
    document.querySelector("#result3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#result4").innerHTML = "" + resultAustralia4;
    document.querySelector("#result4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute('style', 'height:' + 6.75 + "%");
}
window.addEventListener('load', function () {
    document.querySelector("#australia").addEventListener('click', functionAustralia);
});
//# sourceMappingURL=Aufgabe_6.js.map
//# sourceMappingURL=testtest.js.map