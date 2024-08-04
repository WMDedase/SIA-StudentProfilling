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
    :items= borrowedBooks

  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Borrowed Books</v-toolbar-title>
      
    </v-toolbar>
    
  </template>

  <template v-slot:item="{ item }">
    <tr :key="item.borrow_id">
      <td>{{ item.book_title }}</td>
      <td>{{ item.borrow_status }}</td>
      <td>{{ item.return_duedate }}</td>
      <td>{{ item.return_date || 'N/A' }}</td>
    </tr>
  </template>

  <template v-slot:no-data>
      No borrowed books found.

  </template>

  </v-data-table>
  
  <!-- <div v-else>
    <h6 style="color:var(--dark); font-weight: 900;">Borrowed Books</h6>
    No borrowed books found.
</div> -->

</template>

<script>
export default {
    data () {
    return {
    headers: [
        { title: 'Book Name', key: 'book_title' },
        { title: 'Book Status', key: 'borrow_status' },
        { title: 'Due Date', key: 'return_duedate' },
        { title: 'Return Date', key: 'return_date' }
      ],
      borrowedBooks: [],

} 
    
},

}
</script>

<style>

</style>