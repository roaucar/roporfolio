const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const motivo = document.getElementById('exampleInputPassword1').value;
  const mensaje = document.getElementById('contenido').value;

  if (name.trim() === '') {
    alert('Por favor, ingrese su nombre.');
    return;
  }

  if (email.trim() === '') {
    alert('Por favor, ingrese su correo electrónico.');
    return;
  }

  if (motivo.trim() === '') {
    alert('Por favor, ingrese el motivo.');
    return;
  }

  if (mensaje.trim() === '') {
    alert('Por favor, ingrese un mensaje.');
    return;
  }

  const formData = {
    name: name,
    email: email,
    motivo: motivo,
    mensaje: mensaje
  };

  fetch('enviar.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('El formulario ha sido enviado correctamente.');
      form.reset(); 
    } else {
      alert('Ha ocurrido un error al enviar el formulario. Por favor, inténtelo nuevamente.');
    }
  })
  .catch(error => {
    alert('Ha ocurrido un error al enviar el formulario. Por favor, inténtelo nuevamente.');
    console.error(error);
  });
});
