<script lang="ts">
    import { page } from '$app/stores';
  import Paywall from './Paywall.svelte';
  let { data } = $props();
  let article = $derived(data.article);
  let user = $derived(data.user);
  let origin = $derived($page.url.origin);
</script>

<svelte:head>
  <title>{article.title} - The Leralynn Times </title>
  <meta name="description" content={article.description} />
  <meta name="og:title" content={article.title} />
  <meta name="og:description" content={article.description} />
  <meta name="og:image" content={data.featuredImage} />
  {@html data.linketysplitMetaTags}
</svelte:head>

<main class="container my-5">
  <h1 class="display-2">{article.title}</h1>

  <div class="row">
    <div class="col-8">
      <p class="small">
        Published {new Date(article.publishedDate).toLocaleDateString()}
      </p>
      <p class="lead">{article.description}</p>
      {#if user}
        {#each article.content as p}
          <p>
            {p}
          </p>
        {/each}
      {:else}
        <Paywall {...data} />
      {/if}
    </div>
    <div class="col-4">
      <img
        class="img-fluid"
        src={`/images/${article.slug}.jpg`}
        alt={article.title}
      />
    </div>
  </div>
</main>
