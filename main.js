(async () => {
    const sidebar = document.querySelector('#sidebar1');
    await customElements.whenDefined('bento-sidebar');
    const api = await sidebar.getApi();

    // set up button actions
    document.querySelector('#open-sidebar').onclick = () => api.open();
  })();