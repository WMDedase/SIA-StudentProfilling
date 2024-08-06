<template>
    <v-data-table 
    :search="search"    
    :headers="headers" 
    :items="documentlist" 
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
        <tr :key="item.document_id">
          <td style="padding:1rem;">{{ item.school_level}}</td>
          <td>{{ item.report_by	}}</td>

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