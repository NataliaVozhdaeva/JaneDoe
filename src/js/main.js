
const userName = document.getElementById('userName');
const userGender=document.getElementById ("userGender"); 
const userCountry=document.getElementById ("userCountry"); 
const userCity=document.getElementById ("userCity"); 
const userBirthday=document.getElementById ("userBirthday"); 
const checkbox=document.getElementById ("checkbox"); 
const submitBtn = document.getElementById ("submitBtn"); 
const form = document.querySelector('.form');
let element;


function initiate (){
    userGender.addEventListener ("input", validation, false); 
    validation ();
}
    
function validation (){
    if (userGender.value == 'Male' || userGender.value == 'Female' || userGender.value == 'Other'){   
        userGender.setCustomValidity("");
        
        let elemsDisabled = document.querySelectorAll('.disabled');
        for(let i=0; i<elemsDisabled.length; i++){
            elemsDisabled[i].classList.remove('disabled');
        }    

        submitBtn.setAttribute('disabled', 'disabled');

    } else {
        userGender.setCustomValidity ("Пожалуйста, выберите что-то из списка: Male, Female или Other");
    }
};   

document.getElementById('userDocument').addEventListener('change', function(){
    if( this.value ){
      console.log( "Оп!" );
      
      element = document.createElement('div');
      element.className ='form__field getDocument';
      element.style.gridArea = 'getDocument';
      form.append(element);
      let image = document.createElement('img');
      element.append(image);
      image.setAttribute('src', 'pic/preview.png');
      let span1 = document.createElement('span');
      span1.classList.add('fileName');
      let fileName = document.getElementById('userDocument').name;
      let fileSize = document.getElementById('userDocument').size;
      span1.innerText=fileName;
      element.append(span1);
      let span2 = document.createElement('span');
      span2.classList.add('fileSize');
      span2.innerText=fileSize + 'mb';
      element.append(span2);
      let trash = document.createElement('i');
      trash.className ='fa fa-trash';
      element.append(trash);
    } else { 
      alert( "Файл не выбран" ); 
    }
});


checkbox.onclick = function(){
    if (checkbox.checked) { 
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.add('btn_active');
    } else { alert("поставьте галочку"); }
}

window.addEventListener("load", initiate, false);