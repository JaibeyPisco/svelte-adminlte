<script>
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ModalSaveUsuario from '$lib/components/configuracion/ModalSaveUsuario.svelte';
	import Notificacion from '$lib/utils/Notificacion';
	import Datatable from '$lib/components/shared/Datatable.svelte';
	import { onMount } from 'svelte';
	import API from '$lib/utils/API';
	import ModalDelete from '$lib/components/shared/ModalDelete.svelte';

	const breadcrumb = ['Configuración', 'Usuarios'];

	let modalSaveUsuario, modalDelete, datatable;
	let usuarios = $state([]);

	const openModal = () => {
		// alert('Click')

		modalSaveUsuario.crear();
	};

	const cargarUsuarios = async () => {
		const data = await API.get('/usuarios');

		usuarios = data;

		datatable.reload(usuarios);
	};

	const reloadTable = async (response) => {
		Notificacion(response.mensaje, 'success');

		await cargarUsuarios();
	};

	const columns = [
		{
			title: 'ACCION',
			field: 'accion',
			width: 100,
			hozAlign: 'center',
			formatter: (cell) => {
				return `
					<div class="btn-group">
						<button
							type="button"
							name="editar"
							class="btn btn-default btn-sm">
							EDITAR
						</button>

						<button
							type="button"
							class="btn btn-default btn-sm dropdown-toggle dropdown-toggle-split"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>

						<ul class="dropdown-menu">
							 
							<li>
								<button class="dropdown-item" type="button" name="eliminar">
									Eliminar
								</button>
							</li>
						</ul>
					</div>
				`;
			},

			cellClick: (e, cell) => {
				const btnEdit = e.target.closest('button[name="editar"]');
				const btnEliminar = e.target.closest('button[name="eliminar"]');

				const data = cell.getRow().getData();
				if (btnEdit) {
					modalSaveUsuario.editar(data);
				}

				if (btnEliminar) {
				  modalDelete.open(data, '/usuarios', data.nombre);
				}
			}
		},
		{
			title: 'Nombre',
			field: 'nombre'
		},
		{
			title: 'Correo',
			field: 'email'
		},
		{
			title: 'Contraseña',
			field: 'password'
		},
		{
			title: 'Rol',
			field: 'rol'
		},
		{
			title: 'Estado',
			field: 'estado',
			formatter: (cell) => {
				const estado = cell.getValue();

				return estado === 'ACTIVO'
					? '<span class="badge text-bg-success">ACTIVO</span>'
					: '<span class="badge text-bg-danger">INACTIVO</span>';
			}
		}
	];

	onMount(() => {
		cargarUsuarios();
	});
</script>

<PageLayout {breadcrumb}>
	{#snippet actions()}
		<button class="btn btn-primary btn-sm" onclick={openModal}>
			<i class="bi bi-plus-lg me-1"></i>
			Nuevo
		</button>
	{/snippet}

	<div class="card">
		<div class="card-body">
			<Datatable bind:this={datatable} data={usuarios} {columns} />
		</div>
	</div>

	<ModalSaveUsuario bind:this={modalSaveUsuario} onSave={reloadTable} />

	<ModalDelete bind:this={modalDelete} onSave={reloadTable}></ModalDelete>
</PageLayout>
