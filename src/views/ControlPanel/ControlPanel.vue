<template>
    <div class="control-panel">
        <u-sidebar></u-sidebar>
        <div class="control-panel__container">
            <u-toolbar></u-toolbar>
            <div class="control-panel__content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import UToolbar from "@/components/UToolbar/UToolbar"
import USidebar from "@/components/USidebar/USidebar"
export default {
    components: {
        UToolbar,
        USidebar
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./control_panel.scss">
</style>