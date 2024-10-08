<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { fetchCurrentUser, uploadProfilePicture } from '../services/api';
import defaultProfilePic from '../assets/SNA Logo with BG.png'; // Import default profile picture

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const showUploadDialog = ref(false);
const profilePicUrl = ref(defaultProfilePic); // Default profile picture
const canUpload = ref(true); // Ref to control upload ability

// Fetch user data on mount
onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response);

    currentUser.value = response.student_profile;
    if (response.student_profile) {
      console.log('Current user data:', currentUser.value);

      if (response.student_profile.profile_pic && response.student_profile.profile_pic.image) {
        const imageFilename = response.student_profile.profile_pic.image;
        console.log('Received image data:', imageFilename);

        // Construct the full URL to the image
        profilePicUrl.value = `http://26.81.173.255:8000/uploads/profile/${imageFilename}`;
        canUpload.value = false; // Disable upload if profile picture already exists
      }
    } else {
      error.value = 'No profile picture found, using default.';
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
  if (!canUpload.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'You have already uploaded a profile picture!',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      background: '#f4f4f4',
    });
  } else {
    const file = event.target.files[0];
    if (file && currentUser.value) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        profilePicUrl.value = reader.result;

        const formData = new FormData();
        formData.append('image', file);
        formData.append('student_id', currentUser.value.student_id);

        try {
          await uploadProfilePicture(formData);
          console.log('Profile picture uploaded successfully');

          Swal.fire({
            title: 'Success!',
            text: 'Profile picture uploaded successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          canUpload.value = false; // Disable further uploads
          await onMounted(); // Fetch updated user data
        } catch (err) {
          console.error('Failed to upload profile picture', err);
        }
      };
      reader.readAsDataURL(file);
      showUploadDialog.value = false;
    }
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

      <div class="upload-container">
        <div class="upload-header">
          <h3><span class="material-icons"> pending_actions</span>Document Requirements</h3>
          <div class="upload-btn">
            <DocxUploadingForm/>
          </div>
        </div>

        <table class="table table-bordered">
          <thead>
            <tr class="table-head">
              <th>Requirement</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentUser">
              <td>PSA/Birth Certificate</td>
              <td :style="{ color: currentUser.psa === 'Cleared' ? 'green' : '#FFA500' }">
                {{ currentUser.psa }}
              </td>
            </tr>
            <tr v-if="currentUser">
              <td >Good Moral</td>
              <td :style="{ color: currentUser.goodmoral === 'Cleared' ? 'green' : '#FFA500' }">
                {{ currentUser.goodmoral }}
              </td>
            </tr>
            <tr v-if="currentUser">
              <td >Form-137/A</td>
              <td :style="{ color: currentUser.tor === 'Cleared' ? 'green' : '#FFA500' }">
                {{ currentUser.tor }}
              </td>
            </tr>
          </tbody>
        </table>
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
import DocxUploadingForm from '../components/DocxUploadingForm.vue';

export default {
  components: {
    DocxRequestForm,
    PendingTable,
    DocxUploadingForm
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
    flex: 0.45;
    color: var(--dark);
    border-radius: 5px;
    margin-bottom: 0.2rem;

    .pending-table{
      margin-bottom: 2rem;
      padding: 0.5rem;
      border-radius: 10px;
      border-left: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

        h3 {
          text-shadow: 0 0 1px;
          font-size: 18px;
          flex: 1;
          margin-bottom: 1.5rem;

          .material-icons{
            position:relative;
            font-size: 35px;
            top: 10px;
          }
        }
      }
    }

    .upload-container{
      margin-bottom: 0.2rem;
      padding: 0.5rem;
      border-radius: 10px;
      border-left: 4px solid var(--dark-alt);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

      h3 {
        text-shadow: 0 0 1px;
        font-size: 16px;
        flex: 1;
        margin-bottom: 1rem;

        .material-icons{
          position:relative;
          font-size: 35px;
          top: 10px;
        }
      }
      .upload-header{
        display: flex;
        margin-bottom: 1rem;

        .upload-btn{
          margin-top: 0.5rem;
        }
    }

    table {
      width: 100%;
    }

    th {
      color: var(--dark);
      font-size: 15px;
      text-align: center;
      text-shadow: 0 0 1px;
    }

    td {
      color: var(--dark);
      font-weight: 600;
      padding: 0.6rem 0.3rem;
      text-align: center;
    }
  }

  .right-container{
    flex: 0.55;

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
