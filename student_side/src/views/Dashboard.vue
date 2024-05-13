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
        <div class="left-container">
            <div class="top-left" >
                <h3><span class="material-icons"> pending</span>Clearance Status Overview</h3>                
                <table class="table table-bordered ">
                    <thead class="table-label">
                      <tr>
                        <th scope="col" >Clearance</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Clinic</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Finance</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Guidance</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Registrar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Library</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
                
            <div class="bottom-left">
                <h3>Status Info Description</h3>
                </div>
        </div>
        
        <div class="right-container" > 
            <!-- v-for="(student, index) in this.student" :key="index"  loop to para i display lahat ng data sa database table -->
            <div class="profile">
                <h3><span class="material-icons"> account_circle</span>Profile</h3>
           
                <div class="content">
                <div class="left">
                    <h5>Personal Information</h5>
                    <h7>Student ID</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.student_id }}</h6>

                    <h7>LRN</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.student_lrn }}</h6>

                    <h7>Name</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.first_name}} {{ currentUser.student_profile.middle_name}} {{ currentUser.student_profile.last_name}}</h6>

                    <h7>Gender</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.sex_at_birth}}</h6>

                    <h7>Birth Date</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.birth_date}}</h6>

                    <h7>Address</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.street}}, {{ currentUser.student_profile.barangay}}, {{ currentUser.student_profile.city}}, {{ currentUser.student_profile.province}}</h6>

                    <!-- <h7>Email Address</h7>
                    <h6 v-if="currentUser">{{ currentUser.student_profile.email}}</h6> -->
                </div>

                <div class="right">
                    <h5>School Information</h5>
                    
                    <h7>Grade Level</h7>
                    <h6>Grade 10</h6>

                    <h7>Strand</h7>
                    <h6>N/A</h6>

                    <h7>Section</h7>
                    <h6>10 - Einstein</h6>

                    <h7>Adviser</h7>
                    <h6>Denise Lou Punzalan</h6>

                    <h7>Status</h7>
                    <h6>Enrolled</h6>

                </div>
            </div>
        </div>

        </div>
    </main>
</template>

<script>

import AnnouncementTable from '../components/AnnouncementTable.vue';

export default {
    components: {
        AnnouncementTable
    },
    name: 'student',
    data (){

    },
    mounted(){

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
}
.left-container{
    flex: 0.5;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: 1px;
    .top-left{
        padding: 1rem;
        margin-bottom: 2rem;
        color: var(--dark);
        border-radius: 5px;
        border-left: 4px solid var(--dark-alt);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
        
        h3 {
            text-shadow: 0 0 1px;
            font-size: 20px;
            position:relative;
            bottom: 15px;
        }
        .material-icons{
            position:relative;
            font-size: 35px;
            top: 12px;
        }
        table{
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
            border: 0.5px solid rgb(228, 228, 228);
            width: 100%;
        }

        th{
            color: var(--dark);
            font-size: 20px;
            text-align: center;
            text-shadow: 0 0 1px;
        }

        td{
            color: var(--dark);
            font-weight: 600;
            vertical-align: middle;
            
        }

    }
    .bottom-left{
        padding: 1rem;
        color: var(--dark);
        border-radius: 5px;
        border-left: 4px solid var(--dark-alt);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

    
    }
}

.right-container{
    flex: 0.6;
    color: var(--dark);
    border-radius: 5px;
    margin-bottom: 0.2rem;
    
    .profile{
        color: var(--dark);
        margin-bottom: 0.2rem;
        padding-left: 0.5rem;
        border-radius: 5px;
        border-right: 4px solid var(--dark-alt);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;

        h3 {
            text-shadow: 0 0 1px;
            font-size: 20px;
        }
        .material-icons{
            position:relative;
            font-size: 35px;
            top: 10px;
        }
    }
    .content{
        display: flex;
        flex-direction: row;
        flex: 0.5;
        padding: 0.5rem;

        h5 {
            font-weight: 900;
            margin: 0.5rem;
        }
        .left{
            flex: 0.6;
            padding: 0.5rem;
            
            h7{
                color: var(--dark);
                text-shadow: 0 0 1px;
                font-size: 12px;
            }
            h6{
                color: var(--dark);
                font-weight: 900;
            }
        }
        .right{
            flex: 0.5;
            padding: 0.5rem;

            h7{
                color: var(--dark);
                text-shadow: 0 0 1px;
                font-size: 12px;
            }
            h6{
                color: var(--dark);
                font-weight: 900;
            }
            .address{
                font-size: 15px;
            }
        }
    }
   
}
</style>