<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const studentGuidance = ref([]);
const headers = ref([
  { title: 'Title', align: 'start', key: 'title' },
  { title: 'Description', key: 'description' },
  { title: 'Sanction', key: 'sanction' },
  { title: 'Date', key: 'date' }
]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    // Extract and validate student guidance
    const guidance = response.student_profile?.guidance;

    if (Array.isArray(guidance)) {
      studentGuidance.value = guidance;
    } else if (guidance) {
      // Wrap single object in array
      studentGuidance.value = [guidance];
    } else {
      error.value = 'No guidance found or data is not an array';
    }

    console.log('Student guidance data:', studentGuidance.value); // Log the studentGuidance
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
    :items="studentGuidance"
    :loading="loading"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">
          Guidance Records
        </v-toolbar-title>
      </v-toolbar>
    </template>

    <template v-slot:item="{ item }">
      <tr :key="item.cases_id">
        <td>{{ item.case_title }}</td>
        <td>{{ item.case_description }}</td>
        <td>{{ item.case_sanction }}</td>
        <td>{{ item.case_date }}</td>
      </tr>
    </template>

    <template v-slot:no-data>
      {{ error || 'No guidance records found.' }}
    </template>
  </v-data-table>
</template>

<script>

</script>

<style>
/* Add any styles you need here */
</style>
