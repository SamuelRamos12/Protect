document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');
    const modalRecentes = document.getElementById('modal-recentes');
    const modalOutro = document.getElementById('modal-outro');
    const confirmCheckbox = document.getElementById('confirmCheckbox');

    // Exibir modal "Recentes" ao carregar a página
    modalRecentes.style.display = 'block';

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
            // Reexibir modal "Recentes" quando outro modal for fechado
            if (modal !== modalRecentes) {
                modalRecentes.style.display = 'block';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
                // Reexibir modal "Recentes" quando clicar fora de outro modal
                if (modal !== modalRecentes) {
                    modalRecentes.style.display = 'block';
                }
            }
        });
    });

    // Alterar para outro modal ao confirmar checkbox
    confirmCheckbox.addEventListener('change', function() {
        if (this.checked) {
            closeAllModals();
            modalOutro.style.display = 'block';
        }
    });
});