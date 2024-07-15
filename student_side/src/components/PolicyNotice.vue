<template>
    <div class="pa-1 text-center">
      <v-dialog
        width="auto"
        scrollable
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            color="#2F3F64"
            text="St. Nicholas Academy General Privacy Notice"
            variant="text"
            v-bind="activatorProps"
          ></v-btn>
        </template>
  
        <template v-slot:default="{ isActive }">
          <v-card
            title="General Privacy Notice"
          >
            <v-divider class="mt-3"></v-divider>
  
            <v-card-text class="px-4" style="height:300px; width:800px;">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ratione architecto optio doloribus provident quis recusandae, eos eligendi quo culpa adipisci quos inventore facilis. Aliquid ullam natus quam, explicabo porro esse velit reprehenderit! Placeat, maxime ut quo quia quisquam dolore pariatur sint consectetur itaque magni nulla saepe esse atque quaerat rem recusandae excepturi laborum iste delectus. Est ea, dolores cum suscipit distinctio in totam officia facere, repellat consectetur sunt quaerat eligendi laudantium? Molestias esse dolor quas corrupti optio amet non accusantium, quisquam libero neque saepe, vero iure nisi deserunt minima. Neque quibusdam, iusto deserunt ipsa molestiae doloremque debitis adipisci a.
                
                <br>
                <br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptate aut quo iusto quam tempore facere perferendis assumenda, magnam illo ipsum quis? Reprehenderit sed maxime distinctio, saepe beatae quidem voluptas ullam sit minus repellendus ad eum quaerat excepturi molestiae autem fuga deserunt vitae nisi accusamus eius ex veniam. Cum magni quod at officiis repellat recusandae veniam totam, quos pariatur eos ut, tempore reiciendis repudiandae voluptatem cumque nisi illo! Ad ipsam voluptatem doloremque eveniet ab cum minima dolores aut ipsum consectetur, rem sed, est aliquid dicta inventore excepturi accusamus deserunt vero officia libero facilis modi consequatur? Dolorem quidem iste necessitatibus quasi?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>

              <v-btn
                text="Close"
                @click="isActive.value = false"
              ></v-btn>
  
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: '',
      }
    },
  }
</script>

<style>

</style>