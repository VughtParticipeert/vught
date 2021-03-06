<template>
	<article class="post-container">
		<section v-if="!disableMetaData" class="meta-data">
			<p class="group-container">
				<span class="description">groep:</span>
				<span class="text group-text">{{checkGroup}}</span>
			</p>
			<p class="theme-container">
				<span class="description">onderwerp:</span>
				<span class="text theme-text">{{theme}}</span>
			</p>
			<p class="reason-container">
				<span class="description">type:</span>
				<span class="text reason-text">{{typePost}}</span>
			</p>
		</section>
		<g-link :to="linkPath" class="g-link">
			<h1 class="title">{{title}}</h1>
		</g-link>
		<p v-if="!disableMetaData" class="date-container">
			<span>Gepost op:</span>
			<span>{{date | moment("DD-MM-YY")}}</span>
		</p>
		<p v-if="!disableMetaData" :class="status.value" class="status-container">
			<span class="text status-text" :class="status.value">{{status.text}}</span>
		</p>
		<section v-html="content" class="content"></section>
		<section v-if="attachment.length > 0" class="attachment-container">
			<span class="description">Bijlage</span>
			<div class="attachment-link-container">
				<a
					v-for="file in attachment"
					:href="file.file.attachment"
					:key="file.file.name"
					download
					class="attachment-link"
				>
					<span class="attachment-title">{{file.file.name}}</span>
				</a>
			</div>
		</section>
	</article>
</template>


<script>
export default {
	name: "Posts",
	props: {
		title: {
			type: String,
			required: true
		},
		date: {
			type: String
		},
		theme: {
			type: String
		},
		typePost: {
			type: String
		},
		content: {
			required: true
		},
		group: {
			type: String
		},
		linkPath: {
			type: String
		},
		status: {
			type: Object,
			default: () => {
				return {
					text: "",
					value: 0
				};
			}
		},
		attachment: {
			type: Array,
			default: () => []
		},
		disableMetaData: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			statusValue: {
				notApplicable: 1,
				complete: 2,
				inComplete: 3,
				inSufficient: 4
			}
		};
	},
	computed: {
		checkGroup() {
			if (this.group === "none") {
				return "...";
			} else {
				return this.group;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.post-container {
	background-color: white;
	padding: 2rem;
	border-radius: 0.2rem;
	margin-top: 2rem;
	display: grid;
	width: 100%;
	grid-template-areas:
		"metaData"
		"title"
		"date"
		"status"
		"content"
		"attachment";

	.meta-data {
		display: flex;
		flex-direction: column;
		grid-area: metaData;
		background-color: white;
		color: rgb(114, 114, 114);
		& > * {
			margin-right: 2rem;
		}

		@media screen and (min-width: 95rem) {
			& {
				flex-direction: unset;
				justify-content: space-between;

				& > * {
					margin-right: 0;
				}
			}
		}

		.description {
			margin-right: 0.4rem;
		}

		.text {
			font-size: 1rem;
			border-radius: 0.2rem;
		}

		.reason-container {
			.reason-text {
				color: var(--accent-color-one);
			}
		}

		.group-container {
			.group-text {
				color: var(--accent-color-three);
			}
		}

		.theme-container {
			.theme-text {
				color: var(--accent-color-two);
				&::first-letter {
					text-transform: capitalize;
					color: red;
				}
			}
		}
	}

	.g-link {
		text-decoration: none;
		color: black;
		margin-top: 2rem;

		&:hover .title {
			color: var(--secondary-color);
		}
	}

	.title {
		grid-area: title;
		font-size: 1.7em;
		color: var(--primary-color);
		transition: all 0.4s ease-out;

		@media screen and (min-width: 60rem) {
			font-size: 2em;
		}

		@media screen and (min-width: 95rem) {
			font-size: 2.2em;
		}
	}

	.date-container {
		grid-area: date;
		display: flex;
		flex-wrap: wrap;
		color: #797979;
		margin-top: 0.4rem;

		span {
			margin-right: 0.7rem;
		}
	}

	.status-container {
		grid-area: status;
		margin-top: 0.7rem;

		&.notApplicable {
			display: none;
		}

		.status-text {
			padding: 0.4rem 0.7rem;
			color: white;
			background-color: rgb(224, 224, 224);
			border-radius: var(--small-radius);
		}

		.complete {
			background-color: var(--status-complete);
		}

		.inComplete {
			background-color: var(--status-inComplete);
		}

		.inSufficient {
			background-color: var(--status-inSufficient);
		}
	}

	.content {
		grid-area: content;
		line-height: 1.4;
		margin-top: 0.7rem;

		&::v-deep {
			p {
				margin-top: 1rem;
			}

			h1,
			h2,
			h3,
			h4 {
				margin-top: 3rem;
			}

			h1:first-of-type,
			h2:first-of-type,
			h3:first-of-type,
			h4:first-of-type {
				margin-top: 0;
			}

			h1 {
				font-size: 1.7em;
			}

			h2 {
				font-size: 1.5em;
			}

			h3 {
				font-size: 1.375em;
			}

			h4 {
				font-size: 1.2em;
			}

			img {
				max-width: 100%;
				max-height: 20rem;
				object-fit: contain;
				border-radius: 0.2rem;
				border: solid 0.07rem rgb(195, 195, 241);
			}

			ul,
			ol {
				list-style-position: outside;
				margin-top: 1rem;
				padding-left: 2rem;
			}

			li {
				margin-top: 0.4rem;
			}

			a {
				display: inline-flex;
				overflow: hidden;
				position: relative;
				color: var(--secondary-color);
				text-decoration: none;

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
		}
	}

	.attachment-container {
		grid-area: attachment;

		.description {
			display: block;
			margin: 3rem 0 0 0;
			font-size: 1.4em;
			color: var(--primary-color);
			font-weight: 500;
		}

		.attachment-link-container {
			display: flex;

			.attachment-link {
				display: block;
				margin-top: 1rem;
				margin-right: 1rem;
				text-decoration: none;
				padding: 0.7rem;
				color: var(--secondary-color);
				border: solid 2px var(--secondary-color);
				border-radius: var(--small-radius);
				transition: all 0.4s ease-out;

				&:hover {
					background-color: var(--secondary-color);
					color: white;
					box-shadow: var(--material-shadow-hover);
				}
			}
		}
	}
}
</style>