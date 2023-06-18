<script setup lang="ts">
import { ref } from 'vue';
import EaseLoading from "./components/EaseLoading.vue";

const isLoading = ref(false);
</script>

<template>
  <div class="mb-8 flex justify-right">
    <h1 class="text-2xl font-bold text-blue-700">Ease Button UI</h1>
  </div>

  <div class="mb-4 flex justify-left space-x-4">
    <EaseButton text="Is disabled!" disabled />
    <EaseButton
      v-bind="{
        text: 'Loading with text!',
        loading: true,
        onLoading: () => ({
          text: false,
          icon: EaseLoading,
        }),
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Wait for me!',
        variant: 'secondary',
        loading: true,
      }"
    />
  </div>

  <div class="mb-4 flex justify-right space-x-4">
    <EaseButton
      v-bind="{
        text: 'Primary',
        variant: 'primary',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Secondary',
        variant: 'secondary',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Link',
        variant: 'link',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Success',
        variant: 'success',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Danger',
        variant: 'danger',
        loading: isLoading,
      }"
    />
  </div>

  <div class="mb-4 flex justify-right space-x-4">
    <EaseButton
      v-bind="{
        text: 'Primary',
        variant: 'primary',
        rounded: 'none',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Secondary',
        variant: 'secondary',
        rounded: 'none',
      }"
    />
    <EaseButton v-bind="{
        text: 'Link',
        variant: 'link',
        rounded: 'none',
      }"
    />
  </div>

  <div class="mb-4 flex justify-right space-x-4">
    <EaseButton
      v-bind="{
        text: 'Primary',
        variant: 'primary',
        rounded: 'full',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Secondary',
        variant: 'secondary',
        rounded: 'full',
      }"
    />
    <EaseButton
      v-bind="{
        text: 'Link',
        variant: 'link',
        rounded: 'full',
      }"
    />
  </div>
</template>
