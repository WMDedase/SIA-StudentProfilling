<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="displayedStudents"
    :sort-by="[{ key: 'studentId', order: 'asc' }]"
    
    
  >
    <template v-slot:top >
      <v-toolbar flat >
        <v-toolbar-title class="text-h6 font-weight-black " style="color: #2F3F64">Student Table</v-toolbar-title>
        <!-- <v-divider class="mx-2" inset vertical></v-divider> -->

        <v-text-field
        v-model="search"
        class="w-auto mr-4 "
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
      
        <v-dialog v-model="dialog" max-width="800px">
          
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2 rounded-l	" color="primary" dark v-bind="props" prepend-icon="mdi-plus">Add Student</v-btn>
          </template>
          
          <v-card >
            <v-card-title ><span class="text-h6 m-2" style="color: #2F3F64"  >{{ formTitle }}</span></v-card-title>
            <v-card-text > 
              <v-container >
                <v-row dense >
                  <v-col
                  cols="12"
                  md="3"
                  sm="6"
                >
                  <v-text-field
                    v-model="editedItem.LRN"
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
                    v-model="editedItem.emailAddress"
                    label="Email Address*"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col
                  cols="12"
                  md="3"
                  sm="6"
                >
                  <v-text-field
                    v-model="editedItem.firstName"
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
                    v-model="editedItem.middleName"
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
                    v-model="editedItem.lastName"
                    label="Last Name*"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col
                  cols="12"
                  md="1"
                  sm="4"
                >
                  <v-text-field
                    v-model="editedItem.extensionName"
                    label="Extension Name*"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col
                  cols="12"
                  md="2"
                  sm="6"
                >
                  <v-select
                    v-model="editedItem.sex"
                    :items="['Male', 'Female', 'Other']"
                    label="Sex*"
                    required
                  ></v-select>
                </v-col>
                
                <v-col
                  cols="12"
                  md="3"
                  sm="6"
                >
                  <v-text-field
                    v-model="editedItem.birthdate"
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
                    v-model="editedItem.birthplace"
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
                    v-model="editedItem.civilStatus"
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
                  <v-text-field
                    v-model="editedItem.citizenship"
                    label="Citizenship*"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col
                  cols="12"
                  md="3"
                  sm="6"
                >
                  <v-text-field
                    v-model="editedItem.religion"
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
                    v-model="editedItem.addressNo"
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
                    v-model="editedItem.street"
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
                    v-model="editedItem.city"
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
                    v-model="editedItem.region"
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
                    v-model="editedItem.zipCode"
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
                    v-model="editedItem.country"
                    label="Country*"
                    required
                  ></v-text-field>
                </v-col>
                
          </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.firstName }} {{ item.middleName }} {{ item.lastName }} {{ item.extensionName }}</td>
        <td>{{ item.studentId }}</td>
        <td>{{ item.LRN }}</td>
        <td>{{ item.gradeLevel }}</td>
        <td>{{ item.strand }}</td>
        <td>
          <v-icon class="me-2" size="small" style="color: #2F3F64" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon size="small" style="color: #2F3F64" @click="deleteItem(item)">mdi-delete</v-icon>
        </td>
      </tr>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn class="text-h2" color="primary" @click="initialize">Reset</v-btn>
    </template> -->
  </v-data-table>
</template>

<script>

export default {
  
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: 'Name', align: 'start', key:'fullName'},
      { title: 'Student ID', key: 'studentId' },
      { title: 'LRN', key: 'LRN' },
      { title: 'Grade Level', key: 'gradeLevel' },
      { title: 'Strand', key: 'strand' },
      { title: 'Actions', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      studentId: '',
      LRN: '',
      gradeLevel: '',
      strand: '',
      emailAddress: '',
      firstName: '',
      middleName: '',
      lastName: '',
      extensionName: '',
      sex: '',
      birthdate: '',
      birthplace: '',
      civilStatus: '',
      citizenship: '',
      religion: '',
      addressNo: '',
      street: '',
      city: '',
      region: '',
      zipCode: '',
      country: '',
    },
    defaultItem: {
      studentId: '',
      LRN: '',
      gradeLevel: '',
      strand: '',
      emailAddress: '',
      firstName: '',
      middleName: '',
      lastName: '',
      extensionName: '',
      sex: '',
      birthdate: '',
      birthplace: '',
      civilStatus: '',
      citizenship: '',
      religion: '',
      addressNo: '',
      street: '',
      city: '',
      region: '',
      zipCode: '',
      country: '',
      
    },
    
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Student' : 'Edit Student Information';
    },
    displayedStudents() {
      const searchTerm = this.search.toLowerCase(); // Convert search input to lowercase for case-insensitive comparison
    return this.students.filter(student =>
      Object.values(student).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm)
    )
    );
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students = [
      { 
      fullName: 'John Doe',
      studentId: '2021001', 
      LRN: '1234567890', 
      gradeLevel: '10', 
      strand: 'STEM', 
      emailAddress: 'john.doe@example.com',
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      extensionName: '',
      sex: 'Male',
      birthdate: '1999-05-15',
      birthplace: 'New York',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '123',
      street: 'Main Street',
      city: 'New York City',
      region: 'New York',
      zipCode: '10001',
      country: 'USA'
    },
    { 
      fullName: 'Jane Elizabeth Smith',
      studentId: '2021002', 
      LRN: '0987654321', 
      gradeLevel: '11', 
      strand: 'ABM', 
      emailAddress: 'jane.smith@example.com',
      firstName: 'Jane',
      middleName: 'Elizabeth',
      lastName: 'Smith',
      extensionName: '',
      sex: 'Female',
      birthdate: '2000-03-25',
      birthplace: 'Los Angeles',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Oak Avenue',
      city: 'Los Angeles',
      region: 'California',
      zipCode: '90001',
      country: 'USA'
    },
    {
      fullName: 'John William Johnson',
      studentId: '2021003',
      LRN: '1234567890',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'john.johnson@example.com',
      firstName: 'John',
      middleName: 'William',
      lastName: 'Johnson',
      extensionName: '',
      sex: 'Male',
      birthdate: '2001-02-15',
      birthplace: 'Chicago',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Maple Street',
      city: 'Chicago',
      region: 'Illinois',
      zipCode: '60601',
      country: 'USA'
    },
    {
      fullName: 'Mary Ann Brown',
      studentId: '2021004',
      LRN: '0987654321',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'mary.brown@example.com',
      firstName: 'Mary',
      middleName: 'Ann',
      lastName: 'Brown',
      extensionName: '',
      sex: 'Female',
      birthdate: '2000-07-10',
      birthplace: 'Houston',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Pine Street',
      city: 'Houston',
      region: 'Texas',
      zipCode: '77001',
      country: 'USA'
    },
    {
      fullName: 'Michael Robert Miller',
      studentId: '2021005',
      LRN: '1234567890',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'michael.miller@example.com',
      firstName: 'Michael',
      middleName: 'Robert',
      lastName: 'Miller',
      extensionName: '',
      sex: 'Male',
      birthdate: '1999-11-20',
      birthplace: 'Philadelphia',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Cedar Street',
      city: 'Philadelphia',
      region: 'Pennsylvania',
      zipCode: '19101',
      country: 'USA'
    },
    {
      fullName: 'Emily Grace Taylor',
      studentId: '2021006',
      LRN: '0987654321',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'emily.taylor@example.com',
      firstName: 'Emily',
      middleName: 'Grace',
      lastName: 'Taylor',
      extensionName: '',
      sex: 'Female',
      birthdate: '2001-05-30',
      birthplace: 'Phoenix',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Elm Street',
      city: 'Phoenix',
      region: 'Arizona',
      zipCode: '85001',
      country: 'USA'
    },
    {
      fullName: 'Daniel Joseph Anderson',
      studentId: '2021007',
      LRN: '1234567890',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'daniel.anderson@example.com',
      firstName: 'Daniel',
      middleName: 'Joseph',
      lastName: 'Anderson',
      extensionName: '',
      sex: 'Male',
      birthdate: '2000-09-12',
      birthplace: 'San Antonio',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Oak Street',
      city: 'San Antonio',
      region: 'Texas',
      zipCode: '78201',
      country: 'USA'
    },
    {
      fullName: 'Olivia Sophia Martinez',
      studentId: '2021008',
      LRN: '0987654321',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'olivia.martinez@example.com',
      firstName: 'Olivia',
      middleName: 'Sophia',
      lastName: 'Martinez',
      extensionName: '',
      sex: 'Female',
      birthdate: '1999-12-05',
      birthplace: 'San Diego',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Main Street',
      city: 'San Diego',
      region: 'California',
      zipCode: '92101',
      country: 'USA'
    },
    {
      fullName: 'Alexander Samuel Hernandez',
      studentId: '2021009',
      LRN: '1234567890',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'alexander.hernandez@example.com',
      firstName: 'Alexander',
      middleName: 'Samuel',
      lastName: 'Hernandez',
      extensionName: '',
      sex: 'Male',
      birthdate: '2001-04-18',
      birthplace: 'San Jose',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Birch Street',
      city: 'San Jose',
      region: 'California',
      zipCode: '95101',
      country: 'USA'
    },
    {
      fullName: 'Sophia Isabella Thompson',
      studentId: '2021010',
      LRN: '0987654321',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'sophia.thompson@example.com',
      firstName: 'Sophia',
      middleName: 'Isabella',
      lastName: 'Thompson',
      extensionName: '',
      sex: 'Female',
      birthdate: '2000-08-22',
      birthplace: 'Dallas',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Cypress Street',
      city: 'Dallas',
      region: 'Texas',
      zipCode: '75201',
      country: 'USA'
    },
    {
      fullName: 'William Benjamin White',
      studentId: '2021011',
      LRN: '1234567890',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'william.white@example.com',
      firstName: 'William',
      middleName: 'Benjamin',
      lastName: 'White',
      extensionName: '',
      sex: 'Male',
      birthdate: '1999-10-14',
      birthplace: 'San Francisco',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Pine Street',
      city: 'San Francisco',
      region: 'California',
      zipCode: '94101',
      country: 'USA'
    },
    {
      fullName: 'Isabella Mia Jackson',
      studentId: '2021012',
      LRN: '0987654321',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'isabella.jackson@example.com',
      firstName: 'Isabella',
      middleName: 'Mia',
      lastName: 'Jackson',
      extensionName: '',
      sex: 'Female',
      birthdate: '2001-06-28',
      birthplace: 'Austin',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Maple Street',
      city: 'Austin',
      region: 'Texas',
      zipCode: '73301',
      country: 'USA'
    },
    {
      fullName: 'James David Harris',
      studentId: '2021013',
      LRN: '1234567890',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'james.harris@example.com',
      firstName: 'James',
      middleName: 'David',
      lastName: 'Harris',
      extensionName: '',
      sex: 'Male',
      birthdate: '2000-01-08',
      birthplace: 'San Francisco',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Cedar Street',
      city: 'San Francisco',
      region: 'California',
      zipCode: '94101',
      country: 'USA'
    },
    {
      fullName: 'Emma Charlotte King',
      studentId: '2021014',
      LRN: '0987654321',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'emma.king@example.com',
      firstName: 'Emma',
      middleName: 'Charlotte',
      lastName: 'King',
      extensionName: '',
      sex: 'Female',
      birthdate: '1999-07-18',
      birthplace: 'Seattle',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Birch Street',
      city: 'Seattle',
      region: 'Washington',
      zipCode: '98101',
      country: 'USA'
    },
    {
      fullName: 'Benjamin Oliver Lee',
      studentId: '2021015',
      LRN: '1234567890',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'benjamin.lee@example.com',
      firstName: 'Benjamin',
      middleName: 'Oliver',
      lastName: 'Lee',
      extensionName: '',
      sex: 'Male',
      birthdate: '2001-03-15',
      birthplace: 'Denver',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Elm Street',
      city: 'Denver',
      region: 'Colorado',
      zipCode: '80201',
      country: 'USA'
    },
    {
      fullName: 'Evelyn Harper Garcia',
      studentId: '2021016',
      LRN: '0987654321',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'evelyn.garcia@example.com',
      firstName: 'Evelyn',
      middleName: 'Harper',
      lastName: 'Garcia',
      extensionName: '',
      sex: 'Female',
      birthdate: '2000-09-20',
      birthplace: 'Boston',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Cypress Street',
      city: 'Boston',
      region: 'Massachusetts',
      zipCode: '02101',
      country: 'USA'
    },
    {
      fullName: 'Michaela Abigail Clark',
      studentId: '2021017',
      LRN: '1234567890',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'michaela.clark@example.com',
      firstName: 'Michaela',
      middleName: 'Abigail',
      lastName: 'Clark',
      extensionName: '',
      sex: 'Female',
      birthdate: '1999-12-30',
      birthplace: 'Detroit',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Maple Street',
      city: 'Detroit',
      region: 'Michigan',
      zipCode: '48201',
      country: 'USA'
    },
    {
      fullName: 'Ethan Gabriel Rodriguez',
      studentId: '2021018',
      LRN: '0987654321',
      gradeLevel: '10',
      strand: 'STEM',
      emailAddress: 'ethan.rodriguez@example.com',
      firstName: 'Ethan',
      middleName: 'Gabriel',
      lastName: 'Rodriguez',
      extensionName: '',
      sex: 'Male',
      birthdate: '2001-07-25',
      birthplace: 'Memphis',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Cedar Street',
      city: 'Memphis',
      region: 'Tennessee',
      zipCode: '38101',
      country: 'USA'
    },
    {
      fullName: 'David Michael Johnson Jr.',
      studentId: '2021019',
      LRN: '1234567890',
      gradeLevel: '11',
      strand: 'ABM',
      emailAddress: 'david.johnson@example.com',
      firstName: 'David',
      middleName: 'Michael',
      lastName: 'Johnson',
      extensionName: 'Jr.',
      sex: 'Male',
      birthdate: '2000-11-12',
      birthplace: 'Chicago',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '789',
      street: 'Oak Street',
      city: 'Chicago',
      region: 'Illinois',
      zipCode: '60601',
      country: 'USA'
    },
    {
      fullName: 'Sophie Emily Brown III',
      studentId: '2021020',
      LRN: '0987654321',
      gradeLevel: '12',
      strand: 'HUMSS',
      emailAddress: 'sophie.brown@example.com',
      firstName: 'Sophie',
      middleName: 'Emily',
      lastName: 'Brown',
      extensionName: 'III',
      sex: 'Female',
      birthdate: '1999-04-08',
      birthplace: 'Houston',
      civilStatus: 'Single',
      citizenship: 'American',
      religion: 'Christianity',
      addressNo: '456',
      street: 'Maple Street',
      city: 'Houston',
      region: 'Texas',
      zipCode: '77001',
      country: 'USA'
    },

      ];
      this.students.forEach(student => {
  student.fullName = `${student.firstName} ${student.middleName} ${student.lastName} ${student.extensionName}`.trim();
    if (student.gradeLevel < 11 || student.gradeLevel > 12) {
        // Remove the strand property
        student.strand = "N/A";
    }
      });
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
      } else {
        this.students.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss">
.v-data-table {
  height: 100%;

}

</style>
