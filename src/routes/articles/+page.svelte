<script lang="ts">

  let {data} = $props();
  let articles = $derived.by(() => {
    return Object.values(data.articles).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<main>
  <h1>Articles</h1>
  <ul>
    {#each articles as article}
      <li>
        <a href="/articles/{article.slug}">{article.title}</a>
      </li>
    {/each}
  </ul>
  
</main>

{Object.keys(data.articles).length}