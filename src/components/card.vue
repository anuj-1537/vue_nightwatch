<template>
	<div>
		<h3>Credit Card Details</h3>
		<ol>
			<li v-for="(card, index) in cards" :key="index">
				<b-card
					:title="card.id"
					id="card"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						<hr />
						Card No: {{ card.credit_card_number }} <br />
						Expiry date:{{ card.credit_card_expiry_date }}<br />
						Card Type:{{ card.credit_card_type }}
					</b-card-text>
				</b-card>
			</li>
		</ol>
	</div>
</template>
<script>
export default {
	computed: {
		cards() {
			return this.$store.getters.getCards;
		},
	},
	created() {
		//actions
		this.$store.dispatch("loadCards");
	},
};
</script>
<style scoped>
ol li {
	display: inline-flex;
	justify-content: space-between;
	margin-left: 40px;
}
div {
	margin: 20px;
}
#card {
	border: 3px solid hsl(89, 58%, 76%);
}
</style>
