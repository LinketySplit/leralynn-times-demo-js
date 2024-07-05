<script lang="ts">
  let { form } = $props();

  let data = $state(form? form.formData : {name: '', email: ''});
  let errors = $state(form? form.formErrors : {});
</script>

<main class="container my-5">
  <h1 class="display-2 mb-4">Subscribe to The Leralynn Times</h1>

  <div class="row">
    <div class="col-6">
      <p class="lead">Get all the news that's fit to print on Leralynn Street!</p>
      <form method="post">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" bind:value={data.name} name="name" class="form-control" class:is-invalid={errors.name} id="name">
          <div id="nameHelp" class="form-text">Your full name.</div>
          {#if errors.name}
            <div class="text-danger">
              {errors.name}
            </div>
          {/if}
        </div>
        <div class="mb-3">  
          <label for="email" class="form-label">Email address</label>
          <input type="email"  bind:value={data.email} name="email" class:is-invalid={errors.email} class="form-control" id="email" aria-describedby="emailHelp"> 
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          {#if errors.email}
            <div class="text-danger">
              {errors.email}
            </div>
          {/if}
        </div>
        <div class="mb-3">
          Some pretend e-commerce here
        </div>
        <div class="mb-3 d-flex justify-content-end">
          <button type="submit" class="btn btn-primary btn-lg">Subscribe</button>
        </div>
       
      </form>
    </div>

    <div class="col-6">
      <h2>Subscriber Benefits</h2>

      <ul>
        <li>Impress your friends.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        <li>Much more!!!</li>
      </ul>
    </div>
  </div>
</main>
