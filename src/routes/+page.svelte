<script lang="ts">
  let { data } = $props();
  let postsOnPage = $derived(data.postsOnPage);
  let page = $derived(data.page);
  let pageCount = $derived(data.pageCount);
</script>

<svelte:head>
  <meta
    name="linketysplit-domain"
    content="3e6eb0871d3a646c2558d89e88324ca1b20098e3bfb72509bcc4344ab183a5c6"
  />
  <title>The Leralynn Times - All the new that's fit to print on Leralynn Street</title>
</svelte:head>

<main class="container my-5">
  {#each postsOnPage as article}
    {@const d = new Date(article.publishedDate)}
    {@const dfmt = d.toLocaleDateString() + ' ' + d.toLocaleTimeString()}
    <article class="card card-body mb-5">
      <div class="row g-5">
        <div class="col-8">
          <h2>{article.title}</h2>
          <p><small>Published {dfmt}</small></p>
          <p class="lead">{article.description}</p>
          <p>
            <a
              class="btn btn-primary stretched-link"
              href={`/articles/${article.slug}`}>Read</a
            >
          </p>
        </div>
        <div class="col-4">
          <img
            class="img-fluid"
            src={`/images/${article.slug}.jpg`}
            alt={article.title}
          />
        </div>
      </div>
    </article>
  {/each}

  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item" class:disabled={page <= 1}>
        <a class="page-link" href={`?page=${page - 1}`}>Previous</a>
      </li>
      <li class="page-item" class:disabled={page >= pageCount}>
        <a class="page-link" href={`?page=${page + 1}`}>Next</a>
      </li>
    </ul>
  </nav>
</main>
