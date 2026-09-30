<script>
	import API from '$lib/utils/API';
	import Modal from '../shared/Modal.svelte';
	import TomSelect from '../shared/TomSelect.svelte';

	let modal;

	let form = $state({
		id: null,
		nombre: '',
		correo: '',
		rol: null
	});

	let modo = $state('nuevo');

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
		console.log({ data });

		form = {
			id: data.id,
			nombre: data.nombre,
			correo: data.email,
			rol: data.rol,
			password: data.password,
			estado: 'ACTIVO'
		};

		modal.open();
	}
	export async function save() {

		const usuario = {
			nombre: form.nombre,
			email: form.correo,
			rol: form.rol,
			estado: form.estado,
			password: form.password
		};

		const data =
			modo === 'nuevo'
				? await API.post('/usuarios', usuario)
				: await API.put(`/usuarios/${form.id}`, usuario);

		onSave({
			mensaje: 'Guardado correctamente',
			data
		});

		modal.close();
	}
</script>

<Modal
	bind:this={modal}
	title={modo === 'nuevo' ? 'Nuevo Lugar' : 'Editar Lugar'}
	size="modal-md"
	onSubmit={save}
>
	{#snippet children()}
		<div class="mb-3">
			<label class="form-label" for="">
				Nombre
				<span class="text-danger">*</span>
			</label>

			<input
				type="text"
				class="form-control form-control-sm"
				bind:value={form.nombre}
				autocomplete="off"
				required
				name="nombre"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for=""> Correo </label>

			<input
				type="email"
				class="form-control form-control-sm"
				bind:value={form.correo}
				autocomplete="off"
				required
				name="correo"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for=""> Contraseña </label>

			<input
				type="password"
				class="form-control form-control-sm"
				bind:value={form.password}
				autocomplete="off"
				required
				name="password"
			/>
		</div>

		<div class="mb-3">
			<label class="form-label" for="">
				Rol
				<span class="text-danger">*</span>
			</label>

			<TomSelect api="/roles" bind:value={form.rol} name="rol" required />
		</div>
	{/snippet}

	{#snippet footer()}
		<div class="w-100 d-flex justify-content-between">
			<button type="button" class="btn btn-secondary btn-sm" onclick={() => modal.close()}>
				Cerrar
			</button>

			<button type="submit" class="btn btn-primary btn-sm">
				{modo === 'nuevo' ? 'Guardar' : 'Actualizar'}
			</button>
		</div>
	{/snippet}
</Modal>
