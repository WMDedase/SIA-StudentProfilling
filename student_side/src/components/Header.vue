<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api'

const currentUser = ref(null);
const isModalOpen = ref(false);

onMounted(async () => {
  try {
    currentUser.value = await fetchCurrentUser();
    console.log('Current user data:', currentUser.value);
  } catch (error) {
    console.error('Failed to fetch current user:', error.message);
  }
})
;
</script>
<template>
    <header class="header">
        <h2 class="sna-label">Saint Nicholas Academy School Management System</h2>
        <v-row align="center" class="student">
            <template v-if="currentUser && currentUser.student_profile">
                <span class="profile-name">{{ currentUser.student_profile.first_name}} {{ currentUser.student_profile.last_name}} {{ currentUser.student_profile.extension}}</span>
              </template>                                         
            <v-col cols="auto" class="profile-info" @click="isModalOpen = true" style="cursor:pointer;" >
              <v-avatar size="40">
                <img src="../assets/BG alt.jpg" alt="">
              </v-avatar>
            </v-col>
          </v-row>


           <!-- Modal for changing profile picture -->
    <v-dialog v-model="isModalOpen" max-width="500px">

    <v-card>
      <v-card-title>Change Profile Picture</v-card-title>
      <v-card-text>
        
        <!-- Form for uploading new profile picture -->
        <input type="file" @change="handleFileChange" accept="image/*">
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="updateProfilePicture">Save</v-btn>
        <v-btn @click="isModalOpen = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
      </v-dialog>

      
    </header>
    
</template>

<script>
export default {
    name: 'Header',
    data() {

  }
}
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

    .sna-label{
        flex: 1;
        color: #e2e2e2;
        align-self: center;
        margin-left: 1rem;
        font-size: 25px;

    }

    .student{
        display: flex;
        justify-content: end;
        padding-right: 4rem;
        flex: 0.5;
    }
    .profile-info {
        display: flex;
        align-items: center; 
      }
    
      .profile-name {
        color: #e2e2e2;
        font-size: 17px;
        border-left: 2px solid;
        padding-left: 1rem;
      }

      @media (max-width: 1050px){
        .sna-label{
            font-size: 22px;
        }
      }

      
}

</style>
