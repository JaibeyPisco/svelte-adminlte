<script>
	import favicon from '$lib/assets/favicon.svg';
	// export const ssr = false;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
		crossorigin="anonymous"
	/>

	<link rel="preload" href="./css/adminlte.css" as="style" />
</svelte:head>

{@render children()}
 
<!-- Notificacion -->
<div
    id="toast"
       class="toast align-items-center border-0 position-fixed top-0 start-50 translate-middle-x mt-3"
    style="z-index: 99999;"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
>
    <div class="d-flex">
        <div class="toast-body"></div>

        <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
        ></button>
    </div>
</div>