<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api'

const currentUser = ref(null);

onMounted(async () => {
  try {
    currentUser.value = await fetchCurrentUser();
    console.log('Current user data:', currentUser.value);
  } catch (error) {
    console.error('Failed to fetch current user:', error.message);
  }
});

</script>

<template>
    <v-data-table
    :headers="headers"
    :items="studentViolations"

  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Violation Records</v-toolbar-title>
      
    </v-toolbar>
    
  </template>

  
  </v-data-table>
  
</template>

<script>
export default {
    data () {
    return {
    headers: [
      { title: 'Title', align: 'start', key: 'title' },
      { title: 'Description', key: 'description' },
      { title: 'Sanction', key: 'sanction' },
      { title: 'Date', key: 'date' }
    ],
    studentViolations: [],
}
    
},

}
</script>

<style>

</style>