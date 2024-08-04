<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api'

const currentUser = ref(null);

onMounted(async () => {
  try {
    currentUser.value = await fetchCurrentUser();

    console.log('Current user data:', currentUser.value);
  } catch (error) {
    console.error('Failed to fetch current user:', error.message);
  }
});

</script>
<template>
    <main>

        <div class="top-container">
            <h1 class="bg-title">SCHEDULE</h1>
            <div class="studentProfile">
                <span class="material-icons">date_range</span>
                <span class="text fw-bolder">Schedule</span>   
            </div>    
        </div> 
        <hr>

        <div class="bottom-container">
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

        
    </div>
    </main>
</template>

<script>
import DocxRequestForm from '../components/DocxRequestForm.vue';
import VMG from '../components/VMG.vue';
export default {
    components: {
      DocxRequestForm,
      VMG 
    },
    data (){
      return {
        search: '',
        documentlist: [],
        headers: [
          { title: '#', key: 'document_type' },
          { title: 'Class Code', key: 'document_release_date' },
          { title: 'Class Description', key: 'document_release_date' },
          { title: 'Day', key: 'document_release_date' },
          { title: 'Time', key: 'document_release_date' },
          { title: 'Section', key: 'document_release_date' },
          { title: 'Room', key: 'document_release_date' },
          { title: 'Faculty', key: 'document_release_date' },

        ],     
        documentData: {
        document_id: null,
        document_type: '',
        status: '',

      },
      };

  },
  methods: {

  },

};
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
}

.top-container{
    display: flex;
    margin: 0.5rem;

    .bg-title{
        z-index: -1;
        position: absolute;
        opacity: 10%;
        margin-top: -40px;
        font-size: 100px;
        font-family: Impact, fantasy;
    }
    .studentProfile{
        flex: 1;

        .material-icons{
            position: relative;
            color: var(--dark);
            font-size: 2rem;
            top: 4px;
        }
        .text{
            position: relative;
            color: var(--dark);
            font-size: 2.5rem;
            font-weight: 900;
            bottom: 0.1rem;
            left: 0.2rem;   
            text-shadow: 0 1px 1px;

        }
    }

} 

.bottom-container{
    display: flex;
  

}

</style>