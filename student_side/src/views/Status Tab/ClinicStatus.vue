<script setup>
import { ref, onMounted } from 'vue';
import ClinicTable from '../../components/ClinicTable.vue';
import { fetchCurrentUser } from '../../services/api';

// Reactive references
const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const physicalExamStatus = ref('Not Cleared');

// Fetch current user data on mount
onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;

    // Check if there's a physical_exam record and if it has meaningful data
    if (response.student_profile?.physical_exam && Object.keys(response.student_profile.physical_exam).length > 0) {
      physicalExamStatus.value = 'Cleared';
    } else {
      physicalExamStatus.value = 'Not Cleared';
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
  <main>
    <div class="top-container">
      <h1 class="bg-title">CLINIC</h1>
      <div class="studentProfile">
        <span class="material-icons">medical_information</span>
        <span class="text fw-bolder">Clinic</span>   
      </div>    
    </div> 
    <hr>

    <div class="bottom-container">
      <div class="left">
        <v-row>
          <v-col col="6">
            <v-card 
              class="top-left mx-auto mr-5" 
              elevation="3"
            >
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons"> assignment_turned_in</span>
                  Clinic Status
                </v-card-title>
              </v-card-item>
              
              <v-card-text class="status" :style="{ color: physicalExamStatus === 'Cleared' ? 'green' : '#dbc501' }">
                <v-icon :color="physicalExamStatus === 'Cleared' ? 'green' : '#dbc501'" class="status-icon">
                  {{ physicalExamStatus === 'Cleared' ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                </v-icon>
                {{ physicalExamStatus }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col col="6"></v-col>

          <v-col cols="12">
            <v-card class="mx-auto mr-5 bottom-left" elevation="3" max-width="auto">
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons"> playlist_add_check</span>
                  Consultation History
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <ClinicTable/>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  
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

  .bottom-container {
    display: flex;
    flex: 1;
  }
  .left {
    flex: 1;
    flex-direction: column;

    .material-icons {
      position: relative;
      color: var(--dark);
      font-size: 2rem;
      top: 10px;
    }
    .top-left {
      border-left: 4px solid var(--dark-alt);

      .guidance-status{
        padding: 1.5rem;
        font-size: 25px;
      }
    }

    .bottom-left {
      border-left: 4px solid var(--dark-alt);
    }
  }
  .right {
    flex: 0.4;

    .right-container {
      border-right: 4px solid var(--dark-alt);
    }
    .headline {
      font-size: 18px;
      font-weight: bold;
      color: var(--dark);
    }
  }

  @media (max-width: 1050px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;

    .left {
      .top-left {
        border-right: 4px solid var(--dark-alt);
      }

      .bottom-left {
        border-right: 4px solid var(--dark-alt);
      }
    }
    .right {
      margin-top: 1.5rem;

      .right-container {
        border-left: 4px solid var(--dark-alt);
      }
    }
  }
}
</style>
