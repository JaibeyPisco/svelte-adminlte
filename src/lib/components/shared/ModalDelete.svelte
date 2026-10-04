```svelte
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
        if (!form.confirmar) return;

        const data = await API.delete(`${url}/${form.id}`);

        onSave({ data });

        modal.close();
    };
</script>

<Modal
    bind:this={modal}
    title="Eliminar registro"
    size="modal-sm"
    onSubmit={save}
>
    {#snippet children()}
        <div class="text-center px-2 py-3">

            <div
                class="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle bg-danger-subtle text-danger"
                style="width: 64px; height: 64px;"
            >
                <i class="bi bi-trash3 fs-3"></i>
            </div>

            <h5 class="mb-2 fw-semibold">
                ¿Eliminar este registro?
            </h5>

            <p class="text-muted mb-3">
                Esta acción no se puede deshacer.
            </p>

            <div class="bg-light rounded border px-3 py-2 mb-4">
                <div class="small text-muted mb-1">
                    Registro seleccionado
                </div>

                <div class="fw-semibold text-dark text-truncate">
                    {form.texto}
                </div>
            </div>

            <div class="form-check text-start">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="confirmarEliminar"
                    bind:checked={form.confirmar}
                    name="confirmarEliminar"
                />

                <label
                    class="form-check-label"
                    for="confirmarEliminar"
                >
                    Confirmo que deseo eliminar este registro.
                </label>
            </div>

        </div>
    {/snippet}

    {#snippet footer()}
        <div class="w-100 d-flex gap-2 justify-content-end">
            <button
                type="button"
                class="btn btn-secondary btn-sm"
                onclick={() => modal.close()}
            >
                Cancelar
            </button>

            <button
                type="submit"
                class="btn btn-danger btn-sm"
                disabled={!form.confirmar}
            >
                <i class="bi bi-trash3 me-1"></i>
                Eliminar
            </button>
        </div>
    {/snippet}
</Modal>
```
