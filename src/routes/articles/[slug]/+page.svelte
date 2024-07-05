<script lang="ts">
  import Paywall from './Paywall.svelte';
  let { data } = $props();
  let article = $derived(data.article);
  let user = $derived(data.user);
</script>

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
