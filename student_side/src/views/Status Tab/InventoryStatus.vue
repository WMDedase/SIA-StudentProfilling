<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../../services/api';

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const inventoryStatus = ref(null); // Initialize without a default status

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    currentUser.value = response.student_profile;

    if (response.student_profile && response.student_profile.inventory) {
      if (response.student_profile.inventory.length > 0) {
        inventoryStatus.value = 'Not Cleared'; // Set status to 'Cleared' if there are inventory records
      } else {
        inventoryStatus.value = 'Cleared'; // Set status to 'Not Cleared' if no records are found
      }
      console.log('Inventory Status:', inventoryStatus.value); // Log the inventory status
    } else {
      error.value = 'No inventory data found';
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <div class="top-container">
      <h1 class="bg-title">INVENTORY</h1>
      <div class="studentProfile">
        <span class="material-icons">inventory_2</span>
        <span class="text fw-bolder">Inventory</span>   
      </div>    
    </div> 
    <hr>

    <div class="bottom-container">
      <div class="left">
        <v-row>
          <v-col col="6">
            <v-card class="top-left mx-auto mr-5" elevation="3">
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons">assignment_turned_in</span>
                  Inventory Status
                </v-card-title>
              </v-card-item>
              
              <v-card-text v-if="inventoryStatus !== null" class="status" 
                :style="{ color: inventoryStatus === 'Cleared' ? 'green' : '#dbc501' }">
                <v-icon 
                  :color="inventoryStatus === 'Cleared' ? 'green' : '#dbc501'"
                  class="status-icon"
                >
                  {{ inventoryStatus === 'Cleared' ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                </v-icon>
                {{ inventoryStatus }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col col="6"></v-col>

          <v-col cols="12">
            <v-card class="mx-auto mr-5 bottom-left" elevation="3" max-width="auto">
              <v-card-item>
                <v-card-title class="fw-bold" style="color: var(--dark);">
                  <span class="material-icons">playlist_add_check</span>
                  Inventory Requirements
                </v-card-title>
              </v-card-item>
              
              <v-card-text>
                <InventoryBorrowed />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template>

<script>
import InventoryBorrowed from '../../components/InventoryBorrowed.vue';

export default {
  components: {
    InventoryBorrowed,
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
        font-size: 2.2rem;
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
    align-items: start;
  }

  .left {
    display: flex;
    flex: 1;

    .material-icons {
      position: relative;
      color: var(--dark);
      font-size: 2rem;
      top: 10px;
    }

    .top-left {
      border-left: 4px solid var(--dark-alt);

      .status {
        padding: 1.5rem;
        font-size: 25px;
      }
    }

    .bottom-left {
      border-left: 4px solid var(--dark-alt);
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
