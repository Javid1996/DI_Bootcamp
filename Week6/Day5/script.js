let form  = document.getElementById('task_form')
form.addEventListener('submit', function() {
    // Get the value of the name field.
    // var name = document.getElementById('name').value;
    let task_value= stringify.json(form.vale)
    // Save the name in localStorage.
    localStorage.setItem('task', task_value);
  });