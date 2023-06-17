<script setup lang="ts">
import { computed } from 'vue';
import { useCustomButton } from "../stores/customizeButton";
import Loading from "./EaseLoading.vue";

const props = withDefaults(
    defineProps<{
        text?: string;
        size?: 'sm' | 'base' | 'lg' | 'xl';
        variant?: 'primary' | 'secondary' | 'link';
        rounded?: 'none' | 'base' | 'full';
        slot?: boolean;
        loading?: boolean;
    }>(), {
        text: "",
        size:'base',
        variant: 'primary',
        rounded: 'base',
        slot: false,
        loading: false,
    },
);

const colorClasses = computed(() => {
    switch (props.variant) {
        case 'primary': return 'color-primary';
        case 'secondary': return 'color-secondary';
        case 'link': return 'color-link';
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case'sm': return'size-sm';
        case 'base': return 'size-base';
        case 'lg': return 'size-lg';
        case 'xl': return 'size-xl';
    }
});

const roundedClasses = computed(() => {
    switch (props.rounded) {
        case 'none': return 'rounded-none';
        case 'base': return 'rounded-base';
        case 'full': return 'rounded-full';
    }
});

const loadingClasses = computed(() => {
    if (props.variant === 'primary') {
        return 'loading-circle-white';
    } else {
        return 'loading-circle-primary';
    }
});

function convertToHex(string: string): string {
    if (string.startsWith('#')) return string;

    if (string.startsWith('--')) return cssVarToHex(string);

    return '';
}

function cssVarToHex(cssVariable: string): string {
    const colorValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim();

    if (colorValue.startsWith('#')) return colorValue;

    if (colorValue.startsWith('rgb')) {
        const [r, g, b] = colorValue.match(/\d+/g) ?? [];
        return `#${Number(r).toString(16)}${Number(g).toString(16)}${Number(b).toString(16)}`;
    }

    return '';
}

function hexToRgba(hex: string, opacity: number): string {
    const sanitizedHex = hex.replace('#', '');
    const r = parseInt(sanitizedHex.substring(0, 2), 16);
    const g = parseInt(sanitizedHex.substring(2, 4), 16);
    const b = parseInt(sanitizedHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const ease = useCustomButton();

const colorCode = computed(() => {
    if (ease.style.colorCode) {
        const code = convertToHex(ease.style.colorCode);
        return {
            color: code,
            outline: hexToRgba(code, 0.5),
        }
    } return {};
});

</script>

<template>
    <button v-if="!slot" class="ease-button" v-bind="{
        class: [colorClasses, sizeClasses, roundedClasses],
        disabled: loading,
    }">
        <Loading v-if="loading" :class="[loadingClasses]" />
        {{ props.text }}
    </button>

    <button v-else class="ease-button" v-bind="{
        class: [colorClasses, sizeClasses, roundedClasses],
    }">
        <slot></slot>
    </button>
</template>

<style scoped>
* {
    --ease-white-color: #fff;
    --ease-dark-color: #000;
    --ease-primary-color: v-bind(colorCode.color);
    --ease-border-outline-color: v-bind(colorCode.outline);
}
</style>

<style scoped src="../assets/ease.style.css"></style>