<script>
	import { onMount, onDestroy } from 'svelte';
	import TomSelect from 'tom-select';
	import 'tom-select/dist/css/tom-select.bootstrap5.css';

	import API from '$lib/utils/API';

	let {
		api,
		id = 'id',
		text = 'nombre',
		name,
		required = false,
		value = $bindable(null),
		remoteSearch = false,
		placeholder = 'Seleccionar...'
	} = $props();

	let selectElement;
	let select;

	let timer;
	let controller;

	function load(query, callback) {
		clearTimeout(timer);

		timer = setTimeout(async () => {
			if (controller) {
				controller.abort();
			}

			controller = new AbortController();

			try {
				const url = remoteSearch ? `${api}?search=${encodeURIComponent(query)}` : api;

				const response = await API.get(url, {
					signal: controller.signal
				});

				const data = response.data ?? response;

				callback(data);
			} catch (error) {
				if (error.name !== 'AbortError') {
					callback();
				}
			}
		}, 300);
	}

	onMount(() => {
		select = new TomSelect(selectElement, {
			valueField: id,
			labelField: text,
			searchField: text,
			plugins: ['dropdown_input'],

			placeholder,

			load,

			onChange(selected) {
				value = selected || null;
			}
		});

		if (!remoteSearch) {
			select.load('');
		}
	});

	$effect(() => {
		if (!select) return;

		const current = value ?? '';

		if (select.getValue() !== current) {
			select.setValue(current, true);
		}
	});

	onDestroy(() => {
		clearTimeout(timer);

		controller?.abort();

		select?.destroy();
	});
</script>

<select bind:this={selectElement} {name} {required}></select>

<style>
	:global(.ts-control) {
		background-color: var(--bs-body-bg);
		color: var(--bs-body-color);
		border-color: var(--bs-border-color);
	}

	:global(.ts-control .item) {
		color: var(--bs-body-color);
	}

	:global(.ts-dropdown) {
		background-color: var(--bs-body-bg);
		color: var(--bs-body-color);
		border-color: var(--bs-border-color);
	}

	:global(.ts-dropdown .option) {
		color: var(--bs-body-color);
	}

	:global(.ts-dropdown .option.active) {
		background-color: var(--bs-primary);
		color: var(--bs-white);
	}

	:global(.ts-wrapper.single .ts-control::after) {
		border-color: var(--bs-secondary-color) transparent transparent;
	}

	:global(.ts-control .remove) {
		color: var(--bs-secondary-color);
		border: 0;
		background: transparent;
	}

	:global(.ts-control .remove:hover) {
		color: var(--bs-danger);
	}
</style>
