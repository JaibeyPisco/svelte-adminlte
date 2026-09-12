<script>
	// import bootstrap from "bootstrap";
	import { onMount } from "svelte";

    // import {Modal as BootstrapModal } from 'bootstrap';

    let {
        title='',
        children,
        footer

    } = $props();

    let modalInstance, modalElement, BootstrapModal;

    export function open(){

        modalInstance ??= BootstrapModal.getOrCreateInstance(modalElement);

        modalInstance.show();
    }

    export function close() {
        modalInstance?.hide();
    }

	onMount(async()=>{
	 const bootstrap = await import('bootstrap');
    BootstrapModal = bootstrap.Modal;
	} )
</script>

<div bind:this={modalElement} class="modal fade" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">
					{title}
				</h5>

				<button type="button" class="btn-close" onclick={close} aria-label="Close"></button>
			</div>

			<div class="modal-body">
				{@render children()}
			</div>

			{#if footer}
				<div class="modal-footer">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
</div>
