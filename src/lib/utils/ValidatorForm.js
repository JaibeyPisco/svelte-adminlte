import Notificacion from '$lib/utils/Notificacion';

export default function validateForm(form) {
	const fields = form.querySelectorAll('input[name], select[name], textarea[name]');

	let valid = true;

	for (const field of fields) {
		field.classList.remove('is-invalid');

		if (field.disabled) continue;

		const error = validateField(field);

		if (error) {
			valid = false;
			field.classList.add('is-invalid');
			Notificacion(error, 'danger');
		}
	}

	return valid;
}

function validateField(field) {
	if (field.validity.valueMissing) {
		return `El campo ${field.name} es obligatorio.`;
	}

	if (field.validity.typeMismatch) {
		return `El campo ${field.name} no tiene un formato válido.`;
	}

	if (field.validity.tooShort) {
		return `El campo ${field.name} debe tener al menos ${field.minLength} caracteres.`;
	}

	if (field.validity.tooLong) {
		return `El campo ${field.name} no puede superar los ${field.maxLength} caracteres.`;
	}

	if (field.validity.patternMismatch) {
		return `El campo ${field.name} no tiene un formato válido.`;
	}

	return null;
}
