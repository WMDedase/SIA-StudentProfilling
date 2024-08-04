<!-- <script setup>
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

</script> -->
<template>
    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          color="var(--dark)"
          prepend-icon="mdi-file-document"
          v-bind="activatorProps"
          style="color: white;"
        >Request Documents</v-btn>
      </template>
  
      <v-card
        prepend-icon="mdi-file-document"
        title="Document Request Form"
      >
        <v-card-text>
          <!-- Document Request Form -->
          <v-row dense>
              <!-- Personal Information -->

          <!-- Document Details -->
          <v-col cols="12">
            <v-select
              v-model="document_type"
              :items="documentTypeOptions"
              label="Document Type*"
              required
            ></v-select>
          </v-col>

          <!-- Purpose -->
          <v-col cols="12">
            <v-textarea
              v-model="purpose"
              label="Purpose*"
              required
              auto-grow
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="requested_by"
              label="Add Guardian Name(If Applicable)"
            ></v-checkbox>

          </v-col>

          <v-col cols="12" v-if="requested_by">
            <v-text-field
              v-model="guardian_name"
              label="Guardian Name*"
              required
            ></v-text-field>
          </v-col>

          <small class="text-caption text-medium-emphasis">*The document/s requested is/are subject for verification and to be released seve, (7) working days from the date of payment.
          </small>
          </v-row>
  
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-actions>
          <v-spacer></v-spacer>
  
          <v-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>
  
          <v-btn
            color="primary"
            text="Request"
            variant="tonal"
            @click="submitRequest()"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </template>
  
  <script>
  import { fetchCurrentUser } from '../services/api'
  import axios from 'axios'
  import Swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.min.css';
  
  export default {
    data() {
      return {
        dialog: false,
        document_type: '',
        documentTypeOptions:[
          
        'Form 137-A(TOR/SF10)', 
        'Diploma', 
        'Report Card(F-138)(CTC)',
        'Good Moral Certificate', 
        'Enrollment Certificate', 
        'ESC Certificate', 
        'Completion Certificate', 
        'English as Medium Ins.',
        'With Honors Certificate', 
        'GWA Certificate'
        ],
        purpose: '',
        requested_by:'',
        person_requesting:'',
        guardian_name:'',
        student_id : '',
      };
    },
    mounted(){
        this.fetchStudentProfile();
    },
    methods: {
      async fetchStudentProfile() {
      try {
        const data = await fetchCurrentUser();
        // Update fields with fetched data
        this.student_id = data.student_profile.student_id;
        console.log(this.student_id);
      } catch (error) {
        console.error('Failed to fetch student profile:', error.message);
      }
    },
      openDialog() {
        // Reset form fields before opening the dialog
        this.document_type= ''
        this.purpose='';
        this.guardian_name='',
        // Open the dialog
        this.dialog = true;
      },
      submitRequest() {
        // Implement logic to submit the document request
        // You can access form data and perform validation here
        // Once the request is submitted, you can close the dialog
        fetchCurrentUser()
        
        const data = {
        //    KEY   :   VALUE
          student_id : this.student_id, 
          requested_by : !this.requested_by ? 'Student' : 'Relative',
          guardian_name : !this.guardian_name ? '  ': this.guardian_name,
          document_type : this.document_type,
          purpose : this.purpose
          
        }


        axios.post('docreq',  data ).then(res=>{
          
          this.dialog = false;
          Swal.fire({
            title: 'SUCCESS',
            text:'Document Succesfully Requested',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        }).catch(error =>{
            Swal.fire({
            icon: 'error',
            title: 'FAILED',
            text:'Document Request Failed',

            confirmButtonText: 'OK'
        });
          
        })
        this.   dialog = false;
      },

    }
  };
  </script>
  
  <style lang="scss">
  </style>