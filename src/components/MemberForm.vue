<template>
	<!-- Include the script that builds the page and powers Netlify CMS -->
	<form 
		name="member" 
		method="POST" 
		data-netlify="true"
		v-on:submit.prevent="handleSubmit"
		action="/success/"
	>
		<p>
			<label>Your Email: 
				<input type="email" name="email" v-model="formData.email"/>
			</label>
		</p>
		<p>
			<label>Message: <textarea name="message" v-model="formData.message"></textarea></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</form>
</template>

<script>
	export default {
		name: "MemberForm",
		data() {
			return {
				formData: {}
			}
		},
		methods: {
			encode(data) {
				return Object.keys(data)
					.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
					.join('&')
			},
			handleSubmit(e) {
				fetch('/', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						body: this.encode({
							'form-name': e.target.getAttribute('name'),
							...this.formData,
						}),
					})
					.then((e) => {
						console.log(e)
						this.$router.push('/')
					})
					.catch(error => alert(error))
			}
		}
	}
</script>

<style scoped>

</style>