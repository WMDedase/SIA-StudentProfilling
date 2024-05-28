<script setup>
import { ref, onMounted } from 'vue';
// import { fetchBorrowStatusForCurrentUser } from '../services/api'

// const borrowedBooks = ref(null);

// onMounted(async () => {
//   try {
//       // Fetch borrow status data for the currently logged-in student
//       borrowedBooks.value = await fetchBorrowStatusForCurrentUser();
//       console.log('Borrowed books data:', borrowedBooks.value);
//   } catch (error) {
//       console.error('Failed to fetch current user or borrowed books:', error.message);
//   }
// });

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
      { title: 'Book Name', align: 'start', key: 'book_id' },
      // { title: 'Student ID', key: 'borrow_status' },
      { title: 'Book Status', key: 'borrow_status' },
      { title: 'Due Date', key: 'return_duedate' },
      { title: 'Return Date', key: 'return_date' }
    ],
}
    
},

}
</script>

<style>

</style>