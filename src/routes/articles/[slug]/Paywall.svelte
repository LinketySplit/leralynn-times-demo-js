<script lang="ts">
    import { page } from '$app/stores';
  import { SUB_REDIRECT_KEY} from '../../subscribe/shared'
  import type {PageData} from './$types';
  let { linketySplitPurchaseUrl, linketySplitShareUrl, article, user}: PageData = $props();
  let subLink = '/subscribe?' + SUB_REDIRECT_KEY + '=' + $page.url.pathname;
</script>

<div class="card">
  <div class="card-header text-bg-warning">Paywall</div>
  <div class="card-body">
    <p>Please subscribe to The Leralynn Times to read this article.</p>
    <p><a class="btn btn-primary btn-lg" href={subLink}>Subscribe Now!!!</a></p>
    <hr>
    <p>Not yet ready to subscribe? <a href={linketySplitPurchaseUrl}>Purchase</a>
    this article for just $0.49</p>
  </div>
 
</div>