<template>
    <div class="w-full">

        <div class="flex flex-col justify-center items-center">
            <header class="w-full px-32 py-6 shadow-lg bg-gray-100 flex max-sm:flex-col max-sm:space-y-4 justify-between items-center">
                <div id="logo">
                    logo
                </div>
                <nav class="space-x-4">
                    <router-link to="/">A propos</router-link>
                    <router-link to="/services">Services</router-link>
                    <!-- <router-link to="/login">Login</router-link> -->
                </nav>
                <div id="connexion">
                    <router-link class="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded hover:text-white" to="/login">Connection</router-link>
                </div>
            </header>
            <main>
                <router-view />
            </main>
            <footer class="flex items-center justify-center">
                batimat &copy; 2024
            </footer>
        </div>

    </div>
</template>