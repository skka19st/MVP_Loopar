
// i den här filen finns javascript-kod

// minnesanteckning ang 'insertAdjacentHTML'
// 'afterbegin' = första child i elementet 
// 'afterend' = efter elementet
// 'beforebegin' = före elementet
// 'beforeend' = sista child i elementet

// en array med saker jag tycker är roligt
let roligaSaker =   ["lägga pussel" 
                    ,"se på film"
                    ,"läsa" 
                    ,"shoppa med min dotter"
                    ,"cykelutflykter med min son"];

// kopplingar till html-sidan (div-taggen)
let divTag = document.getElementById("divId");

// skapa ul-lista med data från array
// 'afterbegin' = först i div-taggen
divTag.insertAdjacentHTML("afterbegin" 
                        ,"<ul>Detta tycker Karin är roligt");

// här skapas listans detaljrader, li-taggarna
ListaItem();

// stopp-tagg för listan
divTag.insertAdjacentHTML("afterbegin" ,"</ul>");

// funktion ListaItem, skapar list-rader (html-kod)
function ListaItem()
{
    // raderna som skapas här ska kopplas till ul-taggen
    // koppling via TagName kräver indexering (ej unikt)
    let ulTag = document.getElementsByTagName("ul")[0];

    // varje li-tag som skapas består av 
    // start-tag, data fr arrayen, stopp-tag
    for (let ind = 0 ; ind<roligaSaker.length ; ind++)
    {
        // 'beforeend' = lägg den efter det som redan finns
        ulTag.insertAdjacentHTML("beforeend" 
                ,"<li>" + roligaSaker[ind] + "</li>");    

        console.log("<li>" + roligaSaker[ind] + "</li>");
    }
}
// ------------------------------------------------------------------

// en koppling till den del av html-dokumentet som ska uppdateras
let divTag2 = document.getElementById("divId2");

// textrad till div-taggen
var text = document.createTextNode("Här börjar den andra div-taggen");
divTag2.appendChild(text);

// ul-lista m tillhörande rubrik
// ul-listan ska ligga i div-taggen
var ulTag2 = document.createElement("ul");
var text = document.createTextNode("Roliga listan enl create o append");
ulTag2.appendChild(text);
divTag2.appendChild(ulTag2);

// listItem med data fr arrayen här i JavaScriptet
// listItem ska ligga i ul-taggen
// en ny 'createElement' måste göras för varje nytt objekt/rad
for (let ind = 0 ; ind<roligaSaker.length ; ind++)
{
    var liTag2 = document.createElement("li");
    var text = document.createTextNode(roligaSaker[ind]);
    liTag2.appendChild(text);
    ulTag2.appendChild(liTag2);
}
