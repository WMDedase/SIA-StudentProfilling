<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

// Reactive references
const currentUser = ref(null);
const schedule = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    // Set currentUser data
    currentUser.value = response.student_profile;

    // Check if schedule data is available
    if (response.student_profile?.schedule && Array.isArray(response.student_profile.schedule)) {
      schedule.value = response.student_profile.schedule;
      console.log('Schedule data:', schedule.value); // Log the schedule data
    } else {
      error.value = 'No schedule data found or data is not an array';
    }

    console.log('Current user data:', currentUser.value); // Log the current user data
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
        :items="schedule"
        :loading="loading"
        :sort-by="[{ key: 'class_desc', order: 'asc' }]"
      >
        <!-- toolbar -->
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Class Schedule</v-toolbar-title>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr :key="item.classcode">
            <td>{{ item.classcode }}</td>
            <td>{{ item.class_desc }}</td>
            <td>{{ item.section }}</td>
            <td>{{ item.day }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.faculty.fname + " " + item.faculty.lname }}</td>
          </tr>
        </template>

        <template v-slot:no-data>
          {{ error || 'No schedule data found.' }}
        </template>

      </v-data-table>

        <div class="schedule-card">
          <h4>Class Schedule</h4>
          <!-- Loop through schedule data and display it -->
          <div v-for="item in schedule" :key="item.classcode" class="schedule-item">
            <p><strong>Class Code:</strong> {{ item.classcode }}</p>
            <p class="class-desc"><strong>{{ item.class_desc }}</strong> </p>
            <p><strong>Section:</strong> {{ item.section }}</p>
            <p><strong>Time:</strong> {{ item.time }}</p>
            <p><strong>Adviser:</strong> {{ item.faculty.fname + " " + item.faculty.lname }}</p>
          </div>
        </div>

    </div>    
  </main>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { title: 'Class Code', key: 'classcode' },
        { title: 'Class Description', key: 'class_desc' },
        { title: 'Section', key: 'section' },
        { title: 'Day', key: 'day' },
        { title: 'Time', key: 'time' },
        { title: 'Faculty', key: 'adviser_id' },
      ],
    };
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
        opacity: 6%;
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
            font-size: 2.2rem;
            font-weight: 900;
            bottom: 0.1rem;
            left: 0.2rem;   
            text-shadow: 0 1px 1px;
        }
    }
} 

.bottom-container{
    display: flex;
    flex-direction: column;
    .v-data-table{
      padding: 1rem;
      margin-bottom: 2rem;
      color: var(--dark);
      border-radius: 5px;
      border-left: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    .v-table__wrapper{
        color: var(--dark);
        padding: 1.5rem;
    
        .v-data-table__th {
            font-size: 17px;
            font-weight: 800;
        }
    }


  }
  .schedule-card{
    display: none;

  }

  @media (max-width: 930px){
    .v-data-table{
      display: none;
    }
  
    .schedule-card{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 100%;
      
      h4{
        color: var(--dark);
        font-weight: 900;
      }

      .class-desc{
        font-size: 24px; 
        border-bottom:2px solid #f0f0f0;
        color: var(--dark);
        font-weight: 700;
      }
      .schedule-item{
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-left: 5px solid var(--dark);
        border-radius: 5px;
        font-size: 12px;
      }
    }
  }
}


</style>
