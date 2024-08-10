<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../../services/api';

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const guidanceStatus = ref('Not Cleared');

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    if (response.student_profile) {
      currentUser.value = response.student_profile;
      if (!response.student_profile.guidance || response.student_profile.guidance.length === 0) {
        guidanceStatus.value = 'Cleared';
      } else {
        guidanceStatus.value = response.student_profile.guidance.case_status === 1 ? 'Cleared' : 'Not Cleared';
      }
      console.log('Current user data:', currentUser.value); // Log the current user data
    } else {
      error.value = 'No student data found';
      guidanceStatus.value = 'Cleared'; // Set guidance status to cleared when no data is found
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
    guidanceStatus.value = 'Cleared'; // Set guidance status to cleared on error
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <div class="top-container">
      <h1 class="bg-title">GUIDANCE</h1>
      <div class="studentProfile">
        <span class="material-icons">accessibility</span>
        <span class="text fw-bolder">Guidance</span>
      </div>
    </div>
    <hr>

    <div class="bottom-container">
      <div class="left">
        <v-row>
          <v-col col="6">
            <v-card class="mx-auto mr-5 top-left" elevation="3">
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons">assignment_turned_in</span>
                  Guidance Status
                </v-card-title>
              </v-card-item>

              <v-card-text 
              :style="{ color: guidanceStatus === 'Cleared' ? 'green' : '#dbc501' }"
              class="guidance-status">
                <v-icon class="status-icon">
                  {{ guidanceStatus === 'Cleared' ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                </v-icon>
                {{ guidanceStatus }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col col="6"></v-col>
          <v-col cols="12">
            <v-card class="mx-auto mr-5 bottom-left" elevation="3" max-width="auto">
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons">playlist_add_check</span>
                  Guidance Requirements
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <GuidanceViolation />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template>

<script>
import GuidanceViolation from '../../components/GuidanceViolation.vue';

export default {
  components: {
    GuidanceViolation
  },
  data() {
    return {};
  },

};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;

  .top-container {
    display: flex;
    margin: 0.5rem;

    .bg-title {
      z-index: -1;
      position: absolute;
      opacity: 6%;
      margin-top: -40px;
      font-size: 100px;
      font-family: Impact, fantasy;
    }
    .studentProfile {
      flex: 1;

      .material-icons {
        position: relative;
        color: var(--dark);
        font-size: 2rem;
        top: 4px;
      }
      .text {
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
