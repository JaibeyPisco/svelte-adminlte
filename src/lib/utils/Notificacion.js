const toastTypes = {
    primary: 'text-bg-primary',
    success: 'text-bg-success',
    danger: 'text-bg-danger',
    warning: 'text-bg-warning',
    info: 'text-bg-info'
};

export default function (message, type = 'success') {

    const element = document.getElementById('toast');

    if (!element) {
        return;
    }

    element.querySelector('.toast-body').textContent = message;

    const currentType = element.dataset.toastType;

    if (currentType) {
        element.classList.remove(currentType);
    }

    const color = toastTypes[type] ?? toastTypes.success;

    element.classList.add(color);
    element.dataset.toastType = color;

    const toast = bootstrap.Toast.getOrCreateInstance(element);

    toast.show();
}