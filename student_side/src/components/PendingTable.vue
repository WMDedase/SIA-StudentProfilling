<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const documentlist = ref([]);
const headers = ref([
    { title: 'Document Type', key: 'document_type' },
    { title: 'Status', key: 'document_remarks' },
    { title: 'Release Date', key: 'document_release_date' },
]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    const requested = response.student_profile?.docreq;

    if (Array.isArray(requested)) {
      documentlist.value = requested;
    } else if (requested) {
      // Wrap single object in array
      documentlist.value = [requested];
    } else {
      error.value = 'No document request found or data is not an array';
    }

    console.log('Document Request data:', documentlist.value); // Log the borrowedBooks
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
    :search="search"    
    :headers="headers" 
    :items="documentlist" 
    :loading="loading"
    :sort-by="[{ key: 'items_name', order: 'asc' }]">
    

      <!-- toolbar  -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64"></v-toolbar-title>
          <v-text-field
          v-model="search"
          class="w-auto mr-4 "
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
  
        </v-toolbar>
      </template>
  
      <template v-slot:item= '{ item }'>
        <tr :key="item.id">
          <td style="padding:1rem;">{{ item.document_type}}</td>
          <td>{{ item.document_remarks	}}</td>
          <td>{{ item.document_release_date	}}</td>
        </tr>
      </template>
    </v-data-table>
  </template>
  
  <script>
import api from '../services/api'
import Swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
   
    data() {
      return {
        search: '',
        documentlist: [],
        headers: [
          { title: 'Document Type', key: 'document_type' },
          { title: 'Status', key: 'status' },
          { title: 'Release Date', key: 'document_release_date' },
        ],     
        documentData: {
        document_id: null,
        document_type: '',
        status: '',
        loading: true,
      },
      };
  },
  
  mounted(){
  this.getDocx();
  },
  
  methods: {
    async getDocx() {
    try {
      const response = await api.get('/student');
      this.documentlist = response.data;
      console.log(this.documentlist);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
  },
  }
  
  
  
  </script>
  
  <style lang="scss">
  .v-data-table {

  .v-table__wrapper{
    color: var(--dark);
    padding: 1.5rem;
    
    .v-data-table__th {
      font-size: 17px;
      font-weight: 800;
  
    }
  
  }
  .icon-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .v-icon{
      font-size: 28px;
    }
  }
}
  </style>