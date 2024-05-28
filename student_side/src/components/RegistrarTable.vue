<script setup>
import { ref, onMounted } from 'vue';
// import { fetchCurrentUser } from '../services/api'

// const currentUser = ref(null);

// onMounted(async () => {
//   try {
//     currentUser.value = await fetchCurrentUser();
//     console.log('Current user data:', currentUser.value);
//   } catch (error) {
//     console.error('Failed to fetch current user:', error.message);
//   }
// });

</script>

<template>
    <v-data-table
    :headers="headers"
    :items="registrarInfo"
  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">History</v-toolbar-title>
      
    </v-toolbar>
    
  </template>

  
  </v-data-table>
  <!-- <div v-else>
    <h6 style="color:var(--dark); font-weight: 900;">Hist</h6>
    No borrowed books found.
</div> -->

</template>

<script>
export default {
    data () {
    return {
    headers: [
      { title: 'Book Name', align: 'start', key: 'book_name' },
      { title: 'Book Status', key: 'book_status' },
      { title: 'Due Date', key: 'due_date' },
      { title: 'Return Date', key: 'return_date' }
    ],
}
    
},

}
</script>

<style>

</style>