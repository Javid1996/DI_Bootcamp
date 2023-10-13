let form  = document.getElementById('task_form')
form.addEventListener('submit', function() {
   
    let task_value= stringify.json(form.vale)
    
    localStorage.setItem('task', task_value);
  });