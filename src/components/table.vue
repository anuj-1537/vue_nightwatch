<template>
	<div>
		<div v-if="showStudentTable">
			<table id="studentTable">
				<tr>
					<th>SI No.</th>
					<th>Name</th>
					<th>Age</th>
					<th>Gender</th>
					<th>Qualification</th>
					<th>Contact No.</th>
					<th>School</th>
					<th>Image</th>
					<th>Operation</th>
				</tr>
				<tr v-for="(student, index) in studentInfo" :key="index">
					<td>{{ index + 1 }}</td>
					<td>{{ student.name }}</td>
					<td>{{ student.age }}</td>
					<td>{{ student.gender }}</td>
					<td>{{ student.qualification }}</td>
					<td>{{ student.contact }}</td>
					<td>{{ student.school }}</td>
					<td ><img :src="student.imageUrl" alt="img" id="pic"></td>
					<td>
						<button @click="changeStudentData(index)" :id="'edit-'+index">Edit</button>
					</td>
				</tr>
			</table>
		</div>
		<div v-if="showSchoolTable">
			<table id="schoolTable">
				<tr>
					<th>SI No.</th>
					<th>School Name</th>
					<th>School Id</th>
					<th>Address</th>
					<th>Operation</th>
					<th>Info</th>
				</tr>
				<tr v-for="(school, index) in schoolList" :key="index">
					<td>{{ index + 1 }}</td>
					<td>{{ school.schoolName }}</td>
					<td>{{ school.schoolId }}</td>
					<td>{{ school.Addr }}</td>
					<td>
						<button @click="changeSchoolData(index)" :id="'edits'+index">Edit</button>
					</td>
					<td>
						<button @click="showSchoolInfo(school.schoolName)" :id="index">
							Show Info
						</button>
					</td>
				</tr>
			</table>

			<div v-if="studentsEnrolled.length != 0">
				<hr />
				<h3>Students enrolled in {{ studentsEnrolled[0].school }}</h3>
				<table v-if="showSchoolTable">
					<tr>
						<th>SI No.</th>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Qualification</th>
						<th>Contact No.</th>
						<th>School</th>
						<th>Image</th>
					</tr>
					<tr
						v-for="(student, index) in studentsEnrolled"
						:key="index"
					>
						<td>{{ index + 1 }}</td>
						<td>{{ student.name }}</td>
						<td>{{ student.age }}</td>
						<td>{{ student.gender }}</td>
						<td>{{ student.qualification }}</td>
						<td>{{ student.contact }}</td>
						<td>{{ student.school }}</td>
						<td ><img :src="student.imageUrl" alt="img" id="pic"></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			studentsEnrolled: [],
		};
	},
	computed: {
		...mapGetters([
      'getSelectedSchoolIndex',
      'getSchoolData','getStudentData','getTableStatus'

    ]),
		studentInfo() {
			
			return this.studentList;
		},
		studentList() {
			return this.getStudentData;
			// return this.$store.getters.getStudentData;
		},
		showSchoolTable() {
			return this.getTableStatus[0];
			// return this.$store.getters.getTableStatus[0];
		},
		showStudentTable() {
			return this.getTableStatus[1];
			// return this.$store.getters.getTableStatus[1];
		},
		schoolList() {
			return this.getSchoolData;
			// return this.$store.getters.getSchoolData;
		},
	},
	methods: {
		changeStudentData(index) {
			

			this.$store.commit("changeSelectedIndex", index);
		},
		showSchoolInfo(schoolName) {
			this.studentsEnrolled = this.$store.getters.showEnrolledStudent(
				schoolName,
			);
		},
		changeSchoolData(index) {
			this.$store.commit("changeSelectedSchoolIndex", index);
		},
	},
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
#pic{
	width: 70px;
	height: 70px;
}
</style>
