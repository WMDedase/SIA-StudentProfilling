<template>
  <main>
  
            
      <div class="top-container">
          <h1 class="bg-title">GUIDANCE</h1>
          <div class="studentProfile">
              <span class="material-icons">accessibility</span>
              <span class="text fw-bolder">Guidance</span>   
          </div>    
      </div> 
      <hr>
  
  <div class="bottom-container">
    <div class="left">
    <v-row>
      <v-col col="6" >
        <v-card class="mx-auto mr-5 top-left" elevation="3">
          <v-card-item>
            <v-card-title class="fw-bold" style="color: var(--dark);">
              <span class="material-icons"> assignment_turned_in</span>
              Guidance Status
            </v-card-title>
          </v-card-item>
          <v-card-text v-if="currentUser" class="status">

            <h4 :style="{ color: statusColor }" class="fw-bolder">            
              <span >
              <span :style="{ color: statusColor }" v-if="guidanceStatus === 'Cleared'" class="material-icons">check_circle</span>
              <span :style="{ color: statusColor }"  v-else class="material-icons">error
                
              </span>
            </span> 
            
            {{ guidanceStatus }}
          </h4>
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
            Guidance Requirements
          </v-card-title>
    
        </v-card-item>
    
        <v-card-text>
          <GuidanceViolation/>
        </v-card-text>
      </v-card>
    </v-col>
      </v-row>
    </div>
  
  </div>
  </main>
  
  </template>
  
  <script>
import GuidanceViolation from '../../components/GuidanceViolation.vue';

export default {
  components: {
    GuidanceViolation
    },
    data() {
      return {

      };
    },
    computed: {
    guidanceStatus() {
      return this.currentUser?.guidance?.status || 'Not Cleared';
    },
    statusColor() {
      switch (this.guidanceStatus) {
        case 'Cleared':
          return 'green';
        case 'Not Cleared':
          return '#dbc501'; // Yellow color
        default:
          return 'gray'; // Default color for unknown statuses
      }
    }
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
  }
  .left{
    flex: 1;
    flex-direction: column;
  
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
  .right{
    flex: 0.4;
  
    .right-container{
      border-right: 4px solid var(--dark-alt);
  
    }
    .headline {
      font-size: 18px;
      font-weight: bold;
      color: var(--dark);
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