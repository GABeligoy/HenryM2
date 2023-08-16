$("#boton").on("click", function(){
    $.ajax({
        type: "GET",
        url:  "http://localhost:5000/amigos",
        success: (data)=>{
            $("#lista").empty()
            for(let i=0;i<data.length;i++){
                let info= document.createElement("li")
                info.textContent= `Amigos: ${data[i].name} X`
                $("#lista").append(info)
            }
        } 
    })
})
$("#search").on("click",function(){
    let inp=document.getElementById("input")
    let valor=inp.value
    $.ajax({
        type: "GET", 
        url:  "http://localhost:5000/amigos/"+valor,
        success: (data)=>{
            let info=`Amigos: ${data.name}`
            $("#amigo").text(info)
            inp.value=""
            
        }
    })
})
$("#delete").on("click", function(){
    let inp=document.getElementById("inputDelete")
    let valor=inp.value
    $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/amigos/"+valor,
        success: $("#success").text("Tu amigo borrado ha sido borrado con éxito")
    })
    inp.value=""
    
})