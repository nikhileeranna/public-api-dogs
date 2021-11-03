var dogsnew=[];
fetch("https://dog.ceo/api/breeds/list/all")
.then((res)=> res.json())
.then((res1)=>{
    console.log(res1); 
    var dog=res1.message;
   
    Object.keys(dog).forEach(function(key) {
        var value = dog[key];
    
        dogsnew.push(`${key}`);
    });

    console.log(dogsnew);
  
    var list = document.getElementById("dog");
        for(var i=0; i<dogsnew.length;i++)
        {
            var option = document.createElement("option");
            option.innerHTML=`${dogsnew[i]}`;
            option.value = `${dogsnew[i]}`;
            option.setAttribute("onclick",`random(${dogsnew[i]})`);
            list.append(option);
        }

})
.catch((err)=>{
    console.log(err);
});


function random()
{
    var value = document.getElementById("dog").value;
    console.log(value);
    fetch(`https://dog.ceo/api/breed/${value}/images/random/3`)
    .then((res)=>res.json())
    .then((res1)=>{
        var div = document.createElement("div");
           for(let i=0; i<3; i++)
           {
                var image=document.createElement("img");
                image.src=`${res1.message[i]}`;
                image.setAttribute("class","image");
                div.append(image);
           }
           document.body.append(div);
        console.log(res1);
    })
}

function clear()
{
    window.location.reload();
}