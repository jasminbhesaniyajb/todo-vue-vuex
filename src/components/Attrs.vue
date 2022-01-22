<template>
    <div>
        <h2>user 1</h2>
        <h2>user 3</h2>
        <h2>user 4</h2>
        <h2 v-bind="$attrs">user 5</h2>
    </div>
</template>
<script>
export default {
    name: "Attrs",
    inheritAttrs: false,
}
</script>