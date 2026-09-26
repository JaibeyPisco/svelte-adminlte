const toastTypes = {
    primary: 'text-bg-primary',
    success: 'text-bg-success',
    danger: 'text-bg-danger',
    warning: 'text-bg-warning',
    info: 'text-bg-info'
};

export default function (message, type = 'success') {
    const container = document.getElementById('toast-container');

    if (!container) {
        return;
    }

    const element = document.createElement('div');

    element.className = `toast ${toastTypes[type] ?? toastTypes.success}`;
    element.setAttribute('role', 'alert');
    element.setAttribute('aria-live', 'assertive');
    element.setAttribute('aria-atomic', 'true');

    element.innerHTML = `
        <div class="d-flex">
            <div class="toast-body"></div>
            <button
                type="button"
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
            ></button>
        </div>
    `;

    element.querySelector('.toast-body').textContent = message;

    container.appendChild(element);

    const toast = bootstrap.Toast.getOrCreateInstance(element, {
        delay: 4000
    });

    element.addEventListener('hidden.bs.toast', () => {
        toast.dispose();
        element.remove();
    });

    toast.show();
}