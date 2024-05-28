
<template>
    <header class="header">
        <h2 class="sna-label">Saint Nicholas Academy Profiling System</h2>
      
    </header>
    
</template>

<script>
export default {
    name: 'Header',
    data() {

  }
}
</script>

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

    .sna-label{
        flex: 1;
        color: #e2e2e2;
        align-self: center;
        margin-left: 1rem;
        font-size: 25px;

      @media (max-width: 1050px){
        .sna-label{
            font-size: 18px;
        }
      }

    }
}

</style>
