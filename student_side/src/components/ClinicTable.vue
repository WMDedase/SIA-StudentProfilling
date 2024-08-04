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
    :items="clinicTable"
  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Consultation History</v-toolbar-title>
      
    </v-toolbar>
    
  </template>

  
  </v-data-table>
  
</template>

<script>
export default {
    data () {
    return {
    headers: [
      { title: 'Item Name', align: 'start', key: 'item_name' },
      { title: 'Item Status', key: 'item_status' },
      { title: 'Due Date', key: 'due' },
      { title: 'Return Date', key: 'return_date' }
    ],
    borrowedItems: [],
}
    
},

}
</script>

<style>

</style>