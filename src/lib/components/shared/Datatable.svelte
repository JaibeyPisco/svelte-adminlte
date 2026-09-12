<script>
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css';

	let { data = [], columns = [] } = $props();

	let tableElement;
	let table;

	onMount(() => {
		table = new Tabulator(tableElement, {
			data,
			columns,
			layout: 'fitColumns'
			// pagination: true,
			// paginationSize: 10
		});

		return () => table.destroy();
	});

	export const reload = () => {
		table?.setData(data);
	};
</script>

<div bind:this={tableElement}></div>
