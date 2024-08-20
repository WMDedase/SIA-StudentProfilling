<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const consultationRecords = ref([]);
const loading = ref(true);
const error = ref(null);

const headersConsultationRecords = [
  { title: 'Complaint', key: 'complaint' },
  { title: 'Treatment', key: 'treatment' },
  { title: 'Time In', key: 'time_in' },
  { title: 'Time Out', key: 'time_out' },
];

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;

    // Fetching consultation records
    if (response.student_profile?.consultation_record && Array.isArray(response.student_profile.consultation_record)) {
      consultationRecords.value = response.student_profile.consultation_record;
      console.log('Consultation record data:', consultationRecords.value);
    } else {
      error.value = 'No consultation record data found';
    }

  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
    <!-- Consultation Records Table -->
    <v-data-table
      :headers="headersConsultationRecords"
      :items="consultationRecords"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Consultation Records</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:item="{ item }">
        <tr :key="item.id">
          <td>{{ item.complaint }}</td>
          <td>{{ item.treatment }}</td>
          <td>{{ item.time_in }}</td>
          <td>{{ item.time_out }}</td>
        </tr>
      </template>

      <template v-slot:no-data>
        {{ error || 'No consultation records found.' }}
      </template>
    </v-data-table>
</template>

<style scoped>
/* Add any custom styles here */
</style>
