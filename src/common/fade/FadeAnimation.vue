<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
    
}
</script>
<style>
    .v-enter,.v-leave-to{
        opacity:0;
    }
    .v-enter-active,.v-leave-active{
        transition:all .5s;
    }
</style>
