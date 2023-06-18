<script setup lang="ts">
import { computed } from 'vue';
import { useEaseButton } from '../stores/useEaseButton';
import EaseLoading from "./EaseLoading.vue";

const props = withDefaults(
    defineProps<{
        type?: 'button' | 'submit' | 'reset',
        text?: string;
        size?: 'sm' | 'base' | 'lg' | 'xl';
        variant?: 'primary' | 'secondary' | 'link';
        rounded?: 'none' | 'base' | 'full';
        slotted?: boolean;
        loading?: boolean;
        onLoading?: () => ({
            text?: string;
            icon?: any | boolean;
            disabled?: boolean;
        });
    }>(), {
        type: "button",
        text: "",
        size:'base',
        variant: 'primary',
        rounded: 'base',
        slotted: false,
        loading: false,
        onLoading: () => ({
            icon: EaseLoading,
            disabled: true,
        }),
    },
);

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

const whenLoading = computed(() => {
    if (props.loading) {
        const onLoading = props.onLoading();

        const text = onLoading.text !== undefined ? onLoading.text : props.text;
        const disabled = onLoading.disabled !== undefined ? onLoading.disabled : true;
        const icon = onLoading.icon !== undefined ? onLoading.icon : EaseLoading;

        return {
            text,
            disabled,
            icon,
            ...onLoading,
        };
    }

    return {
        text: props.text,
        disabled: false,
        icon: false,
    };
});

const extendedClasses = computed(() => {
    return useEaseButton().getStyles().classes;
});

const buttonStyle = computed(() => {
    return useEaseButton().getVariantStyles(props.variant);
});
</script>

<template>
    <button v-if="!slotted" class="ease-button ease-color" 
        v-bind="{
            type: type,
            class: [extendedClasses, sizeClasses, roundedClasses],
            disabled: whenLoading.disabled,
        }"
    >
        <component v-if="loading" :is="whenLoading.icon" />
        <template v-if="whenLoading.text">
            {{ whenLoading.text || props.text }}
        </template>
    </button>

    <button v-else class="ease-button ease-color"
        v-bind="{
            type: type,
            class: [extendedClasses, sizeClasses, roundedClasses],
            disabled: whenLoading.disabled,
        }"
    >
        <component v-if="loading" :is="whenLoading.icon" />
        <template v-if="whenLoading.text">
            {{ whenLoading.text }}
        </template>
        <template v-else>
            <slot />
        </template>
    </button>
</template>

<style scoped>
* {
    --ease-color: v-bind(buttonStyle.color);
    --ease-background-color: v-bind(buttonStyle.bgColor);
    --ease-border: v-bind(buttonStyle.border);
    --ease-border-radius: v-bind(buttonStyle.borderRadius);
    --ease-outline-color: v-bind(buttonStyle.outlineColor);
    --ease-outline-style: v-bind(buttonStyle.outlineStyle);
    --ease-text-decoration: v-bind(buttonStyle.textDecoration);

    --ease-font-size-sm: x-small;
    --ease-font-size-base: small;
    --ease-font-size-lg: medium;
    --ease-font-size-xl: large;
}
</style>

<style scoped src="../assets/ease.style.css"></style>