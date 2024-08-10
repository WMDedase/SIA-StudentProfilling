<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const consultations = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;

    if (response.student_profile?.consultation && Array.isArray(response.student_profile.consultation)) {
      consultations.value = response.student_profile.consultation;
      console.log('Consultation data:', consultations.value);
    } else {
      error.value = 'No consultation data found or data is not an array';
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
  <v-data-table
    :headers="headers"
    :items="consultations"
    :loading="loading"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Consultations</v-toolbar-title>
      </v-toolbar>
    </template>

    <template v-slot:item="{ item }">
      <tr :key="item.con_id">
        <td>{{ item.con_title }}</td>
        <td>{{ item.con_notes }}</td>
        <td>{{ item.con_date }}</td>
      </tr>
    </template>

    <template v-slot:no-data>
      {{ error || 'No consultations found.' }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Consultation Title', key: 'con_title' },
        { title: 'Consultation Notes', key: 'con_notes' },
        { title: 'Date', key: 'con_date' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
