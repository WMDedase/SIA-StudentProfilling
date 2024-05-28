<template>
    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          color="var(--dark)"
          prepend-icon="mdi-file-document"
          v-bind="activatorProps"
          style="color: white;"
        >Request Documents</v-btn>
      </template>
  
      <v-card
        prepend-icon="mdi-file-document"
        title="Document Request Form"
      >
        <v-card-text>
          <!-- Document Request Form -->
          <v-row dense>
              <!-- Personal Information -->
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="fullName"
              label="Full Name*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="strandGradeSection"
              label="Strand/Grade/Section*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
                v-model="schoolYear"
                label="School Year"
            ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
              v-model="requrestDate"
              label="Date "
              type="date"
          ></v-text-field>
      </v-col>

          <!-- Document Details -->
          <v-col cols="12">
            <v-select
              v-model="documentType"
              :items="documentTypeOptions"
              label="Document Type*"
              required
            ></v-select>
          </v-col>



          <!-- Purpose -->
          <v-col cols="12">
            <v-textarea
              v-model="purpose"
              label="Purpose*"
              required
              auto-grow
            ></v-textarea>
          </v-col>

          <small class="text-caption text-medium-emphasis">*The document/s requested is/are subject for verification and to be released seve, (7) working days from the date of payment.
          </small>
          </v-row>
  
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
            text="Request"
            variant="tonal"
            @click="submitRequest"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        fullName: '',
        strandGradeSection: '',
        schoolYear: '',
        requrestDate: '',
        documentType: '',
        documentTypeOptions: ['Form 137-A(TOR/SF10)', 'Diploma', 'Report Card(F-138) (CTC)','Good Moral Certificate', 'Enrolment Certificate', 'ESC Certificate'
                            , 'Completion Certificate', 'English as Medium Ins.','With Honors Cerificate', 'GWA Certificate'],
        purpose: '',
      };
    },
    methods: {
      openDialog() {
        // Reset form fields before opening the dialog
        this.fullName = '';
        this.studentID = '';
        this.documentType = '';
        this.numberOfCopies = '';
        this.purpose = '';
        
        // Open the dialog
        this.dialog = true;
      },
      submitRequest() {
        // Implement logic to submit the document request
        // You can access form data and perform validation here
        // Once the request is submitted, you can close the dialog
        this.dialog = false;
      },
    }
  };
  </script>
  
  <style>
  
  </style>