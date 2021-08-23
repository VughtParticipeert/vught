<template>
	<!-- Include the script that builds the page and powers Netlify CMS -->
	<article class="container-form">
		<h1 class="title">Vul gegevens in</h1>

		<!-- Like the disclaimer below, this one should be dynamic loaded. -->
		<!-- However for a quick fix, this has been hard coded.  -->
		<p class="disclaimer">
			
		</p>

		<div class="disclaimer">
			<p>
				Bedankt voor het aanmelden als lid bij de Vereniging VughtParticipeert. Om de kosten voor onze organisatie te dekken, vragen wij om een kleine jaarlijkse bijdrage van €10,= per jaar per huishouden. Zodra wij dit bedrag hebben ontvangen op bankrekening NL77 RABO 0348 0459 21 t.n.v. Vereniging VughtParticipeert, zullen wij u inschrijven in ons ledenbestand. Deze bijdrage is voor de periode tot 1 januari 2023.  		
			</p>
		</div>

		<form
			name="member"
			method="POST"
			data-netlify="true"
			v-on:submit.prevent="handleSubmit"
			action="/success/"
			class="form-container"
		>
			<p>
				<label>
					Voornaam:
					<input
						type="text"
						name="firstName"
						v-model="formData.firstName"
						placeholder="Voornaam"
						autofocus
						required
					/>
				</label>
			</p>
			<p>
				<label>
					Achternaam:
					<input
						type="text"
						name="lastName"
						placeholder="Achternaam"
						v-model="formData.lastName"
						required
					/>
				</label>
			</p>
			<p>
				<label>
					Adres:
					<input
						type="text"
						name="address"
						placeholder="Adres 123"
						v-model="formData.address"
						required
					/>
				</label>
			</p>
			<p>
				<label>
					Postcode:
					<input
						type="text"
						name="postcode"
						v-model="formData.postcode"
						placeholder="1234 AB"
						required
					/>
				</label>
			</p>
			<p>
				<label>
					Plaats:
					<input
						type="text"
						name="place"
						v-model="formData.place"
						placeholder="Plaatsnaam"
						required
					/>
				</label>
			</p>
			<p>
				<label>
					Geboorte datum:
					<input type="date" name="birthDay" v-model="formData.birthDay" required />
				</label>
			</p>
			<p>
				<label>
					Email:
					<input
						type="email"
						name="email"
						placeholder="uw@email.nl"
						v-model="formData.email"
						required
					/>
				</label>
			</p>
			<p>
				<button class="submit-button" type="submit">Meld aan</button>
			</p>
		</form>

		<div class="disclaimer" v-html="disclaimer"></div>
	</article>
</template>


<static-query>
  query Disclaimer {
      disclaimer:allMember {
		edges {
			node {
				title
				content
			}
		}
  	}
  }
</static-query>

<script>
export default {
	name: "MemberForm",
	data() {
		return {
			formData: {},
			email: "admin@vughtparticipeert.nl"
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(e => {
					console.log(e);
					this.$router.push("/success");
				})
				.catch(error => alert(error));
		}
	},
	computed: {
		disclaimer() {
			const disclaimer = this.$static.disclaimer.edges[0].node.content;
			return disclaimer;
		}
	}
};
</script>

<style scoped lang="scss">
.container-form {
	background-color: white;
	padding: 2rem;
	border-radius: 0.2rem;
	margin-top: 2rem;
	display: grid;
	grid-template-areas:
		"title"
		"form"
		"disclaimer";
}

.title {
	grid-area: title;
	font-size: 2.2em;
	margin-top: 2rem;
	color: var(--primary-color);
	transition: all 0.4s ease-out;
}

.form-container {
	grid-area: form;
	margin-top: 2rem;
}

.disclaimer {
	margin-top: 2rem;
	grid-area: disclaimer;

	a {
		display: inline-flex;
		overflow: hidden;
		position: relative;
		color: var(--secondary-color);
		text-decoration: none;
		// border-bottom: solid 0.09rem var(--primary-color);

		&:after {
			content: "";
			position: absolute;
			height: 0.1rem;
			width: 100%;
			bottom: 0;
			left: -100%;
			background-color: var(--secondary-color);
			transition: all 0.2s ease-out;
		}

		&:hover:after {
			transform: translateX(100%);
		}
	}

	p {
		margin-top: 1rem;

		&:first-of-type {
			margin-top: 0;
		}
	}
}

label {
	display: inline-block;
	margin-bottom: 3rem;
	display: flex;
	flex-direction: column;
	color: rgb(100, 100, 100);
}

input {
	margin-top: 0.2rem;
	padding: 0.7rem;
	padding-left: 0;
	border: none;
	border-bottom: solid 0.12rem rgb(231, 231, 231);
	font-size: 1.4rem;
	transition: all 0.4s ease-out;

	&:focus {
		outline: none;
		border-bottom: solid 0.1rem var(--accent-color-one);
	}
}

.submit-button {
	cursor: pointer;
	margin-top: 2rem;
	padding: 1rem;
	border: none;
	border-radius: var(--small-radius);
	font-weight: 500;
	font-size: 1.1em;
	background-color: var(--secondary-color);
	color: white;
	transition: all 0.4s ease-out;
	box-shadow: var(--material-shadow-one);

	&:hover {
		box-shadow: var(--material-shadow-hover);
	}
}
</style>