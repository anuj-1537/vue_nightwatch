<template>
	<div>
    <h2>School Details</h2>
		<label for="schoolName">School Name:</label>
    <input type="text" id="schoolName" name="schoolName" v-model="schoolName" />
    <br />
    <p v-show="schNameErr.length!=0">
      <ul>
          <li v-for="(err,index) in schNameErr" :key="index">{{err}}</li>
      </ul>
    </p> 
		<label for="schoolId">School Id:</label>
    <select id="schoolId" v-model="schoolId">
      <option value="B31Q" selected>B31Q</option>
      <option value="U72W">U72W</option>
      <option value="J67W">J67W</option>
      <option value="L07G">L07G</option>
      <option value="C56E">C56E</option>
    </select>
    <br />
    <p v-if="IdErr.length!=0">
      <ul>
          <li v-for="(err,index) in IdErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="Addr">Address:</label>
    <input type="text" id="Addr" name="Addr" v-model="Addr" />
    <br />
    <p v-show="addrErr.length!=0">
      <ul>
          <li v-for="(err,index) in addrErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <button type="submit" @click.prevent="submitSchoolForm()">Submit</button>
	</div>
</template>

<script>
export default {
	name: "School",
	data() {
		return {
			schoolName: "",
			schoolId: "",
			Addr: "",
      schoolObj:{},
      schNameErr: [],
      IdErr: [],
      addrErr:[],
      formValidate:false,
		}
	},
  methods: {
    submitSchoolForm(){
      
      this.schoolObj={
        schoolName: this.schoolName,
        schoolId: this.schoolId,
        Addr: this.Addr,
        students:[]
      }
       this.validateForm();
      if(this.formValidate){
        if (this.$store.getters.getSelectedSchoolIndex != -1) {
          
          this.$store.commit('editSchoolData',this.schoolObj);
          this.$store.commit('editSelectedSchoolIndex');
        }else{
            this.$store.commit('postSchoolData',this.schoolObj);
          
          console.log("submitted school form");
        }
         this.initializeData(); 
      }
      
    },
    initializeData() {
      console.log("data is intialized");

      (this.schoolName = ""),
        (this.schoolId = ""),
        (this.Addr = ""),
        
      this.formValidate = false;
      this.schoolObj = {};
      this.schNameErr = [];
      this.IdErr = [];
      this.addrErr = [];
    },
       validateForm() {
      
      this.schNameErr = [];
      this.IdErr = [];
      this.addrErr = [];
      this.checkNameError();
      this.checkIdError();
      this.checkAddressError();
      console.log("name error ", this.schNameErr);
      console.log("id error ", this.IdErr);
      console.log("address error ", this.addrErr);
      if(this.schNameErr.length==0 && this.IdErr.length==0 && this.addrErr.length==0){
        this.formValidate=true;
        console.log("form is validated successfully");
        
      }
    
    },
    checkNameError() {
      if (this.schoolName == "" || typeof this.schoolName === "undefined") {
        this.schNameErr.push("name can't be empty");
      } else {
        let letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (this.schoolName.match(letters)) {
          return true;
        } else {
          this.schNameErr.push("name should be alphabets  only");
          return false;
        }
      }
    },
    checkIdError() {
      if (
        this.schoolId == "" ||
        typeof this.schoolId === "undefined"
      ) {
        this.IdErr.push("school ID is not selected");
      }
    },
    checkAddressError() {
      if (this.Addr == "" || typeof this.Addr === "undefined") {
        this.addrErr.push("address can't be empty");
      } 
    },
  },
  watch:{
    selectedSchool(){
      if(typeof this.selectedSchool !="undefined"){
        this.schoolName=this.selectedSchool.schoolName;
      console.log(this.selectedSchool.schoolName);
      this.schoolId=this.selectedSchool.schoolId;
      this.Addr=this.selectedSchool.Addr;
      }
      
    }
  },
  computed: {
    selectedSchool() {
      return this.$store.getters.getSchoolData[this.$store.getters.getSelectedSchoolIndex]
    },
  }
}
</script>

<style scoped>
button {
	background-color: #4caf50; /* Green */
	border: none;
	color: white;
	padding: 4px 10px;
	margin-top: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
  border-radius: 4px;
}
input[type="text"],
input[type="number"],
select {
	width: 30%;
	padding: 6px 10px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

p {
	color: red;
	font-size: 13px;
	margin: 0;
	padding: 0;
}
ul {
	margin: 0;
	padding: 0;
}
</style>
