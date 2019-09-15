<template>
    <nav class="navigation">
        <section class="logo-container">
            <g-link to="/">
                <img class="logo" :src="logo.logoUrl" 
                  :title="logo.title"
                  :alt="logo.title"
                >
            </g-link>
        </section>

        <section :class="{active: menuActive}" class="menu-item-container">
            <ul class="menu">
                <li class="menu-item menuItemWithSub">
                    <button @click="subMenu" :class="{active:subMenuActive}"
                        class="link button">
                        <span>Onderwerpen</span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129"
                                    enable-background="new 0 0 129 129">
                                    <g>
                                        <path
                                            d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                    </g>
                                </svg>
                            </span>
                    </button>
                      <transition name="slide-fade">
                    <ul v-if="subMenuActive" class="sub-menu-container theme-container">
                        <li v-for="theme in themes" :key="theme.node.id">
                            <g-link :to="theme.node.path+'#main'" class="link"><span>- </span>{{theme.node.theme}}</g-link>
                        </li>
                    </ul>
                      </transition>
                </li>
                <li class="menu-item">
                    <g-link to="/about#main" class="link">Over ons</g-link>
                </li>
                <li class="menu-item">
                    <g-link to="/contact" class="link">Contact</g-link>
                </li>
            </ul>
        </section>

        <button @click="menu" :class="{active: menuActive}" class="menu-button" title="Menu">
            <div class="decoration"></div>
            <div class="decoration"></div>
            <div class="decoration"></div>
        </button>
    </nav>
</template>


<static-query>
  query Navigation {
    logo: allLogo {
        edges {
            node {
                title
                logo
            }
        }
    }

    allTheme {
        edges {
            node {
                id
                theme: themeName
                path
            }
        }
    }
  }
</static-query>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                menuActive: false,
                subMenuActive: false
            };
        },
        computed: {
            logo() {
                const logo = {
                    title : this.$static.logo.edges[0].node.title,
                    logoUrl : this.$static.logo.edges[0].node.logo
                }
                return logo
            },
            menuItems() {
                const menuItems = this.$static.allMenuItem.edges
                return menuItems;
            },
            themes() {
                const edges = this.$static.allTheme.edges
                const themes = edges.map(node=> {
                    return node
                })

                return themes
            }
        },
        methods: {
            menu() {
                if (this.menuActive === false) {
                    this.menuActive = true;
                } else if (this.menuActive === true) {
                    this.menuActive = false;
                }
            },
            subMenu() {
                if (this.subMenuActive === false) {
                    this.subMenuActive = true;
                } else if (this.subMenuActive === true) {
                    this.subMenuActive = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $break-small: 57em;

    ul {
        list-style: none;
    }

    .navigation {
        display: flex;
        background-color: white;
        height: 4rem;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        box-shadow: var(--material-shadow-one);

        .logo-container {
            display: flex;
            padding: 0.7rem;
            max-width: 10rem;

            .logo {
                display: block;
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        .menu-item-container {
            display: none;
            margin-left: auto;
            align-items: center;
            overflow: auto;

            &.active {
                display: flex;
                position: fixed;
                top: 4rem;
                z-index: 1;
                background: white;
                height: 100%;
                width: 100%;
                z-index: 100;

                .menu {
                    display: block;
                    width: 100%;
                }
            }

            .menu {
                display: flex;
                height: 100%;
                overflow: hidden;

                .menu-item {
                    &.active {
                        color: var(--secondary-color);
                        color: red;
                    }

                    &.menuItemWithSub {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;

                        @media screen and (min-width: $break-small) {
                            display: block;
                        }
                    }

                    .link {
                        padding: 1rem;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        text-decoration: none;
                        color: black;
                        transition: all 0.1s ease-out;
                        font-size: 2.4em;
                        justify-content: center;
                        border: none;
                        background-color: white;
                        outline: none;

                        @media screen and (min-width: $break-small) {
                            & {
                                font-size: 1em;
                                justify-content: flex-start;
                            }
                        }

                        &:hover {
                            color:  var(--secondary-color);
                            transform: scale(1.05);
                        }

                        &:hover path {
                            fill: var(--secondary-color);
                        }

                        &.active {
                            color: var(--secondary-color);
                        }

                        path {
                            transition: all 0.4s ease-out;
                            transform-origin: center;
                        }

                        &.active path {
                            fill: var(--secondary-color);
                            transform: rotate(180deg);
                        }
                    }

                    .button {
                        .icon {
                            width: 2rem;
                            height: 2rem;
                            margin-left: 0.4rem;

                            @media screen and (min-width: $break-small) {
                                width: 1rem;
                                height: 1rem;
                            }

                        }
                    }

                    .sub-menu-container {
                        @media screen and (min-width: $break-small) {
                            position: absolute;
                            padding: 1rem;
                            background-color: white;
                        }

                        
                        .link {
                            span {
                                margin-right: 0.4rem;
                            }
                        }
                    }
                }
            }

            @media screen and (min-width: $break-small) {
                & {
                    display: flex;
                }
            }
        }

        .menu-button {
            border: none;
            width: 4rem;
            padding: 0.7rem;
            background-color: transparent;
            transition: all 0.4s ease-out;
            cursor: pointer;
            margin-left: auto;

            &:hover .decoration {
                background-color: var(--secondary-color);
            }

            .decoration {
                height: 0.4rem;
                background-color: black;
                margin: 0.4rem 0;
                transition: all 0.2s ease-out;

                &:nth-of-type(1) {
                    transform-origin: left;
                }

                &:nth-of-type(3) {
                    transform-origin: left;
                }
            }

            &.active {
                .decoration:nth-of-type(2) {
                    opacity: 0;
                }

                .decoration:nth-of-type(1) {
                    transform-origin: left;
                    transform: rotate(37deg);
                }

                .decoration:nth-of-type(3) {
                    transform-origin: left;
                    transform: rotate(-37deg);
                }
            }

            @media screen and (min-width: $break-small) {
                & {
                    display: none;
                }
            }
        }
    }

    .slide-fade-enter-active, .slide-fade-leave-active{
        transition: all 0.4s ease-out;
    }
    .slide-fade-leave-active{
        transition: all 0.2s ease-out;
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translatey(-2rem);
        opacity: 0;
    }
</style>