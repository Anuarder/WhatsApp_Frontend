<template>
    <div class="control-panel">
        <div 
            class="control-panel__sidebar" 
            :style="sidebar ? 'left: 0' : ''"
            v-click-outside="config">
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
import vClickOutside from 'v-click-outside'
import { mapGetters } from "vuex"
export default {
    components: {
        UToolbar,
        USidebar
    },
    data() {
        return {
            config: {
                handler: this.hide,
                events: ["dblclick", "click"]
            }
        }
    },
    computed: {
        ...mapGetters(['sidebar'])
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    methods: {
        hide(){
            this.$store.commit('setSidebar', false);
        }
    },
}
</script>
<style 
    lang="scss" 
    scoped
    src="./control_panel.scss">
</style>