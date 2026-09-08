<script>
	let {
		breadcrumb,
		actions
	} = $props();
</script>

<div class="app-content-header">
	<div class="container-fluid">
		<div class="d-flex justify-content-between align-items-center">

			<!-- Izquierda -->
			<nav aria-label="breadcrumb">
				{#if breadcrumb}
					{@render breadcrumb()}
				{/if}
			</nav>

			<!-- Derecha -->
			<div>
				{#if actions}
					{@render actions()}
				{/if}
			</div>

		</div>
	</div>
</div>
