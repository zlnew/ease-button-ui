<template>
    <svg class="ease-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
        <circle cx="20" cy="20" r="10" opacity="0.5">
            <animate attributeName="cx" begin="0s" dur="2s" values="20; 60; 100; 20" repeatCount="indefinite" />
            <animate attributeName="opacity" begin="0s" dur="2s" values="0.5; 1; 0.5; 0.5" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="20" r="10" opacity="0.5">
            <animate attributeName="cx" begin="0s" dur="2s" values="60; 100; 20; 60" repeatCount="indefinite" />
            <animate attributeName="opacity" begin="0s" dur="2s" values="0.5; 0.5; 1; 0.5" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="20" r="10" opacity="0.5">
            <animate attributeName="cx" begin="0s" dur="2s" values="100; 20; 60; 100" repeatCount="indefinite" />
            <animate attributeName="opacity" begin="0s" dur="2s" values="0.5; 0.5; 0.5; 1" repeatCount="indefinite" />
        </circle>
    </svg>
</template>