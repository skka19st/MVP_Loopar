
// i den här filen finns javascript-kod

// kopplingar till html-sidan
let divTag = document.getElementById("divId");

// ------------------------------------------------------------
// en array med saker jag tycker är roligt
let roligaSaker =   ["lägga pussel" 
                    ,"se på film"
                    ,"läsa" 
                    ,"shoppa med min dotter"
                    ,"cykelutflykter med min son"];

// skapa lista från array, listan visas i HTML
ListaStart();
ListaItem();
//ListaItemContent();
ListaStopp();

// funktion ListaStart, skapar start-taggen
function ListaStart()
{
    // skapa en onumrerad lista
    // 'afterbegin' visar att listan ska vara ligga först i div-taggen
    divTag.insertAdjacentHTML("afterbegin" 
                            ,"<ul>Detta tycker Karin är roligt");

    console.log("ListaStart");
}

// funktion ListaItem, skapar list-rader (html-kod)
function ListaItem()
{
    // raderna som skapas här ska kopplas till ul-taggen
    // koppling via TagName kräver indexering (ej unikt)
    let ulTag = document.getElementsByTagName("ul")[0];

    // skapa en tom li-tag för varje rad i arrayen
    for (let ind = 0 ; ind<roligaSaker.length ; ind++)
    {
        // varje li-tag som skapas består av 
        // start-tag, data fr arrayen, stopp-tag
        // 'afterbegin' = första child i elementet
        // 'afterend' = efter elementet
        // 'beforebegin' = före elementet
        // 'beforeend' = sista child i elementet
        ulTag.insertAdjacentHTML("beforeend" 
                ,"<li>" + roligaSaker[ind] + "</li>");    

        console.log("<li>" + roligaSaker[ind] + "</li>");
    }
}

// funktion ListaItemContent, skapar innehåll i li-taggarna
function ListaItemContent()
{
    // innehållet i arrayen läggs ut till skärmen
    for (let ind = 0 ; ind<roligaSaker.length ; ind++)
    {
        // koppling via TagName kräver indexering (ej unikt)
        let liTag = document.getElementsByTagName("li")[ind];

        // arrayraden läggs ut till den listrad som skapas
        var radText = document.createTextNode(roligaSaker[ind]);
        liTag.appendChild(radText);
        console.log("detta ska inte komma ut!!!!!!");
    }
}

// funktion ListaStopp, skapar stopp-taggen
function ListaStopp()
{
        divTag.insertAdjacentHTML("afterbegin" ,"</li>");
        console.log("ListaStopp");
}
