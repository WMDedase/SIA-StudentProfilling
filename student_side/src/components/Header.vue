<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';
import defaultProfilePic from '../assets/SNA Logo with BG.png'; // Import default profile picture

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);
const profilePicUrl = ref(defaultProfilePic); // Default profile picture

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    currentUser.value = response.student_profile;

    if (response.student_profile && response.student_profile.profile_pic && response.student_profile.profile_pic.image) {
      const imageFilename = response.student_profile.profile_pic.image;
      console.log('Received image data:', imageFilename);

      // Construct the full URL to the image
      profilePicUrl.value = `http://26.81.173.255:8000/uploads/profile/${imageFilename}`;
    } else {
      error.value = 'No profile picture found, using default.';
      profilePicUrl.value = defaultProfilePic;
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
    profilePicUrl.value = defaultProfilePic; // Ensure the default image is used in case of error
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <header class="header">
    <h2 class="sna-label">Saint Nicholas Academy Profiling System</h2>

    <div class="profile" v-if="currentUser">
      <h5>{{ currentUser.first_name }} {{ currentUser.middle_name }} {{ currentUser.last_name }}</h5>

      <div class="pic">
        <img :src="profilePicUrl" alt="Profile Picture" @error="profilePicUrl = defaultProfilePic" />
      </div>
    </div>
  </header>
</template>

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

  .sna-label {
    flex: 0.5;
    color: #e2e2e2;
    align-self: center;
    margin-left: 0.5rem;
    font-size: 25px;
    margin-bottom: 1rem;
  }

  .profile {
    flex: 0.5;
    display: flex;
    justify-content: end;
    padding-right: 0.5rem;

    .pic {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
      width: 4rem;
      height: 4rem;
      margin: 0.8rem;
      border-radius: 50%;
      background-color: white;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    h5 {
      color: #e2e2e2;
      align-self: center;
      font-size: 17px;
    }
  }

  @media (max-width: 1050px) {
    .sna-label {
      font-size: 18px;
      align-self: center;
    }
  }

  @media (max-width: 680px) {
    .profile {

      h5{
        display: none;
      }
    }
  }
}
</style>