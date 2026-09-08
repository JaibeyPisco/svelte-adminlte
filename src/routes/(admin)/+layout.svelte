<script>
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Header from '$lib/components/layouts/Header.svelte';
	import Sidebar from '$lib/components/layouts/Sidebar.svelte';

	import { onMount } from 'svelte';

	export const ssr = false;

	let { children } = $props();

	let sidebarOpen = $state(true);

	function onClickSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	const dataSystem = {
		empresa: {
			razonSocial: 'Pisco Soluciones SA',
			ruc: '10738604984'
		},
		usuario: {
			nombre: 'Juan Pérez',
			rol: 'Administrador'
		}
	};

	$effect(() => {
		if (typeof document === 'undefined') return;

		document.body.classList.toggle('sidebar-collapse', !sidebarOpen);

		document.body.classList.toggle('sidebar-open', sidebarOpen);
	});

	onMount(async () => {
		await import('bootstrap');

		await import('overlayscrollbars');

		// await import('admin-lte');

		return () => {
			document.body.classList.remove('sidebar-collapse');
			document.body.classList.remove('sidebar-open');
		};
	});
</script>

<svelte:head>
	<link rel="preload" href="./css/adminlte.css" as="style" />

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css"
		crossorigin="anonymous"
	/>

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"
		crossorigin="anonymous"
	/>

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
		crossorigin="anonymous"
	/>

	<link rel="stylesheet" href="/css/adminlte.css" />
</svelte:head>

<div class="app-wrapper">
	<Header {sidebarOpen} onToggleSidebar={onClickSidebar} {dataSystem} />

	<Sidebar {sidebarOpen} />

	<main class="app-main">
		{@render children()}
	</main>

	<Footer />
</div>
