<script>
    import favicon from '$lib/assets/favicon.svg';

    import Footer from '$lib/components/layouts/Footer.svelte';
    import Header from '$lib/components/layouts/Header.svelte';
    import Sidebar from '$lib/components/layouts/Sidebar.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<Sidebar />

{@render children()}

<Footer />