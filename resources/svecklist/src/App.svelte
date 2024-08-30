<script>

import Checklist from './lib/components/Checklist.svelte';

let { svecklistid = 1, mode = 'display'} = $props();

</script>


<Checklist svecklistid={svecklistid} mode={mode}></Checklist>

<style>



</style>
