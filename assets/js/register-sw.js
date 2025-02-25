if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/worker.js')
      .then(registration => {
        // console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}