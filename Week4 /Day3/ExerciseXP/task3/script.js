function dragStart(event) {
    
   
    event.dataTransfer.setData("text", event.target.id);
    }


    function allowDrag(event){
        event.preventDefault();
    }

    function allowDrop(event){
        event.preventDefault();

        let data = event.dataTransfer.getData("text"); //id = box

        let redBox = document.getElementById(data); //   <div id=box>

        event.target.appendChild(redBox); /// ?


    }


    function allowEnter(event) {
        event.target.classList.add('over');
      }
      
      
      function allowLeave(event) {
        event.target.classList.remove('over');
      }