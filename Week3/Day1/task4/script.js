const allBooks = [
    
    {title:"Lord of the Rings",
     author:" J.R.R.Tolkien",
     image: "https://m.media-amazon.com/images/I/91gJgXvn+jL._AC_UF1000,1000_QL80_.jpg" ,
     alreadyRead: false,    
    },
    {title:"A Dance with Dragons",
     author:"George R.R.Martin",
     image:"https://m.media-amazon.com/images/I/91gJgXvn+jL._AC_UF1000,1000_QL80_.jpg" ,
     alreadyRead:false,
    } 
       
]

// let ul1= document.createElement('ul');
// let list2 = ul.createElement('li')[1];

// for( let item of allBooks){
   
  
//     let list1 = document.createElement('li');
//     let list1ItemTextNode = document.createTextNode(item[0]);
//     list1.appendChild(list1ItemTextNode);
//     ul1.appendChild(list1);
    
// }
// console.log(ul1);
// for(let i = 0;i<3;i++){

// }

// for(let item of allBooks){
//     let li = document.createElement('li');
//     let p = document.createTextNode(item.author);
//     let p1 = document.createElement("img");

// !!!
// !!! img create etdikden sonra src atributunu da yaradib icerisine elave etmelisen 
  
//     let p2 = document.createTextNode(item.alreadyRead);
//     li.appendChild(p);
//     li.appendChild(p1);
//     li.appendChild(p2);
// }
    // ul.appendChild(li);
    // let ul = document.createElement('ul');
    let ulList = document.createElement('ul');
    for(let item of allBooks){
        
        let p1 = document.createTextNode(item.title);
        let p2 = document.createTextNode(item.author);
        let p3 = document.createTextNode(item.alreadyRead);
        let p4 = document.createTextNode(item.image);

        // let img1 = document.createElement('img').src="https://m.media-amazon.com/images/I/91gJgXvn+jL._AC_UF1000,1000_QL80_.jpg";
        // img1.setAttribute(src,item.image)
        
        let list1=document.createElement('li');
        let list2=document.createElement('li');
        let list3=document.createElement('li');
        let list4=document.createElement('li');
        
        list1.appendChild(p1);
        list2.appendChild(p2);
        list3.appendChild(p3);
        list4.appendChild(p4);
        
        ulList.appendChild(list1);
        ulList.appendChild(list2);
        ulList.appendChild(list3);
        ulList.appendChild(list4);
    
        // !!! binlari for loop icerisinde yazdiqda item in sayina uygun create et elave copy paste etmeye ehtiyac yoxdur
    }






let booksList = document.getElementsByClassName("listBooks")[0];
 
booksList.appendChild(ulList);
