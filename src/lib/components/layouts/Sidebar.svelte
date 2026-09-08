<script>
	import SidebarGroup from './SidebarGroup.svelte';
	import SidebarItem from './SidebarItem.svelte';

	// Grupo principal abierto: configuracion, operaciones, etc.
	let openGroup = $state(null);

	// Subgrupo abierto dentro del grupo principal
	let openSubGroup = $state(null);

	// Abre un grupo principal y cierra el anterior
	function toggleGroup(group) {
		if (openGroup === group) {
			openGroup = null;
			openSubGroup = null;
			return;
		}

		openGroup = group;

		// Al cambiar de grupo principal, cerramos los subgrupos
		openSubGroup = null;
	}

	// Abre/cierra un subgrupo
	function toggleSubGroup(group) {
		openSubGroup = openSubGroup === group ? null : group;
	}
</script>

<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
	<!-- Logo / nombre del sistema -->
	<div class="sidebar-brand">
		<a href="/" class="brand-link">
			<span class="brand-text fw-light"> My Dashboard </span>
		</a>
	</div>

	<div class="sidebar-wrapper">
		<nav class="mt-2">
			<ul class="nav sidebar-menu flex-column">
				<!-- ITEM SIMPLE -->
				<SidebarItem href="/dashboard" icon="bi-speedometer" label="Dashboard" />

				<!-- GRUPO PRINCIPAL -->
				<SidebarGroup
					title="Configuración"
					icon="bi-gear"
					open={openGroup === 'configuracion'}
					onToggle={() => toggleGroup('configuracion')}
				>
					<!-- Item directo dentro del grupo -->
					<SidebarItem href="/configuracion/seguridad/usuario" icon="bi-person" label="Persona" />

					<!-- SUBGRUPO -->
					<SidebarGroup
						title="Seguridad"
						icon="bi-shield-lock"
						open={openSubGroup === 'seguridad'}
						onToggle={() => toggleSubGroup('seguridad')}
					>
						<!-- Item dentro del subgrupo -->
						<SidebarItem href="/configuracion/seguridad/usuario" icon="bi-person" label="Usuario" />
					</SidebarGroup>

					<SidebarItem href="/configuracion/empresa" icon="bi-building" label="Empresa" />
				</SidebarGroup>

				<!-- OTRO GRUPO PRINCIPAL -->
				<SidebarGroup
					title="Operaciones"
					icon="bi-briefcase"
					open={openGroup === 'operaciones'}
					onToggle={() => toggleGroup('operaciones')}
				>
					<!-- Otro subgrupo -->
					<SidebarGroup
						title="Servicios"
						icon="bi-tools"
						open={openSubGroup === 'servicios'}
						onToggle={() => toggleSubGroup('servicios')}
					>
						<SidebarItem
							href="/operaciones/servicios/mantenimiento"
							icon="bi-wrench"
							label="Mantenimiento"
						/>
					</SidebarGroup>
				</SidebarGroup>
			</ul>
		</nav>
	</div>
</aside>
