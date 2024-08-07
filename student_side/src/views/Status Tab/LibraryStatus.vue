<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../../services/api';

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
  <main>
  
            
      <div class="top-container">
          <h1 class="bg-title">LIBRARY</h1>
          <div class="studentProfile">
              <span class="material-icons">menu_book</span>
              <span class="text fw-bolder">Library</span>   
          </div>    
      </div> 
      <hr>
  
  <div class="bottom-container">
    <div class="left">
    <v-row>

      <v-col col="6">
        <v-card 
        class="top-left mx-auto mr-5 " 
        elevation="3"
        >
          <v-card-item>
            <v-card-title class="fw-bold" style="color: var(--dark);">
              <span class="material-icons"> assignment_turned_in</span>
              Library Status
            </v-card-title>
          </v-card-item>
          
          <v-card-text v-if="currentUser" class="status" 
            :style="{ color: currentUser.library.status === 'Cleared' ? 'green' : '#dbc501' }">

            <v-icon 
              :color="currentUser.library.status === 'Cleared' ? 'green' : '#dbc501'"
              class="status-icon"
            >
              {{ currentUser.library.status === 'Cleared' ? 'mdi-check-circle' : 'mdi-alert-circle' }}
            </v-icon>
            {{ currentUser.library.status }}
          </v-card-text>
        </v-card>
      </v-col>

      <v-col col="6" >
      </v-col>

        <v-col cols="12" >
        <v-card
        class="mx-auto mr-5 bottom-left"
        elevation="3"
        max-width="auto"
      >
        <v-card-item>
          <v-card-title class="fw-bold" style="color: var(--dark);">
            <span class="material-icons"> playlist_add_check</span>
            Library Requirements
          </v-card-title>
    
        </v-card-item>
    
        <v-card-text>
          <LibraryBorrowed/>
        </v-card-text>  
      </v-card>
    </v-col>
      </v-row>
    </div>
  
  </div>
  </main>
  
  </template>
  
  <script>
import LibraryBorrowed from '../../components/LibraryBorrowed.vue';

export default {
  components: {
    LibraryBorrowed
    },
    data() {

    },
    computed: {

  }

}
</script>
  
  <style lang="scss" scoped>
  main {
      display: flex;
      flex-direction: column;
      
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
    flex: 1;
    align-items: start;
  }
  .left{
    display: flex;
    flex: 1;

    .material-icons{
      position: relative;
      color: var(--dark);
      font-size: 2rem;
      top:10px
  }

    .top-left{
      border-left: 4px solid var(--dark-alt);
      
      .status{
        padding: 1.5rem;
        font-size: 25px;
      
      }
    }
  
    .bottom-left{
      border-left: 4px solid var(--dark-alt);
      
    }
  }
  
  @media (max-width: 1050px){
    justify-content: center;
    flex-wrap: wrap;
  
    flex-direction: column;
  
    .left{
      .top-left{
        border-right: 4px solid var(--dark-alt);
      }
  
      .bottom-left{
        border-right: 4px solid var(--dark-alt);
      }
    }
    .right{
      margin-top: 1.5rem;
  
      .right-container{
        border-left: 4px solid var(--dark-alt);
  
      }
    }
  }
  
  }
  </style>