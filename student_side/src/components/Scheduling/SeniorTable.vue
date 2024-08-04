<template>
    <v-data-table 
    :search="search"    
    :headers="headers" 
    :items="filteredseniorList" 
    :sort-by="[{ key: 'section', order: 'asc' }]">
      <!-- toolbar  -->
      <template v-slot:top>
        <v-menu
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
        <v-toolbar 
        class="pt-3"
        >
            <v-toolbar-title ></v-toolbar-title>
            <v-select
            v-bind="props"
            :items="strandLevels"
            v-model="selectedStrand" 
            label="Strand"
            variant="solo-filled"
            class="mr-2 m-auto"
          ></v-select>
          <v-btn @click="resetStrand" color="danger" rounded="xl" variant="text" >
            <v-icon >mdi-close-circle</v-icon>Clear</v-btn>
        </v-toolbar>

        </template>
  
      </v-menu>

      </template>
  
  
      <template v-slot:item= '{ item }'>
        <tr :key="item.senior_id" >
          <td >{{ item.strand}}</td>
          <td style="padding:1rem;">{{ item.section}}</td>
          <td>{{ item.adviser	}}</td>
          <td >          
            
            <div class="icon">

            <span class="view"><v-icon >mdi-eye</v-icon>View</span>
            <span class="add"><v-icon >mdi-plus-circle</v-icon>Add</span>
            
            </div>
            
        </td>

        </tr>
      </template>
    </v-data-table>
  </template>
  
  <script>
import api from '../../services/api'
import Swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
   
    data() {
      return {
        search: '',
        seniorList: [
          { senior_id: 1, section: 'St. Michael', adviser: 'John Doe', strand: 'STEM' },
          { senior_id: 2, section: 'St. Catherine', adviser: 'Jane Smith', strand: 'GAS' },
          { senior_id: 3, section: 'St. Joseph', adviser: 'Robert Brown', strand: 'HUMMS' },
          { senior_id: 4, section: 'St. Francis', adviser: 'Emily Davis', strand: 'ABM' },
          { senior_id: 5, section: 'St. Michael', adviser: 'Michael Johnson', strand: 'TVL' },
        ],
        headers: [
          { title: 'Strand', key: 'strand', },
          { title: 'Section', key: 'section',},
          { title: 'Adviser', key: 'adviser', },
          { title: 'Schedule', align:'center',sortable: false },
        ],     
        strandLevels: [
        { value: 'GAS', title: 'GAS',},
        { value: 'ABM', title: 'ABM',  },
        { value: 'TVL', title: 'TVL' },
        { value: 'HUMMS', title: 'HUMMS' },
        { value: 'STEM', title: 'STEM' },
      ],
        selectedStrand: '',
        seniorData: {
        senior_id: null,
        section: '',
        adviser: '',
        strand: '',

      },
      };
  },

  computed: {
  filteredseniorList() {
    console.log('Selected strand:', this.selectedStrand);
    console.log('senior List strands:', this.seniorList.map(item => item.strand));
    if (!Array.isArray(this.seniorList)) {
      console.error('seniorList is not an array');
      return [];
    }
    if (!this.selectedStrand) {
      return this.seniorList;
    }
    return this.seniorList.filter(item => item.strand === this.selectedStrand);
  }
},
  
// Disable to test the static data
//   mounted(){
//   this.getseniorData();
//   },
  
  methods: {
    async getseniorData() {
    try {
      const response = await api.get('/student');
      this.seniorList = response.data;
      console.log(this.seniorList);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },

  resetStrand() {
      this.selectedStrand = ''; // Reset selectedGrade to clear the v-select
    },
  },

  }
  
  
  
  </script>
  
  <style lang="scss" scoped>
  .v-data-table {
  .v-table__wrapper{
    padding: 1.5rem;
    
    .v-data-table__th {
      font-size: 17px;
      font-weight: 800;
      text-align: center;
    }
    
  
  }
  .icon{
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0.5rem;

    .view{
        display: flex;
        gap: 0.3rem;
        align-items: center;
        margin-right: 1rem;
        color: white;
        background-color: var(--dark);
        padding: 0.5rem;
        border-radius: 5px;
    }

    .add{
        display: flex;
        gap: 0.3rem;
        align-items: center;
        color: white;
        background-color: var(--dark);
        padding: 0.5rem;
        border-radius: 5px;
    }
  }
}
  </style>