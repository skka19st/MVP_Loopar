
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
ListaItemContent();
ListaStopp();

// funktion ListaStart, skapar start-taggen
function ListaStart()
{
    // skapa en onumrerad lista
    divTag.insertAdjacentHTML("afterbegin" 
                            ,"<ul>Detta tycker Karin är roligt");

    console.log("ListaStart");
}

// funktion ListaItem, skapar list-rader
function ListaItem()
{
    // raderna som skapas här ska kopplas till list-taggen
    // koppling via TagName kräver indexering (ej unikt)
    let ulTag = document.getElementsByTagName("ul")[0];
    //var text = "";

    // innehållet i arrayen läggs ut till skärmen
    for (let ind = 0 ; ind<roligaSaker.length ; ind++)
    {
        ulTag.insertAdjacentHTML("afterend" 
        ,"<li> li-taggen </li>");    
        
        // koppling via TagName kräver indexering (ej unikt)
        let liTag = document.getElementsByTagName("li")[ind];

        // arrayraden läggs ut till den listrad som skapas
        var radText = document.createTextNode(roligaSaker[ind]);
        liTag.appendChild(radText);

        //ulTag.insertAdjacentHTML("beforeend" ,"</li>");

        //text = text+("<li>" + roligaSaker[ind] + "</li>");
        console.log("<li>" + roligaSaker[ind] + "</li>");
    }

    // innehållet i arrayen läggs ut till skärmen
    for (let ind = 0 ; ind<roligaSaker.length ; ind++)
    {
        ulTag.insertAdjacentHTML("afterend" 
        ,"<li> li-taggen </li>");    
        
        // koppling via TagName kräver indexering (ej unikt)
        let liTag = document.getElementsByTagName("li")[ind];

        // arrayraden läggs ut till den listrad som skapas
        var radText = document.createTextNode(roligaSaker[ind]);
        liTag.appendChild(radText);

        //ulTag.insertAdjacentHTML("beforeend" ,"</li>");

        //text = text+("<li>" + roligaSaker[ind] + "</li>");
        console.log("<li>" + roligaSaker[ind] + "</li>");
    }

    // den skapade html-raden som under ul-taggen
    //liTag.appendChild(text);
    //console.log(text);
}

// funktion ListaStopp, skapar stopp-taggen
function ListaStopp()
{
        // skapa en onumrerad lista
        //var startTag = document.createElement("/ul");

        // lägg text i listans rubrik
        // skapa en textrad och koppla den till div-taggen
        //var text = document.createTextNode("Listans rubrik");
        //divTag.appendChild(text);
        divTag.insertAdjacentHTML("beforeend" ,"</li>");
        console.log("ListaStopp");
}

// // skriv ut innehållet i arrayen till div-taggen
// for (let ind = 0 ; ind<roligaSaker.length ; ind++)
// {
//     //divTagArray.insertAdjacentText('afterbegin','33');
//     // textRadDiv = document.createTextNode(braSaker[ind]);
//     // divTag.appendChild(textRadDiv);

//     console.log(roligaSaker[ind]);             // skriver ut till loggen
// }
//--------------------------------------------------------------------
