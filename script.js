function highlight() {
    
        let elements = document.querySelectorAll("strong");
       for(let i of elements){
       i.style.color="green";
      
       }


}


function return_normal() {
  
        let elements = document.querySelectorAll("strong");
       for(let i of elements){
       i.style.color="black";
       i.style.fontSize=100;
       }

    
}
