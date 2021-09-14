<template>
  <div id="app">
    <h2>Student Details</h2>

    <Form @studentInfo="formData($event)" :selectedStudent="selectedStudentData" />
    <hr />
    <Table :studentList="studentData" @changeStudentList="changeStudentData($event)" />
  </div>
</template>

<script>
import Form from "./components/Form";
import Table from "./components/table";
export default {
  name: "App",
  data() {
    return {
      selectedIndex: -1,
      studentData: [
        {
          name: "anuj deep",
          age: 23,
          gender: "male",
          qualification: "B.Tech",
          contact: 7004011477,
          dob: "1998-12-31"
        },
        {
          name: "tom hardy",
          age: 34,
          gender: "male",
          qualification: "B.Sc",
          contact: 8989831733,
          dob: "1995-06-26"
        }
      ],
      selectedStudentData: {}
    };
  },
  methods: {
    formData($event) {
      console.log($event[0]);

      if (
        typeof $event[0] !== "undefined" &&
        this.studentData.indexOf($event[0]) == -1
      ) {
        if (this.selectedIndex != -1) {
          this.studentData.splice(this.selectedIndex, 1, $event[0]);
          console.log("data is changed");
          console.log(this.studentData);
          this.selectedIndex = -1;
        } else {
          this.studentData.push($event[0]);
          console.log($event[0]);

          console.log("from app vue", this.studentData);
        }
      }
    },
    changeStudentData($event) {
      this.selectedIndex = $event;
      console.log("in changeStudentData ", $event);
      this.selectedStudentData = this.studentData[$event];
    }
  },
  components: {
    Form,
    Table
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
