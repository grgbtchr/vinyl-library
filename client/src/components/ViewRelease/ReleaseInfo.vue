<template>

<div>
  <div class="tracklist">
    <ul>
      <li v-for="(value, key) in release.tracks">
        <span>{{key}}.</span> {{value}}
      </li>
    </ul>
  </div>
  <div class="description">
    <p>{{release.description}}</p>
  </div>
</div>

</template>


<script>
export default {
  props: [
    'release'
  ]
}
</script>


<style scoped>

.tracklist {
  color: black;
  padding: 16px;
  margin-top: 14px;
  background: #e0e2e2;
}

.tracklist ul li {
  padding: 8px 0;
  border-bottom: 1px solid #8c8c8c;
}

.tracklist ul li:last-child {
  border-bottom: none;
}

</style>
