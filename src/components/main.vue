<script lang="ts">
export const useMainUI = defineComponentUI({
  slots: {
    body: ":ui: bg-ui-surface text-ui-on-surface overscroll-none",
    main: ":ui: min-h-screen",
  },
});

export type MainUI = Parameters<typeof useMainUI>[0];

export interface MainProps {
  ui?: MainUI;
}
</script>

<script setup lang="ts">
const props = defineProps<MainProps>();
const ui = useMainUI(props.ui);

useHead({
  bodyAttrs: {
    class: ui.body(),
  },
});
</script>

<template>
  <main :class="ui.main()">
    <slot />
  </main>
</template>

<style>
::selection {
  --apply: "bg-ui-secondary";
}
</style>
