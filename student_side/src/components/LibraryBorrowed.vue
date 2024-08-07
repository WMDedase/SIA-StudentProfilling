<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

// Reactive references
const borrowedBooks = ref([]);
const headers = ref([
  { title: 'Book Name', value: 'book_title' },
  { title: 'Book Status', value: 'borrow_status' },
  { title: 'Due Date', value: 'return_duedate' },
  { title: 'Return Date', value: 'return_date' }
]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // Fetch current user data
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    // Extract and validate borrowed books
    const borrowed = response.student_profile?.borrowed;

    if (Array.isArray(borrowed)) {
      borrowedBooks.value = borrowed;
    } else if (borrowed) {
      // Wrap single object in array
      borrowedBooks.value = [borrowed];
    } else {
      error.value = 'No borrowed books found or data is not an array';
    }

    console.log('Borrowed books data:', borrowedBooks.value); // Log the borrowedBooks
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
  } 
  finally {
    loading.value = false;
  }
});
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="borrowedBooks"
    :loading="loading"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">
          Borrowed Books
        </v-toolbar-title>
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
      {{ error || 'No borrowed books found.' }}
    </template>
  </v-data-table>
</template>
