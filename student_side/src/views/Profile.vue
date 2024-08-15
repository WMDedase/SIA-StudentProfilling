<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { fetchCurrentUser, uploadProfilePicture } from '../services/api';
import defaultProfilePic from '../assets/SNA Logo with BG.png'; // Import default profile picture

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const showUploadDialog = ref(false);
const profilePicUrl = ref(defaultProfilePic); // Default profile picture

// Fetch user data on mount
onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;
    if (response.student_profile && response.student_profile.length > 0) {
      console.log('Current user data:', currentUser.value);

      // Update the profilePicUrl if profile pictures are available
      const profilePics = response.student_profile.profile_pic?.image || [];
      if (profilePics.length > 0) {
        profilePicUrl.value = profilePics[0]; // Use the first profile picture
      }
    } else {
      error.value = '.';
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
});

// Handle file input change
async function handleFileChange(event) {
  const file = event.target.files[0];
  if (file && currentUser.value) {
    const reader = new FileReader();
    reader.onloadend = async () => {
      // Update profilePicUrl with the file URL
      profilePicUrl.value = reader.result;

      // Prepare form data
      const formData = new FormData();
      formData.append('image', file);
      formData.append('student_id', currentUser.value.student_id);

      try {
        // Upload the profile picture
        await uploadProfilePicture(formData);
        console.log('Profile picture uploaded successfully');

        // Show success alert
        Swal.fire({
          title: 'Success!',
          text: 'Profile picture uploaded successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        // Fetch the updated user data to reflect changes
        await onMounted();
      } catch (err) {
        console.error('Failed to upload profile picture', err);
      }
    };
    reader.readAsDataURL(file);
    showUploadDialog.value = false; // Close the dialog after uploading
  }
}

// Open upload dialog
function openUploadDialog() {
  showUploadDialog.value = true;
}
</script>

<template>
  <main>
    <div class="top-container">
      <h1 class="bg-title">PROFILE</h1>
      <div class="studentProfile">
        <span class="material-icons">person</span>
        <span class="text fw-bolder">Profile</span>
      </div>
    </div>
    <hr>

    <div class="bottom-container">
      <div class="left-container">
        <div class="pending-table">
          <h3><span class="material-icons"> pending_actions</span>Pending Documents</h3>
          <PendingTable/>
        </div>
      </div>

      <div class="right-container">
        <div class="profile">
          <div class="profile_header">
            <h3><span class="material-icons"> account_circle</span>Profile</h3>
            <div class="request-btn">
              <DocxRequestForm/>
            </div>
          </div>

          <div class="profile-pic" @click="openUploadDialog">
            <img :src="profilePicUrl" alt="Profile Picture">
          </div>

          <div v-if="loading">Loading...</div>
          <div v-if="error">{{ error }}</div>
          <div v-if="currentUser" class="content">
            <div class="left">
              <h5>School Information</h5>
              <h7>Student ID:</h7>
              <h6>{{ currentUser.student_id }}</h6>
              <h7>LRN:</h7>
              <h6>{{ currentUser.student_lrn }}</h6>
              <h7>Grade Level:</h7>
              <h6>{{ currentUser.grade_level }}</h6>
              <h7 v-if="currentUser.grade_level > 10">Strand:</h7>
              <h6 v-if="currentUser.grade_level > 10">{{ currentUser.strand }}</h6>
              <h7>Section:</h7>
              <h6>{{ currentUser.section }}</h6>
              <h7>Adviser:</h7>
              <h6>{{ currentUser.adviser.fname + ' ' + currentUser.adviser.lname }}</h6>
              <h7>Enrollment Status:</h7>
              <h6 style="color: green; font-weight: 900;">{{ currentUser.enrollment_status }}</h6>
            </div>

            <div class="right">
              <h5>Personal Information</h5>
              <h7>Name:</h7>
              <h6>{{ currentUser.first_name }} {{ currentUser.middle_name }} {{ currentUser.last_name }}</h6>
              <h7>Gender:</h7>
              <h6>{{ currentUser.sex_at_birth }}</h6>
              <h7>Birth Date:</h7>
              <h6>{{ currentUser.birth_date }}</h6>
              <h7>Address:</h7>
              <h6>{{ currentUser.street }}, {{ currentUser.barangay }}, {{ currentUser.city }}, {{ currentUser.province }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload Picture Dialog -->
    <v-dialog v-model="showUploadDialog" max-width="400px">
      <v-card>
        <v-card-title class="fw-bold" style="padding:1.2rem;background-color: var(--dark); color:white; border-radius:3px;">
          <span class="material-icons" style="position:relative; right:5px; top:5px;">upload</span>Upload Profile Picture
        </v-card-title>
        <v-card-text>
          <v-file-input @change="handleFileChange" accept="image/*" label="Choose an image" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="showUploadDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import DocxRequestForm from '../components/DocxRequestForm.vue';
import PendingTable from '../components/PendingTable.vue';
export default {
    components: {
      DocxRequestForm,
      PendingTable
    },
}
</script>

<style lang="scss">
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
    justify-content: center;
    gap: 2rem;

    .left-container{
        flex: 0.5;
        color: var(--dark);
        border-radius: 5px;
        margin-bottom: 0.2rem;

        .pending-table{
            margin-bottom: 0.2rem;
            padding: 0.5rem;
            border-radius: 10px;
            border-left: 4px solid var(--dark-alt);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

            h3 {
                text-shadow: 0 0 1px;
                font-size: 20px;
                flex: 1;
                margin-bottom: 1rem;
                  .material-icons{
                    position:relative;
                    font-size: 35px;
                    top: 10px;
                }
              }

        }

    }

    .right-container{
        flex: 0.5;

        .profile{
            color: var(--dark);
            margin-bottom: 0.2rem;
            padding: 0.5rem;
            border-radius: 10px;
            border-right: 4px solid var(--dark-alt);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
            display: flex;
            flex-direction: column;
            
            .profile_header{
              display: flex;
                h3 {
                  text-shadow: 0 0 1px;
                  font-size: 20px;
                    flex: 1;
                }
                .material-icons{
                    position:relative;
                    font-size: 35px;
                    top: 10px;
                }
                  .request-btn{
                    margin-top: 0.5rem;
                  }
                }
                
              .profile-pic{
                box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
                width: 35%;   
                align-self: center;
                margin: 1.5rem;
                border-radius: 5px;
                cursor: pointer;

                  img{
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      border-radius: 3px;

                  }
              }

              .content{
                  display: flex;
                  flex-direction: row;
                  flex: 0.5;
                  padding: 0.5rem;
                  gap: 1rem;

                  h5 {
                      color: var(--dark);
                      font-size: 20px;
                      text-align: center;
                      font-weight: 900;
                      margin-bottom: 1.5rem;
                  }
                  .left{
                      flex: 0.5;
                      padding: 0.5rem;
                      border-radius: 5px;
                      display: flex;
                      flex-direction: column;
                      gap: 0.5rem;
                      margin: 0.2rem;
                      
                      h7{
                          color: var(--dark);
                          text-shadow: 0 0 1px;
                          font-size: 12px;
                      }
                      h6{
                          color: var(--dark);
                          font-weight: 900;
                          border-bottom: 1px solid #dbdbdb;
                          text-align: center;
                          padding: 0.2rem;
                      }
          
                  }
                  .right{
                      flex: 0.6;
                      padding: 0.5rem;
                      margin: 0.2rem;
                      border-radius: 5px;
                      display: flex;
                      flex-direction: column;
                      gap: 0.5rem;
                      
                      h7{
                          color: var(--dark);
                          text-shadow: 0 0 1px;
                          font-size: 12px;
                      }
                      h6{
                          color: var(--dark);
                          font-weight: 900;
                          text-align: center;
                          border-bottom: 1px solid #dbdbdb;
                          padding: 0.2rem;
          
                      }
                  }
              }
       
}
    }
}
</style>