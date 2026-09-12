<script>
    const {usuario} = $props();
</script>
<!--begin::User Menu Dropdown-->
<li class="nav-item dropdown user-menu">
    <a href="#" class="nav-link dropdown-toggle d-flex align-items-center gap-2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/assets/img/user2-160x160.jpg" class="user-image rounded-circle shadow-sm" alt="Alexander Pierce" width="28" height="28" />
        <span class="d-none d-md-inline fw-medium small">{usuario.nombre}</span>
    </a>
    
    <ul class="dropdown-menu dropdown-menu-end shadow-lg p-2 border-0 rounded-3 mt-2" style="min-width: 230px;">
        <!-- Cabecera de usuario -->
        <li class="px-3 py-2 mb-1">
            <div class="fw-semibold small text-truncate">{usuario.nombre}</div>
            <div class="text-body-secondary text-truncate" style="font-size: 0.75rem;">{usuario.email}</div>
            <span class="badge text-bg-primary-subtle text-primary border border-primary-subtle mt-2 fw-normal" style="font-size: 0.65rem;">Web Developer</span>
        </li>
        
        
        <li><hr class="dropdown-divider my-1"></li>
        
        <!-- Cerrar Sesión -->
        <li>
            <a class="dropdown-item d-flex align-items-center gap-2 py-1.5 px-3 rounded-2 text-danger" href="#">
                <i class="bi bi-box-arrow-right fs-6 text-danger"></i>
                <span class="small fw-medium">Cerrar sesión</span>
            </a>
        </li>
    </ul>
</li>
<!--end::User Menu Dropdown-->