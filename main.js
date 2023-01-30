apiOutput = document.getElementById("container")
btn_next = document.getElementById("btn-next");
btn_prev = document.getElementById("btn-prev");
page = document.getElementById("change-page");

filterList = document.getElementById("filter-list");
sortList =  document.getElementById("sort-list");

let current_page = 1
let filter = "&_limit=5";
let sort = "_sort=id&_order=desc&";

changePage(1)

function select1(){
    let filterOption = filterList.options[filterList.selectedIndex].value;

    switch (+filterOption) {
        case 1:
            filter = "&_limit=5";
            current_page = 1
            changePage(1);
            break;
        case 2:
            filter = "&_limit=10";
            current_page = 1
            changePage(1);
            break;
        case 3:
            filter = "&_limit=50";
            current_page = 1
            changePage(1);
            break;
        case 4:
            filter = "&_limit=100";
            current_page = 1
            changePage(1);
            break;
    }
}

function select2(){
    let sortOption = sortList.options[sortList.selectedIndex].value;

    switch (+sortOption) {
        case 1:
            sort = "_sort=id&_order=desc&";
            current_page = 1
            changePage(1);
            break;
        case 2:
            sort = "_sort=id&_order=asc&";
            current_page = 1
            changePage(1);
            break;
    }
}

function prevPage(){
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
        page.innerHTML = "strona:" + current_page;
    }
}

function nextPage(){
        if (true) {
            current_page++;
            changePage(current_page);
            page.innerHTML = "strona:" + current_page;
        }
}

    //pojawianie się i znikanie tekstu

function show(id){
    id = document.getElementById(id)
    child = id.querySelectorAll(':scope > div');
    child[0].classList.toggle("show")
}

function changePage(page){

    url1 = "https://jsonplaceholder.typicode.com/posts?" + sort + "_page=" + page + filter;
    url2 = "https://jsonplaceholder.typicode.com/photos"

        fetch(url1)
            .then(response => response.json())
            .then((data) => {

                let element ="";
                let i = 1
                var arr = []

                fetch(url2)
                .then(function(response) {
                    return response.text();})
                .then(function(text) {
                    arr.push(text)
                    var workableArr = JSON.parse(arr)

                    for (let obj of data) {

                        setInterval(100)

                                //generowanie elementów

                                element += '<div onclick="show(this.id);" id="item-'+i+'" class="grid-items" style="background-image: url('+workableArr[(obj.id)-1].url+');"><div class="tekst hidden">'+obj.title+'</div></div>'
                                i++

                                //id zdjęcia = id postu
                                //console.log("id zdjęcia " + workableArr[(obj.id)-1].id + " id postu " + obj.id)

                                apiOutput.innerHTML = element                     

                                //sprawdzenie przycisku next

                                if(sort = "_sort=id&_order=desc&"){
                                    if(1 == obj.id) {
                                        btn_next.style.visibility = "hidden";
                                    } else {
                                        btn_next.style.visibility = "visible";
                                    }
                                }else{
                                    if(100 == obj.id) {
                                        btn_next.style.visibility = "hidden";
                                    }else{
                                        btn_next.style.visibility = "visible";
                                    }
                                }
                    }
                });
            });

    //sprawdzenie przycisku prev
    if(current_page == 1){
        btn_prev.style.visibility = "hidden";
    }else {
        btn_prev.style.visibility = "visible";
    }
};