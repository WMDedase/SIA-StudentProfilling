<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api'

const currentUser = ref(null);

onMounted(async () => {
  try {
    currentUser.value = await fetchCurrentUser();
    console.log('Current user data:', currentUser.value);
  } catch (error) {
    console.error('Failed to fetch current user:', error.message);
  }
});

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

        <div class="left">
            <div class="profile">

                <div class="profile_header">
                  <h3><span class="material-icons"> account_circle</span>Profile</h3>
  
                  <div class="request-btn">
                    <DocxRequestForm/>
                  </div>
                </div>
                    
                <div class="profile-pic">
                    <img src="../assets/student.svg" alt="" >
                </div>
                  <div class="content">
                      <div class="left">
      
                          <h5>School Information</h5>
                          
                          <h7>Student ID:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.student_id }}</h6>
      
                          <h7>LRN:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.student_lrn }}</h6>
                          
                          <h7>Grade Level:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.grade_level }}</h6>
      
                          <h7>Strand:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.strand }}</h6>
      
                          <h7>Section:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.section }}</h6>
      
                          <h7>Adviser:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.adviser.fname  + ' ' + currentUser.student_profile.adviser.lname}}</h6>
      
                          <h7>Enrollment Status:</h7>
                          <h6 style="color: green; font-weight:900;" v-if="currentUser">{{ currentUser.student_profile.enrollment_status}}</h6>
                      </div>
      
                      <div class="right">
                          <h5>Personal Information</h5>
      
                          <h7>Name:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.first_name}} {{ currentUser.student_profile.middle_name}} {{ currentUser.student_profile.last_name}}</h6>
      
                          <h7>Gender:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.sex_at_birth}}</h6>
      
                          <h7>Birth Date:</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.birth_date}}</h6>
      
                          <h7>Address:</h7>
                          <h6  v-if="currentUser">{{ currentUser.student_profile.street}}, {{ currentUser.student_profile.barangay}}, {{ currentUser.student_profile.city}}, {{ currentUser.student_profile.province}}</h6>
      
                          <!-- <h7>Email Address</h7>
                          <h6 v-if="currentUser">{{ currentUser.student_profile.email}}</h6> -->
      
                      </div>
                  </div>
          </div>
        </div>

        <div class="right">

        </div>
    </div>
</main>
</template>

<script>
import DocxRequestForm from '../components/DocxRequestForm.vue';
export default {
    components: {
      DocxRequestForm
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

.bottom-container{
    display: flex;
    justify-content: center;

    .left{
        flex: 0.6;
        color: var(--dark);
        border-radius: 5px;
        margin-bottom: 0.2rem;

        .profile{
            color: var(--dark);
            margin-bottom: 0.2rem;
            padding: 0.5rem;
            border-radius: 5px;
            border-right: 4px solid var(--dark-alt);
            border-left: 4px solid var(--dark-alt);
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
          
                  h5 {
                      color: var(--dark);
                      font-size: 20px;
                      text-align: center;
                      text-shadow: 0 0 1px;
                      font-weight: 900;
                  }
                  .left{
                      flex: 0.5;
                      padding: 0.5rem;
                      border-radius: 5px;
          
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
                      
                      h7{
                          color: var(--dark);
                          text-shadow: 0 0 1px;
                          font-size: 12px;
                          text-align: center;
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

    .right{
        
    }
}
</style>
