<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    console.log(response.student_profile);
    currentUser.value = response.student_profile;
    if (response.student_profile && response.student_profile.length > 0) {
    //   currentUser.value = response.student[0];
      console.log('Current user data:', currentUser.value); // Log the current user data
    } else {
      error.value = 'No student data found';
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
    <header class="header">
        <h2 class="sna-label">Saint Nicholas Academy Profiling System</h2>
      
        <!-- <div class="profile" v-if="currentUser">
          <div class="pic">
            <img src="../assets/student.svg" alt="">
          </div>
          <h5> {{ currentUser.first_name}} {{ currentUser.middle_name}} {{ currentUser.last_name}}</h5>
        </div> -->
    </header>
    
</template>

<script>

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background: #374974;
    height: var(--header-height);
    width: 100%;
    transition: 0.5s ease-out;
    padding: 0 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;

    .sna-label{
        flex: 0.5;
        color: #e2e2e2;
        align-self: center;
        margin-left: 1rem;
        font-size: 25px;

    
    .profile{
        flex: 0.5;
        
        .pic{
          width: 40%
          
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%
   
           }
        }


        h5{
            color: red;
        }
        
    }

      @media (max-width: 1050px){
        .sna-label{
            font-size: 18px;
        }
      }

    }
}

</style>
