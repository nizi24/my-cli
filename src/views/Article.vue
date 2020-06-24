<template>
  <div>
    <span>記事コード:{{ aid }}</span>
    <router-views />
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    aid: String
  }
}
</script>
