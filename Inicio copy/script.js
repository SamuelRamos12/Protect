document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    function closeAllModals() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeAllModals(); // Fechar todos os modais antes de abrir um novo
            const modal = document.getElementById(button.getAttribute('data-modal'));
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.getAttribute('data-modal'));
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});