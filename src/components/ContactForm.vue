<template>
    <article class="contact-container">
        <g-link class="g-link">
            <h1 class="title">{{title}}</h1>
        </g-link>
        <section class="content">
            <p>mail: <a :href="`mailto:${email}`">{{email}}</a></p>
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
            email: {
                type: String
            }
		}
	}
</script>

<style scoped lang="scss">
    .contact-container {
        max-width: 50rem;
        background-color: white;
        padding: 2rem;
        border-radius: 0.2rem;
        margin-top: 2rem;
        display: grid;
        grid-template-areas: 
            "title"
            "content"
        ;
    
        .g-link {
            text-decoration: none;
            color: black;

            &:hover .title {
                color: var(--secondary-color);
            }
        }

        .title {
            grid-area: "title";
            font-size: 2.2em;
            margin-top: 2rem;
            color: var(--primary-color);
            transition: all 0.4s ease-out;
        }

        .content {
            grid-area: "content";
            margin-top: 2rem;

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
        }
    }
</style>