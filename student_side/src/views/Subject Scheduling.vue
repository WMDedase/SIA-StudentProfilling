<template>
  <main>
    <div class="top-container">
        <h1 class="bg-title">SUBJECT SCHEDULING</h1>
        <div class="studentProfile">
            <span class="material-icons">edit_calendar</span>
            <span class="text fw-bolder">Subject Scheduling</span>   
        </div>    
    </div> 
    <hr>

    <div class="bottom-container">

        <div class="jhs-container">
            <h3><span class="material-icons"> school</span>Junior High</h3>

            <JuniorTable/>
        </div>

        <div class="shs-container">
        <h3><span class="material-icons"> school</span>Senior High</h3>

            <SeniorTable/>
        </div>

    </div>
  </main>

</template>

<script>
import JuniorTable from '../components/Scheduling/JuniorTable.vue';
import SeniorTable from '../components/Scheduling/SeniorTable.vue';
export default {
    components:{
        SeniorTable,
        JuniorTable
    }
}
</script >

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
    gap: 2rem;
        h3 {
            text-shadow: 0 0 1px;
            font-size: 20px;
            flex: 1;
            color: var(--dark);
            margin-bottom: 1fr;

            .material-icons{
                position:relative;
                font-size: 35px;
                top: 10px;  
                right: 5px;
            }
        }

    .jhs-container{
        flex: 0.5;
        padding: 0.5rem;
        border-radius: 10px;
        border-left: 4px solid var(--dark-alt);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    }

    .shs-container{
        flex: 0.5;
        padding: 0.5rem;
        border-radius: 10px;
        border-right: 4px solid var(--dark-alt);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    }
}
</style>