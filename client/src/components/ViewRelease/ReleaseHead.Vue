<template>

  <div class="releasehead">
    <h1>
        {{release.artist}}
        <span>{{release.title}}</span>
    </h1>
    <h2>{{release.label}}</h2>
    <p>{{release.genre}}</p>
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

.releasehead {
  position: relative;
  color: #d4d4d4;
  background: black;
  padding: 20px;
  margin-bottom: 14px;
}

.releasehead span {
  display: block;
}

.releasehead h1 {
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 8px;
}

.releasehead h2 {
  font-size: 18px;
  text-transform: uppercase;
}

.releasehead p {
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-transform: uppercase;
}

</style>
