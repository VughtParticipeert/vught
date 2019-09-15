<template>
  <div class="layout">
    <div class="header">
      <Header/>
    </div>
    <div class="post-summary"> 
      <PostsSummary v-if="!disableSummary"/>
    </div>
    <div class="newsletter">
      <Newsletter/>
    </div>
    <div class="content" id="main">
      <transition name="fade" appear>
        <main class="main-posts">
          <h1 class="title">{{this.title}}</h1>
          <slot/>
        </main>
       </transition>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/Header'
import PostsSummary from '@/components/PostsSummary'
import Newsletter from '@/components/Newsletter'


export default {
  name: "LayoutDefault",
  components: {
    Header,
    PostsSummary,
    Newsletter
  },
  props: {
    title: {
      type: String,
      default: "Actuele thema's"
    },
    disableSummary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  $breakpoint-small: 20em;
  $breakpoint-medium: 40em;
  $breakpoint-big: 60em;
  $breakpoint-really-big: 90em;


  .layout {
    display: grid;
    grid-template-areas: 
      "header"
      "content";
    justify-items: center;
    @media screen and (min-width: $breakpoint-big) {
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 
        "header header"
        "summary content"
    }
    @media screen and (min-width: $breakpoint-really-big) {
      & {
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: 
        "header header header"
        "summary content newsletter";
        justify-items: center;
      }
    }

    .header {
      grid-area: header;
    }

    .post-summary {
      grid-area: summary;
      display: none;
      @media screen and (min-width: $breakpoint-big) {
        & {
          display: block;
        }
      }
    }

    .newsletter {
      grid-area: newsletter;
      display: none;
      @media screen and (min-width: $breakpoint-really-big) {
        & {
          display: block;
        }
      }
    }

    .content {
      grid-area: content;
      margin-top: 2rem;
      @media screen and (min-width: $breakpoint-medium) {
        & {
          margin-top: 0;
        }
      }
      
      .main-posts {
        display: flex;
        display: grid;
        justify-content: center;
        margin-top: 4rem;
        padding: 0.7rem;
        padding-top: 0;
        @media screen and (min-width: $breakpoint-medium) {
          & {
            padding: 2rem;
          }
        }

      .title {
        color: rgb(189, 189, 189);
        font-size: 4em;
        
        &::first-letter {
          text-transform: uppercase;
        }
      }

      .posts {
        margin-top: 2rem;
      }
    }
    }
  } 

.fade-enter-active {
  transition: all 0.4s ease-out;
}

.fade-enter {
  transform: translateY(1rem);
  opacity: 0;
}
</style>
