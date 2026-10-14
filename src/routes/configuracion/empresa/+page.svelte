<script>
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import API from '$lib/utils/API';
	import Notificacion from '$lib/utils/Notificacion';
	import { onMount } from 'svelte';

	let isChecked = $state(false);

	let form = $state({
		logo: '',
		ruc: '',
		razon_social: '',
		nombre_comercial: 'TRANSPORTES PISCO',
		id: ''
	});

	const onSubmit = async (event) => {
		event.preventDefault();

		if (!isChecked) {
			Notificacion('Debes confirmar los datos', 'danger');
			return;
		}

		const empresa = {
			id: form.id,
			ruc: form.ruc,
			razon_social: form.razon_social,
			nombre_comercial: form.nombre_comercial,
			logo: form.logo
		};

		const response = empresa.id
			? await API.put(`/empresa/${empresa.id}`, empresa)
			: await API.post('/empresa', empresa);
	
			// const data = response[0]
		
		// if (data.length <=0]) return;

		Notificacion('Empresa guardado correctamente', 'success');

		form.id = response.id;

		await getEmpresa();
	};

	const getEmpresa = async () => {
		// if (form.id != '') return;

		const response = await API.get(`/empresa/${form.id}`);

			const data = response[0]

	 

		if (!data || !data.id) return;

		form = {
			id: data.id,
			ruc: data.ruc,
			razon_social: data.razon_social,
			nombre_comercial: data.nombre_comercial,
			logo: data.logo
		};
	};

	onMount(async () => {
		isChecked = false;

		await getEmpresa();
	});
</script>

<PageLayout>
	<div class="card">
		<div class="card-body">
			<form onsubmit={onSubmit} novalidate>
				<div class="d-flex gap-4 align-items-start">
					<!-- Logo -->
					<div
						class="position-relative d-flex flex-column align-items-center justify-content-center border rounded-3 bg-light text-center overflow-hidden"
						style="width: 160px; height: 160px; cursor: pointer;"
					>
						<!-- Preview -->
						<img src="" alt="Logo de empresa" class="w-100 h-100 object-fit-contain d-none" />

						<!-- Estado sin imagen -->
						<div>
							<div class="mb-2">
								<i class="bi bi-image fs-1 text-secondary"></i>
							</div>

							<div class="fw-semibold">Logo de empresa</div>

							<div class="small text-primary mt-1">Subir imagen</div>

							<div class="small text-muted mt-1">PNG, JPG o JPEG</div>
						</div>

						<input
							name="logo"
							type="file"
							accept="image/png, image/jpeg"
							class="position-absolute top-0 start-0 w-100 h-100 opacity-0"
							aria-label="Subir logo de empresa"
						/>
					</div>

					<!-- Datos de empresa -->
					<div class="flex-grow-1">
						<div class="mb-3">
							<label for="ruc" class="form-label"> RUC </label>

							<input name="ruc" type="number" class="form-control" bind:value={form.ruc} required />
						</div>

						<div class="mb-3">
							<label for="razonSocial" class="form-label"> Razón social </label>

							<input
								id="razonSocial"
								type="text"
								class="form-control"
								bind:value={form.razon_social}
								required
								name="Razon social"
							/>
						</div>

						<div class="mb-3">
							<label for="nombreComercial" class="form-label"> Nombre comercial </label>

							<input
								id="nombreComercial"
								type="text"
								class="form-control"
								bind:value={form.nombre_comercial}
								required
								name="Nombre comercial"
							/>
						</div>
					</div>
				</div>

				<div class="mt-4">
					<div class="form-check mb-3 d-flex justify-content-center align-items-center gap-2">
						<input
							id="confirmarEmpresa"
							type="checkbox"
							bind:checked={isChecked}
							class="form-check-input"
						/>

						<label for="confirmarEmpresa" class="form-check-label">
							Confirmo que la información de la empresa es correcta.
						</label>
					</div>

					<button type="submit" class="btn btn-primary w-100">
						<i class="bi bi-check-lg me-1"></i>
						Guardar
					</button>
				</div>
			</form>
		</div>
	</div>
</PageLayout>
