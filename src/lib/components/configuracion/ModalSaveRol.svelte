<script>
	import API from '$lib/utils/API';
	import Modal from '../shared/Modal.svelte';

	
     const modulos = [
        {
            categoria: 'Configuración',
            permisos: [
                {
                    nombre: 'Usuario',
                    permiso: 'configuracion-usuario',
                    acciones: ['view', 'new', 'edit', 'delete']
                },
                {
                    nombre: 'Empresa',
                    permiso: 'configuracion-empresa',
                    acciones: ['view', 'new', 'edit', 'delete']
                },
                {
                    nombre: 'Roles y permisos',
                    permiso: 'configuracion-roles',
                    acciones: ['view', 'new', 'edit', 'delete']
                }
            ]
        },
        {
            categoria: 'Operaciones',
            permisos: [
                {
                    nombre: 'Despachos',
                    permiso: 'operaciones-despachos',
                    acciones: ['view', 'new', 'edit', 'delete']
                },
                {
                    nombre: 'Reportes',
                    subcategoria: [
                        {
                            nombre: 'KPI operaciones',
                            permiso: 'operaciones-kpi',
                            acciones: ['view']
                        }
                    ]
                }
            ]
        }
    ];

    const acciones = [
        { key: 'view', label: 'Ver' },
        { key: 'new', label: 'Crear' },
        { key: 'edit', label: 'Editar' },
        { key: 'delete', label: 'Eliminar' }
    ];
	let form = $state({
		id: null,
		nombre: '',
		permisos: ''
	});
	let modal, modo = $state('nuevo');

    let {onSave= () => {}} = $props();

	export const crear = ()=>  {
		 modal.open();
	}
	
	export const editar = (data) => {
		modo = 'editar';
	}

	const save = () => {

	}

</script>

<Modal 
bind:this={modal}
title={modo == 'nuevo' ? 'Nuevo rol': 'Editar Rol' }
onSubmit={save}
>
{#snippet  children()}
 <table class="table table-bordered align-middle">
    <thead>
        <tr>
            <th>Categoría</th>
            {#each acciones as accion}
                <th class="text-center">{accion.label}</th>
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each modulos as modulo}
            <tr class="table-light">
                <td colspan="5" class="fw-bold">
                    {modulo.categoria}
                </td>
            </tr>

            {#each modulo.permisos as permiso}
                {#if permiso.acciones}
                    <tr>
                        <td>{permiso.nombre}</td>

                        {#each acciones as accion}
                            <td class="text-center">
                                {#if permiso.acciones.includes(accion.key)}
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id={`${permiso.permiso}-${accion.key}`}
                                    />
                                {/if}
                            </td>
                        {/each}
                    </tr>
                {:else}
                    <tr class="table-light">
                        <td colspan="5" class="fw-semibold">
                            {permiso.nombre}
                        </td>
                    </tr>

                    {#each permiso.subcategoria ?? [] as subcategoria}
                        <tr>
                            <td class="ps-4">{subcategoria.nombre}</td>

                            {#each acciones as accion}
                                <td class="text-center">
                                    {#if subcategoria.acciones.includes(accion.key)}
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id={`${subcategoria.permiso}-${accion.key}`}
                                        />
                                    {/if}
                                </td>
                            {/each}
                        </tr>
                    {/each}
                {/if}
            {/each}
        {/each}
    </tbody>
</table>
 
{/snippet}

	{#snippet footer()}
		<div class="w-100 d-flex justify-content-between">
			<button type="button" class="btn btn-secondary btn-sm" onclick={() => modal.close()}>
				Cerrar
			</button>

			<button type="submit" class="btn btn-primary btn-sm">
				{modo === 'nuevo' ? 'Guardar' : 'Actualizar'}
			</button>
		</div>
	{/snippet}
</Modal>
