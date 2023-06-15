<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        slot?: boolean,
        type?: 'submit' | 'reset' | 'button';
        text?: string;
        color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger' | 'light' | 'dark';
        size?: 'sm' | 'base' | 'lg' | 'xl',
    }>(), {
        slot: false,
        type: 'button',
        color: 'primary',
        size: 'base',
    }
);

const colorClasses = computed(() => {
    switch (props.color) {
        case 'primary':
            return 'color-primary';
        case 'secondary':
            return 'color-secondary';
        case'success':
            return 'color-success';
        case 'warning':
            return 'color-warning';
        case 'info':
            return 'color-info';
        case 'danger':
            return 'color-danger';
        case 'light':
            return 'color-light';
        case 'dark':
            return 'color-dark';
        default:
            return 'color-primary';
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case'sm':
            return'size-sm';
        case 'base':
            return 'size-base';
        case 'lg':
            return 'size-lg';
        case 'xl':
            return 'size-xl';
        default:
            return'size-base';
    }
});
</script>

<template>
    <button v-if="!slot" v-bind="{
        type: type,
        class: [colorClasses, sizeClasses],
    }">
        {{ props.text }}
    </button>

    <button v-else v-bind="{
        type: type,
        class: [colorClasses, sizeClasses],
    }">
        <slot></slot>
    </button>
</template>

<style scoped src="../assets/button.style.css"></style>