<template>
    <v-card-text>

        <v-select
        v-bind="props"
        :items="gradeLevels"
        label="Subject"
        variant="solo-filled"
        class="mr-2 m-auto"
      ></v-select>
        <!-- Form for adding details -->
        <v-form ref="form">
<!-- Class Code -->
<v-text-field 
  v-model="newItem.classCode" 
  label="Class Code" 
  required  
></v-text-field>



<v-row dense>
    <v-col cols="6" sm="" >
        <v-select
        v-model="newItem.day"
        :items="daysOfWeek"
        label="Day"
        required
      ></v-select>
    </v-col>
<!-- Day -->

<v-col cols="6" sm="6">
<!-- Time -->
<v-text-field
  v-model="newItem.time"
  label="Time"
  type="time"
  required
></v-text-field>
</v-col>

</v-row>

<!-- Section -->
<v-text-field 
  v-model="newItem.section" 
  label="Section" 
  required
></v-text-field>

<!-- Room -->
<v-text-field 
  v-model="newItem.room" 
  label="Room" 
  required
></v-text-field>

<!-- Faculty -->
<v-text-field 
  v-model="newItem.faculty" 
  label="Faculty" 
  required
></v-text-field>
          </v-form>
      </v-card-text>
</template>

<script>
export default {

}
</script>

<style>

</style>