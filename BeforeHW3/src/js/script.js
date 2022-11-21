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
                footer.className = 'footer';

                date = new Date().toLocaleString()
                footer.innerText = "Footer      " + date;
                document.body.appendChild(footer);
                })

}

function displayPosts(json){
    for (let element of json) {
        let divBigRow=document.createElement( "div");
        divBigRow.className = 'row';

        let divColumn1 = document.createElement( "div");
        divColumn1.className = 'column1';
        divColumn1.innerText=".";


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

        imgUser1.src=element.postAuthorImage;
        a.appendChild(imgUser1);
        a.appendChild(pName);
        
        
        //      //
        let divData = document.createElement( "div");
        divData.className = 'data';
        //      //      //
        let pData = document.createElement( "p");
        pData.innerText=element.postCreateTime;


        divData.appendChild(pData);


        
        divColumn3.appendChild(a);
        divRow.appendChild(divColumn3);
        divRow.appendChild(divData);
        //end of first
        //header ends

        let imgPict = document.createElement( "img");
        imgPict.className = 'pict';
        imgPict.src=element.postImage;

        //SECOND
        let divNav = document.createElement( "div");
        divNav.className = 'nav';
        //THIRD

        let div3 = document.createElement( "div");
        //      //
        let p3 = document.createElement( "p");
        p3.innerText=element.postText;
        div3.appendChild(p3);
        //4
        let div4 = document.createElement( "div");
        //      //
        let button = document.createElement( "button");
        button.className = 'btn';
        if(element.postStatusIfLiked){button.innerText="Dislike";}
        else{
            button.innerText="Like";

        }



        //ADDING
        
        

        sectoin.appendChild(divRow);
        sectoin.appendChild(imgPict);
        sectoin.appendChild(div3);
        sectoin.appendChild(button);

        divColumn.appendChild(sectoin);
        divBigRow.appendChild(divColumn1);
        divBigRow.appendChild(divColumn);
        ;

        document.body.appendChild(divBigRow);
        }

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }