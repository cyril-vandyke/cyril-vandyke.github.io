$(document).ready(function(){
    var sizeList = SizeList();
    var truthList = TruthList();
    ProvideInformation(sizeList,truthList)
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

function ProvideInformation(sizeList,truthList)
{
    $('#num-size').text(sizeList.length);
    $('#num-truth').text(truthList.length);
    $('#num-combos').text(sizeList.length*truthList.length);
   
    for(var i = 0; i < sizeList.length; i++)
    {
        var li = document.createElement('li');
        li.innerText = sizeList[i];
        document.getElementById('size-list').appendChild(li);
    }

    for(var i = 0; i < truthList.length; i++)
    {
        var li = document.createElement('li');
        li.innerText = truthList[i];
        document.getElementById('truth-list').appendChild(li);
    }
}