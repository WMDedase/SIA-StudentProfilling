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
          <v-card-text :style="{ color: statusColor }" class="status">
            <v-icon :color="statusColor" class="mr-2">{{ statusIcon }}</v-icon>
            {{ statusText }}
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
          <br>
          <hr>
          <br>
          <LibraryHistory/>
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
import LibraryHistory from '../../components/LibraryHistory.vue';

export default {
  components: {
    LibraryHistory,
    LibraryBorrowed
    },
    data() {
        return {
          statusKey: 'Not Yet Cleared',
          statusMap: {
          Cleared: { text: 'Cleared', color: 'green', icon: 'mdi-check-circle' },
          'Not Yet Cleared': { text: 'Not Yet Cleared', color: '#dbc501', icon: 'mdi-alert-circle' }
      }
      };
    },
    computed: {
    statusText() {
      return this.statusMap[this.statusKey].text;
    },
    statusColor() {
      return this.statusMap[this.statusKey].color;
    },
    statusIcon() {
      return this.statusMap[this.statusKey].icon;
    },
    statusClass() {
      return 'status ' + this.statusColor + '--text';
    }
  },
  // Assume you receive the status key from the backend
  created() {
    // Fetch status key from backend and assign it to this.statusKey
    // Example: this.statusKey = responseData.status;
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
        font-weight: bolder;
      
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