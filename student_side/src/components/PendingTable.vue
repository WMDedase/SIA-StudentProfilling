can you add another dropdown filtering for the table for status and document type please

<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const documentlist = ref([]);
const headers = ref([
    { title: 'Document Type', key: 'document_type' },
    { title: 'Status', key: 'document_remarks' },
    { title: 'Control No.', key: 'request_id' },
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
    :items-per-page="3"
    :sort-by="[{ key: 'items_name', order: 'asc' }]">

  
      <template v-slot:item= '{ item }'>
        <tr :key="item.id" >
          <td style="padding:1rem;">{{ item.document_type}}</td>
          <td :style="{ color: getStatusColor(item.document_remarks) }"><v-chip>
            {{
              item.document_remarks
            }}
          </v-chip></td>
          <td style="padding:2rem;">{{ item.request_id}}</td>
          <td >{{ item.document_release_date	}}</td>
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
          { title: 'Status', key: 'status', },
          { title: 'Release Date', key: 'document_release_date' },
          { title: 'Control no.', key: 'request_id' },
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
  getStatusColor(status) {
      if (status === "Pending") {
        return "#FFA500"; // Set color to yellow if status is 'pending'
      } else if (status === "For Receive") {
        return "#6EACDA"; // Set color to green if status is 'For Recieved'
      } else if (status === "Received") {
        return "green"; // Set color to green if status is 'Received'
      } else {
        return "red"; // Default color
      }
    },
  },
  }
  
  
  
  </script>
  
  <style lang="scss">
  
  .v-data-table {
  .v-table__wrapper{
    color: var(--dark);
    
    .v-data-table__th {
      font-size: 17px;
      font-weight: 800;
      padding-left: 1.8rem;
    }
  
  }

  .v-data-table-footer__items-per-page{
    display: none;
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