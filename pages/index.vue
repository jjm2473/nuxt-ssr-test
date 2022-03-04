<template>
  <div>
    <h1>{{ title }}</h1>
    <Tutorial />
  </div>
</template>

<script>
export default {
  async asyncData () {
    const nuxtfetch = (url, params) => {
      if (!process.browser && url && url.startsWith('/')) {
        url = process.env._AXIOS_BASE_URL_ + url.substring(1)
      }
      return fetch(url, params)
    }
    const res = await (await nuxtfetch('/api/data.json', { method: 'GET' })).json()
    return { title: res.title }
  }
}
</script>
