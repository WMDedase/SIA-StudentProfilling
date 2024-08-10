<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    console.log(response.student_profile);
    currentUser.value = response.student_profile;
    if (response.student_profile && response.student_profile.length > 0) {
    //   currentUser.value = response.student[0];
      console.log('Current user data:', currentUser.value); // Log the current user data
    } else {
      error.value = 'No student data found';
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
  } finally {
    loading.value = false;
  }
});
</script>
<template>
    <v-data-table
    :headers="headers"
    :items="clinicTable"
    :loading="loading"
  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Consultations</v-toolbar-title>
      
    </v-toolbar>
    
  </template>

  
  </v-data-table>
  
</template>

<script>
export default {
    data () {
    return {
    headers: [
      { title: 'Consultation Title', align: 'start', key: 'title' },
      { title: 'Consultation Notes', key: 'notes' },
      { title: 'Date', key: 'date' },
    ],
    borrowedItems: [],
}
    
},

}
</script>

<style>

</style>