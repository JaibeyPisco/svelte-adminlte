<script>
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import * as XLSX from 'xlsx';
	import jsPDF from 'jspdf';
	import autoTable from 'jspdf-autotable';

	import 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css';

	let { data = [], columns = [] } = $props();

	let tableElement;
	let table;
	let search = $state('');

	onMount(() => {
		table = new Tabulator(tableElement, {
			data,
			columns,
			layout: 'fitColumns'
		});

		return () => {
			table?.destroy();
			table = null;
		};
	});

	function searchTable() {
		const value = search.trim().toLowerCase();

		if (!value) {
			table?.clearFilter();
			return;
		}

		table?.setFilter((rowData) => {
			return Object.values(rowData).some((fieldValue) =>
				String(fieldValue ?? '')
					.toLowerCase()
					.includes(value)
			);
		});
	}

	function exportExcel() {
		const rows = table.getData('active');

		const worksheet = XLSX.utils.json_to_sheet(rows);
		const workbook = XLSX.utils.book_new();

		XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

		XLSX.writeFile(workbook, 'exportacion.xlsx');
	}

	function exportPDF() {
		const doc = new jsPDF();

		const rows = table.getData('active');

		const headers = columns.filter((column) => column.field).map((column) => column.title);

		const body = rows.map((row) =>
			columns.filter((column) => column.field).map((column) => row[column.field] ?? '')
		);

		autoTable(doc, {
			head: [headers],
			body
		});

		doc.save('exportacion.pdf');
	}

	function toggleColumn(field) {
		const column = table.getColumn(field);

		if (!column) return;

		if (column.isVisible()) {
			column.hide();
		} else {
			column.show();
		}
	}

	export const reload = () => {
		table?.setData(data);
	};
</script>

<div class="d-flex justify-content-between align-items-center m-1">
	<div class="btn-group" role="group">
		<button class="btn btn-default btn-sm" type="button" onclick={exportExcel}> Excel </button>

		<button class="btn btn-default btn-sm" type="button" onclick={exportPDF}> PDF </button>

		<div class="btn-group" role="group">
			<button
				class="btn btn-default btn-sm dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Columns
			</button>

			<ul class="dropdown-menu">
				{#each columns.filter((column) => column.field) as column}
					<li>
						<button class="dropdown-item" type="button" onclick={() => toggleColumn(column.field)}>
							{column.title}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div>
		<input
			type="text"
			class="form-control"
			placeholder="Buscar..."
			bind:value={search}
			oninput={searchTable}
		/>
	</div>
</div>
<div bind:this={tableElement}></div>

<style>
	/* TABLA */
	:global(.tabulator) {
		border: 1px solid #dee2e6;
		border-radius: 0.375rem;
		background: #fff;
		color: #212529;
		font-size: 0.8125rem;
		overflow: hidden;

		height: calc(80vh - 100px);
	}

	/* HEADER */
	:global(.tabulator .tabulator-header) {
		background-color: #f8f9fa;
		border-bottom: 1px solid #dee2e6;
		color: #495057;
		font-weight: 600;
	}

	:global(.tabulator .tabulator-header .tabulator-col) {
		background-color: transparent;
		border-right: 1px solid #e9ecef;
	}

	:global(.tabulator .tabulator-header .tabulator-col:last-child) {
		border-right: none;
	}

	:global(.tabulator .tabulator-header .tabulator-col .tabulator-col-content) {
		padding: 0.3rem 0.625rem;
	}

	:global(.tabulator .tabulator-header .tabulator-col-title) {
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.1;
	}

	/* FILAS */
	:global(.tabulator .tabulator-row) {
		min-height: 34px;
		background-color: #fff;
		border-bottom: 1px solid #f0f0f0;
	}

	:global(.tabulator .tabulator-row:hover) {
		background-color: #f8f9fa;
	}

	/* CELDAS */
	:global(.tabulator .tabulator-row .tabulator-cell) {
		padding: 0.4rem 0.625rem;
		border-right: 1px solid #f0f0f0;
	}

	:global(.tabulator .tabulator-row .tabulator-cell:last-child) {
		border-right: none;
	}

	/* FILA SELECCIONADA */
	:global(.tabulator .tabulator-row.tabulator-selected) {
		background-color: #e9ecef;
	}

	/* PLACEHOLDER */
	:global(.tabulator .tabulator-placeholder) {
		color: #6c757d;
		font-size: 0.8125rem;
	}

	/* BUSCADOR */
	.table-search {
		width: 250px;
	}

	.table-search input {
		height: 32px;
		padding: 0.25rem 0.625rem;
		font-size: 0.8125rem;
	}

	/* BOTONES */
	.table-toolbar .btn {
		font-size: 0.8125rem;
	}

	/* DROPDOWN */
	.table-toolbar .dropdown-menu {
		font-size: 0.8125rem;
	}

	.table-toolbar .dropdown-item {
		padding: 0.35rem 0.75rem;
	}
</style>
