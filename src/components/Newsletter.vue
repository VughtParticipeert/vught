<template>
    <aside class="newsletter-container">
        <h1 class="tittle">Nieuwsbrief</h1>

        <form @submit.prevent class="newsletter-form">
            <label for="">
                <p class="description">Meld je in voor onze online nieuwsbrief en blijf op de hoogte van de laatste nieuws en ontwikkelingen.</p>
                <input class="email-input" type="email" required placeholder="jouw@email.nl">
            </label>

            <button class="subscribe-button">Aanmelden</button>
        </form>
    </aside> 
</template>

<script>
export default {
    name: "Newsletter"
}
</script>

<style lang="scss" scoped>
    .newsletter-container {
        background-color: var(--accent-color-two);
        width: 20rem;
        margin-top: 12.85rem;
        padding: 2rem;
        position: sticky;
        top: 5rem;
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

            .email-input {
                border: none;
                border-radius: var(--small-radius);
                padding: 1rem;
                margin-top: 2rem;
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
                width: 100%;
                font-size: 1.1em;
                background-color: var(--secondary-color);
                color: white;
                transition: all 0.4s ease-out;
                box-shadow: var(--material-shadow-one);

                &:hover {
                    cursor: pointer;
                    box-shadow: var(--material-shadow-hover);
                }
            }
        }
    }
</style>