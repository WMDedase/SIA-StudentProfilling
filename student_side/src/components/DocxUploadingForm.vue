<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api'

const currentUser = ref(null);

onMounted(async () => {
  try {
    currentUser.value = await fetchCurrentUser();
    console.log('Current user data:', currentUser.value);
  } catch (error) {
    console.error('Failed to fetch current user:', error.message);
  }
});

</script>
<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        class="text-none font-weight-regular"
        color="var(--dark)"
        prepend-icon="mdi-file-upload"
        v-bind="activatorProps"
        style="color: white;"
      >
        Upload Documents
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="fw-bold"
        style="padding: 1.2rem; background-color: var(--dark); color: white; border-radius: 3px;"
      >
        <span
          class="material-icons"
          style="position: relative; right: 5px; top: 5px;"
          >description</span
        >
        Document Uploading Form
      </v-card-title>

      <v-card-text>
        <!-- Document Request Form -->
        <v-row dense>
          <!-- File Input for Good Moral Certificate -->
          <v-col cols="12">
            <v-file-input
              v-model="goodMoralFile"
              label="Good Moral Certificate"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

        <v-btn color="primary" text="Upload" variant="tonal" @click="submitRequest">
          Upload
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { fetchCurrentUser } from "../services/api";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
  data() {
    return {
      dialog: false,
      goodMoralFile: null,
      student_id: "",
    };
  },
  mounted() {
    this.fetchStudentProfile();
  },
  methods: {
    async fetchStudentProfile() {
      try {
        const data = await fetchCurrentUser();
        this.student_id = data.student_profile.student_id;
        this.student_lrn = data.student_profile.student_lrn;
        console.log(this.student_id);
        console.log(this.student_lrn);
        
      } catch (error) {
        console.error("Failed to fetch student profile:", error.message);
      }
    },
    async submitRequest() {
      if (!this.goodMoralFile) {
        Swal.fire({
          icon: "error",
          title: "No file selected",
          text: "Please select a file to upload.",
          confirmButtonText: "OK",
        });
        return;
      }

      console.log("Submitting with student_lrn:", this.student_lrn); // Add this log

      const formData = new FormData();
      formData.append("student_lrn", this.student_lrn);
      formData.append("image", this.goodMoralFile);
      formData.append("file_type", "Good Moral");

      try {
        const response = await axios.post("/imageStud", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        this.dialog = false;
        Swal.fire({
          title: "SUCCESS",
          text: "Document Successfully Uploaded",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "FAILED",
          text: "Document Upload Failed",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>

  
  <style lang="scss" scoped>

  </style>