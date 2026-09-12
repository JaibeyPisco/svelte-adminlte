<script>
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ModalSaveUsuario from '$lib/components/configuracion/ModalSaveUsuario.svelte';
	import Notificacion from '$lib/utils/Notificacion';
	import Datatable from '$lib/components/shared/Datatable.svelte';
	import { onMount } from 'svelte';

	const breadcrumb = ['Configuración', 'Usuarios'];

	let modalSaveUsuario, datatable;
	let usuarios = $state([]);

	const openModal = () => {
		// alert('Click')

		modalSaveUsuario.crear();
	};

	const cargarUsuarios = async () => {
		const response = await fetch('http://localhost:3000/usuarios');

		const data = await response.json();

		usuarios = data;

		datatable.reload(usuarios);
	};

	const reloadTable = async (response) => {
		Notificacion(response.mensaje, 'success');

		await cargarUsuarios();
		// const data = response.data;

		// usuarios = [
		// 	...usuarios,
		// 	{
		// 		id: 3,
		// 		nombre: data.nombre,
		// 		email: data.correo,
		// 		rol: data.rol,
		// 		estado: data.estado
		// 	}
		// ];

		// datatable.reload(usuarios);
	};

	// const usuarios = [
	// 	{
	// 		id: 1,
	// 		nombre: 'Olivia Bennett',
	// 		email: 'olivia@example.com',
	// 		rol: 'Administrador',
	// 		estado: 'ACTIVO'
	// 	},
	// 	{
	// 		id: 2,
	// 		nombre: 'Liam Carter',
	// 		email: 'liam@example.com',
	// 		rol: 'Editor',
	// 		estado: 'ACTIVO'
	// 	}
	// ];

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
		<button class="btn btn-primary" onclick={openModal}>
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
