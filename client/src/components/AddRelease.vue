<template>
  <div class="wrapper">
    <h1>Add Release</h1>
    <form>
      <div>
        <label>Artist</label>
        <input id="artist" type="text" v-model="release.artist" required/>
      </div>
      <div>
        <label>Title</label>
        <input id="title" type="text" v-model="release.title" required/>
      </div>
      <div>
        <label>Album Image URL</label>
        <input id="img" type="text" v-model="release.image" required/>
      </div>
      <div>
        <label>Label</label>
        <input id="label" type="text" v-model="release.label" required/>
      </div>
      <div id="genre">
        <label>Genre</label>
        <select v-model="release.genre" required>
          <option>Electronic</option>
          <option>Hip Hop</option>
          <option>Jazz</option>
          <option>Rock</option>
          <option>Reggae</option>
          <option>Latin</option>
          <option>Funk/Soul</option>
          <option>Blues</option>
          <option>Pop</option>
          <option>Classical</option>
          <option>Folk</option>
          <option>World</option>
        </select>
      </div>
      <div id="format">
        <label>Format</label>
        <select v-model="release.format" required>
          <option>LP</option>
          <option>CD</option>
          <option>12"</option>
          <option>7"</option>
        </select>
      </div>
      <label>Tracklist</label>
      <div id="tracklist">
        <div>
          <input type="number" min="0" required/>
          <input type="text" required/>
        </div>
      </div>
      <button type="button" @click="addSong">Add Track</button>
    </form>
    <button id="submit" type="button" @click="create">Submit Release</button>
    <div class="error">{{error}}</div>
  </div>
</template>


<script>
import ReleasesService from '@/services/ReleasesService'

export default {
  data () {
    return {
      release: {
        artist: null,
        title: null,
        label: null,
        genre: null,
        format: null,
        tracks: {},
        image: null
      },
      error: null
    }
  },
  methods: {
    addSong () {
      const div = document.createElement('div')
      const index = document.createElement('input')
      const input = document.createElement('input')
      index.setAttribute('type', 'number')
      index.setAttribute('min', '0')
      input.setAttribute('type', 'text')
      div.appendChild(index)
      div.appendChild(input)
      document.getElementById('tracklist').appendChild(div)
    },
    async create () {
      const tracks = {}
      const tracklist = Array.from(document.getElementById('tracklist').children)

      tracklist.forEach(track => {
        const index = track.querySelector('input[type=number]').value
        const name = track.querySelector('input[type=text]').value
        tracks[index] = name
      })
      this.release.tracks = tracks

      const areAllFieldsFilledIn = Object
        .keys(this.release)
        .every(key => !!this.release[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'All fields must be completed'
        return
      }

      try {
        await ReleasesService.post(this.release)
        this.$router.push({
          name: 'releases'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style scoped>

.wrapper {
  margin: 0 auto 80px;
  width: 400px;
}

form {
  margin: 120px 0 20px 0;
}

form div {
  margin-bottom: 14px;
}

label {
  display: block;
  color: #d4d4d4;
  font-size: 15px;
  margin-bottom: 4px;
}

input {
  padding: 8px;
  height: 40px;
  font-family: 'Franklin Gothic';
  font-size: 18px;
  color: #199096;
  background: none;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
}

#tracklist >>> div input {
  padding: 5px;
  height: 30px;
  font-family: 'Franklin Gothic';
  font-size: 16px;
  background: none;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
}

input[type=number],
#tracklist >>> div input[type=number] {
  width: 40px;
  margin-right: 10px;
  text-align: center;
}

#tracklist div input[type=text],
#tracklist >>> div input[type=text] {
  width: 320px;
}

#tracklist div,
#tracklist >>> div {
  margin-bottom: 20px;
}

#label {
  margin-bottom: 20px;
}

#artist,
#title,
#label,
#img {
  width: 100%;
}

input:focus,
#tracklist >>> div input:focus {
  outline: 0;
  border-color: #199096;
}

#genre {
  margin-right: 20px;
}

#genre,
#format {
  display: inline-block;
  margin-bottom: 30px;
}

select {
  appearance: none;
  font-family: 'Franklin Gothic';
  font-size: 18px;
  padding: 5px;
  color: #d4d4d4;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  height: 40px;
  background: none;
}

select:focus {
  outline: 0;
}

button {
  height: 30px;
  width: 80px;
  margin: 0;
  font-size: 15px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: #d4d4d4;
  color: black;
  border: 0;
  border-radius: 2px;
}

#submit {
  width: 100%;
  height: 40px;
  margin: 0;
  font-size: 18px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: #d4d4d4;
  color: black;
  border: 0;
  border-radius: 2px;
}

#submit:hover {
  color: #d4d4d4;
  background: #199096;
}

button:hover {
  color: #d4d4d4;
  background: #199096;
}

.error {
  margin-top: 24px;
  color: red;
}

</style>
