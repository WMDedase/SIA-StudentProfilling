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
          prepend-icon="mdi-file-upload"
          v-bind="activatorProps"
          style="color: white;"

        >Upload Documents</v-btn>
      </template>
  
      <v-card >
        <v-card-title class="fw-bold" style="padding:1.2rem;background-color: var(--dark); color:white; border-radius:3px;"><span class="material-icons" style="position:relative; right:5px; top:5px;">description</span>Document Uploading Form</v-card-title>

        <v-card-text>
          <!-- Document Request Form -->
          <v-row dense>
              <!-- Personal Information -->

          <!-- Document Details -->
          <v-col cols="12">
            <v-file-input
              v-model="psaBirthFile"
              label="PSA/Birth Certificate"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
              @change="previewFile('psaBirthFile')"

            ></v-file-input>
          </v-col>

          <!-- File Input for Gosod Moral Certificate -->
          <v-col cols="12">
            <v-file-input
              v-model="goodMoralFile"
              label="Good Moral Certificate"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
            ></v-file-input>
          </v-col>

          <!-- File Input for Form 137-A -->
          <v-col cols="12">
            <v-file-input
              v-model="form137File"
              label="Form 137-A"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
            ></v-file-input>
          </v-col>
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
            text="Upload"
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
        psaBirthFile: null,
        goodMoralFile: null,
        form137File: null,
        student_id: '',
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

        }

        axios.post('/docreq',  data ).then(res=>{
          
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
  
  <style lang="scss" scoped>

  </style>