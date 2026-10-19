<script>
	import ModalSaveRol from "$lib/components/configuracion/ModalSaveRol.svelte";
	import PageLayout from "$lib/components/layouts/PageLayout.svelte";
    const breadcrumb = ['Configuracion', 'Roles y Permisos'];

    let modalSaveRol =$state();

    const reloadTable = async(response) =>{

        Notification('Guardado correctamente', 'succes');
    }
 
 const openModal = () => {
    modalSaveRol.crear();
 }
</script>
<PageLayout {breadcrumb}>

    {#snippet actions()}
        <button class="btn btn-primary btn-sm" onclick={openModal}>
            <i class="bi bi-plus-lg me-1"></i>
            Nuevo
        </button>
    {/snippet}

    <div class="card">
        <div class="card-body">
            Roles
        </div>
    </div>
     
    <ModalSaveRol bind:this={modalSaveRol} onSave={reloadTable}/> 
</PageLayout>