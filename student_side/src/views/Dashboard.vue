<script setup>
import { ref, onMounted, computed } from 'vue';
import { fetchCurrentUser } from '../services/api';
import VMG from '../components/VMG.vue';

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

const statusColor = computed(() => {
  return guidanceStatus.value === 'Cleared' ? 'green' : '#dbc501';
});
</script>

<template>
  <main>
    <div class="top-container">
      <h1 class="bg-title">DASHBOARD</h1>
      <div class="studentProfile">
        <span class="material-icons">grid_view</span>
        <span class="text fw-bolder">Dashboard</span>
      </div>
    </div>
    <hr>

    <div class="bottom-container">
      <div class="left-container">
        <div class="top-left">
          <h3><span class="material-icons">pending_actions</span>Clearance Status Overview</h3>
          <table class="table table-bordered">
            <thead class="table-label">
              <tr>
                <th>Clearance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="currentUser">
                <td>Guidance</td>
                <td :style="{ color: statusColor }">
                  <!-- Removed the icon completely -->
                  {{ guidanceStatus }}
                </td>
              </tr>
              <tr v-if="currentUser">
                <td>Library</td>
                <!-- <td :style="{ color: currentUser.library.status === 'Cleared' ? 'green' : '#dbc501' }">
                  {{ currentUser.library.status }}
                </td> -->
              </tr>
              <tr>
                <td>Registrar</td>
                <td class="requirements">
                  <thead>
                    <tr class="table-head">
                      <th>Requirement</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PSA/Birth Certificate</td>
                      <td class="status">Pending</td>
                    </tr>
                    <tr>
                      <td>Good Moral</td>
                      <td class="status">Pending</td>
                    </tr>
                    <tr>
                      <td>Form-137/A</td>
                      <td class="status">Pending</td>
                    </tr>
                  </tbody>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bottom-left">
          <h3><span class="material-icons">info</span>Status Description</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Clearance Status</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="color: green;" class="fw-bold">Cleared</td>
                <td>All requirements have been successfully fulfilled, and the clearance process is complete.</td>
              </tr>
              <tr>
                <td style="color: #dbc501;" class="fw-bold">Not Cleared</td>
                <td>The clearance process is ongoing. Approval or completion of remaining tasks is required. Students need to address these by accessing respective tabs to view and fulfill the necessary requirements.</td>
              </tr>
              <tr>
                <td style="color: #dbc501;" class="fw-bold">Pending</td>
                <td>The clearance process is ongoing. Approval or completion of remaining tasks is required. Students need to address these by accessing respective tabs to view and fulfill the necessary requirements.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="right-container">
        <div class="vmg">
          <h4>St. Nicholas Academy of Castillejos</h4>
          <h5>MISSION - VISION - GOALS</h5>
          <VMG />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VMG from '../components/VMG.vue';

export default {
  components: {
    VMG
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}

.top-container {
  display: flex;
  margin: 0.5rem;

  .bg-title {
    z-index: -1;
    position: absolute;
    opacity: 10%;
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

  .left-container {
    flex: 0.5;
    margin-right: 1rem;
    margin-bottom: 2em;

    .top-left {
      padding: 1rem;
      margin-bottom: 2rem;
      color: var(--dark);
      border-radius: 5px;
      border-left: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

      h3 {
        text-shadow: 0 0 1px;
        font-size: 20px;
        position: relative;
        bottom: 15px;
      }

      .material-icons {
        position: relative;
        font-size: 35px;
        top: 12px;
        right: 2px;
      }

      table {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
        border: 0.5px solid rgb(228, 228, 228);
        width: 100%;
      }

      th {
        color: var(--dark);
        font-size: 20px;
        text-align: center;
        text-shadow: 0 0 1px;
      }

      td {
        color: var(--dark);
        font-weight: 600;
        padding: 0.6rem;
        text-align: center;
      }

      .requirements {
        display: flex;
        flex-direction: column;
        align-items: center;

        .table-head {
          display: flex;
          gap: 2.5rem;

          th {
            font-size: 18px;
          }
        }

        .status {
          color: #dbc501;
        }
      }
    }

    .bottom-left {
      padding: 1rem;
      color: var(--dark);
      border-radius: 5px;
      border-left: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
      font-size: 20px;

      h3 {
        text-shadow: 0 0 1px;
        font-size: 20px;
        position: relative;
        bottom: 15px;
      }

      .material-icons {
        position: relative;
        font-size: 35px;
        top: 12px;
        right: 2px;
      }

      th {
        color: #5c5c5c;
        font-size: 16px;
        text-align: center;
        text-shadow: 0 0 1px;
      }

      td {
        color: var(--dark);
        padding: 0.6rem;
      }

      .status {
        color: #dbc501;
      }
    }
  }

  .right-container {
    flex: 0.5;

    .vmg {
      margin-left: 1rem;
      padding: 1rem;
      border-radius: 5px;
      border-right: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

      h4 {
        text-align: center;
        color: var(--dark);
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 0 0 1px;
      }

      h5 {
        text-align: center;
        color: var(--dark);
        font-weight: 900;
      }
    }
  }
}

@media (max-width: 1050px) {
  .bottom-container {
    flex-direction: column;

    .left-container {
      .top-left {
        border-right: 4px solid var(--dark-alt);
      }

      .bottom-left {
        border-right: 4px solid var(--dark-alt);
      }
    }

    .right-container {
      margin-top: 1.5rem;
      border-left: 4px solid var(--dark-alt);
    }
  }
}
</style>
