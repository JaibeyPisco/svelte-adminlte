<script>
	let {
		breadcrumb = [],
		actions,
		children
	} = $props();
</script>

<!-- Header -->
<div class="app-content-header">
	<div class="container-fluid">

		<div class="d-flex justify-content-between align-items-center">

			<!-- Breadcrumb -->
			{#if breadcrumb.length > 0}
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb mb-0">
						{#each breadcrumb as item}
							<li class="breadcrumb-item">
								{item}
							</li>
						{/each}
					</ol>
				</nav>
			{/if}

			<!-- Actions -->
			{#if actions}
				<div class="d-flex gap-2">
					{@render actions()}
				</div>
			{/if}

		</div>

	</div>
</div>

<!-- Content -->
<div class="app-content">
	<div class="container-fluid">
		{@render children()}
	</div>
</div>
