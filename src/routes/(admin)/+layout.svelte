<script>
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Header from '$lib/components/layouts/Header.svelte';
	import Sidebar from '$lib/components/layouts/Sidebar.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
	
	import { onMount } from 'svelte';

	export const ssr = false;

	let { children } = $props();

	let sidebarOpen = $state(true);

	function onClickSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	$effect(() => {
		if (typeof document === 'undefined') return;

		document.body.classList.toggle('sidebar-collapse', !sidebarOpen);

		document.body.classList.toggle('sidebar-open', sidebarOpen);
	});

	onMount(() => {
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

	<link rel="stylesheet" href="./css/adminlte.css" />
</svelte:head>

<div class="app-wrapper">
	<Header {sidebarOpen} onToggleSidebar={onClickSidebar} />

	<Sidebar {sidebarOpen} />

	<main class="app-main">
		 
		<PageHeader />

		<div class="app-content">
			<div class="container-fluid">
				{@render children()}
			</div>
		</div>
	</main>

	<Footer />
</div>
