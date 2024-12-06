<script setup>
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <RouterLink to="/" class="d-inline-block align-text-top navbar-brand">
                <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Flora y Fauna
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/home" active-class="active" class="nav-link">Flora y Fauna</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contacto" active-class="active" class="nav-link">Contacto</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">
.navbar {
    a {
        font-weight: bold;
        color: #012e5b;

        &.active {
            color: #f59619;
        }
    }
}
</style>