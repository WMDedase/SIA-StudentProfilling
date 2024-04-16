
  <template>
    <div class="pa-4 text-center">
      <v-dialog
        v-model="dialog"
        max-width="1200"
        width="auto"
        scrollable
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-h6 font-weight-black"
            prepend-icon="mdi-plus"
            text="Add Student"
            variant="tonal"
            v-bind="activatorProps"
          ></v-btn>
        </template>
  
        <v-card
          prepend-icon="mdi-account"
          title="Add Student"
        >
          <v-card-text>
            <v-row dense >
              <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-text-field
                label="LRN*"
                required
              ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            sm="6"
          >
            <v-text-field
              label="Email Address*"
              required
            ></v-text-field>
          </v-col>

            <v-col cols="12" md="5" sm="6" ></v-col>

              <v-col 
                cols="12"
                md="3"
                sm="6"
                
              >
              <v-text-field
                  label="First Name*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="3"
                sm="4"
              >
                <v-text-field
                  hint="example of helper text only on focus"
                  label="Middle Name"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="3"
                sm="4"
              >
                <v-text-field
                  label="Last Name*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="2"
              sm="4"
            >
              <v-text-field
                label="Extension Name*"
                required
              ></v-text-field>
            </v-col>
    
  
              <v-col
                cols="12"
                md="3"
                sm="6"
              >
                <v-text-field
                  label="Birthdate*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="3"
                sm="6"
              >
                <v-text-field
                  label="Birthplace*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="2"
                sm="6"
              >
                <v-select
                :items="['Single','Married','Divorced']"
                  label="Civil Status*"
                  required
                ></v-select>
              </v-col>

              <v-col
              cols="12"
              md="2"
              sm="6"
            >
              <v-select
              :items="['Male', 'Female', 'Other']"
                label="Sex*"
                required
              ></v-select>
            </v-col>
  
            <v-col
            cols="12"
            md="1"
            sm="6"
          >
            <v-text-field
              label="Citizensip*"
              required
            ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md=""
          sm="6"
        >
          <v-text-field
            label="Religion*"
            required
          ></v-text-field>
        </v-col>
        
          <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <v-text-field
            label="Address No.*"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <v-text-field
          label="Street*"
          required
        ></v-text-field>
      </v-col>

      <v-col
      cols="12"
      md="3"
      sm="6"
    >
      <v-text-field
        label="City*"
        required
      ></v-text-field>
    </v-col>

          <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <v-text-field
            label="Region*"
            required
          ></v-text-field>
        </v-col>

        <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <v-text-field
          label="Zip Code*"
          required
        ></v-text-field>
      </v-col>

        <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <v-text-field
          label="Country*"
          required
        ></v-text-field>
      </v-col>


            </v-row>
  
            <small class="text-caption text-medium-emphasis">*indicates required field</small>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              text="Close"
              variant="plain"
              @click="dialog = false"
            ></v-btn>
  
            <v-btn
              color="primary"
              text="Save"
              variant="tonal"
              @click="dialog = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style>

</style>