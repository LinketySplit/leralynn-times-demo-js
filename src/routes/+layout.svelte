<script lang="ts">
  import '../app.scss';
  let { children, data } = $props();
  let user = $derived(data.user);
</script>

<form id="sign-out-form" method="POST" action="/sign-out"></form>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">The Leralynn Times</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        {#if user}
          {@const firstName = user.name.split(' ')[0]}
          <li class="nav-item dropdown">
            <button
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {firstName}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <h6 class="dropdown-header">
                  {user.name} <br />
                  <small>{user.email}</small>
                </h6>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item" form="sign-out-form"
                  >Sign Out</button
                >
              </li>
            </ul>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link" href="/subscribe">Subscribe Today!</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
{@render children()}
