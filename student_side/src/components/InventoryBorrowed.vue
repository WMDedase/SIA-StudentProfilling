<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const inventoryRecords = ref([]);
const loading = ref(true);
const error = ref(null);

const headersInventoryRecords = [
  { title: 'Item Name', key: 'item_name' },
  { title: 'Quantity', key: 'quantity' },
  { title: 'Borrow Date', key: 'borrow_date' },
  { title: 'Return Date', key: 'return_date' },
];

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;

    // Fetching inventory records
    if (response.student_profile?.inventory && Array.isArray(response.student_profile.inventory)) {
      inventoryRecords.value = response.student_profile.inventory;
      console.log('Inventory record data:', inventoryRecords.value);
    } else {
      error.value = 'No inventory record data found';
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
    <!-- Inventory Records Table -->
    <v-data-table
      :headers="headersInventoryRecords"
      :items="inventoryRecords"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Inventory Records</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:item="{ item }">
        <tr :key="item.id">
          <td>{{ item.item_name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.borrow_date }}</td>
          <td>{{ item.return_date }}</td>
        </tr>
      </template>

      <template v-slot:no-data>
        {{ error || 'No inventory records found.' }}
      </template>
    </v-data-table>
</template>

<style scoped>
/* Add any custom styles here */
</style>
