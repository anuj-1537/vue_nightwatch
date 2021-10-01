<template>
  <div>
    <h2>Student Details</h2>
    <form >
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="name" />
    <br />
    <p v-show="nameErr.length!=0">
      <ul>
          <li v-for="(err,index) in nameErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="gender">Gender :</label>
    <input type="radio" id="male" name="gender" value="male" v-model="gender" />
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" v-model="gender" />
    <label for="female">female</label>
    <br />
    <p v-if="genderErr.length!=0">
      <ul>
          <li v-for="(err,index) in genderErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="dob">D.O.B:</label>
    <input type="date" id="dob" v-model="dob" />
    <br />
    <p v-if="dobErr.length!=0">
      <ul>
          <li v-for="(err,index) in dobErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="image">Upload Pic:</label>
    <input type="file" id="image" accept="image/gif, image/jpeg, image/png" size="300"  @change="loadFile($event)" />
    <br />
    <p v-if="imageErr.length!=0">
      <ul>
          <li v-for="(err,index) in imageErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="qualification">Qualification:</label>
    <select id="qualification" v-model="qualification">
      <option value="B.Tech" selected>B.Tech</option>
      <option value="BBA">BBA</option>
      <option value="B.Com" id="bcom">B.Com</option>
      <option value="BCA">BCA</option>
      <option value="B.Sc">B.Sc</option>
    </select>
    <br />
    <p v-if="qualificationErr.length!=0">
      <ul>
          <li v-for="(err,index) in qualificationErr" :key="index">{{err}}</li>
      </ul>
    </p>
    <label for="contact">Contact No:</label>
    <input type="text" v-model="contact" name="contact" id="contact" minlength="10" maxlength="10" />
    <br />
    <p v-if="contactErr.length!=0">
      <ul>
          <li v-for="(err,index) in contactErr" :key="index">{{err}}</li>
      </ul>
    </p>
    
    <label for="school">School Name:</label>
    <select id="school" v-model="school">
      <option v-for="(school,index) in schoolData" :key="index" :value="school.schoolName" >
        {{school.schoolName}}</option>
    </select>
    <br />
    <p v-if="schoolErr.length!=0">
      <ul>
          <li v-for="(err,index) in schoolErr" :key="index">{{err}}</li>
      </ul>
    </p>
    
    <button type="submit" @click.prevent="submitForm()" id="submitBtn">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as utility from '../utility';
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      gender: "",
      dob: "",
      qualification: "",
      contact: 0,
      school:"",
      imageUrl:"",
      fileEvent:"",
      studentList: [],
      formValidate: false,
      studentObj: {},
      errors: {},
      nameErr: [],
      genderErr: [],
      dobErr: [],
      qualificationErr: [],
      contactErr: [],
      schoolErr: [],
      imageErr:[]
    };
  },
  
  methods: {
    submitForm() {
      
      this.studentList = [];
      this.studentObj = {
        name: this.name,
        age: parseInt(this.age),
        gender: this.gender,
        qualification: this.qualification,
        contact: parseInt(this.contact),
        dob: this.dob,
        school:this.school,
        imageUrl:this.imageUrl
      };
      this.validateForm();
      if (this.formValidate) {
        
        if (
				typeof this.studentObj !== "undefined" &&
				this.$store.getters.getStudentData.indexOf(this.studentObj) == -1
			){
        if (this.$store.getters.getSelectedIndex != -1) {
          
          this.$store.commit('editStudentData',this.studentObj);
          this.$store.commit('editSelectedIndex');
        }else{
              this.$store.commit('postStudentData',this.studentObj);
        }

          
      } 
        
        this.initializeData();
      }
    },
    loadFile(event){
      console.log("in upload file method");
       let baseApiUrl = utility.baseApiUrl
      let CLOUDINARY_UPLOAD_PRESET = utility.CLOUDINARY_UPLOAD_PRESET
      let file=event.target.files[0];
      const formData = new FormData();
      this.fileEvent=event;
      formData.append("file", file, file.name);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      console.log(this.fileEvent,formData)
      let res= axios.post(baseApiUrl, formData);
      res
      .then((result)=>{
        console.log(result,"[]")
        this.imageUrl=result.data.url;
        
      })      
    },
    initializeData() {
      

      (this.name = ""),
      (this.gender = ""),
      (this.age = 0),
      (this.qualification = ""),
      (this.contact = 0);
      this.school="";
      this.formValidate = false;
      this.schoolData=[];
      this.studentObj = {};
      this.dob = "";
      this.imageUrl="";
      this.fileEvent.target.value = '';
      this.nameErr = [];
      this.genderErr = [];
      this.contactErr = [];
      this.qualificationErr = [];
      this.dobErr = [];
      this.schoolErr=[];
      this.imageErr=[];
    },
    
    checkNameError() {
      if (this.name == "" || typeof this.name === "undefined") {
        this.nameErr.push("name can't be empty");
      } else {
        let letters = utility.letters
        if (this.name.match(letters)) {
          return true;
        } else {
          this.nameErr.push("name should be alphabets  only");
          return false;
        }
      }
    },
    checkImageError(){
      if(this.imageUrl=="" || typeof this.imageUrl==="undefined"){
        this.imageErr.push("image is not uploaded yet");
      }
    },
    checkGenderError() {
      if (this.gender == "" || typeof this.gender === "undefined") {
        this.genderErr.push("gender is not selected");
      }
    },
    checkAgeError() {
      if (
        this.dob == "" ||
        typeof this.dob === "undefined" ||
        typeof this.age == "undefined"
      ) {
        this.dobErr.push("dob is not selected");
      }
    },
    checkQualificationError() {
      if (
        this.qualification == "" ||
        typeof this.qualification === "undefined"
      ) {
        this.qualificationErr.push("qualification is not selected");
      }
    },
    checkContactError() {
      if (this.contact == 0 || typeof this.contact === "undefined") {
        this.contactErr.push("contact can't be empty");
      }
      if (isNaN(this.contact)) {
        this.contactErr.push("contact should contain only digits");
      }
      else if(String(this.contact).length!=10 && this.contact!=0){
          this.contactErr.push("contact number should consists 10 digits");
        
      }
    },
    checkSchoolError() {
      if (
        this.school == "" ||
        typeof this.school === "undefined"
      ) {
        this.schoolErr.push("school is not selected");
      }
    },
    validateForm() {
      
      this.genderErr=[];
      this.contactErr = [];
      this.qualificationErr = [];
      this.nameErr=[];
      this.dobErr=[];
      this.schoolErr=[];
      this.imageErr=[];
      this.checkNameError();
      this.checkGenderError();
      this.checkAgeError();
      this.checkQualificationError();
      this.checkContactError();
      this.checkSchoolError();
      this.checkImageError();
      
      if(this.genderErr.length==0 && this.contactErr.length==0 && this.nameErr.length==0
      && this.dobErr.length==0 && this.qualificationErr.length==0 && this.schoolErr.length==0 && this.imageErr.length==0){
        this.formValidate=true;
        
        
      }
    
    }
  },

  computed: {
    ...mapGetters([
      'getStudentData',
      'getSelectedIndex',
      'getSchoolData'
    ]),
    age() {
      return utility.getAge(this.dob);
      
    },
    selectedStudent() {
      return this.getStudentData[this.getSelectedIndex]
      // return this.$store.getters.getStudentData[this.$store.getters.getSelectedIndex]
    },
    schoolData(){
      return this.getSchoolData;
      // return this.$store.getters.getSchoolData;
    }
  },
  watch:{
    selectedStudent(){
      this.name=this.selectedStudent.name;
      this.dob=this.selectedStudent.dob;
      this.gender=this.selectedStudent.gender;
      this.contact=this.selectedStudent.contact;
      this.qualification=this.selectedStudent.qualification;
      this.school=this.selectedStudent.school;
    }
  }
};
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
input[type="number"],input[type="date"],
select {
  width: 30%;
  padding: 6px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="radio"] {
  padding: 6px 10px;
  margin: 8px 40px;
}
p {
  color: red;
  font-size: 13px;
  margin:0;
  padding:0;
}
ul{
  margin:0;
  padding:0;
}
#image{
  margin-left:100px;
}
</style>