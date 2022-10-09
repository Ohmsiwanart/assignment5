var i = 0;
let toggle =true;
function postFunction()
{
    var img = document.getElementById("cat1");
    toggle =!toggle
    if(toggle ==true){
        img.src = "pic_cat/cat1.png";
    }
    else{
        img.src = "pic_cat/cat2.png";
    }
        
    var post = document.getElementById("text1").value;

    if(i==0){        
        document.getElementById("topic").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++;       
    }
    else if(i==1){
        var post = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++
    }
    else if(i==2){
        var post = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = post;
        document.getElementById("text1").value = ("");
        i++
    }   
}

function clearFunction()
{   
    var img = document.getElementById("cat1");
    document.getElementById("text1").value = ("");
    document.getElementById("topic").innerHTML = ("");
    document.getElementById("comment1").innerHTML = ("");
    document.getElementById("comment2").innerHTML = ("");
    i = 0; 
    toggle =!toggle
    if(toggle ==true){
        img.src = "pic_cat/cat1.png";
    }
    else{
        img.src = "pic_cat/cat1.png";
    }  
}