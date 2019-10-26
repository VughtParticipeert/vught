<template>
	<aside class="posts-summary-container">
		<p class="title">Samenvatting vragen</p>
		<div class="summary-container">
			<section class="summary-child-container summary-question">
				<p class="summary">
					<g-link to="/summary/all-question" class="link">
						<span>Vragen gesteld:</span>
						<span class="count">{{question.total}}</span>
					</g-link>
				</p>
				<p class="summary">
					<g-link to="/summary/all-question-answered" class="link">
						<span>Vragen beantwoord:</span>
						<span class="count">{{question.totalAnswered}}</span>
					</g-link>
				</p>
				<p class="summary">
					<g-link to="/summary/all-question-not-answered" class="link">
						<span>Vragen onbeantwoord:</span>
						<span class="count">{{question.totalUnanswered}}</span>
					</g-link>
				</p>
			</section>
			<section class="summary-child-container summary-answer">
				<p class="summary">
					<g-link to="/summary/all-answer" class="link">
						<span>Antwoord totaal:</span>
						<span class="count">{{answer.total}}</span>
					</g-link>
				</p>
				<p class="summary">
					<g-link to="/summary/all-answer-complete" class="link">
						<span>Antwoord is volledig:</span>
						<span class="count">{{answer.complete}}</span>
					</g-link>
				</p>
				<p class="summary">
					<g-link to="/summary/all-answer-incomplete" class="link">
						<span>Antwoord is onvolledig:</span>
						<span class="count">{{answer.inComplete}}</span>
					</g-link>
				</p>
				<p class="summary">
					<g-link to="/summary/all-answer-insufficient" class="link">
						<span>Antwoord volstaat niet:</span>
						<span class="count">{{answer.inSufficient}}</span>
					</g-link>
				</p>
			</section>
		</div>
	</aside>
</template>


<static-query>	
    query Posts {	
			allPost {
				edges {
					node {
						id
						title
						typePost
						status
						answered
					}
				}
			}
    }	
</static-query>

<script>
export default {
	name: "PostsSummary",
	computed: {
		question() {
			const data = this.$static.allPost.edges;

			//Get all post that are a Question
			const getPostQuestion = data.filter(post => {
				return post.node.typePost === "Vraag";
			});

			//Get all post that is a Question and is still answered
			const getQuestionAnswered = getPostQuestion.filter(post => {
				return post.node.answered === true;
			});

			//Get all post that is a Question and is still unanswered
			const getQuestionUnanswered = getPostQuestion.filter(post => {
				return post.node.answered === false;
			});

			const question = {
				total: getPostQuestion.length,
				totalAnswered: getQuestionAnswered.length,
				totalUnanswered: getQuestionUnanswered.length
			};

			return question;
		},
		answer() {
			const data = this.$static.allPost.edges;
			const status = {
				notApplicable: 1,
				complete: 2,
				inComplete: 3,
				notSufficient: 4
			};

			//Get all post that are a Question
			const getPostAnswer = data.filter(post => {
				return (
					post.node.typePost === "Antwoord" &&
					post.node.status !== status.notApplicable
				);
			});

			//Get all post that is a Question and is still answered
			const getPostComplete = getPostAnswer.filter(post => {
				return post.node.status === status.complete;
			});
			//Get all post that is a Question and is still answered
			const getPostInComplete = getPostAnswer.filter(post => {
				return post.node.status === status.inComplete;
			});
			//Get all post that is a Question and is still answered
			const getPostNotSufficient = getPostAnswer.filter(post => {
				return post.node.status === status.notSufficient;
			});

			const postAnswer = {
				total: getPostAnswer.length,
				complete: getPostComplete.length,
				inComplete: getPostInComplete.length,
				inSufficient: getPostNotSufficient.length
			};

			return postAnswer;
		}
	}
};
</script>

<style lang="scss" scoped>
.posts-summary-container {
	background-color: white;
	width: 20rem;
	border-radius: var(--small-radius);
	margin-top: 13.4rem;
	padding: 2rem;
	position: sticky;
	top: 6rem;

	.title {
		font-size: 2em;
		font-weight: bold;
		color: var(--primary-color);
	}

	.summary-container {
		margin-top: 2rem;

		.summary-child-container {
			margin-top: 1rem;
		}

		.summary {
			display: flex;
			margin-top: 0.4rem;

			.count {
				margin-left: auto;
				color: var(--accent-color-one);
			}
		}
	}

	.link {
		text-decoration: none;
		color: black;
		width: 100%;
		display: flex;
		justify-content: space-between;

		&:hover {
			color: var(--secondary-color);

			.count {
				color: var(--secondary-color);
			}
		}

		&.active {
			color: var(--secondary-color);

			.count {
				color: var(--secondary-color);
			}
		}
	}
}
</style>