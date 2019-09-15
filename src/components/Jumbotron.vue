<template>
    <section class="jumbotron-container">
        <div v-for="item in jumbotronItems" :key="item.id" class="jumbotron-item">
            <g-link to="/about#main">
                <span class="title">{{item.title}}</span>
                <img
                    :srcset="`${item.image}?nf_resize=fit&w=700 700w, ${item.image}?nf_resize=fit&w=400 400w, ${item.image}?nf_resize=fit&w=200 200w`" 
                    :src="item.image" :alt="item.title" class="jumbotron-image">
            </g-link>
        </div>
    </section>
</template>

<static-query>
    query Jumbotron {
        allJumbotron {
            edges {
                node {
                    id
                    title
                    image
                }
            }
        }
    }
</static-query>

<script>
export default {
    name: 'Jumbotron',
    computed: {
        jumbotronItems() {
            const data = this.$static.allJumbotron.edges
            const jumbotronItems = data.map(item => {        
                return item.node
            })
            return jumbotronItems
        }
    }
}
</script>

<style scoped lang="scss">
    $break-mobile: 40em;
    $break-small: 57em;

    .jumbotron-container {
        display: none;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 4rem;
        background: white;

        .jumbotron-item {
            display: flex;
            height: 10rem;
            background: white;

            a {
                text-decoration: none;
                display: inline-flex;
                height: 100%;
                width: 100%;
                position: relative;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                .title {
                    display: inline-block;
                    font-size: 4vw;
                    position: absolute;
                    z-index: 1;
                    color: white;
                    text-align: center;
                    text-shadow:
                        1px 1px 0 rgba(0, 0, 0, 0.05),
                        -1px -1px 0 rgba(0, 0, 0, 0.05),  
                        1px -1px 0 rgba(0, 0, 0, 0.05),
                        -1px 1px 0 rgba(0, 0, 0, 0.05),
                        1px 1px 0 rgba(0, 0, 0, 0.05);
                    transition: all 0.2s ease-out;
                    @media screen and (min-width: $break-small) {
                        & {
                            font-size: 3.4em;
                        }
                    }
                }
    
                .jumbotron-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: relative;
                    transition: all 0.2s ease-out;
                    background: white;
                }

                &:hover .jumbotron-image {
                    transform: scale(1.14);
                }

                &:hover .title {
                    color: var(--secondary-color);
                }

                //overlay
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.27);
                }
            }


            @media screen  and (min-width: $break-small) {
                & {
                    height: 19rem;
                }
            }
        }

        @media screen and (min-width: $break-mobile) {
            & {
                display: grid;
            }
        }
    }
</style>