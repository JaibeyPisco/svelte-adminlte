<script>
	let { href, icon = 'bi-circle', label } = $props();
</script>

<li class="nav-item">
	<a {href} class="nav-link">
		<i class="nav-icon bi {icon}"></i>

		<p>
			{label}
		</p>
	</a>
</li>
