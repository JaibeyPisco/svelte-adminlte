<script>
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ModalSaveUsuario from '$lib/components/configuracion/ModalSaveUsuario.svelte';
	import Notificacion from '$lib/utils/Notificacion';
	import Datatable from '$lib/components/shared/Datatable.svelte';
	import { onMount } from 'svelte';
	import API from '$lib/utils/API';

	const breadcrumb = ['Configuración', 'Usuarios'];

	let modalSaveUsuario, datatable;
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
		// {
		// 	title: 'ID',
		// 	field: 'id',
		// 	width: 80
		// },
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
</PageLayout>

<style>
	/* Custom modifications overriding default Bootstrap card styles */
	.card-custom {
		border: none;
		border-radius: 16px;
		overflow: hidden;
		background: #ffffff;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	/* Add a sleek lifting effect on hover */
	.card-custom:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
	}

	/* Custom internal button styling */
	.btn-custom {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 10px 20px;
		font-weight: 500;
		transition: opacity 0.2s ease;
	}

	.btn-custom:hover {
		color: #fff;
		opacity: 0.9;
	}
</style>
