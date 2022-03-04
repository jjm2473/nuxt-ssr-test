<template>
  <div>
    <h1>{{ title }}</h1>
    <Tutorial />
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const res = await app.$axios.$get('/api/data.json')
    return { title: res.title }
  }
}
</script>
