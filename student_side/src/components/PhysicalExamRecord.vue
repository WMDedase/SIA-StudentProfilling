<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        class="record-btn text-none font-weight-regular"
        color="var(--dark)"
        prepend-icon="mdi-medical-bag"
        v-bind="activatorProps"
        style="color: white;"
        @click="openDialog"
      >
        Physical Examination Records
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="fw-bold"
        style="padding:1.2rem;background-color: var(--dark); color:white; border-radius:3px;"
      >
        <span class="material-icons" style="position:relative; right:5px; top:5px;">
          medical_services
        </span>
        Physical Examination Record
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Height:</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.height }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Weight:</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.weight }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Blood Pressure:</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.blood_pressure }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Pulse Rate:</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.pulse_rate }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Vision (Left):</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.vision_left }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Vision (Right):</v-list-item-title>
                  <v-list-item-subtitle>{{ physicalExam.vision_right }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { fetchCurrentUser } from '../services/api'; // Ensure this path is correct

export default {
  data() {
    return {
      dialog: false,
      physicalExam: {
        height: 'N/A',
        weight: 'N/A',
        blood_pressure: 'N/A',
        pulse_rate: 'N/A',
        vision_left: 'N/A',
        vision_right: 'N/A',
      },
    };
  },
  methods: {
    async fetchStudentProfile() {
      try {
        const response = await fetchCurrentUser();
        console.log('Fetched user data:', response);

        if (
          response &&
          response.student_profile &&
          Array.isArray(response.student_profile.physical_exam) &&
          response.student_profile.physical_exam.length > 0
        ) {
          const physicalExam = response.student_profile.physical_exam[0]; // Access the first item

          this.physicalExam = {
            height: physicalExam.height || 'N/A',
            weight: physicalExam.weight || 'N/A',
            blood_pressure: physicalExam.blood_pressure || 'N/A',
            pulse_rate: physicalExam.pulse_rate || 'N/A',
            vision_left: physicalExam.vision_left || 'N/A',
            vision_right: physicalExam.vision_right || 'N/A',
          };
        } else {
          console.warn('Physical exam data not found or empty array');
        }
      } catch (error) {
        console.error('Failed to fetch student profile:', error.message);
      }
    },
    openDialog() {
      this.fetchStudentProfile();
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.record-btn {
  padding: 1.5rem;
  display: flex;
  
}

.v-list-item{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    border-top: 7px solid var(--dark);
    border-radius: 10px ;
    .v-list-item-title{
        font-size: 22px;
        color: var(--dark);
        font-weight: 900;
    }
    .v-list-item-subtitle{
        font-size: 20px;
        display: flex;
        justify-content: center;
        margin: 0.5rem;
    }
}
</style>
