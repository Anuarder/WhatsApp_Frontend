<template>
    <div class="control-panel">
        <div class="control-panel__sidebar">
            <u-sidebar></u-sidebar>
        </div>
        <div class="control-panel__container">
            <div class="control-panel__toolbar">
                <u-toolbar></u-toolbar>
            </div>
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