<script>
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Header from '$lib/components/layouts/Header.svelte';
	import Sidebar from '$lib/components/layouts/Sidebar.svelte';

	export const ssr = false;

	let { children } = $props();

	let sidebarOpen = $state(true);

</script>

<svelte:head>
	<link rel="preload" href="./css/adminlte.css" as="style" />
	<!--end::Accessibility Features-->

	<!--begin::Fonts-->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css"
		integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q="
		crossorigin="anonymous"
		media="print"
		 
	/>
	<!--end::Fonts-->

	<!--begin::Third Party Plugin(OverlayScrollbars)-->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"
		crossorigin="anonymous"
	/>
	<!--end::Third Party Plugin(OverlayScrollbars)-->

	<!--begin::Third Party Plugin(Bootstrap Icons)-->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
		crossorigin="anonymous"
	/>
	<!--end::Third Party Plugin(Bootstrap Icons)-->

	<!--begin::Required Plugin(AdminLTE)-->
	<link rel="stylesheet" href="./css/adminlte.css" />
</svelte:head>

<div class="app-wrapper">
	<Header {sidebarOpen} 
		onToggleSidebar={() => sidebarOpen = !sidebarOpen	}
	 />

	<Sidebar  {sidebarOpen}/>

	<main class="app-main">
		<div class="app-content-header">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-6">
						<h1 class="mb-0 fs-3">Dashboard</h1>
					</div>

					<div class="col-sm-6">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb float-sm-end">
								<li class="breadcrumb-item">
									<a href="/">Home</a>
								</li>
								<li class="breadcrumb-item active">Dashboard</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<div class="app-content">
			<div class="container-fluid">
				{@render children()}
			</div>
		</div>
	</main>

	<Footer />
</div>
