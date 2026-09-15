<script>
	import API from '$lib/utils/API';
	import Modal from '../shared/Modal.svelte';

	let modal;

	let form = $state({
		id: null,
		nombre: '',
		correo: ''
	});

	let modo = $state('modo');

	let { onSave = () => {} } = $props();
 

	export function crear() {
		modo = 'nuevo';
		form = {
			id: null,
			nombre: '',
			correo: '',
			rol: '',
			password: '',
			estado: 'ACTIVO'
		};

		modal.open();
	}

	export function editar(data) {
		modo = 'editar';
		form = {
			id: data.id,
			nombre: data.nombre,
			correo: '',
			rol: '',
			password: ''
		};

		modal.open();
	}
	export async function save() {
		const data = await API.post('/usuarios', {
			nombre: form.nombre,
			email: form.correo,
			rol: form.rol,
			estado: form.estado,
			password: form.password
		});

		onSave({
			mensaje: 'Guardado correctamente',
			data
		});

		modal.close();
	}
</script>

<Modal bind:this={modal} title={modo === 'nuevo' ? 'Nuevo Lugar' : 'Editar Lugar'} size="modal-md">
	{#snippet children()}
		<div class="mb-3">
			<label class="form-label" for="">
				Nombre
				<span class="text-danger">(*)</span>
			</label>

			<input
				type="text"
				class="form-control form-control-sm"
				bind:value={form.nombre}
				autocomplete="off"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for=""> Correo </label>

			<input
				type="email"
				class="form-control form-control-sm"
				bind:value={form.correo}
				autocomplete="off"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for=""> Contraseña </label>

			<input
				type="text"
				class="form-control form-control-sm"
				bind:value={form.password}
				autocomplete="off"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for="rol">Rol</label>
			<select id="rol" class="form-select form-select-sm" bind:value={form.rol}>
				<option value="">Seleccione un rol</option>
				<option value="Administrador">Administrador</option>
				<option value="Editor">Editor</option>
				<option value="Usuario">Usuario</option>
			</select>
		</div>
	{/snippet}

	{#snippet footer()}
		<div class="w-100 d-flex justify-content-between">
			<button type="button" class="btn btn-secondary btn-sm" onclick={() => modal.close()}>
				Cerrar
			</button>

			<button type="button" class="btn btn-primary btn-sm" onclick={save}>
				{modo === 'nuevo' ? 'Guardar' : 'Actualizar'}
			</button>
		</div>
	{/snippet}
</Modal>
