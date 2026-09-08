<script>
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import UserMenu from './UserMenu.svelte';

	let { sidebarOpen, onToggleSidebar, dataSystem } = $props();

	let isFullScreen = $state(false);

	const usuario = dataSystem.usuario;
	const empresa = dataSystem.empresa;

	onMount(() => {
		const handleFullScreenChange = () => {
			isFullScreen = !!document.fullscreenElement;
		};

		document.addEventListener('fullscreenchange', handleFullScreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullScreenChange);
		};
	});

	const toggleFullScreen = () => {
		if (!document.fullscreenEnabled) return;

		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};
</script>

<!--begin::Header-->
<nav class="app-header navbar navbar-expand bg-body">
	<!--begin::Container-->
	<div class="container-fluid">
		<!--begin::Start Navbar Links-->
		<ul class="navbar-nav">
			<li class="nav-item">
				<a
					class="nav-link"
					type="button"
					href="javacript:;"
					onclick={onToggleSidebar}
					aria-label="Toggle sidebar"
				>
					<i class="bi bi-list"></i>
				</a>
			</li>
		</ul>
		<!--end::Start Navbar Links-->

		<!-- Información de empresa -->
		{#if empresa}
			<div class="ms-3 d-flex align-items-center">
				<span class="fw-semibold">
					RUC: {empresa.ruc} - {empresa.razonSocial}
				</span>
			</div>
		{/if}
		<!-- Información de empresa -->

		<!--begin::End Navbar Links-->
		<ul class="navbar-nav ms-auto">
			<li class="nav-item d-md-none">
				<a class="nav-link" href="./pages/search-results.html" aria-label="Search">
					<i class="bi bi-search" aria-hidden="true"></i>
				</a>
			</li>

			<li class="nav-item">
				<button
					type="button"
					class="nav-link border-0 bg-transparent"
					onclick={toggleFullScreen}
					aria-label={isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'}
				>
					{#if isFullScreen}
						<i class="bi bi-fullscreen-exit"></i>
					{:else}
						<i class="bi bi-arrows-fullscreen"></i>
					{/if}
				</button>
			</li>

			<ThemeToggle />

			<!-- User dropdown -->
			<UserMenu />
		</ul>
		<!--end::End Navbar Links-->
	</div>
	<!--end::Container-->
</nav>
<!--end::Header-->
