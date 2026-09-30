<script>
    import API from '$lib/utils/API';
    import Modal from './Modal.svelte';

    let modal;

    let { onSave = () => {} } = $props();

    let form = $state({
        id: null,
        texto: '',
        confirmar: false
    });

    let url = $state('');

    export function open(data, endpoint) {
        form = {
            id: data.id,
            texto: data.nombre,
            confirmar: false
        };

        url = endpoint;

        modal.open();
    }

    const save = async () => {
        const data = await API.delete(`${url}/${form.id}`);

        onSave({ data });

        modal.close();
    };
</script>

<Modal bind:this={modal} title="Eliminar" size="modal-sm" onSubmit={save}>

    {#snippet children()}
        <div class="text-center py-2">

            <div class="fs-1 text-danger mb-3">
                <i class="bi bi-trash3"></i>
            </div>

            <p class="mb-2">
                ¿Está seguro de eliminar?
            </p>

            <p class="mb-3">
                <strong>{form.texto}</strong>
            </p>

            <div class="form-check text-start">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="confirmarEliminar"
                    bind:checked={form.confirmar}
                    required
                    name="confirmarEliminar"
                />

                <label class="form-check-label" for="confirmarEliminar">
                    Confirmo que deseo eliminar este registro.
                </label>
            </div>

        </div>
    {/snippet}

{#snippet footer()}
    <div class="w-100 d-flex justify-content-between">
        <button
            type="button"
            class="btn btn-secondary btn-sm"
            required
            onclick={() => modal.close()}
        >
            Cancelar
        </button>

        <button
            type="submit"
            class="btn btn-danger btn-sm"
        >
            Eliminar
        </button>
    </div>
{/snippet}

</Modal>