<template>
	<aside class="newsletter-container">
		<h1 class="tittle">Nieuwsbrief</h1>

		<form
			class="newsletter-form"
			action="https://helmer.us20.list-manage.com/subscribe/post?u=ab39ac0446804123465ef85ab&amp;id=d6606b222b"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
		>
			<p
				class="description"
			>Meld u aan voor onze nieuwsbrief en blijf op de hoogte van het laatste nieuws en ontwikkelingen.</p>
			<label>
				<span>Email adres</span>
				<input type="email" value name="EMAIL" class="email-input" placeholder="uw@email.nl" required />
			</label>

			<div id="mce-responses" class="clear">
				<div class="response" id="mce-error-response" style="display:none"></div>
				<div class="response" id="mce-success-response" style="display:none"></div>
			</div>

			<input type="submit" value="Aanmelden" name="subscribe" class="subscribe-button" />
		</form>
	</aside>
</template>

<script>
export default {
	name: "Newsletter"
};
</script>

<style lang="scss" scoped>
.newsletter-container {
	background-color: var(--accent-color-two);
	width: 20rem;
	margin-top: 13.4rem;
	padding: 2rem;
	position: sticky;
	top: 6rem;
	border-radius: var(--small-radius);

	.tittle {
		font-size: 2em;
		color: var(--primary-color);
		color: white;
	}

	.newsletter-form {
		margin-top: 2rem;

		.description {
			color: white;
		}

		label {
			display: inline-block;
			margin-top: 2rem;
			width: 100%;

			span {
				color: rgb(240, 240, 240);
			}
		}

		.email-input {
			border: none;
			border-radius: var(--small-radius);
			padding: 1rem;
			margin-top: 0.4rem;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.04);
			font-size: 1.4em;
			color: white;

			&::placeholder {
				color: rgb(230, 230, 230);
			}
		}

		.subscribe-button {
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
			text-align: center;

			&:hover {
				cursor: pointer;
				box-shadow: var(--material-shadow-hover);
			}
		}
	}
}
</style>