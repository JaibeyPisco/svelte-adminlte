<script>
    import { onMount } from 'svelte';

    let theme = $state('auto');

    onMount(() => {
        theme = localStorage.getItem('lte-theme') ?? 'auto';

        applyTheme(theme);

        const mediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        const handleSystemThemeChange = () => {
            if (theme === 'auto') {
                applyTheme('auto');
            }
        };

        mediaQuery.addEventListener(
            'change',
            handleSystemThemeChange
        );

        return () => {
            mediaQuery.removeEventListener(
                'change',
                handleSystemThemeChange
            );
        };
    });

    function applyTheme(selectedTheme) {
        let resolvedTheme = selectedTheme;

        if (selectedTheme === 'auto') {
            resolvedTheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
                ? 'dark'
                : 'light';
        }

        document.documentElement.setAttribute(
            'data-bs-theme',
            resolvedTheme
        );

        document.documentElement.style.colorScheme =
            resolvedTheme;
    }

    function setTheme(selectedTheme) {
        theme = selectedTheme;

        localStorage.setItem(
            'lte-theme',
            selectedTheme
        );

        applyTheme(selectedTheme);
    }
</script>

<li class="nav-item dropdown">
    <button
        class="nav-link border-0 bg-transparent"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Cambiar tema"
    >
        {#if theme === 'light'}
            <i class="bi bi-sun-fill"></i>
        {:else if theme === 'dark'}
            <i class="bi bi-moon-fill"></i>
        {:else}
            <i class="bi bi-circle-half"></i>
        {/if}
    </button>

    <ul
        class="dropdown-menu dropdown-menu-end"
        style="--bs-dropdown-min-width: 9rem"
    >
        <li>
            <button
                type="button"
                class="dropdown-item d-flex align-items-center"
                class:active={theme === 'light'}
                onclick={() => setTheme('light')}
            >
                <i class="bi bi-sun-fill me-2"></i>

                Claro

                {#if theme === 'light'}
                    <i class="bi bi-check-lg ms-auto"></i>
                {/if}
            </button>
        </li>

        <li>
            <button
                type="button"
                class="dropdown-item d-flex align-items-center"
                class:active={theme === 'dark'}
                onclick={() => setTheme('dark')}
            >
                <i class="bi bi-moon-fill me-2"></i>

                Oscuro

                {#if theme === 'dark'}
                    <i class="bi bi-check-lg ms-auto"></i>
                {/if}
            </button>
        </li>

        <li>
            <button
                type="button"
                class="dropdown-item d-flex align-items-center"
                class:active={theme === 'auto'}
                onclick={() => setTheme('auto')}
            >
                <i class="bi bi-circle-half me-2"></i>

                Automático

                {#if theme === 'auto'}
                    <i class="bi bi-check-lg ms-auto"></i>
                {/if}
            </button>
        </li>
    </ul>
</li>