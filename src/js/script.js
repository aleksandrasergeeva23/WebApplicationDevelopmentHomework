window.onload = function() {



    fetch('https://api.jsonstorage.net/v1/json/cd15bca4-29aa-4b1b-a8e8-7ba0a59f00f9/de7353a8-f3b2-4cc3-9732-d4f67466a4d7')
        .then((response) => response.json())
        .then(json => {
            displayPosts(json)
        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
            .finally(() => {
                let footer = document.createElement("footer");
                date = new Date().toLocaleString()
                footer.innerText = date;
                document.body.appendChild(footer);
                })

}

function displayPosts(json){
    for (let element of json) {
        let divBigRow=document.createElement( "div");
        divBigRow.className = 'row';

        let divColumn = document.createElement( "div");
        divColumn.className = 'column';

        let sectoin=document.createElement("section");
        //first div
        let divRow = document.createElement( "div");
        divRow.className = 'row';
        //      //
        let divColumn3 = document.createElement( "div");
        divColumn3.className = 'column3';
        //      //      //
        let a = document.createElement("a");

        let imgUser1 = document.createElement( "img");
        imgUser1.className = 'user1';

        let pName = document.createElement( "p");
        pName.className = 'name';
        pName.innerText=element.postAuthotrName;
        a.appendChild(pName);
        divColumn3.appendChild(a);
        divRow.appendChild(divColumn3);
        sectoin.appendChild(divRow);
        divColumn.appendChild(sectoin);
        divBigRow.appendChild(divColumn);

        //      //
        let divData = document.createElement( "div");
        divData.className = 'data';
        //      //      //
        let pData = document.createElement( "p");
        //end of first
        //header ends

        let imgPict = document.createElement( "img");
        imgPict.className = 'pict';

        //SECOND
        let divNav = document.createElement( "div");
        divNav.className = 'nav';
        //THIRD
        let div3 = document.createElement( "div");
        //      //
        let p3 = document.createElement( "p");
        //4
        let div4 = document.createElement( "div");
        //      //
        let button = document.createElement( "button");
        button.className = 'btn';


        //ADDING
        
        imgUser1.src=element.postAuthorImage;






        }
}