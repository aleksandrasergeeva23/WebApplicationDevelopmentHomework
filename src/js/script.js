window.onload = function() {



    fetch('https://api.jsonserve.com/9i0Jq2')
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
        let sectoin=document.createElement("section");
        //first div
        let divRow = document.createElement( "div");
        divRow.className = 'row';
        //      //
        let divColumn3 = document.createElement( "div");
        divColumn3.className = 'column3';
        //      //      //
        let a = document.createElement( "a");

        let imgUser1 = document.createElement( "a");
        img.className = 'user1';
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


        //ADDIND
        





        // lets add a post title to the div
        postTitle.innerText = element.title;
        // lets append this postTitle to the div
        div.appendChild(postTitle);
        // lets add the body of the post to the div
        let postBody2 = document.createElement ("p");
        //lets add this post body to the div
        postBody2.innerText = element.body;
        //lets append the body to the div 
        div.appendChild(postBody2);
        // now append the div to the document 
        document.body.appendChild(div);}
}