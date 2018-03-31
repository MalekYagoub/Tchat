<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

import Toolbar from './components/toolbar'
import io from 'socket.io-client'

export default {
  data () {
    return {
    }
  },
  components: {
    Toolbar
  },
  mounted () {
    const socket = io('http://localhost:3000')
    this.$store.commit('socket', socket)
  },
  name: 'App'
}
</script>
