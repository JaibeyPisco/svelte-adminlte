<script>
	let { icon = 'bi-folder', title, open = false, onToggle, children } = $props();
</script>

<li class="nav-item" class:menu-open={open}>
	<button
		type="button"
		class="nav-link border-0 w-100 text-start"
		onclick={onToggle}
		aria-expanded={open}
	>
		<i class="nav-icon bi {icon}"></i>

		<p>
			{title}
			<i class="nav-arrow bi bi-chevron-right"></i>
		</p>
	</button>

	<ul class="nav nav-treeview" class:d-block={open} class:d-none={!open}>
		{@render children()}
	</ul>
</li>
