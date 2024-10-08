<script setup>
import { ref,watchEffect } from 'vue'
import api from '../services/api'
import Swal from 'sweetalert2'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}

// Function to toggle the sidebar visibility
const toggleSidebar = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value.toString());
};

// Function to handle media query changes
const handleMediaQuery = (event) => {
    if (event.matches) {
        // Apply styles for max-width: 1150px
        is_expanded.value = false
    } else {
        // Apply styles for min-width: 1151px
        is_expanded.value = localStorage.getItem("is_expanded") === "true"
    }
}

// Watch for media query changes
watchEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1170px)')
    handleMediaQuery(mediaQuery) // Call the function initially
    mediaQuery.addEventListener('change', handleMediaQuery) // Listen for changes
})

</script>

<template>
    <aside :class="`${is_expanded && 'is_expanded'}`">
        
        <img class="sna-logo" src="/src/assets/SNA Logo with BG.png" alt="">

        <h2 class="sp-text"> Student Profiling</h2>

        <!-- <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="toggleMenu"> 
              <span class="material-icons">
                  keyboard_double_arrow_right
                  </span> 
          </button>
        </div> -->
    <br>
      
  <hr>
<br>
<br>
      
      <div class="menu">
          <router-link class="button" to="/dashboard">
              <span class="material-icons">dashboard</span>
              <span class="text">Dashboard</span>
          </router-link>

        <!-- Clickable Dropdown structure -->
        <div class="dropdown " @click="toggleDropdown" :class="{ 'open': isDropdownOpen }">
            <button class="dropbtn">
            <span class="material-icons">article</span>
            <span class="text" style="font-size:14px;">Status Information</span>
            <span class="material-icons dropdown-icon">{{ isDropdownOpen ? 'expand_less' : 'expand_more' }}</span>

            </button>
            <transition name="fade">
            <div class="dropdown-content" v-if="isDropdownOpen" @click.stop>
                <!-- Five tabs in the dropdown -->
                <router-link to="/clinic"><span class="material-icons">medical_services</span><span class="text">Clinic</span></router-link>
                <router-link to="/guidance"><span class="material-icons">accessibility</span><span class="text">Guidance</span></router-link>
                <router-link to="/inventory"><span class="material-icons">inventory</span><span class="text">Inventory</span></router-link>
                <router-link to="/library"><span class="material-icons">book</span><span class="text">Library</span></router-link>
            </div>
            </transition>
        </div>

        <router-link class="button" to="/schedule">
          <span class="material-icons">calendar_month</span>
          <span class="text">Schedule</span>
      </router-link>

        <router-link class="button" to="/profile">
          <span class="material-icons">account_circle</span>
          <span class="text">Profile</span>
      </router-link>

      </div>

      <hr class="hr">

      <div class="menu-logout">
          <router-link class="button" to="#" @click="logoutAlert">
              <span class="material-icons">logout</span>
              <span class="text" >Logout</span>
          </router-link>
      </div>
      
    </aside>
  </template>
  
<script>

export default {
  
    name: "Sidebar",
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    async logout() { 
      try {
        await api.get('logout');
      } finally {
        this.logoutAlert();      
      }
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logoutAlert() {
      Swal.fire({
        title: 'Confirm Logout',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Yes, logout'
      }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear();
            this.$router.push('/login');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  aside {
      display: flex;
      flex-direction: column;
      width: calc(2.5rem + 40px);
      min-height: 100vh;
      overflow: hidden;
      padding: 1rem;
      background-color: var(--dark);
      color: var(--light);
  
      transition: 0.2s ease-out;
  
      .sna-logo {
        height: 2.5rem;
        width: 2.5rem;
        transition: 0.2s ease-out;
        border-radius: 50%;
      }

      .sp-text{
        display: none;
        transition: 0.2s ease-out;
      }
      .menu-toggle-wrap {
          display: flex;
          justify-content: flex-end;
  
          position: relative;
          bottom: 0.5rem;
          transition: 0.2s ease-out;
  
          margin: 5px;
          .menu-toggle {
              transition: 0.2s ease-out;
              .material-icons{
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
                  
              }
  
              &:hover {
                  .material-icons {
                      color: var(--primary);
                      transform: translateX(0.5rem);
                  }
              }
          }
      }
       .button .text {
          opacity: 0;
          transition: 0.3s ease-out;
      }
  
  
      .menu {
          margin: -0 -1rem;
          position: relative;
          bottom: 0.5rem;
          .button{
              display: flex;
              align-items: center;
              text-decoration: none;
  
              padding: 0.8rem 1rem;
              margin-bottom: 0.5rem;
              transition: 0.2s ease-out;
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              .text{
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover, &.router-link-exact-active{
                  background-color: #fff;
                  margin-left: 0.5rem;
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                  .material-icons, .text {
                      color: var(--dark);
                  }
              }
          }

          .dropdown {

            padding: 0.8rem 0.9rem;
            transition: 0.2s ease-out;

            .dropbtn{
              margin-bottom: -1.2rem;

              .dropdown-icon{
                display: none;
              }
                .material-icons {
                        font-size: 2rem;
                        color: var(--light);
                        transition: 0.2s ease-out;

                }

                .text{
                    opacity: 0;
                    transition: 0.2s ease-out;

                }

                &:hover{
                  transition: 0.2s ease-out;

                }
            }   
            .dropdown-content a {
                color: var(--light);
                padding: 1rem 5.3rem 1rem ; 
                margin-bottom: 0.5rem;
                text-decoration: none;
                display: flex;
                transition: background-color 0.3s ease;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
              
              &:hover, &.router-link-active{
                background-color: #fff;
                margin-left: 0.5rem;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
                color: var(--dark);
              }
              .material-icons{
                font-size: 2rem;
                position: relative;
                right: 75px;
                transition: 0.2s ease-out;

            }
            
            .text{
                opacity: 0;
                transition: 0.2s ease-out;
            }
              }
            
              .fade-enter-active, .fade-leave-active {
                transition: opacity 0.3s;
              }
              
              .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
                opacity: 0;
              }
          }
      }
  
      .menu-logout {
          margin: -0 -1rem ;
          transition: 0.2s ease-out;
          flex: 1;
          display: flex;
          align-items: flex-end;
          .button{
              display: flex;
              align-items: center;
              text-decoration: none;
  
              padding: 0.81rem 1rem;
              margin-bottom: 0.5rem;
              transition: 0.2s ease-out;
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              .text{
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover{
                  .material-icons, .text  {
                      color: var(--primary);
                  }
              }
          }
      }
      &.is_expanded {
          width: var(--sidebar-width);
  
          .menu-logout{
              display: flex;
              align-items: flex-end;
              margin: -0 2rem ;
              transition: 0.2s ease-out;
              color: var(--light);
  
          }
          .sna-logo{
                height: 9rem;
                width: 9rem;
                transition: 0.2s ease-out;
                align-self: center;
                border-radius: 5rem;
          }

          .sp-text {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: #fff;
            opacity: 1;
            display: block;
            transition: 0.2s ease-out;
            text-align: center;
          }
  
          .menu-toggle-wrap {
              top:-4rem;
              left: 0.5rem;
              .menu-toggle{
                  transform: rotate(-180deg);
              }
              
          }
          .button .text {
              opacity: 1;
          }
          
          .button {
              .material-icons {
                  margin-right: 1rem;
              }
          }
          .dropdown {
            position: relative;
            align-items: center;
            text-decoration: none;
            padding: 0.8rem 1rem;
            transition: 0.2s ease-out;
            margin-bottom: 1.2rem;
            
            .dropbtn{

              .dropdown-icon{
                display:inline;
              }
                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                    position: relative;
                    top: 10px;
                }

                .text{
                    color: var(--light);
                    transition: 0.2s ease-out;
                    margin-left: 1rem;
                    opacity: 1;
                }
            }  
             
            .dropdown-content a {
                position: relative;
                top: 1rem;
                left: 1rem;
                color: var(--light);
                padding: 1rem 4rem 0.7rem ; 
                margin-bottom: 0.5rem;
                text-decoration: none;
                display: flex;
                transition: background-color 0.3s ease;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
             
              
              &:hover, &.router-link-exact-active {
                background-color: #fff;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
                color: var(--dark);
              }

              .material-icons{
                font-size: 2rem;
                position: relative;
                right: 30px;
                transition: 0.2s ease-out;

            }
            
            .text{
                position: relative;
                right: 30px;
                transition: 0.2s ease-out;
                margin-left: 1rem;
                opacity: 1;
            }
              }
            
              .fade-enter-active, .fade-leave-active {
                transition: opacity 0.3s;
              }
              
              .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
                opacity: 0;
              }
          }
          .menu {
            bottom: 2.5rem;
          }
          
          .hr{
            position: relative;
            bottom: 2rem;
          }
        
        }

        @media (max-width: 1050px){
          .menu-toggle-wrap{
            opacity: 0;
            pointer-events: none;
          }
        }
    }
  </style>