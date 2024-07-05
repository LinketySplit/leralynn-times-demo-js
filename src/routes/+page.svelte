<script lang="ts">
  let { data } = $props();
  let user = $derived(data.user);
  let postsOnPage = $derived(data.postsOnPage);
  let page = $derived(data.page);
  let pageCount = $derived(data.pageCount);
</script>

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
