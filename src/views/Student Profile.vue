<template>
    <main>
        <div class="top-container">
            <div class="studentProfile">
                <span class="material-icons">badge</span>
                <span class="text">Student Profile</span>
            </div>

            <div class="searchBar">
                <span class="material-icons">search</span>
                <input type="text" class="search" placeholder="Student LRN">
            </div>
        </div>  
        <hr>

        <div class="main-content">
            <div class="add-student" >
                <!-- <span class="material-icons">add_circle</span>
                <span class="text">Add Student</span> -->
                <AddStudent/>
            </div>
            

            <div class="student-table">
                <h1>Student Table</h1>
            </div>
        </div>

        
</main>

</template>

<script>
import AddStudent from '../components/AddStudent.vue';

  export default {
    components: { AddStudent},
  };
</script>

<style lang="scss" scoped>
.top-container{
    display: flex;
    margin: 0.5rem;
    .studentProfile{
        flex: 1;
        
        .material-icons{
            color: var(--dark);
            font-size: 2.5rem;
        }
        .text{
            position: relative;
            color: var(--dark);
            font-size: 1.5rem;
            font-weight: 900;
            bottom: 0.5rem;
        }
    }
    .searchBar{
        display: flex;
        flex: 0.4;
        align-items: center;
        justify-content: center;
        
        .material-icons {
            color: var(--dark);
            position: relative;
            left: 2.5rem;      
            }


        .search{
            width: 75%;
            height: 90%;
    
        }
        input[type=text] {  
            padding: 12px 20px 12px 40px;
            background-color: #c5c5c5;
            border: 1px solid #c5c5c5; ;
            border-radius: 20px;
            font-size: 16px
        }
    } 
} 

.main-content {
    display: flex;
    flex-direction: column;
    .add-student{
        position: relative;
        right: 2rem;
        padding: 10px;
        max-width: 15rem;
    }
}

.student-table{
    background-color: #c0c0c0;
    padding: 2rem;
    height: 100vh;
}
</style>