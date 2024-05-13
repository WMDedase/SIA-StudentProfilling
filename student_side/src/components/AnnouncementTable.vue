<template>
    <div>
      <v-card 
      elevation="1"
      class="m-3"
      >
        <v-col 
        cols="12" sm="12" md="12" 
        v-for="(announcement, index) in announcements" :key="index"
        
        >
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{ announcement.title }}</v-list-item-title>
                  <v-list-item-subtitle class="pb-3">{{ announcement.date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <p>{{ announcement.content }}</p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          
        </v-col>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        announcements: [
          { title: 'Announcement 1', 
            date: 'April 1, 2024',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .headline {
    font-size: 18px;
    font-weight: bold;
    color: var(--dark);
  }
  </style>
  