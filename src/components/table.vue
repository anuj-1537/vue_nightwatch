<template>
  <table>
    <tr>
      <th>SI No.</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Qualification</th>
      <th>Contact No.</th>
      <th>Operation</th>
    </tr>
    <tr v-for="(student,index) in studentInfo" :key="index">
      <td>{{index+1}}</td>
      <td>{{student.name}}</td>
      <td>{{student.age}}</td>
      <td>{{student.gender}}</td>
      <td>{{student.qualification}}</td>
      <td>{{student.contact}}</td>
      <td>
        <button @click="changeStudentData(index)">Edit</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    studentList: Array
  },
  computed: {
    studentInfo() {
      console.log("in computed properties");
      console.log(this.studentList);

      return this.studentList;
    }
  },
  methods: {
    changeStudentData(index) {
      console.log("edit button is clicked ", index);
      this.$emit("changeStudentList", index);
    }
  }
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid black;
}

table {
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
}
</style>