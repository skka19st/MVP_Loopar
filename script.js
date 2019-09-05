
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
