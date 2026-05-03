<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Error {$page.status} | Binimum</title>
</svelte:head>

<div class="error-page">
  <div class="error-content">
    <h1>{$page.status}</h1>
    <p class="message">{$page.error?.message || 'Something went wrong'}</p>
    <a href="/" class="btn">Return Home</a>
  </div>
</div>

<style>
  .error-page {
    min-height: calc(100vh - 180px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
  
  .error-content {
    max-width: 500px;
  }
  
  h1 {
    font-size: 6rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    line-height: 1;
  }
  
  .message {
    font-size: 1.25rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
</style>