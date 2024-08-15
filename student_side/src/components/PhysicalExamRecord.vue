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
        class="record-btn text-none font-weight-regular"
        color="var(--dark)"
        prepend-icon="mdi-medical-bag"
        v-bind="activatorProps"
        style="color: white;"
        
      >Physical Examination Records</v-btn>
      </template>
  
      <v-card >
        <v-card-title 
        class="fw-bold" 
        style="padding:1.2rem;background-color: var(--dark); color:white; border-radius:3px;"><span class="material-icons" style="position:relative; right:5px; top:5px;">medical_services</span>Physical Examination Record</v-card-title>

        <v-card-text>
          <!-- Document Request Form -->
          <v-row dense>
              <!-- Personal Information -->
          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Height*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Weight*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Blood Pressure*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Pulse Rate*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Vision(Left)*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="guardian_name"
              label="Vision(Right)*"
              required
            ></v-text-field>
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
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </template>
  
  <script>
  import { fetchCurrentUser } from '../services/api'
  import axios from 'axios'

  
  export default {
    data() {
      return {
        dialog: false,

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

    }
  };
  </script>
  
  <style lang="scss" scoped>
 .record-btn{
    padding: 1.5rem;
    display: flex;
    
 }
  </style>