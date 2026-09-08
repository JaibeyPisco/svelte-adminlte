<script>
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';

	const breadcrumb = [
		'Configuración',
		'Usuarios'
	];
</script>

<PageLayout {breadcrumb}>

	{#snippet actions()}
		<a href="/configuracion/usuarios/new" class="btn btn-primary">
			<i class="bi bi-plus-lg me-1"></i>
			Nuevo
		</a>
	{/snippet}

	<div class="card">
		<div class="card-body">
			Listado de usuarios
		</div>
	</div>

</PageLayout>
