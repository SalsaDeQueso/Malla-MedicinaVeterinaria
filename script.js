document.querySelectorAll('.ramo').forEach(boton => {
  if (!boton.dataset.requisitos) return;

  boton.disabled = true;
});

document.querySelectorAll('.ramo').forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.disabled) return;

    // Aprobar ramo
    boton.classList.add('aprobado');
    boton.disabled = true;

    // Verificar si desbloquea otros
    document.querySelectorAll('.ramo').forEach(ramo => {
      if (ramo.classList.contains('aprobado') || !ramo.disabled) return;

      const requisitos = ramo.dataset.requisitos
        .split(',')
        .map(id => id.trim())
        .filter(Boolean);

      const cumplidos = requisitos.every(reqId =>
        document.getElementById(reqId)?.classList.contains('aprobado')
      );

      if (cumplidos) {
        ramo.disabled = false;
      }
    });
  });
});

