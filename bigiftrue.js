$(document).ready(function(){
    var sizeList = SizeList();
    var truthList = TruthList();
    $("#generate").click(function(){
        GeneratePairing(sizeList,truthList)
    });
});

function SizeList(){
    var sizes = [
        "large","sizable","substatial","great","huge","immense",
        "enormous","colossal","massive","mammoth","vast","tremendous",
        "gigantic","giant","monumental","mighty","gargantuan",
        "elephantine","titantic","mountainous","Brobdingnagian",
        "towering","tall","high","lofty","oversized","capacious","voluminous",
        "spacious","jumbo","whopping","humongous","monstrous",
        "astronomical","ginormous","commodious","expansive"
    ]
    return sizes;
}

function TruthList(){
    var truths = [
        "correct","accurate","right","verifiable","unerring","factual",
        "unelaborated","unvarnished","genuine","authentic","real",
        "bona fide", "proper", "legit","kosher","legitimate",
        "rightful","authorized","de jure","unfeigned","legal",
        "indubitable","sincere","trustworthy","unquestionable","veracious",
        "veritable","undoubted","undeniable","unfeigned","concordant with facts"
    ]
    return truths;
}

function GeneratePairing(sizeList,truthList)
{
    var sizeItem = sizeList[Math.floor(Math.random()*sizeList.length)];
    var truthItem = truthList[Math.floor(Math.random()*truthList.length)];
    $('#size').text(sizeItem);
    $('#truthfulness').text(truthItem);
}